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
  { id: 'phases',   label: 'All Phases',       icon: '🗺️' },
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

  function handleCalendarSelect(date) {
    setSelectedDate(date)
    setTab('today')
  }

  const isViewingToday = selectedDate === todayStr

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', position: 'relative', overflow: 'hidden' }}>
      <ThreeBackground />

      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '0 16px 80px' }}>

        {/* Header */}
        <header style={{ padding: '24px 0 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h1 className="shimmer-text" style={{ fontFamily: 'Syne', fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 800, margin: '0 0 4px', lineHeight: 1.1 }}>
                ☀️ Summer Break Crack
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0, fontFamily: 'JetBrains Mono' }}>
                {isInProgram ? `Day ${dayNum} of ${totalDays}` : formatDate(todayStr)} · JPMC/PayPal ready by Dec 2026
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <div style={{ background: 'rgba(255,107,26,0.1)', border: '1px solid rgba(255,107,26,0.25)', borderRadius: 10, padding: '8px 14px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne', fontSize: 20, color: '#ff6b1a', fontWeight: 800 }}>{stats.streak}🔥</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono' }}>STREAK</div>
              </div>
              <div style={{ background: 'rgba(199,125,255,0.1)', border: '1px solid rgba(199,125,255,0.25)', borderRadius: 10, padding: '8px 14px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne', fontSize: 20, color: '#c77dff', fontWeight: 800 }}>{stats.totalDone}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono' }}>DAYS ACTIVE</div>
              </div>
            </div>
          </div>

          {/* Phase pills */}
          <div style={{ display: 'flex', gap: 6, marginTop: 14, flexWrap: 'wrap' }}>
            {PHASES.map(p => (
              <span key={p.id} style={{ fontSize: 10, fontFamily: 'JetBrains Mono', background: `${p.color}12`, border: `1px solid ${p.color}30`, color: p.color, padding: '3px 10px', borderRadius: 20 }}>
                P{p.id} {p.icon}
              </span>
            ))}
          </div>
        </header>

        {/* Viewing a past/future date banner */}
        {!isViewingToday && tab === 'today' && (
          <div style={{ background: 'rgba(255,211,61,0.08)', border: '1px solid rgba(255,211,61,0.2)', borderRadius: 10, padding: '10px 16px', marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 13, color: '#ffd93d' }}>
              📅 Viewing: {formatDate(selectedDate)}
            </span>
            <button onClick={() => setSelectedDate(todayStr)}
              style={{ fontSize: 11, background: 'rgba(255,107,26,0.15)', border: '1px solid rgba(255,107,26,0.3)', color: '#ff6b1a', padding: '4px 12px', borderRadius: 20, cursor: 'pointer', fontFamily: 'JetBrains Mono' }}>
              → Go to today
            </button>
          </div>
        )}

        {/* Tab nav */}
        <nav style={{ display: 'flex', gap: 4, marginBottom: 24, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 4 }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1,
                padding: '8px 4px',
                border: `1px solid ${tab === t.id ? 'rgba(255,107,26,0.4)' : 'transparent'}`,
                background: tab === t.id ? 'rgba(255,107,26,0.1)' : 'transparent',
                color: tab === t.id ? '#ff6b1a' : 'rgba(255,255,255,0.4)',
                borderRadius: 8,
                cursor: 'pointer',
                fontFamily: 'Syne',
                fontSize: 'clamp(10px, 1.5vw, 13px)',
                fontWeight: tab === t.id ? 700 : 400,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
              }}
            >
              <span style={{ fontSize: 14 }}>{t.icon}</span>
              <span style={{ display: window.innerWidth < 400 ? 'none' : 'inline' }}>{t.label}</span>
            </button>
          ))}
        </nav>

        {/* Tab content */}
        {tab === 'today'    && <DailyView dateStr={selectedDate} />}
        {tab === 'calendar' && <CalendarView onSelectDate={handleCalendarSelect} />}
        {tab === 'phases'   && <PhasesView />}
        {tab === 'progress' && <ProgressDashboard />}
      </div>
    </div>
  )
}
