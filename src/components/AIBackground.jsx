import { useEffect, useRef } from 'react'

/**
 * Full-page fixed canvas with animated AI neural-network particles.
 * Very transparent — decorative only, never distracts from content.
 */
export default function AIBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /* ── Node setup ── */
    const COUNT = 55
    const MAX_DIST = 170

    const nodes = Array.from({ length: COUNT }, () => ({
      x:     Math.random() * window.innerWidth,
      y:     Math.random() * window.innerHeight,
      vx:    (Math.random() - 0.5) * 0.35,
      vy:    (Math.random() - 0.5) * 0.35,
      r:     Math.random() * 1.6 + 0.8,
      phase: Math.random() * Math.PI * 2,
    }))

    /* ── Render loop ── */
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isLight  = document.documentElement.classList.contains('light')
      const rgb      = isLight ? '80,70,200' : '139,92,246'
      const lineRGB  = isLight ? '99,102,241' : '99,102,241'

      /* update positions */
      nodes.forEach(n => {
        n.x     += n.vx
        n.y     += n.vy
        n.phase += 0.018
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })

      /* connections */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x
          const dy   = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * (isLight ? 0.07 : 0.09)
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${lineRGB},${alpha})`
            ctx.lineWidth   = 0.5
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      /* nodes */
      nodes.forEach(n => {
        const pulse = Math.sin(n.phase) * 0.5 + 0.5
        const alpha = isLight
          ? 0.10 + pulse * 0.06
          : 0.14 + pulse * 0.08
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * (1 + pulse * 0.25), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb},${alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
