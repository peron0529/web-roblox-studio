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

export default function App() {
  // --- data ---
  const [parts, setParts] = useState<Part[]>(() => [
    {
      id: "p1",
      name: "Part",
      position: { x: 0, y: 1, z: 0 },
      size: { x: 2, y: 2, z: 2 },
      color: { r: 0.9, g: 0.3, b: 0.3 },
      script: "print('hello from part')",
    },
  ])
  const [selectedId, setSelectedId] = useState<string>("p1")
  const selected = useMemo(
    () => parts.find((p) => p.id === selectedId) ?? null,
    [parts, selectedId]
  )

  const addPart = () => {
    const id = uid()
    setParts((prev) =>
      prev.concat({
        id,
        name: "Part",
        position: { x: 0, y: 1, z: 0 },
        size: { x: 2, y: 2, z: 2 },
        color: { r: 0.3, g: 0.8, b: 1.0 },
        script: "",
      })
    )
    setSelectedId(id)
  }

  const updateSelected = (patch: Partial<Part>) => {
    setParts((prev) => prev.map((p) => (p.id === selectedId ? { ...p, ...patch } : p)))
  }

  // --- three.js refs ---
  const mountRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const orbitRef = useRef<OrbitControls | null>(null)
  const transformRef = useRef<TransformControls | null>(null)
  const meshMapRef = useRef<Map<string, THREE.Mesh>>(new Map())
  const draggingTransformRef = useRef(false)

  // init scene once
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
    rendererRef.current = renderer

    // lights
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 10, 7)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0xffffff, 0.4))

    // ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 120),
      new THREE.MeshStandardMaterial({ color: 0x111827 })
    )
    ground.rotation.x = -Math.PI / 2
    scene.add(ground)

    // OrbitControls (camera)
    const orbit = new OrbitControls(camera, renderer.domElement)
    orbit.enableDamping = true
    orbit.dampingFactor = 0.08
    orbitRef.current = orbit

    // TransformControls (gizmo)
    const transform = new TransformControls(camera, renderer.domElement)
    transform.setMode("translate")
    transform.enabled = true
    scene.add(transform)
    transformRef.current = transform

    // while dragging gizmo, disable orbit
    transform.addEventListener("dragging-changed", (e: any) => {
      draggingTransformRef.current = !!e.value
      if (orbitRef.current) orbitRef.current.enabled = !e.value
    })

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

    // click select (raycaster) - ignore when dragging gizmo
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

    // keyboard: G = translate gizmo, Esc = detach
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "g" || e.key === "G") {
        if (transformRef.current) transformRef.current.setMode("translate")
      }
      if (e.key === "Escape") {
        transformRef.current?.detach()
      }
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("keydown", onKeyDown)
      renderer.domElement.removeEventListener("pointerdown", onPointerDown)
      renderer.dispose()
      orbit.dispose()
      transform.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  // create/update meshes from parts
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    const meshMap = meshMapRef.current

    for (const p of parts) {
      let mesh = meshMap.get(p.id)
      if (!mesh) {
        const geo = new THREE.BoxGeometry(1, 1, 1)
        const mat = new THREE.MeshStandardMaterial()
        mesh = new THREE.Mesh(geo, mat)
        mesh.userData = { id: p.id }
        scene.add(mesh)
        meshMap.set(p.id, mesh)
      }

      mesh.position.set(p.position.x, p.position.y, p.position.z)
      mesh.scale.set(p.size.x, p.size.y, p.size.z)

      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.color.setRGB(clamp01(p.color.r), clamp01(p.color.g), clamp01(p.color.b))
      mat.needsUpdate = true
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

  // attach gizmo to selected mesh
  useEffect(() => {
    const transform = transformRef.current
    const mesh = meshMapRef.current.get(selectedId)
    if (!transform) return
    if (!mesh) {
      transform.detach()
      return
    }
    transform.attach(mesh)
  }, [selectedId])

  // highlight selected
  useEffect(() => {
    for (const [id, mesh] of meshMapRef.current.entries()) {
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.emissive.setHex(id === selectedId ? 0x222222 : 0x000000)
    }
  }, [selectedId])

  // when gizmo drag ends, write mesh position back to state
  useEffect(() => {
    const transform = transformRef.current
    if (!transform) return

    const onMouseUp = () => {
      const mesh = meshMapRef.current.get(selectedId)
      if (!mesh) return
      // stateへ反映
      setParts((prev) =>
        prev.map((p) =>
          p.id !== selectedId
            ? p
            : {
                ...p,
                position: { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z },
              }
        )
      )
    }

    transform.addEventListener("mouseUp", onMouseUp)
    return () => {
      transform.removeEventListener("mouseUp", onMouseUp)
    }
  }, [selectedId])

  return (
    <div style={{ height: "100vh", background: "#0b0f16", color: "#e7eefc" }}>
      {/* Topbar */}
      <div style={topbar}>
        <b>Web Roblox Studio</b>
        <button onClick={addPart} style={btn}>+ Part</button>
        <div style={{ opacity: 0.8, fontSize: 12 }}>操作: 右ドラッグ=視点 / スクロール=ズーム / G=移動</div>
      </div>

      {/* Layout */}
      <div style={{ height: "calc(100vh - 48px)", display: "grid", gridTemplateColumns: "260px 1fr 360px" }}>
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

        {/* Properties + Script */}
        <div style={{ borderLeft: "1px solid #23304a", padding: 10 }}>
          <b>Properties</b>

          {!selected ? (
            <div style={{ marginTop: 10, opacity: 0.8 }}>Partを選んでね</div>
          ) : (
            <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
              <label style={label}>
                Name
                <input style={input} value={selected.name} onChange={(e) => updateSelected({ name: e.target.value })} />
              </label>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                <label style={label}>
                  Pos X
                  <input
                    style={input}
                    type="number"
                    value={selected.position.x}
                    onChange={(e) => updateSelected({ position: { ...selected.position, x: num(e.target.value) } })}
                  />
                </label>
                <label style={label}>
                  Pos Y
                  <input
                    style={input}
                    type="number"
                    value={selected.position.y}
                    onChange={(e) => updateSelected({ position: { ...selected.position, y: num(e.target.value) } })}
                  />
                </label>
                <label style={label}>
                  Pos Z
                  <input
                    style={input}
                    type="number"
                    value={selected.position.z}
                    onChange={(e) => updateSelected({ position: { ...selected.position, z: num(e.target.value) } })}
                  />
                </label>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                <label style={label}>
                  Size X
                  <input
                    style={input}
                    type="number"
                    value={selected.size.x}
                    onChange={(e) => updateSelected({ size: { ...selected.size, x: num(e.target.value) } })}
                  />
                </label>
                <label style={label}>
                  Size Y
                  <input
                    style={input}
                    type="number"
                    value={selected.size.y}
                    onChange={(e) => updateSelected({ size: { ...selected.size, y: num(e.target.value) } })}
                  />
                </label>
                <label style={label}>
                  Size Z
                  <input
                    style={input}
                    type="number"
                    value={selected.size.z}
                    onChange={(e) => updateSelected({ size: { ...selected.size, z: num(e.target.value) } })}
                  />
                </label>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                <label style={label}>
                  Color R (0-1)
                  <input
                    style={input}
                    type="number"
                    step="0.05"
                    value={selected.color.r}
                    onChange={(e) => updateSelected({ color: { ...selected.color, r: clamp01(num(e.target.value)) } })}
                  />
                </label>
                <label style={label}>
                  Color G
                  <input
                    style={input}
                    type="number"
                    step="0.05"
                    value={selected.color.g}
                    onChange={(e) => updateSelected({ color: { ...selected.color, g: clamp01(num(e.target.value)) } })}
                  />
                </label>
                <label style={label}>
                  Color B
                  <input
                    style={input}
                    type="number"
                    step="0.05"
                    value={selected.color.b}
                    onChange={(e) => updateSelected({ color: { ...selected.color, b: clamp01(num(e.target.value)) } })}
                  />
                </label>
              </div>

              <b style={{ marginTop: 6 }}>Script (Lua)</b>
              <textarea
                style={textarea}
                value={selected.script}
                onChange={(e) => updateSelected({ script: e.target.value })}
                placeholder="ここにLuaを書く（今は保存だけ。次で実行エンジン）"
              />
            </div>
          )}
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
  height: 180,
  padding: "10px 10px",
  borderRadius: 10,
  border: "1px solid #23304a",
  background: "#0b0f16",
  color: "#e7eefc",
  resize: "vertical",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
}
