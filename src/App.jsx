import ResourceHub from './components/ResourceHub'
import QuickLinks from './components/QuickLinks'
import { useState, useEffect } from 'react'
import ThreeBackground from './components/ThreeBackground'
import DailyView from './components/DailyView'
import ProgressDashboard from './components/ProgressDashboard'
import PhasesView from './components/PhasesView'
import CalendarView from './components/CalendarView'
import { getTodayIST, formatDate, getDayNumber, getTotalDays, PHASES } from './data/schedule'
import { getAllProgress } from './lib/supabase'

const TABS = [
  { id: 'today',    label: "Today's Mission", icon: '🎯' },
  { id: 'calendar', label: 'Calendar',         icon: '📅' },
  { id: 'phases',   label: 'Battle Plan',      icon: '🗺️' },
  { id: 'progress', label: 'Progress',         icon: '📊' },
]

export default function App() {
  const [tab, setTab] = useState('today')
  const [selectedDate, setSelectedDate] = useState(getTodayIST())
  const [stats, setStats] = useState({ streak: 0, totalDone: 0 })
  const todayStr = getTodayIST()
  const dayNum = getDayNumber(todayStr)
  const totalDays = getTotalDays()
  const isInProgram = todayStr >= '2026-04-14' && todayStr <= '2026-12-31'

  useEffect(() => {
    getAllProgress().then(data => {
      let streak = 0
      const sorted = [...data].sort((a, b) => b.date.localeCompare(a.date))
      for (const p of sorted) {
        const vals = Object.values(p.checks || {})
        if (vals.some(Boolean)) streak++
        else break
      }
      setStats({ streak, totalDone: data.filter(p => Object.values(p.checks || {}).some(Boolean)).length })
    })
  }, [])

  function handleCalendarSelect(date) { setSelectedDate(date); setTab('today') }
  const isViewingToday = selectedDate === todayStr

  // Current phase detection
  const currentPhase = PHASES.find(p => {
    if (p.id === 1) return todayStr >= '2026-04-14' && todayStr <= '2026-06-01'
    if (p.id === 2) return todayStr >= '2026-06-02' && todayStr <= '2026-07-13'
    if (p.id === 3) return todayStr >= '2026-07-14' && todayStr <= '2026-09-07'
    if (p.id === 4) return todayStr >= '2026-09-08' && todayStr <= '2026-11-16'
    if (p.id === 5) return todayStr >= '2026-11-17' && todayStr <= '2026-12-31'
    if (p.id === 6) return todayStr >= '2027-01-01'
    return false
  })

  const progressPct = isInProgram ? Math.round((dayNum / totalDays) * 100) : 0

  return (
    <div style={{ minHeight: '100vh', background: '#06060e', position: 'relative', overflow: 'hidden' }}>
      <ThreeBackground />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 920, margin: '0 auto', padding: '0 16px 100px' }}>
        {/* ─── HEADER ───────────────────────────────────────── */}
        <header style={{ padding: '28px 0 22px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 26 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                {currentPhase && (
                  <span style={{
                    fontSize: 10, fontFamily: 'JetBrains Mono', letterSpacing: 1,
                    background: currentPhase.color + '20', border: `1px solid ${currentPhase.color}40`,
                    color: currentPhase.color, padding: '3px 10px', borderRadius: 20,
                  }}>
                    PHASE {currentPhase.id} ACTIVE
                  </span>
                )}
              </div>
              <h1 className="shimmer-text" style={{
                fontFamily: 'Syne', fontSize: 'clamp(26px,5vw,42px)', fontWeight: 800,
                margin: '0 0 5px', lineHeight: 1.1, letterSpacing: '-0.5px',
              }}>
                CrackIT — JPMC Ready
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 13, margin: 0, fontFamily: 'JetBrains Mono', letterSpacing: 0.3 }}>
                {isInProgram ? `Day ${dayNum} of ${totalDays} · ${progressPct}% complete` : formatDate(todayStr)} · Target: JPMC / PayPal / Top MNC
              </p>
            </div>
            {/* Stats */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[
                { val: `${stats.streak}🔥`, label: 'STREAK', color: '#ff6b1a', bg: 'rgba(255,107,26,0.1)', border: 'rgba(255,107,26,0.22)' },
                { val: stats.totalDone, label: 'DAYS DONE', color: '#c77dff', bg: 'rgba(199,125,255,0.1)', border: 'rgba(199,125,255,0.22)' },
                { val: `${progressPct}%`, label: 'PROGRESS', color: '#6bcb77', bg: 'rgba(107,203,119,0.1)', border: 'rgba(107,203,119,0.22)' },
              ].map(s => (
                <div key={s.label} style={{
                  background: s.bg, border: `1px solid ${s.border}`, borderRadius: 12,
                  padding: '10px 16px', textAlign: 'center', minWidth: 70,
                }}>
                  <div style={{ fontFamily: 'Syne', fontSize: 22, color: s.color, fontWeight: 800, lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono', marginTop: 3, letterSpacing: 0.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Overall progress bar */}
          {isInProgram && (
            <div style={{ marginTop: 16 }}>
              <div style={{ height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
                <div className="prog-bar-fill" style={{
                  height: '100%', width: `${progressPct}%`,
                  background: 'linear-gradient(90deg, #ff6b1a, #ffd93d, #ff6b9d)',
                  borderRadius: 4, boxShadow: '0 0 10px rgba(255,107,26,0.5)',
                }} />
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                {PHASES.map(p => (
                  <span key={p.id} style={{
                    fontSize: 10, fontFamily: 'JetBrains Mono',
                    background: `${p.color}${currentPhase?.id === p.id ? '22' : '0e'}`,
                    border: `1px solid ${p.color}${currentPhase?.id === p.id ? '50' : '25'}`,
                    color: currentPhase?.id === p.id ? p.color : p.color + '88',
                    padding: '3px 9px', borderRadius: 18,
                    boxShadow: currentPhase?.id === p.id ? `0 0 10px ${p.color}33` : 'none',
                  }}>
                    {p.icon} P{p.id}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Date banner */}
        {!isViewingToday && tab === 'today' && (
          <div className="float-anim" style={{
            background: 'rgba(255,211,61,0.07)', border: '1px solid rgba(255,211,61,0.2)',
            borderRadius: 10, padding: '10px 16px', marginBottom: 16,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span style={{ fontSize: 13, color: '#ffd93d' }}>📅 Viewing: {formatDate(selectedDate)}</span>
            <button onClick={() => setSelectedDate(todayStr)}
              style={{ fontSize: 11, background: 'rgba(255,107,26,0.15)', border: '1px solid rgba(255,107,26,0.3)', color: '#ff6b1a', padding: '4px 14px', borderRadius: 20, cursor: 'pointer', fontFamily: 'JetBrains Mono' }}>
              → Today
            </button>
          </div>
        )}

        {/* ─── NAV TABS ──────────────────────────────────────── */}
        <nav style={{ display: 'flex', gap: 4, marginBottom: 26, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 5 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`nav-tab ${tab === t.id ? 'active' : ''}`}
              style={{ color: tab === t.id ? '#ff6b1a' : 'rgba(255,255,255,0.38)' }}>
              <span style={{ fontSize: 15 }}>{t.icon}</span>
              <span style={{ display: 'var(--tab-label-display, inline)' }}>{t.label}</span>
            </button>
          ))}
        </nav>

        {/* ─── CONTENT ───────────────────────────────────────── */}
        <div className="float-anim" key={tab}>
          {tab === 'today'    && <DailyView dateStr={selectedDate} />}
          {tab === 'calendar' && <CalendarView onSelectDate={handleCalendarSelect} />}
          {tab === 'phases'   && <PhasesView />}
          {tab === 'progress' && <ProgressDashboard />}
        </div>
      </div>
    </div>
  )
}
