export default function QuickLinks() {
  const links = [
    { label: 'My LeetCode', icon: '💻', href: 'https://leetcode.com/u/1905-abhishek/', color: '#ff6b1a', bg: 'rgba(255,107,26,0.1)', border: 'rgba(255,107,26,0.25)' },
    { label: 'My NeetCode', icon: '⚡', href: 'https://neetcode.io/profile/1905-abhishek', color: '#ff6b1a', bg: 'rgba(255,107,26,0.1)', border: 'rgba(255,107,26,0.25)' },
    { label: 'NeetCode Roadmap', icon: '🗺️', href: 'https://neetcode.io/roadmap', color: '#ffd93d', bg: 'rgba(255,217,61,0.1)', border: 'rgba(255,217,61,0.25)' },
    { label: "Shradha's Sheet", icon: '📋', href: 'https://docs.google.com/spreadsheets/d/1_PoEEiE6lk79cmT1kqJpsnkB14b5ImdKpDrXoPBsw2U/edit?usp=sharing', color: '#6bcb77', bg: 'rgba(107,203,119,0.1)', border: 'rgba(107,203,119,0.25)' },
    { label: "Striver's A2Z", icon: '📚', href: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/', color: '#6bcb77', bg: 'rgba(107,203,119,0.1)', border: 'rgba(107,203,119,0.25)' },
    { label: 'LC Daily', icon: '🔥', href: 'https://leetcode.com/problemset/', color: '#c77dff', bg: 'rgba(199,125,255,0.1)', border: 'rgba(199,125,255,0.25)' },
    { label: 'IndiaBix', icon: '🧮', href: 'https://www.indiabix.com/', color: '#4d96ff', bg: 'rgba(77,150,255,0.1)', border: 'rgba(77,150,255,0.25)' },
    { label: 'Pramp Mocks', icon: '🎤', href: 'https://www.pramp.com/', color: '#ff6b9d', bg: 'rgba(255,107,157,0.1)', border: 'rgba(255,107,157,0.25)' },
  ]

  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 14,
      padding: '12px 16px',
      marginBottom: 20,
    }}>
      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', fontFamily: 'JetBrains Mono', letterSpacing: 1.5, marginBottom: 10 }}>
        🔗 QUICK ACCESS — PLATFORMS & SHEETS
      </div>
      <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
        {links.map(l => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: 11, fontFamily: 'JetBrains Mono',
              background: l.bg, border: `1px solid ${l.border}`,
              color: l.color, padding: '5px 12px', borderRadius: 20,
              textDecoration: 'none', transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 4px 15px ${l.border}` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            {l.icon} {l.label} ↗
          </a>
        ))}
      </div>
    </div>
  )
}