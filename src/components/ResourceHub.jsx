import { useEffect, useRef, useState } from 'react'

const RESOURCES = [
  {
    id: 'lc',
    name: 'LeetCode',
    sub: 'My Profile',
    icon: '💻',
    href: 'https://leetcode.com/u/1905-abhishek/',
    color: '#ff6b1a',
    glow: 'rgba(255,107,26,0.6)',
    shadow: 'rgba(255,107,26,0.3)',
    tag: 'SOLVE',
    desc: 'Daily problems + company-tagged JPMC/PayPal filter',
  },
  {
    id: 'nc',
    name: 'NeetCode',
    sub: 'My Profile',
    icon: '⚡',
    href: 'https://neetcode.io/profile/1905-abhishek',
    color: '#ffd93d',
    glow: 'rgba(255,217,61,0.6)',
    shadow: 'rgba(255,217,61,0.3)',
    tag: 'TRACK',
    desc: 'Track your progress across all patterns and roadmap',
  },
  {
    id: 'ncr',
    name: 'NeetCode',
    sub: 'Roadmap',
    icon: '🗺️',
    href: 'https://neetcode.io/roadmap',
    color: '#ffd93d',
    glow: 'rgba(255,217,61,0.6)',
    shadow: 'rgba(255,217,61,0.3)',
    tag: 'ROADMAP',
    desc: 'Structured DSA roadmap from Arrays to DP',
  },
  {
    id: 'shradha',
    name: "Shradha's Sheet",
    sub: 'DSA Sheet',
    icon: '📋',
    href: 'https://docs.google.com/spreadsheets/d/1_PoEEiE6lk79cmT1kqJpsnkB14b5ImdKpDrXoPBsw2U/edit?usp=sharing',
    color: '#6bcb77',
    glow: 'rgba(107,203,119,0.6)',
    shadow: 'rgba(107,203,119,0.3)',
    tag: 'SHEET',
    desc: 'Curated DSA problems — your primary problem bank',
  },
  {
    id: 'striver',
    name: "Striver's A2Z",
    sub: 'TUF Sheet',
    icon: '📚',
    href: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
    color: '#6bcb77',
    glow: 'rgba(107,203,119,0.6)',
    shadow: 'rgba(107,203,119,0.3)',
    tag: 'SHEET',
    desc: 'A2Z DSA course — complete structured problem set',
  },
  {
    id: 'lcdaily',
    name: 'LC Daily',
    sub: 'Problem Set',
    icon: '🔥',
    href: 'https://leetcode.com/problemset/',
    color: '#c77dff',
    glow: 'rgba(199,125,255,0.6)',
    shadow: 'rgba(199,125,255,0.3)',
    tag: 'DAILY',
    desc: 'Daily challenge + full problem set browser',
  },
]

function Card3D({ resource, index }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 80)
    return () => clearTimeout(t)
  }, [index])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -12, y: dx * 12 })
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(resource.href, '_blank')}
      style={{
        perspective: 800,
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transition: `opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)`,
        transitionDelay: `${index * 0.05}s`,
      }}
    >
      <div style={{
        position: 'relative',
        borderRadius: 16,
        padding: '18px 16px 16px',
        background: hovered
          ? `linear-gradient(135deg, ${resource.color}14 0%, rgba(255,255,255,0.04) 100%)`
          : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? resource.color + '50' : 'rgba(255,255,255,0.07)'}`,
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? 'translateZ(8px)' : 'translateZ(0)'}`,
        transformStyle: 'preserve-3d',
        transition: hovered
          ? 'transform 0.15s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered
          ? `0 20px 40px ${resource.shadow}, 0 0 0 1px ${resource.color}20, inset 0 1px 0 rgba(255,255,255,0.1)`
          : '0 4px 16px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        willChange: 'transform',
      }}>

        {/* Moving glow spotlight */}
        {hovered && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${resource.color}18 0%, transparent 60%)`,
            borderRadius: 16,
            pointerEvents: 'none',
            transition: 'background 0.05s ease',
          }} />
        )}

        {/* Shimmer top edge */}
        <div style={{
          position: 'absolute',
          top: 0, left: '20%', right: '20%', height: 1,
          background: hovered
            ? `linear-gradient(90deg, transparent, ${resource.color}80, transparent)`
            : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          transition: 'background 0.3s ease',
        }} />

        {/* Tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          fontSize: 9, fontFamily: 'JetBrains Mono', letterSpacing: 1.5,
          color: resource.color, background: `${resource.color}15`,
          border: `1px solid ${resource.color}30`,
          padding: '2px 8px', borderRadius: 10, marginBottom: 12,
          transform: 'translateZ(6px)',
        }}>
          {resource.tag}
        </div>

        {/* Icon + name */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10, transform: 'translateZ(10px)' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12, flexShrink: 0,
            background: `${resource.color}18`,
            border: `1px solid ${resource.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20,
            boxShadow: hovered ? `0 0 20px ${resource.glow}` : 'none',
            transition: 'box-shadow 0.3s ease',
          }}>
            {resource.icon}
          </div>
          <div>
            <div style={{
              fontFamily: 'Syne', fontSize: 14, fontWeight: 800,
              color: '#fff', lineHeight: 1.2,
            }}>{resource.name}</div>
            <div style={{
              fontSize: 11, color: resource.color,
              fontFamily: 'JetBrains Mono', marginTop: 2,
            }}>{resource.sub}</div>
          </div>
        </div>

        {/* Description */}
        <div style={{
          fontSize: 11, color: 'rgba(255,255,255,0.42)',
          lineHeight: 1.55, transform: 'translateZ(4px)',
        }}>
          {resource.desc}
        </div>

        {/* Open arrow */}
        <div style={{
          position: 'absolute', top: 14, right: 14,
          fontSize: 12, color: hovered ? resource.color : 'rgba(255,255,255,0.2)',
          fontFamily: 'JetBrains Mono',
          transition: 'color 0.3s ease, transform 0.3s ease',
          transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)',
        }}>↗</div>
      </div>
    </div>
  )
}

export default function ResourceHub() {
  const [headerVis, setHeaderVis] = useState(false)

  useEffect(() => {
    setTimeout(() => setHeaderVis(true), 50)
  }, [])

  return (
    <div style={{ marginBottom: 28 }}>

      {/* Floating header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 14,
        opacity: headerVis ? 1 : 0,
        transform: headerVis ? 'translateY(0)' : 'translateY(-12px)',
        transition: 'all 0.5s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#6bcb77',
            boxShadow: '0 0 8px rgba(107,203,119,0.8)',
            animation: 'blink-dot 2s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'JetBrains Mono', fontSize: 10,
            color: 'rgba(255,255,255,0.3)', letterSpacing: 1.5,
          }}>
            PLATFORMS & SHEETS
          </span>
        </div>
        <span style={{
          fontSize: 10, color: 'rgba(255,255,255,0.2)',
          fontFamily: 'JetBrains Mono',
        }}>
          hover for 3D · click to open
        </span>
      </div>

      <style>{`
        @keyframes blink-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(107,203,119,0.8); }
          50% { opacity: 0.4; box-shadow: 0 0 3px rgba(107,203,119,0.3); }
        }
      `}</style>

      {/* 3D Card grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: 10,
      }}>
        {RESOURCES.map((r, i) => (
          <Card3D key={r.id} resource={r} index={i} />
        ))}
      </div>
    </div>
  )
}