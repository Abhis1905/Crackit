import { useEffect, useRef } from 'react'

export default function ConfettiBurst({ trigger }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!trigger) return
    
    import('canvas-confetti').then(({ default: confetti }) => {
      const end = Date.now() + 2200
      const colors = ['#ff6b1a','#ffd93d','#c77dff','#4d96ff','#ff6b9d','#6bcb77','#fff']
      
      ;(function frame() {
        confetti({ particleCount: 4, angle: 60, spread: 70, origin: { x: 0 }, colors })
        confetti({ particleCount: 4, angle: 120, spread: 70, origin: { x: 1 }, colors })
        
        if (Date.now() < end) requestAnimationFrame(frame)
      })()

      // Central burst
      confetti({ 
        particleCount: 120, 
        spread: 100, 
        origin: { x: 0.5, y: 0.55 }, 
        colors, 
        startVelocity: 45, 
        gravity: 0.9, 
        scalar: 1.1 
      })
    })
  }, [trigger])

  return null
}
