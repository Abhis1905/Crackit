import { useEffect, useRef } from 'react'

export default function ConfettiBurst({ trigger }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!trigger) return
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const pieces = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5 - 100,
      w: Math.random() * 12 + 4,
      h: Math.random() * 6 + 3,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.15,
      vx: (Math.random() - 0.5) * 8,
      vy: Math.random() * -12 - 5,
      gravity: 0.3,
      color: ['#ff6b1a', '#ffd93d', '#c77dff', '#4d96ff', '#ff6b9d', '#6bcb77', '#ffffff'][Math.floor(Math.random() * 7)],
      alpha: 1,
    }))

    let animId
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      pieces.forEach(p => {
        p.vy += p.gravity; p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; p.alpha -= 0.008
        if (p.alpha > 0) { alive = true }
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.globalAlpha = Math.max(0, p.alpha)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
      })
      if (alive) animId = requestAnimationFrame(draw)
      else ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [trigger])

  return (
    <canvas
      ref={ref}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}
    />
  )
}
