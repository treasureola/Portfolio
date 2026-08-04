import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function NetworkCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0, 7.2)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    // ---- nodes on a fibonacci sphere
    const N = 110
    const R = 2.4
    const positions = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const th = golden * i
      positions.push(
        new THREE.Vector3(Math.cos(th) * r * R, y * R, Math.sin(th) * r * R)
      )
    }

    // node dots — mix of copper + pale gold
    const dotGeo = new THREE.SphereGeometry(0.038, 10, 10)
    const matCopper = new THREE.MeshBasicMaterial({ color: 0xc87f3f })
    const matGold = new THREE.MeshBasicMaterial({ color: 0xe5c07b })
    const matDim = new THREE.MeshBasicMaterial({ color: 0x5a4632 })
    const dots = []
    positions.forEach((p, i) => {
      const m = i % 7 === 0 ? matGold : i % 3 === 0 ? matCopper : matDim
      const d = new THREE.Mesh(dotGeo, m)
      d.position.copy(p)
      // gold hubs slightly larger
      if (i % 7 === 0) d.scale.setScalar(1.7)
      group.add(d)
      dots.push(d)
    })

    // ---- edges between near neighbors
    const edgePts = []
    const maxDist = 1.05
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        if (positions[i].distanceTo(positions[j]) < maxDist) {
          edgePts.push(positions[i].clone(), positions[j].clone())
        }
      }
    }
    const edges = new THREE.LineSegments(
      new THREE.BufferGeometry().setFromPoints(edgePts),
      new THREE.LineBasicMaterial({ color: 0xc87f3f, transparent: true, opacity: 0.22 })
    )
    group.add(edges)

    // ---- inner wireframe core
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.1, 1),
      new THREE.MeshBasicMaterial({
        color: 0xe5c07b,
        wireframe: true,
        transparent: true,
        opacity: 0.16,
      })
    )
    group.add(core)

    // ---- faint outer halo ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(3.3, 0.006, 8, 120),
      new THREE.MeshBasicMaterial({ color: 0xc87f3f, transparent: true, opacity: 0.3 })
    )
    ring.rotation.x = Math.PI / 2.4
    scene.add(ring)

    // ---- interaction: drag with inertia
    const st = { dragging: false, lx: 0, ly: 0, vx: 0, vy: 0.0035 }
    const el = renderer.domElement
    const onDown = (e) => {
      st.dragging = true
      st.lx = e.clientX
      st.ly = e.clientY
      el.style.cursor = "grabbing"
    }
    const onMove = (e) => {
      if (!st.dragging) return
      st.vy = (e.clientX - st.lx) * 0.005
      st.vx = (e.clientY - st.ly) * 0.0035
      group.rotation.y += st.vy
      group.rotation.x = Math.max(-0.9, Math.min(0.9, group.rotation.x + st.vx))
      st.lx = e.clientX
      st.ly = e.clientY
      // no rAF loop under reduced motion, so drag needs its own render
      if (reduceMotion) renderer.render(scene, camera)
    }
    const onUp = () => {
      st.dragging = false
      el.style.cursor = "grab"
    }
    el.addEventListener("pointerdown", onDown)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    el.style.cursor = "grab"
    el.style.touchAction = "none"

    const resize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener("resize", resize)

    let raf
    let t = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      t += 0.016
      if (!st.dragging && !reduceMotion) {
        st.vy += (0.0035 - st.vy) * 0.02
        st.vx += (0 - st.vx) * 0.04
        group.rotation.y += st.vy
        group.rotation.x = Math.max(-0.9, Math.min(0.9, group.rotation.x + st.vx))
      }
      if (!reduceMotion) {
        core.rotation.y -= 0.003
        core.rotation.x += 0.0015
        ring.rotation.z += 0.0012
        const pulse = 1 + Math.sin(t * 1.4) * 0.02
        core.scale.setScalar(pulse)
      }
      renderer.render(scene, camera)
    }

    if (reduceMotion) {
      // static content only — render one frame, no continuous rAF loop
      renderer.render(scene, camera)
    } else {
      animate()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      el.removeEventListener("pointerdown", onDown)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", minHeight: 380 }}
      aria-label="Interactive 3D node network — drag to rotate"
    />
  )
}
