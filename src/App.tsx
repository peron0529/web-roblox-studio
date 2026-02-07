import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function App() {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    )
    camera.position.set(6, 6, 10)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    // lights
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 10, 7)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0xffffff, 0.4))

    // cube
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshStandardMaterial()
    )
    cube.position.set(0, 1, 0)
    scene.add(cube)

    // ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.MeshStandardMaterial()
    )
    ground.rotation.x = -Math.PI / 2
    scene.add(ground)

    let raf = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      cube.rotation.y += 0.01
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
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div style={{ height: "100vh", background: "#0b0f16", color: "#e7eefc" }}>
      <div style={{ height: 48, display: "flex", alignItems: "center", padding: "0 12px", borderBottom: "1px solid #23304a" }}>
        <b>Web Roblox Studio</b>
      </div>
      <div ref={mountRef} style={{ height: "calc(100vh - 48px)" }} />
    </div>
  )
}
