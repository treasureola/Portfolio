import { lazy, Suspense, useEffect, useState } from "react"
import { theme } from "../theme"

const NetworkCanvas = lazy(() => import("./NetworkCanvas"))

export default function HeroScene() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const onChange = (e) => setReducedMotion(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <div
      className="orbwrap"
      style={{
        height: 460,
        position: "relative",
        background:
          "radial-gradient(ellipse at 50% 45%, rgba(200,127,63,0.08), transparent 62%)",
      }}
    >
      <Suspense fallback={<div style={{ width: "100%", height: "100%", minHeight: 380 }} aria-hidden="true" />}>
        <NetworkCanvas />
      </Suspense>
      {!reducedMotion && (
        <span
          className="mono"
          style={{
            position: "absolute",
            bottom: 8,
            right: 10,
            fontSize: 11,
            color: theme.muted,
            letterSpacing: "0.1em",
          }}
        >
          DRAG TO ROTATE
        </span>
      )}
    </div>
  )
}
