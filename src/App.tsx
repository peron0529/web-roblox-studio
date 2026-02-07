import { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js"

type Vec3 = { x: number; y: number; z: number }
type Color = { r: number; g: number; b: number }
type Part = {
  id: string
  name: string
  position: Vec3
  size: Vec3
  color: Color
  script: string
}

const uid = () => Math.random().toString(36).slice(2, 10)
const clamp01 = (n: number) => Math.max(0, Math.min(1, n))
const num = (v: string) => {
  const n = Number(v)
  return Number.isFinite(n) ? n : 0
}
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

// -------------------- MiniLua (safe, block-based) --------------------
type Expr = { kind: "num"; value: number } | { kind: "str"; value: string } | { kind: "var"; name: string }
type Cond = { left: Expr; op: "==" | "~=" | ">" | "<" | ">=" | "<="; right: Expr }
type Stmt =
  | { kind: "call"; fn: string; args: Expr[]; line: number }
  | { kind: "if"; cond: Cond; thenBlock: Stmt[]; elseBlock: Stmt[]; line: number }
  | { kind: "for"; varName: string; start: Expr; end: Expr; step: Expr; block: Stmt[]; line: number }
  | { kind: "repeat"; block: Stmt[]; untilCond: Cond; line: number }

function stripComment(line: string) {
  // 超簡易：-- 以降はコメント
  const i = line.indexOf("--")
  return (i >= 0 ? line.slice(0, i) : line).trim()
}

function parseExpr(raw: string): Expr {
  const s = raw.trim()
  if (!s) return { kind: "num", value: 0 }
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    const body = s.slice(1, -1)
    return { kind: "str", value: body }
  }
  const n = Number(s)
  if (Number.isFinite(n)) return { kind: "num", value: n }
  return { kind: "var", name: s }
}

function splitArgs(argText: string): string[] {
  // カンマ区切り。文字列の中のカンマは無視（簡易）
  const s = argText.trim()
  if (!s) return []
  const out: string[] = []
  let cur = ""
  let quote: '"' | "'" | null = null
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (quote) {
      cur += ch
      if (ch === quote && s[i - 1] !== "\\") quote = null
      continue
    }
    if (ch === '"' || ch === "'") {
      quote = ch
      cur += ch
      continue
    }
    if (ch === ",") {
      out.push(cur.trim())
      cur = ""
      continue
    }
    cur += ch
  }
  if (cur.trim()) out.push(cur.trim())
  return out
}

function parseCond(text: string): Cond {
  // 例: i <= 10  / 1 == 1 / x ~= 0
  const s = text.trim()
  const ops = ["==", "~=", ">=", "<=", ">", "<"] as const
  for (const op of ops) {
    const idx = s.indexOf(op)
    if (idx >= 0) {
      const left = s.slice(0, idx).trim()
      const right = s.slice(idx + op.length).trim()
      return { left: parseExpr(left), op, right: parseExpr(right) }
    }
  }
  // fallback: treat as "expr ~= 0"
  return { left: parseExpr(s), op: "~=", right: { kind: "num", value: 0 } }
}

function parseScript(code: string): { ast: Stmt[]; errors: string[] } {
  const errors: string[] = []
  const lines = code.split("\n").map(stripComment)

  // ブロック構文: if/else/end, for/end, repeat/until
  // スタックでAST作る
  type Frame =
    | { type: "root"; block: Stmt[] }
    | { type: "if"; stmt: Extract<Stmt, { kind: "if" }>; inElse: boolean }
    | { type: "for"; stmt: Extract<Stmt, { kind: "for" }> }
    | { type: "repeat"; stmt: Extract<Stmt, { kind: "repeat" }> }

  const root: Frame = { type: "root", block: [] }
  const stack: Frame[] = [root]

  const currentBlock = () => {
    const top = stack[stack.length - 1]
    if (top.type === "root") return top.block
    if (top.type === "if") return top.inElse ? top.stmt.elseBlock : top.stmt.thenBlock
    if (top.type === "for") return top.stmt.block
    return top.stmt.block // repeat
  }

  for (let idx = 0; idx < lines.length; idx++) {
    const raw = lines[idx]
    const lineNo = idx + 1
    if (!raw) continue

    // else
    if (raw === "else") {
      const top = stack[stack.length - 1]
      if (top.type !== "if") {
        errors.push(`line ${lineNo}: else の位置が変`)
      } else {
        top.inElse = true
      }
      continue
    }

    // end
    if (raw === "end") {
      const top = stack[stack.length - 1]
      if (top.type === "if" || top.type === "for") {
        stack.pop()
      } else {
        errors.push(`line ${lineNo}: end の対応が無い`)
      }
      continue
    }

    // until (repeat)
    if (raw.startsWith("until ")) {
      const top = stack[stack.length - 1]
      if (top.type !== "repeat") {
        errors.push(`line ${lineNo}: until の対応が無い`)
      } else {
        top.stmt.untilCond = parseCond(raw.slice("until ".length))
        stack.pop() // close repeat
      }
      continue
    }

    // if ... then
    if (raw.startsWith("if ") && raw.endsWith(" then")) {
      const condText = raw.slice(3, -5).trim()
      const stmt: Extract<Stmt, { kind: "if" }> = {
        kind: "if",
        cond: parseCond(condText),
        thenBlock: [],
        elseBlock: [],
        line: lineNo,
      }
      currentBlock().push(stmt)
      stack.push({ type: "if", stmt, inElse: false })
      continue
    }

    // for i=1,10 do  / for i=1,10,2 do
    if (raw.startsWith("for ") && raw.endsWith(" do")) {
      const inside = raw.slice(4, -3).trim()
      // i=1,10,2
      const m = inside.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/)
      if (!m) {
        errors.push(`line ${lineNo}: for の書き方が違う`)
        continue
      }
      const varName = m[1]
      const rest = m[2]
      const parts = splitArgs(rest)
      if (parts.length < 2 || parts.length > 3) {
        errors.push(`line ${lineNo}: for は for i=1,10 do か for i=1,10,step do`)
        continue
      }
      const stmt: Extract<Stmt, { kind: "for" }> = {
        kind: "for",
        varName,
        start: parseExpr(parts[0]),
        end: parseExpr(parts[1]),
        step: parseExpr(parts[2] ?? "1"),
        block: [],
        line: lineNo,
      }
      currentBlock().push(stmt)
      stack.push({ type: "for", stmt })
      continue
    }

    // repeat
    if (raw === "repeat") {
      const stmt: Extract<Stmt, { kind: "repeat" }> = {
        kind: "repeat",
        block: [],
        untilCond: { left: { kind: "num", value: 1 }, op: "==", right: { kind: "num", value: 0 } }, // placeholder
        line: lineNo,
      }
      currentBlock().push(stmt)
      stack.push({ type: "repeat", stmt })
      continue
    }

    // call: fn(args)
    const call = raw.match(/^([a-zA-Z_]\w*)\s*\((.*)\)\s*$/)
    if (!call) {
      errors.push(`line ${lineNo}: 形式が違う -> ${raw}`)
      continue
    }
    const fn = call[1]
    const argText = call[2] ?? ""
    const args = splitArgs(argText).map(parseExpr)
    currentBlock().push({ kind: "call", fn, args, line: lineNo })
  }

  // close check
  for (let i = stack.length - 1; i >= 1; i--) {
    const top = stack[i]
    if (top.type === "if") errors.push(`line ${top.stmt.line}: if が end で閉じられてない`)
    if (top.type === "for") errors.push(`line ${top.stmt.line}: for が end で閉じられてない`)
    if (top.type === "repeat") errors.push(`line ${top.stmt.line}: repeat が until で閉じられてない`)
  }

  return { ast: root.block, errors }
}

function evalExpr(expr: Expr, env: Record<string, any>) {
  if (expr.kind === "num") return expr.value
  if (expr.kind === "str") return expr.value
  return env[expr.name]
}

function evalCond(cond: Cond, env: Record<string, any>): boolean {
  const a = evalExpr(cond.left, env)
  const b = evalExpr(cond.right, env)
  switch (cond.op) {
    case "==": return a === b
    case "~=": return a !== b
    case ">": return Number(a) > Number(b)
    case "<": return Number(a) < Number(b)
    case ">=": return Number(a) >= Number(b)
    case "<=": return Number(a) <= Number(b)
  }
}

type RuntimeAPI = {
  log: (msg: string) => void
  move: (dx: number, dy: number, dz: number) => void
  setPosition: (x: number, y: number, z: number) => void
  setColor: (r: number, g: number, b: number) => void
  setSize: (x: number, y: number, z: number) => void
  wait: (sec: number) => Promise<void>
  isCancelled: () => boolean
}

async function execBlock(block: Stmt[], env: Record<string, any>, api: RuntimeAPI) {
  for (const st of block) {
    if (api.isCancelled()) return

    if (st.kind === "call") {
      const fn = st.fn
      const args = st.args.map((e) => evalExpr(e, env))
      const asNum3 = () => {
        if (args.length !== 3) throw new Error("引数は3つ")
        const ns = args.map((x) => Number(x))
        if (ns.some((n) => !Number.isFinite(n))) throw new Error("数字が必要")
        return ns as [number, number, number]
      }

      try {
        if (fn === "print") api.log(String(args[0] ?? ""))
        else if (fn === "move") {
          const [x, y, z] = asNum3(); api.move(x, y, z)
        } else if (fn === "setPosition") {
          const [x, y, z] = asNum3(); api.setPosition(x, y, z)
        } else if (fn === "setColor") {
          const [r, g, b] = asNum3(); api.setColor(r, g, b)
        } else if (fn === "setSize") {
          const [x, y, z] = asNum3(); api.setSize(x, y, z)
        } else if (fn === "wait") {
          const sec = Number(args[0] ?? 0)
          if (!Number.isFinite(sec)) throw new Error("秒は数字")
          await api.wait(sec)
        } else {
          api.log(`line ${st.line}: 未対応の関数 -> ${fn}`)
        }
      } catch (e: any) {
        api.log(`line ${st.line}: エラー -> ${e?.message ?? String(e)}`)
      }
      continue
    }

    if (st.kind === "if") {
      const ok = evalCond(st.cond, env)
      await execBlock(ok ? st.thenBlock : st.elseBlock, env, api)
      continue
    }

    if (st.kind === "for") {
      const start = Number(evalExpr(st.start, env))
      const end = Number(evalExpr(st.end, env))
      const step = Number(evalExpr(st.step, env))
      if (!Number.isFinite(start) || !Number.isFinite(end) || !Number.isFinite(step) || step === 0) {
        api.log(`line ${st.line}: for の数字が変`)
        continue
      }
      if (step > 0) {
        for (let i = start; i <= end; i += step) {
          if (api.isCancelled()) return
          env[st.varName] = i
          await execBlock(st.block, env, api)
        }
      } else {
        for (let i = start; i >= end; i += step) {
          if (api.isCancelled()) return
          env[st.varName] = i
          await execBlock(st.block, env, api)
        }
      }
      continue
    }

    if (st.kind === "repeat") {
      while (true) {
        if (api.isCancelled()) return
        await execBlock(st.block, env, api)
        if (evalCond(st.untilCond, env)) break
      }
      continue
    }
  }
}

// -------------------- App --------------------
export default function App() {
  const [parts, setParts] = useState<Part[]>(() => [
    {
      id: "p1",
      name: "Part",
      position: { x: 0, y: 1, z: 0 },
      size: { x: 2, y: 2, z: 2 },
      color: { r: 0.9, g: 0.3, b: 0.3 },
      script: `print("start")\nfor i=1,5 do\n  move(0,0,1)\n  wait(0.2)\nend\nprint("done")`,
    },
    {
      id: "p2",
      name: "Part2",
      position: { x: 4, y: 1, z: 0 },
      size: { x: 2, y: 2, z: 2 },
      color: { r: 0.2, g: 0.9, b: 0.4 },
      script: `repeat\n  move(-0.5,0,0)\n  wait(0.15)\nuntil 1 == 1`,
    },
  ])
  const [selectedId, setSelectedId] = useState<string>("p1")
  const selected = useMemo(() => parts.find((p) => p.id === selectedId) ?? null, [parts, selectedId])

  const [logs, setLogs] = useState<string[]>([])
  const log = (msg: string) => setLogs((prev) => [...prev, msg].slice(-400))
  const clearLogs = () => setLogs([])

  // Runtime control
  const [isPlaying, setIsPlaying] = useState(false)
  const cancelTokenRef = useRef({ v: 0 })

  const addPart = () => {
    const id = uid()
    setParts((prev) =>
      prev.concat({
        id,
        name: "Part",
        position: { x: 0, y: 1, z: 0 },
        size: { x: 2, y: 2, z: 2 },
        color: { r: 0.3, g: 0.8, b: 1.0 },
        script: `print("hi")`,
      })
    )
    setSelectedId(id)
  }

  const updateSelected = (patch: Partial<Part>) => {
    setParts((prev) => prev.map((p) => (p.id === selectedId ? { ...p, ...patch } : p)))
  }

  const patchPart = (id: string, patch: Partial<Part>) => {
    setParts((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)))
  }

  const runScriptForPart = async (partId: string, script: string) => {
    const { ast, errors } = parseScript(script)
    if (errors.length) {
      errors.forEach((e) => log(e))
      return
    }

    const tokenAtStart = cancelTokenRef.current.v
    const isCancelled = () => cancelTokenRef.current.v !== tokenAtStart

    const getPart = () => partsRef.current.find((p) => p.id === partId)

    const api: RuntimeAPI = {
      log: (m) => log(`[${partId}] ${m}`),
      move: (dx, dy, dz) => {
        const p = getPart()
        if (!p) return
        patchPart(partId, { position: { x: p.position.x + dx, y: p.position.y + dy, z: p.position.z + dz } })
      },
      setPosition: (x, y, z) => patchPart(partId, { position: { x, y, z } }),
      setColor: (r, g, b) => patchPart(partId, { color: { r: clamp01(r), g: clamp01(g), b: clamp01(b) } }),
      setSize: (x, y, z) => patchPart(partId, { size: { x: Math.max(0.1, x), y: Math.max(0.1, y), z: Math.max(0.1, z) } }),
      wait: async (sec) => {
        const ms = Math.max(0, sec) * 1000
        // 途中停止できるように細かく刻む
        const step = 50
        let t = 0
        while (t < ms) {
          if (isCancelled()) return
          const dt = Math.min(step, ms - t)
          await sleep(dt)
          t += dt
        }
      },
      isCancelled,
    }

    const env: Record<string, any> = {}
    await execBlock(ast, env, api)
  }

  // run selected
  const runSelected = async () => {
    if (!selected) return
    clearLogs()
    cancelTokenRef.current.v++
    const tokenStart = cancelTokenRef.current.v
    await runScriptForPart(selected.id, selected.script)
    // if cancelled mid, ignore
    if (cancelTokenRef.current.v !== tokenStart) return
  }

  // Play mode: run all parts sequentially (safe + predictable)
  const playAll = async () => {
    clearLogs()
    cancelTokenRef.current.v++
    setIsPlaying(true)
    const tokenStart = cancelTokenRef.current.v

    // 順番に実行
    for (const p of partsRef.current) {
      if (cancelTokenRef.current.v !== tokenStart) break
      log(`--- Running: ${p.name} (${p.id}) ---`)
      await runScriptForPart(p.id, p.script)
    }

    if (cancelTokenRef.current.v === tokenStart) {
      log("--- Play finished ---")
    } else {
      log("--- Stopped ---")
    }
    setIsPlaying(false)
  }

  const stopPlay = () => {
    cancelTokenRef.current.v++
    setIsPlaying(false)
  }

  // keep latest parts for runtime reads
  const partsRef = useRef(parts)
  useEffect(() => { partsRef.current = parts }, [parts])

  // --- three.js ---
  const mountRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const orbitRef = useRef<OrbitControls | null>(null)
  const transformRef = useRef<TransformControls | null>(null)
  const meshMapRef = useRef<Map<string, THREE.Mesh>>(new Map())
  const draggingTransformRef = useRef(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 2000)
    camera.position.set(10, 10, 14)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 0.4))
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 10, 7)
    scene.add(light)

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 120),
      new THREE.MeshStandardMaterial({ color: 0x111827 })
    )
    ground.rotation.x = -Math.PI / 2
    scene.add(ground)

    const orbit = new OrbitControls(camera, renderer.domElement)
    orbit.enableDamping = true
    orbit.dampingFactor = 0.08
    orbitRef.current = orbit

    const transform = new TransformControls(camera, renderer.domElement)
    transform.setMode("translate")
    scene.add(transform)
    transformRef.current = transform

    transform.addEventListener("dragging-changed", (e: any) => {
      draggingTransformRef.current = !!e.value
      if (orbitRef.current) orbitRef.current.enabled = !e.value
    })

    // write back position on mouseUp
    transform.addEventListener("mouseUp", () => {
      const sel = selectedIdRef.current
      const mesh = meshMapRef.current.get(sel)
      if (!mesh) return
      patchPart(sel, { position: { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z } })
    })

    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const onPointerDown = (e: PointerEvent) => {
      if (draggingTransformRef.current) return
      const rect = renderer.domElement.getBoundingClientRect()
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      raycaster.setFromCamera(pointer, camera)
      const meshes = Array.from(meshMapRef.current.values())
      const hits = raycaster.intersectObjects(meshes, false)
      if (hits.length > 0) {
        const mesh = hits[0].object as THREE.Mesh
        const id = (mesh.userData?.id as string) || ""
        if (id) setSelectedId(id)
      }
    }
    renderer.domElement.addEventListener("pointerdown", onPointerDown)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "g" || e.key === "G") transform.setMode("translate")
      if (e.key === "r" || e.key === "R") transform.setMode("rotate")
      if (e.key === "s" || e.key === "S") transform.setMode("scale")
      if (e.key === "Escape") transform.detach()
    }
    window.addEventListener("keydown", onKeyDown)

    let raf = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      orbit.update()
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const m = mountRef.current
      if (!m) return
      camera.aspect = m.clientWidth / m.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(m.clientWidth, m.clientHeight)
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("keydown", onKeyDown)
      renderer.domElement.removeEventListener("pointerdown", onPointerDown)
      orbit.dispose()
      transform.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  // keep selected id for event handlers
  const selectedIdRef = useRef(selectedId)
  useEffect(() => { selectedIdRef.current = selectedId }, [selectedId])

  // sync meshes
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    const meshMap = meshMapRef.current

    for (const p of parts) {
      let mesh = meshMap.get(p.id)
      if (!mesh) {
        mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial())
        mesh.userData = { id: p.id }
        scene.add(mesh)
        meshMap.set(p.id, mesh)
      }
      mesh.position.set(p.position.x, p.position.y, p.position.z)
      mesh.scale.set(p.size.x, p.size.y, p.size.z)
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.color.setRGB(clamp01(p.color.r), clamp01(p.color.g), clamp01(p.color.b))
    }

    for (const [id, mesh] of meshMap.entries()) {
      if (!parts.some((p) => p.id === id)) {
        scene.remove(mesh)
        mesh.geometry.dispose()
        ;(mesh.material as THREE.Material).dispose()
        meshMap.delete(id)
      }
    }
  }, [parts])

  // attach gizmo to selection
  useEffect(() => {
    const transform = transformRef.current
    const mesh = meshMapRef.current.get(selectedId)
    if (!transform) return
    if (!mesh) transform.detach()
    else transform.attach(mesh)
  }, [selectedId])

  // highlight selection
  useEffect(() => {
    for (const [id, mesh] of meshMapRef.current.entries()) {
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.emissive.setHex(id === selectedId ? 0x222222 : 0x000000)
    }
  }, [selectedId])

  return (
    <div style={{ height: "100vh", background: "#0b0f16", color: "#e7eefc" }}>
      <div style={topbar}>
        <b>Web Roblox Studio</b>
        <button onClick={addPart} style={btn}>+ Part</button>
        <button onClick={runSelected} style={btn2}>Run (Selected)</button>
        {!isPlaying ? (
          <button onClick={playAll} style={btnPlay}>Play</button>
        ) : (
          <button onClick={stopPlay} style={btnStop}>Stop</button>
        )}
        <button onClick={() => setLogs([])} style={btn2}>Clear</button>
        <div style={{ opacity: 0.8, fontSize: 12 }}>
          操作: 右ドラッグ=視点 / G=移動 / R=回転 / S=拡縮 / Script: if/for/repeat/wait
        </div>
      </div>

      <div style={{ height: "calc(100vh - 48px)", display: "grid", gridTemplateColumns: "260px 1fr 420px" }}>
        {/* Explorer */}
        <div style={{ borderRight: "1px solid #23304a", padding: 10 }}>
          <b>Explorer</b>
          <div style={{ marginTop: 8, display: "grid", gap: 6 }}>
            {parts.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                style={{
                  padding: "6px 8px",
                  borderRadius: 10,
                  cursor: "pointer",
                  background: p.id === selectedId ? "#2a3b5f" : "transparent",
                  border: "1px solid #23304a",
                }}
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>

        {/* Viewport */}
        <div style={{ padding: 10 }}>
          <b>Viewport</b>
          <div
            ref={mountRef}
            style={{
              marginTop: 8,
              height: "calc(100% - 28px)",
              border: "1px solid #23304a",
              borderRadius: 14,
              overflow: "hidden",
            }}
          />
        </div>

        {/* Properties + Script + Output */}
        <div style={{ borderLeft: "1px solid #23304a", padding: 10, display: "grid", gridTemplateRows: "auto 1fr auto" }}>
          <b>Properties</b>

          <div style={{ marginTop: 10, display: "grid", gap: 10, alignContent: "start", overflow: "auto" }}>
            {!selected ? (
              <div style={{ opacity: 0.8 }}>Partを選んでね</div>
            ) : (
              <>
                <label style={label}>
                  Name
                  <input style={input} value={selected.name} onChange={(e) => updateSelected({ name: e.target.value })} />
                </label>

                <b style={{ marginTop: 6 }}>Script (Safe MiniLua)</b>
                <textarea
                  style={textarea}
                  value={selected.script}
                  onChange={(e) => updateSelected({ script: e.target.value })}
                  placeholder={
`例:
print("hi")
if 1 == 1 then
  move(0,1,0)
else
  move(0,-1,0)
end

for i=1,10 do
  move(0,0,0.5)
  wait(0.1)
end

repeat
  move(0.2,0,0)
  wait(0.05)
until 1 == 1
`
                  }
                />
              </>
            )}
          </div>

          <div style={{ marginTop: 10 }}>
            <b>Output</b>
            <div style={logBox}>
              {logs.length === 0 ? <div style={{ opacity: 0.7 }}>（ログなし）</div> : logs.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const topbar: React.CSSProperties = {
  height: 48,
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "0 12px",
  borderBottom: "1px solid #23304a",
}

const btn: React.CSSProperties = {
  background: "#2a3b5f",
  color: "#e7eefc",
  border: 0,
  padding: "8px 10px",
  borderRadius: 10,
  cursor: "pointer",
}

const btn2: React.CSSProperties = {
  background: "#1b2842",
  color: "#e7eefc",
  border: "1px solid #23304a",
  padding: "8px 10px",
  borderRadius: 10,
  cursor: "pointer",
}

const btnPlay: React.CSSProperties = {
  background: "#1f4d2e",
  color: "#e7eefc",
  border: "1px solid #23304a",
  padding: "8px 12px",
  borderRadius: 10,
  cursor: "pointer",
}

const btnStop: React.CSSProperties = {
  background: "#5a1f2a",
  color: "#e7eefc",
  border: "1px solid #23304a",
  padding: "8px 12px",
  borderRadius: 10,
  cursor: "pointer",
}

const label: React.CSSProperties = { display: "grid", gap: 6, fontSize: 12, opacity: 0.95 }
const input: React.CSSProperties = {
  width: "100%",
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #23304a",
  background: "#0b0f16",
  color: "#e7eefc",
}
const textarea: React.CSSProperties = {
  width: "100%",
  height: 260,
  padding: "10px 10px",
  borderRadius: 10,
  border: "1px solid #23304a",
  background: "#0b0f16",
  color: "#e7eefc",
  resize: "vertical",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
}
const logBox: React.CSSProperties = {
  height: 170,
  overflow: "auto",
  marginTop: 8,
  padding: 10,
  borderRadius: 10,
  border: "1px solid #23304a",
  background: "#0b0f16",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  fontSize: 12,
  whiteSpace: "pre-wrap",
}
