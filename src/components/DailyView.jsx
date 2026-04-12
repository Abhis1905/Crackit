import { useState, useEffect, useCallback } from 'react'
import {
  getScheduleForDate, getTodayIST, formatDate, getDayNumber,
  isDatePast, isDateToday, isDateFuture, getRandomSurprise, getVerifyChallenge,
  NEETCODE_ROADMAP, NEETCODE_PROFILE, SHRADHA_SHEET, LEETCODE_DAILY, LEETCODE_PROFILE, isBreakDay
} from '../data/schedule'
import { getProgress, saveProgress } from '../lib/supabase'
import ConfettiBurst from './ConfettiBurst'

const TYPE_COLORS = {
  lecture:       { bg:'rgba(77,150,255,0.08)',   border:'rgba(77,150,255,0.25)',   text:'#4d96ff',  icon:'📺', label:'LECTURE' },
  leetcode:      { bg:'rgba(255,107,26,0.08)',   border:'rgba(255,107,26,0.28)',   text:'#ff6b1a',  icon:'⚡', label:'LEETCODE' },
  sheet:         { bg:'rgba(255,211,61,0.08)',   border:'rgba(255,211,61,0.25)',   text:'#ffd93d',  icon:'📋', label:'SHEET' },
  aptitude:      { bg:'rgba(107,203,119,0.08)',  border:'rgba(107,203,119,0.25)',  text:'#6bcb77',  icon:'🧮', label:'APTITUDE' },
  build:         { bg:'rgba(199,125,255,0.08)',  border:'rgba(199,125,255,0.28)',  text:'#c77dff',  icon:'🔨', label:'BUILD' },
  recall:        { bg:'rgba(255,107,157,0.08)',  border:'rgba(255,107,157,0.25)',  text:'#ff6b9d',  icon:'🧠', label:'RECALL' },
  communication: { bg:'rgba(255,211,61,0.08)',   border:'rgba(255,211,61,0.25)',   text:'#ffd93d',  icon:'🎤', label:'COMM' },
  rest:          { bg:'rgba(107,203,119,0.08)',  border:'rgba(107,203,119,0.25)',  text:'#6bcb77',  icon:'🌿', label:'REST' },
}

function VerifyModal({ task, onConfirm, onClose }) {
  const [answer, setAnswer] = useState('')
  const challenge = getVerifyChallenge(task.verifyType)
  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.88)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000, padding:24 }}>
      <div className="pop-anim glass-card-strong" style={{ padding:30, maxWidth:480, width:'100%', borderRadius:18, boxShadow:'0 0 60px rgba(255,107,26,0.25), 0 40px 80px rgba(0,0,0,0.6)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
          <div style={{ width:40, height:40, borderRadius:12, background:'rgba(255,107,26,0.15)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>🔍</div>
          <div>
            <h3 style={{ fontFamily:'Syne', fontSize:18, color:'#ff6b1a', margin:0, fontWeight:800 }}>Prove It First.</h3>
            <p style={{ color:'rgba(255,255,255,0.4)', fontSize:12, margin:0 }}>No checkbox clicks without proof.</p>
          </div>
        </div>
        <div style={{ background:'rgba(255,107,26,0.07)', border:'1px solid rgba(255,107,26,0.18)', borderRadius:10, padding:'13px 16px', marginBottom:14, fontSize:14, color:'#ffd93d', lineHeight:1.65 }}>
          {challenge || "What did you actually do and what output did you get?"}
        </div>
        <textarea value={answer} onChange={e => setAnswer(e.target.value)}
          placeholder="Be specific. Vague = doesn't count. Name the function, the output, the bug."
          style={{ minHeight:88, marginBottom:14 }} />
        <div style={{ display:'flex', gap:10 }}>
          <button onClick={onClose}
            style={{ flex:1, padding:'10px 0', background:'transparent', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, color:'rgba(255,255,255,0.4)', cursor:'pointer', fontFamily:'DM Sans', fontSize:13 }}>
            Not yet
          </button>
          <button onClick={() => onConfirm(answer)} disabled={answer.trim().length < 5}
            style={{ flex:2, padding:'10px 0', background: answer.trim().length >= 5 ? 'linear-gradient(135deg,#ff6b1a,#ffd93d)' : 'rgba(255,255,255,0.05)', border:'none', borderRadius:10, color: answer.trim().length >= 5 ? '#000' : 'rgba(255,255,255,0.2)', cursor: answer.trim().length >= 5 ? 'pointer' : 'not-allowed', fontFamily:'Syne', fontWeight:700, fontSize:14, transition:'all 0.2s' }}>
            ✓ Mark Complete
          </button>
        </div>
      </div>
    </div>
  )
}

function SurpriseModal({ surprise, onClose }) {
  const icons = { meal:'🍕', quote:'💬', flex:'💪' }
  const colors = { meal:'#ff6b1a', quote:'#c77dff', flex:'#6bcb77' }
  const c = colors[surprise.type] || '#ffd93d'
  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.92)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1001, padding:24 }}>
      <div className="surprise-card" style={{
        background:'linear-gradient(135deg,rgba(255,107,26,0.12),rgba(199,125,255,0.12),rgba(77,150,255,0.08))',
        border:`1px solid ${c}40`, borderRadius:24, padding:40, maxWidth:430, width:'100%', textAlign:'center',
        boxShadow:`0 0 100px ${c}30, 0 40px 80px rgba(0,0,0,0.7)`,
        backdropFilter:'blur(20px)',
      }}>
        <div style={{ fontSize:64, marginBottom:12, filter:'drop-shadow(0 0 20px rgba(255,211,61,0.5))' }}>{icons[surprise.type] || '🎁'}</div>
        <div style={{ fontFamily:'JetBrains Mono', fontSize:11, color:c, letterSpacing:2, marginBottom:8 }}>DAY COMPLETELY CRUSHED</div>
        <h2 style={{ fontFamily:'Syne', fontSize:24, color:'#fff', margin:'0 0 16px', fontWeight:800 }}>You're building something real.</h2>
        <p style={{ fontSize:15, color:'rgba(255,255,255,0.82)', lineHeight:1.75, marginBottom:28 }}>{surprise.content}</p>
        <div style={{ fontSize:11, color:'rgba(255,255,255,0.22)', marginBottom:22, fontFamily:'JetBrains Mono', letterSpacing:0.5 }}>progress saved · streak updated · JPMC closer</div>
        <button onClick={onClose}
          style={{ padding:'13px 36px', background:`linear-gradient(135deg,${c},#ffd93d)`, border:'none', borderRadius:32, color:'#000', fontFamily:'Syne', fontWeight:800, fontSize:15, cursor:'pointer', boxShadow:`0 0 30px ${c}60` }}>
          Tomorrow too. 🚀
        </button>
      </div>
    </div>
  )
}

export default function DailyView({ dateStr: propDate }) {
  const dateStr = propDate || getTodayIST()
  const [schedule, setSchedule] = useState(null)
  const [checks, setChecks] = useState({})
  const [notes, setNotes] = useState('')
  const [verifyTask, setVerifyTask] = useState(null)
  const [showSurprise, setShowSurprise] = useState(false)
  const [confetti, setConfetti] = useState(0)
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)

  const isPast = isDatePast(dateStr)
  const isToday = isDateToday(dateStr)
  const isFuture = isDateFuture(dateStr)
  const isBreak = isBreakDay(dateStr)

  useEffect(() => {
    setLoading(true)
    setChecks({}); setNotes('')
    const s = getScheduleForDate(dateStr)
    setSchedule(s)
    getProgress(dateStr).then(data => {
      if (data) { setChecks(data.checks || {}); setNotes(data.notes || '') }
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [dateStr])

  const totalTasks = schedule?.tasks?.length || 0
  const completedTasks = Object.values(checks).filter(Boolean).length
  const allDone = totalTasks > 0 && completedTasks === totalTasks

  const confirmCheck = useCallback((taskId, answer) => {
    setChecks(prev => {
      const newChecks = { ...prev, [taskId]: true }
      const newDone = Object.values(newChecks).filter(Boolean).length
      saveProgress(dateStr, newChecks, notes + (answer ? `\n[${taskId}]: ${answer}` : ''))
        .then(() => setSaved(true))
      if (newDone === totalTasks && totalTasks > 0 && !isBreak) {
        setTimeout(() => { setConfetti(c => c+1); setTimeout(() => setShowSurprise(true), 1400) }, 300)
      }
      return newChecks
    })
    setVerifyTask(null)
  }, [dateStr, notes, totalTasks, isBreak])

  const handleCheck = useCallback((taskId, task) => {
    if (isFuture) return
    if (checks[taskId]) {
      const newChecks = { ...checks, [taskId]: false }
      setChecks(newChecks)
      saveProgress(dateStr, newChecks, notes)
      return
    }
    if (isToday && task.verifyType && task.type !== 'rest') {
      setVerifyTask({ ...task, id: taskId })
    } else {
      confirmCheck(taskId, '')
    }
  }, [checks, isFuture, isToday, dateStr, notes, confirmCheck])

  const handleNotes = (val) => {
    setNotes(val)
    saveProgress(dateStr, checks, val)
  }

  if (loading) {
    return (
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:260, flexDirection:'column', gap:12 }}>
        <div style={{ width:40, height:40, border:'2px solid rgba(255,107,26,0.2)', borderTop:'2px solid #ff6b1a', borderRadius:'50%', animation:'border-spin 0.8s linear infinite' }} />
        <div style={{ fontFamily:'JetBrains Mono', color:'rgba(255,107,26,0.6)', fontSize:12 }}>loading schedule...</div>
      </div>
    )
  }

  if (!schedule) return null

  const phaseColors = ['#6bcb77','#f97316','#6bcb77','#c77dff','#4d96ff','#ffd93d','#ff6b9d']
  const pColor = schedule.phase > 0 ? phaseColors[schedule.phase] : '#6bcb77'
  const dayNum = getDayNumber(dateStr)

  return (
    <div style={{ position:'relative', zIndex:1 }}>
      <ConfettiBurst trigger={confetti} />
      {verifyTask && <VerifyModal task={verifyTask} onConfirm={ans => confirmCheck(verifyTask.id, ans)} onClose={() => setVerifyTask(null)} />}
      {showSurprise && <SurpriseModal surprise={getRandomSurprise(dateStr)} onClose={() => setShowSurprise(false)} />}
      
      {/* ─── HEADER ──────────────────────────────────────── */}
      <div style={{ marginBottom:24 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10, flexWrap:'wrap' }}>
          {schedule.phase > 0 && (
            <span style={{ fontSize:10, fontFamily:'JetBrains Mono', background:`${pColor}18`, border:`1px solid ${pColor}38`, color:pColor, padding:'3px 10px', borderRadius:20, letterSpacing:0.5 }}>
              PHASE {schedule.phase}
            </span>
          )}
          {isBreak && <span style={{ fontSize:10, fontFamily:'JetBrains Mono', background:'rgba(107,203,119,0.14)', border:'1px solid rgba(107,203,119,0.35)', color:'#6bcb77', padding:'3px 10px', borderRadius:20 }}>REST DAY</span>}
          {isToday && (
            <span style={{ fontSize:10, fontFamily:'JetBrains Mono', background:'rgba(255,107,26,0.14)', border:'1px solid rgba(255,107,26,0.35)', color:'#ff6b1a', padding:'3px 10px', borderRadius:20, display:'flex', alignItems:'center', gap:5 }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:'#ff6b1a', display:'inline-block', animation:'pulse-glow 1.5s ease-in-out infinite' }} />
              TODAY
            </span>
          )}
          {isPast && !isToday && <span style={{ fontSize:10, fontFamily:'JetBrains Mono', color:'rgba(255,255,255,0.22)' }}>PAST</span>}
          {isFuture && <span style={{ fontSize:10, fontFamily:'JetBrains Mono', color:'rgba(255,255,255,0.22)' }}>UPCOMING</span>}
          {dayNum > 0 && dayNum <= 262 && (
            <span style={{ fontSize:10, fontFamily:'JetBrains Mono', color:'rgba(255,255,255,0.22)', marginLeft:'auto' }}>Day {dayNum} / 262</span>
          )}
        </div>
        <h1 style={{ fontFamily:'Syne', fontSize:'clamp(20px,4vw,30px)', color:'#fff', margin:'0 0 5px', fontWeight:800, lineHeight:1.2 }}>
          {schedule.title}
        </h1>
        <p style={{ color:'rgba(255,255,255,0.48)', fontSize:13, margin:'0 0 4px', lineHeight:1.65 }}>{schedule.subtitle}</p>
        <p style={{ color:'rgba(255,255,255,0.28)', fontSize:11, margin:0, fontFamily:'JetBrains Mono', letterSpacing:0.3 }}>
          {formatDate(dateStr)}{schedule.hoursAvailable && ` · ⏰ ${schedule.hoursAvailable}`}
        </p>
      </div>

      {/* ─── PROGRESS BAR ────────────────────────────────── */}
      {!isBreak && (
        <div style={{ marginBottom:22 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:7 }}>
            <span style={{ fontSize:11, color:'rgba(255,255,255,0.32)', fontFamily:'JetBrains Mono' }}>{completedTasks} / {totalTasks} tasks</span>
            <div style={{ display:'flex', alignItems:'center', gap:6 }}>
              {allDone && <span style={{ fontSize:11, color:'#ffd93d', fontFamily:'JetBrains Mono', animation:'pulse-glow 1.5s ease-in-out infinite' }}>✨ Complete!</span>}
              <span style={{ fontSize:12, color:pColor, fontFamily:'JetBrains Mono', fontWeight:700 }}>
                {totalTasks > 0 ? Math.round(completedTasks/totalTasks*100) : 0}%
              </span>
            </div>
          </div>
          <div style={{ height:6, background:'rgba(255,255,255,0.05)', borderRadius:3, overflow:'hidden', position:'relative' }}>
            <div style={{
              height:'100%', width:`${totalTasks>0?(completedTasks/totalTasks)*100:0}%`,
              background:`linear-gradient(90deg,${pColor},#ffd93d)`, borderRadius:3,
              transition:'width 0.6s cubic-bezier(0.34,1.56,0.64,1)',
              boxShadow:`0 0 10px ${pColor}77`,
            }} />
          </div>
          <div style={{ display:'flex', gap:5, marginTop:8, flexWrap:'wrap' }}>
            {schedule.tasks?.map((task) => {
              const tc = TYPE_COLORS[task.type] || TYPE_COLORS.build
              return (
                <div key={task.id} title={tc.label} style={{
                  width:10, height:10, borderRadius:'50%',
                  background:checks[task.id] ? tc.text : 'rgba(255,255,255,0.1)',
                  border:`1px solid ${checks[task.id] ? tc.text+'66' : 'rgba(255,255,255,0.08)'}`,
                  transition:'all 0.3s ease',
                  boxShadow:checks[task.id]?`0 0 6px ${tc.text}88`:'none',
                }} />
              )
            })}
          </div>
        </div>
      )}

      {/* ─── QUICK LINKS ─────────────────────────────────── */}
      {!isBreak && (
        <div style={{ display:'flex', gap:7, marginBottom:20, flexWrap:'wrap' }}>
          {[
            { href:NEETCODE_PROFILE, label:'👤 My NeetCode', c:'#ff6b1a', bc:'rgba(255,107,26,0.12)', boc:'rgba(255,107,26,0.28)' },
            { href:NEETCODE_ROADMAP, label:'⚡ NeetCode Map', c:'#ff6b1a', bc:'rgba(255,107,26,0.12)', boc:'rgba(255,107,26,0.28)' },
            { href:SHRADHA_SHEET, label:'📋 Shradha Sheet', c:'#ffd93d', bc:'rgba(255,211,61,0.1)', boc:'rgba(255,211,61,0.28)' },
            { href:LEETCODE_DAILY, label:'💻 LC Daily', c:'#c77dff', bc:'rgba(199,125,255,0.1)', boc:'rgba(199,125,255,0.28)' },
            { href:LEETCODE_PROFILE, label:'👤 My LC', c:'#c77dff', bc:'rgba(199,125,255,0.1)', boc:'rgba(199,125,255,0.28)' },
          ].map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize:11, fontFamily:'JetBrains Mono', background:l.bc, border:`1px solid ${l.boc}`, color:l.c, padding:'5px 12px', borderRadius:20, textDecoration:'none', transition:'all 0.2s', display:'inline-flex', alignItems:'center', gap:3 }}>
              {l.label} ↗
            </a>
          ))}
        </div>
      )}

      {/* ─── TASKS ───────────────────────────────────────── */}
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {schedule.tasks?.map((task, idx) => {
          const tc = TYPE_COLORS[task.type] || TYPE_COLORS.build
          const done = !!checks[task.id]
          return (
            <div key={task.id} className="task-card" style={{
              background: done ? `${tc.text}08` : tc.bg,
              border: `1px solid ${done ? tc.text + '30' : tc.border}`,
              borderRadius:13, padding:'15px 17px',
              display:'flex', gap:13, alignItems:'flex-start',
              opacity: isFuture ? 0.4 : 1,
              cursor: isFuture ? 'not-allowed' : 'default',
              animation: `slide-in 0.3s ${idx * 0.05}s both`,
              boxShadow: done ? `0 0 20px ${tc.text}12` : 'none',
            }}>
              {!isFuture && (
                <input type="checkbox" className="task-checkbox" checked={done}
                  onChange={() => handleCheck(task.id, task)} style={{ marginTop:1 }} />
              )}
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ display:'flex', alignItems:'center', gap:7, marginBottom:7, flexWrap:'wrap' }}>
                  <span style={{ fontSize:10, fontFamily:'JetBrains Mono', color:tc.text, background:`${tc.text}14`, padding:'2px 8px', borderRadius:10, letterSpacing:0.3 }}>
                    {tc.icon} {tc.label}
                  </span>
                  {isToday && task.verifyType && !done && task.type !== 'rest' && (
                    <span style={{ fontSize:10, color:'rgba(255,211,61,0.5)', fontFamily:'JetBrains Mono' }}>🔍 verify on complete</span>
                  )}
                  {done && <span style={{ fontSize:10, color:'#6bcb77', fontFamily:'JetBrains Mono' }}>✓ done</span>}
                </div>
                <p style={{ margin:0, fontSize:14, color: done ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.84)', lineHeight:1.65, textDecoration: done ? 'line-through' : 'none' }}>
                  {task.label}
                </p>
                {(task.link || task.extraLink) && !done && (
                  <div style={{ display:'flex', gap:10, marginTop:9, flexWrap:'wrap' }}>
                    {task.link && (
                      <a href={task.link} target="_blank" rel="noopener noreferrer"
                        style={{ display:'inline-flex', alignItems:'center', gap:4, fontSize:11, color:tc.text, textDecoration:'none', fontFamily:'JetBrains Mono', opacity:0.8, border:`1px solid ${tc.text}25`, padding:'3px 10px', borderRadius:16, background:`${tc.text}08`, transition:'all 0.2s' }}>
                        → Open resource ↗
                      </a>
                    )}
                    {task.extraLink && (
                      <a href={task.extraLink} target="_blank" rel="noopener noreferrer"
                        style={{ display:'inline-flex', alignItems:'center', gap:4, fontSize:11, color:'#ff6b1a', textDecoration:'none', fontFamily:'JetBrains Mono', opacity:0.8, border:'1px solid rgba(255,107,26,0.25)', padding:'3px 10px', borderRadius:16, background:'rgba(255,107,26,0.08)', transition:'all 0.2s' }}>
                        👤 My profile ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* ─── NOTES ───────────────────────────────────────── */}
      {!isFuture && (
        <div style={{ marginTop:24 }}>
          <label style={{ display:'block', fontSize:10, color:'rgba(255,255,255,0.3)', fontFamily:'JetBrains Mono', marginBottom:7, letterSpacing:1 }}>
            📝 DAY NOTES / BLOCKERS
          </label>
          <textarea value={notes} onChange={e => handleNotes(e.target.value)}
            placeholder="What broke? What clicked? What do you need to revisit tomorrow?"
            style={{ minHeight:80 }} />
          {saved && (
            <p style={{ fontSize:10, color:'#6bcb77', fontFamily:'JetBrains Mono', margin:'5px 0 0', letterSpacing:0.5 }}>✓ auto-saved to database</p>
          )}
        </div>
      )}
    </div>
  )
}
