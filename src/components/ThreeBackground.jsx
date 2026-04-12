import { useEffect, useRef } from 'react'

export default function ThreeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    let animId

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    // Particles
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: [
        '#ff6b1a', '#ffd93d', '#c77dff', '#4d96ff', '#ff6b9d', '#6bcb77'
      ][Math.floor(Math.random() * 6)],
    }))

    // Floating 3D cubes (projected)
    const cubes = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 200 + 50,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008,
      size: Math.random() * 30 + 15,
      color: ['rgba(255,107,26,', 'rgba(199,125,255,', 'rgba(77,150,255,', 'rgba(255,107,157,'][i % 4],
      vy: (Math.random() - 0.5) * 0.15,
      vx: (Math.random() - 0.5) * 0.1,
    }))

    function drawCube(x, y, size, rot, color, z) {
      const scale = 300 / (300 + z)
      const s = size * scale
      const alpha = Math.max(0.05, 0.15 * scale)

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rot)

      // Front face
      ctx.strokeStyle = color + alpha + ')'
      ctx.lineWidth = 1
      ctx.strokeRect(-s / 2, -s / 2, s, s)

      // Back face offset
      const off = s * 0.4
      ctx.strokeRect(-s / 2 + off, -s / 2 - off, s, s)

      // Connecting lines
      ctx.beginPath()
      ctx.moveTo(-s / 2, -s / 2); ctx.lineTo(-s / 2 + off, -s / 2 - off)
      ctx.moveTo(s / 2, -s / 2); ctx.lineTo(s / 2 + off, -s / 2 - off)
      ctx.moveTo(s / 2, s / 2); ctx.lineTo(s / 2 + off, s / 2 - off)
      ctx.moveTo(-s / 2, s / 2); ctx.lineTo(-s / 2 + off, s / 2 - off)
      ctx.strokeStyle = color + (alpha * 0.5) + ')'
      ctx.stroke()

      ctx.restore()
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)

      // Grid lines
      ctx.strokeStyle = 'rgba(255,107,26,0.03)'
      ctx.lineWidth = 1
      for (let x = 0; x < w; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
      }
      for (let y = 0; y < h; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
      }

      // Cubes
      cubes.forEach(c => {
        c.rot += c.rotSpeed
        c.x += c.vx; c.y += c.vy
        if (c.x < -100) c.x = w + 100
        if (c.x > w + 100) c.x = -100
        if (c.y < -100) c.y = h + 100
        if (c.y > h + 100) c.y = -100
        drawCube(c.x, c.y, c.size, c.rot, c.color, c.z)
      })

      // Particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
      })

      // Connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255,107,26,${(1 - dist / 100) * 0.06})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

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
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}
