import { useState, useEffect } from 'react'
import { getTodayIST, isDateToday, PHASES } from '../data/schedule'
import { getAllProgress } from '../lib/supabase'

function getPhaseForDate(dateStr) {
  const d = dateStr
  if (d >= '2026-04-14' && d <= '2026-06-01') return 1
  if (d >= '2026-06-02' && d <= '2026-07-27') return 2
  if (d >= '2026-07-28' && d <= '2026-09-28') return 3
  if (d >= '2026-09-29' && d <= '2026-12-14') return 4
  if (d >= '2026-12-15' && d <= '2026-12-31') return 5
  return 0
}

const BREAK_DAYS = ['2026-05-01','2026-06-15','2026-07-04','2026-08-15','2026-09-05','2026-10-02','2026-10-24','2026-11-14','2026-12-25']
const PHASE_COLORS = ['#f97316','#6bcb77','#c77dff','#4d96ff','#ffd93d','#ff6b9d']

export default function CalendarView({ onSelectDate }) {
  const today = getTodayIST()
  const [viewYear, setViewYear] = useState(2026)
  const [viewMonth, setViewMonth] = useState(3) // 0-indexed, April = 3
  const [progress, setProgress] = useState({})

  useEffect(() => {
    getAllProgress().then(data => {
      const map = {}
      data.forEach(p => {
        const checks = p.checks || {}
        const vals = Object.values(checks)
        if (vals.length > 0) {
          map[p.date] = vals.every(Boolean) ? 'full' : 'partial'
        }
      })
      setProgress(map)
    })
  }, [])

  const months = [
    { y: 2026, m: 3,  label: 'April 2026' },
    { y: 2026, m: 4,  label: 'May 2026' },
    { y: 2026, m: 5,  label: 'June 2026' },
    { y: 2026, m: 6,  label: 'July 2026' },
    { y: 2026, m: 7,  label: 'August 2026' },
    { y: 2026, m: 8,  label: 'September 2026' },
    { y: 2026, m: 9,  label: 'October 2026' },
    { y: 2026, m: 10, label: 'November 2026' },
    { y: 2026, m: 11, label: 'December 2026' },
  ]

  const curMonthIdx = months.findIndex(m => m.y === viewYear && m.m === viewMonth)

  function getDaysInMonth(y, m) {
    return new Date(y, m + 1, 0).getDate()
  }
  function getFirstDay(y, m) {
    return new Date(y, m, 1).getDay()
  }

  function formatDateStr(y, m, d) {
    return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
  }

  function isInProgram(dateStr) {
    return dateStr >= '2026-04-14' && dateStr <= '2026-12-31'
  }

  const days = getDaysInMonth(viewYear, viewMonth)
  const firstDay = getFirstDay(viewYear, viewMonth)

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <h2 style={{ fontFamily: 'Syne', fontSize: 24, color: '#fff', margin: '0 0 6px', fontWeight: 800 }}>
        📅 Calendar View
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, margin: '0 0 24px' }}>
        Click any date to view or log that day's tasks.
      </p>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
        {[
          { color: '#ff6b1a', label: 'Today' },
          { color: '#6bcb77', label: 'Fully done' },
          { color: '#ffd93d', label: 'Partial' },
          { color: 'rgba(255,255,255,0.1)', label: 'In program' },
        ].map(l => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: l.color }} />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{l.label}</span>
          </div>
        ))}
      </div>

      {/* Month nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <button
          onClick={() => { if (curMonthIdx > 0) { const prev = months[curMonthIdx - 1]; setViewYear(prev.y); setViewMonth(prev.m) }}}
          disabled={curMonthIdx === 0}
          style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: curMonthIdx === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.6)', borderRadius: 8, padding: '6px 14px', cursor: curMonthIdx === 0 ? 'not-allowed' : 'pointer', fontFamily: 'Syne' }}>
          ←
        </button>
        <span style={{ fontFamily: 'Syne', fontSize: 18, color: '#fff', fontWeight: 700 }}>
          {months[curMonthIdx]?.label}
        </span>
        <button
          onClick={() => { if (curMonthIdx < months.length - 1) { const next = months[curMonthIdx + 1]; setViewYear(next.y); setViewMonth(next.m) }}}
          disabled={curMonthIdx === months.length - 1}
          style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: curMonthIdx === months.length - 1 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.6)', borderRadius: 8, padding: '6px 14px', cursor: curMonthIdx === months.length - 1 ? 'not-allowed' : 'pointer', fontFamily: 'Syne' }}>
          →
        </button>
      </div>

      {/* Day headers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 4 }}>
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
          <div key={d} style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: 'JetBrains Mono', padding: '4px 0' }}>{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
        {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
        {Array.from({ length: days }, (_, i) => {
          const day = i + 1
          const dateStr = formatDateStr(viewYear, viewMonth, day)
          const inProg = isInProgram(dateStr)
          const isToday = dateStr === today
          const isBreak = BREAK_DAYS.includes(dateStr)
          const prog = progress[dateStr]
          const phase = getPhaseForDate(dateStr)
          const phaseColor = phase > 0 ? PHASE_COLORS[phase - 1] : null
          const isSun = new Date(dateStr).getDay() === 0

          let bg = 'rgba(255,255,255,0.02)'
          let border = 'rgba(255,255,255,0.06)'
          let textColor = inProg ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)'

          if (!inProg) { bg = 'transparent'; border = 'transparent' }
          if (isToday) { bg = 'rgba(255,107,26,0.15)'; border = '#ff6b1a'; textColor = '#fff' }
          else if (prog === 'full') { bg = 'rgba(107,203,119,0.1)'; border = 'rgba(107,203,119,0.4)'; textColor = '#6bcb77' }
          else if (prog === 'partial') { bg = 'rgba(255,211,61,0.08)'; border = 'rgba(255,211,61,0.3)'; textColor = '#ffd93d' }
          else if (isBreak) { bg = 'rgba(107,203,119,0.05)'; border = 'rgba(107,203,119,0.15)' }
          else if (inProg && phaseColor) { border = `${phaseColor}30` }

          return (
            <button
              key={day}
              onClick={() => inProg && onSelectDate(dateStr)}
              style={{
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: 8,
                aspectRatio: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inProg ? 'pointer' : 'default',
                transition: 'all 0.2s',
                position: 'relative',
                padding: 4,
              }}
            >
              <span style={{ fontSize: 13, color: textColor, fontWeight: isToday ? 700 : 400, fontFamily: isToday ? 'Syne' : 'DM Sans' }}>
                {day}
              </span>
              {isSun && inProg && (
                <span style={{ fontSize: 8, color: phase > 0 ? PHASE_COLORS[phase - 1] : 'rgba(255,255,255,0.2)', fontFamily: 'JetBrains Mono', lineHeight: 1 }}>
                  SUN
                </span>
              )}
              {isBreak && (
                <span style={{ fontSize: 8 }}>🌿</span>
              )}
            </button>
          )
        })}
      </div>

      {/* Phase color key for this month */}
      <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {PHASES.filter(p => {
          const phaseMonth = viewMonth + 1
          return true
        }).slice(0, 3).map(p => (
          <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: PHASE_COLORS[p.id - 1] }} />
            P{p.id}: {p.name}
          </div>
        ))}
      </div>
    </div>
  )
}
