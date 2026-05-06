import { useEffect, useRef } from 'react'

export default function AIBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId

    const COUNT    = 60
    const MAX_DIST = 180

    /* ── Declare nodes FIRST, before resize is called ── */
    const nodes = Array.from({ length: COUNT }, () => ({
      x:     Math.random() * window.innerWidth,
      y:     Math.random() * window.innerHeight,
      vx:    (Math.random() - 0.5) * 0.4,
      vy:    (Math.random() - 0.5) * 0.4,
      r:     Math.random() * 2 + 1,
      phase: Math.random() * Math.PI * 2,
    }))

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      /* safe to clamp now that nodes is defined above */
      nodes.forEach(n => {
        n.x = Math.min(n.x, canvas.width)
        n.y = Math.min(n.y, canvas.height)
      })
    }
    resize()
    window.addEventListener('resize', resize)

    /* ── Render loop ── */
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isLight = document.documentElement.classList.contains('light')
      const nodeRGB = isLight ? '80,60,220'  : '139,92,246'
      const lineRGB = '99,102,241'

      /* move */
      nodes.forEach(n => {
        n.x     += n.vx
        n.y     += n.vy
        n.phase += 0.016
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })

      /* lines */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x
          const dy   = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const a = (1 - dist / MAX_DIST) * (isLight ? 0.18 : 0.22)
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${lineRGB},${a})`
            ctx.lineWidth   = 0.7
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      /* nodes */
      nodes.forEach(n => {
        const pulse = Math.sin(n.phase) * 0.5 + 0.5
        const a     = isLight
          ? 0.20 + pulse * 0.12
          : 0.28 + pulse * 0.14
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * (1 + pulse * 0.3), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${nodeRGB},${a})`
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
        position:      'fixed',
        inset:         0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',
        zIndex:        1,
      }}
    />
  )
}
