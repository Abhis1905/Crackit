import { useState, useEffect } from 'react'
import { getTodayIST, isDateToday, PHASES, BREAK_DAYS } from '../data/schedule'
import { getAllProgress } from '../lib/supabase'

const PHASE_RANGES = [
  { id:1, start:'2026-04-14', end:'2026-06-01', color:'#f97316' },
  { id:2, start:'2026-06-02', end:'2026-07-13', color:'#6bcb77' },
  { id:3, start:'2026-07-14', end:'2026-09-07', color:'#c77dff' },
  { id:4, start:'2026-09-08', end:'2026-11-16', color:'#4d96ff' },
  { id:5, start:'2026-11-17', end:'2026-12-31', color:'#ffd93d' },
  { id:6, start:'2027-01-01', end:'2027-01-31', color:'#ff6b9d' },
]

function getPhaseColor(dateStr) {
  for (const p of PHASE_RANGES) {
    if (dateStr >= p.start && dateStr <= p.end) return p.color
  }
  return null
}

export default function CalendarView({ onSelectDate }) {
  const today = getTodayIST()
  const [viewYear, setViewYear] = useState(2026)
  const [viewMonth, setViewMonth] = useState(3)
  const [progress, setProgress] = useState({})
  const [hoveredDate, setHoveredDate] = useState(null)

  useEffect(() => {
    getAllProgress().then(data => {
      const map = {}
      data.forEach(p => {
        const vals = Object.values(p.checks || {})
        if (vals.length > 0) map[p.date] = vals.every(Boolean) ? 'full' : 'partial'
      })
      setProgress(map)
    })
  }, [])

  const months = [
    {y:2026,m:3,label:'April 2026'},{y:2026,m:4,label:'May 2026'},{y:2026,m:5,label:'June 2026'},
    {y:2026,m:6,label:'July 2026'},{y:2026,m:7,label:'August 2026'},{y:2026,m:8,label:'September 2026'},
    {y:2026,m:9,label:'October 2026'},{y:2026,m:10,label:'November 2026'},{y:2026,m:11,label:'December 2026'},
    {y:2027,m:0,label:'January 2027'},
  ]

  const curIdx = months.findIndex(m => m.y === viewYear && m.m === viewMonth)
  const curMonthMeta = months[curIdx]

  function fmt(y,m,d) { return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}` }
  function daysIn(y,m) { return new Date(y, m+1, 0).getDate() }
  function firstDay(y,m) { return new Date(y,m,1).getDay() }
  function inProgram(ds) { return ds >= '2026-04-14' && ds <= '2027-01-31' }

  const days = daysIn(viewYear, viewMonth)
  const fd = firstDay(viewYear, viewMonth)

  let mFull = 0, mPartial = 0, mProgram = 0
  for (let d = 1; d <= days; d++) {
    const ds = fmt(viewYear, viewMonth, d)
    if (inProgram(ds) && !BREAK_DAYS.has(ds)) mProgram++
    if (progress[ds] === 'full') mFull++
    if (progress[ds] === 'partial') mPartial++
  }

  return (
    <div style={{ position:'relative', zIndex:1 }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6, flexWrap:'wrap', gap:10 }}>
        <div>
          <h2 style={{ fontFamily:'Syne', fontSize:24, color:'#fff', margin:'0 0 3px', fontWeight:800 }}>📅 Full Calendar</h2>
          <p style={{ color:'rgba(255,255,255,0.38)', fontSize:13, margin:0 }}>Apr 2026 → Jan 2027 · 262 days</p>
        </div>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <button onClick={() => { if(curIdx>0){setViewYear(months[curIdx-1].y);setViewMonth(months[curIdx-1].m)} }}
            disabled={curIdx===0}
            style={{ width:34,height:34,borderRadius:8,background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.6)',cursor:'pointer',fontSize:16,display:'flex',alignItems:'center',justifyContent:'center' }}>
            ‹
          </button>
          <span style={{ fontFamily:'Syne', fontSize:15, color:'#fff', fontWeight:700, minWidth:130, textAlign:'center' }}>{curMonthMeta?.label}</span>
          <button onClick={() => { if(curIdx<months.length-1){setViewYear(months[curIdx+1].y);setViewMonth(months[curIdx+1].m)} }}
            disabled={curIdx===months.length-1}
            style={{ width:34,height:34,borderRadius:8,background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.6)',cursor:'pointer',fontSize:16,display:'flex',alignItems:'center',justifyContent:'center' }}>
            ›
          </button>
        </div>
      </div>

      <div style={{ display:'flex', gap:8, marginBottom:18, flexWrap:'wrap' }}>
        {[
          {label:'Active days',val:mProgram,c:'rgba(255,255,255,0.3)'},
          {label:'Full ✓',val:mFull,c:'#6bcb77'},
          {label:'Partial',val:mPartial,c:'#ffd93d'},
          {label:'Remaining',val:Math.max(0,mProgram-mFull-mPartial),c:'rgba(255,255,255,0.3)'},
        ].map(s => (
          <div key={s.label} style={{ background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:9, padding:'7px 14px', display:'flex', gap:6, alignItems:'center' }}>
            <span style={{ fontFamily:'Syne', fontSize:16, color:s.c, fontWeight:700 }}>{s.val}</span>
            <span style={{ fontSize:11, color:'rgba(255,255,255,0.3)', fontFamily:'JetBrains Mono' }}>{s.label}</span>
          </div>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:4, marginBottom:6 }}>
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
          <div key={d} style={{ textAlign:'center', fontSize:10, color:'rgba(255,255,255,0.25)', fontFamily:'JetBrains Mono', padding:'4px 0' }}>{d}</div>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:4 }}>
        {Array.from({length:fd}).map((_,i) => <div key={`e${i}`} />)}
        {Array.from({length:days}).map((_,i) => {
          const d = i+1
          const ds = fmt(viewYear, viewMonth, d)
          const isToday2 = ds === today
          const isBreak2 = BREAK_DAYS.has(ds)
          const prog = progress[ds]
          const inProg = inProgram(ds)
          const pc = getPhaseColor(ds)
          const hovered = hoveredDate === ds
          let bg = 'rgba(255,255,255,0.02)'
          let border = '1px solid rgba(255,255,255,0.05)'
          let textColor = 'rgba(255,255,255,0.35)'
          if (!inProg) { bg = 'transparent'; textColor = 'rgba(255,255,255,0.12)'; border = '1px solid transparent' }
          else if (isBreak2) { bg = 'rgba(107,203,119,0.07)'; border = '1px solid rgba(107,203,119,0.18)'; textColor = '#6bcb77' }
          else if (prog === 'full') { bg = 'rgba(107,203,119,0.12)'; border = '1px solid rgba(107,203,119,0.35)'; textColor = '#6bcb77' }
          else if (prog === 'partial') { bg = 'rgba(255,211,61,0.08)'; border = '1px solid rgba(255,211,61,0.25)'; textColor = '#ffd93d' }
          else if (pc) { bg = `${pc}0d`; border = `1px solid ${pc}22`; textColor = 'rgba(255,255,255,0.65)' }
          if (isToday2) { bg = 'rgba(255,107,26,0.18)'; border = '1.5px solid rgba(255,107,26,0.6)'; textColor = '#ff6b1a' }
          return (
            <div key={ds} onClick={() => inProg && onSelectDate(ds)}
              onMouseEnter={() => setHoveredDate(ds)}
              onMouseLeave={() => setHoveredDate(null)}
              style={{
                background: hovered && inProg ? (pc ? `${pc}1a` : 'rgba(255,255,255,0.06)') : bg,
                border, borderRadius:8, padding:'7px 4px 5px',
                textAlign:'center', cursor: inProg ? 'pointer' : 'default',
                transition:'all 0.18s ease',
                transform: hovered && inProg ? 'scale(1.08)' : 'scale(1)',
                boxShadow: isToday2 ? '0 0 14px rgba(255,107,26,0.4)' : prog === 'full' ? '0 0 8px rgba(107,203,119,0.2)' : 'none',
                position:'relative',
              }}>
              <div style={{ fontSize:13, fontFamily:'Syne', color:textColor, fontWeight: isToday2 ? 800 : 500, lineHeight:1 }}>{d}</div>
              {inProg && pc && !isBreak2 && (
                <div style={{ width:4, height:4, borderRadius:'50%', background: prog==='full' ? '#6bcb77' : prog==='partial' ? '#ffd93d' : pc, margin:'4px auto 0', opacity:0.8 }} />
              )}
              {isBreak2 && <div style={{ fontSize:8, marginTop:2 }}>🌿</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
