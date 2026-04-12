import { useState, useEffect, useCallback } from 'react'
import {
  getScheduleForDate, getTodayIST, formatDate, getDayNumber,
  isDatePast, isDateToday, isDateFuture, getRandomSurprise, getVerifyChallenge, NEETCODE_ROADMAP, DSA_SHEET
} from '../data/schedule'
import { getProgress, saveProgress } from '../lib/supabase'
import ConfettiBurst from './ConfettiBurst'

const TYPE_COLORS = {
  lecture:     { bg: 'rgba(77,150,255,0.1)',   border: 'rgba(77,150,255,0.3)',   text: '#4d96ff',  icon: '📺', label: 'LECTURE' },
  leetcode:    { bg: 'rgba(255,107,26,0.1)',   border: 'rgba(255,107,26,0.3)',   text: '#ff6b1a',  icon: '⚡', label: 'LEETCODE' },
  sheet:       { bg: 'rgba(255,211,61,0.1)',   border: 'rgba(255,211,61,0.3)',   text: '#ffd93d',  icon: '📋', label: 'SHEET' },
  aptitude:    { bg: 'rgba(107,203,119,0.1)',  border: 'rgba(107,203,119,0.3)',  text: '#6bcb77',  icon: '🧮', label: 'APTITUDE' },
  build:       { bg: 'rgba(199,125,255,0.1)',  border: 'rgba(199,125,255,0.3)',  text: '#c77dff',  icon: '🔨', label: 'BUILD' },
  recall:      { bg: 'rgba(255,107,157,0.1)',  border: 'rgba(255,107,157,0.3)',  text: '#ff6b9d',  icon: '🧠', label: 'RECALL' },
  communication: { bg: 'rgba(255,211,61,0.1)', border: 'rgba(255,211,61,0.3)', text: '#ffd93d',  icon: '🎤', label: 'COMM' },
  rest:        { bg: 'rgba(107,203,119,0.1)',  border: 'rgba(107,203,119,0.3)',  text: '#6bcb77',  icon: '🌿', label: 'REST' },
}

function VerifyModal({ task, onConfirm, onClose }) {
  const [answer, setAnswer] = useState('')
  const challenge = getVerifyChallenge(task.verifyType)

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 24 }}>
      <div style={{ background: '#151520', border: '1px solid rgba(255,107,26,0.3)', borderRadius: 16, padding: 28, maxWidth: 480, width: '100%', boxShadow: '0 0 60px rgba(255,107,26,0.2)' }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>🔍</div>
        <h3 style={{ fontFamily: 'Syne', fontSize: 18, color: '#ff6b1a', margin: '0 0 8px' }}>Prove It.</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>
          Your tutor doesn't accept checkbox clicks without proof. Answer this:
        </p>
        <div style={{ background: 'rgba(255,107,26,0.08)', border: '1px solid rgba(255,107,26,0.2)', borderRadius: 10, padding: '12px 16px', marginBottom: 16, fontSize: 14, color: '#ffd93d', lineHeight: 1.6 }}>
          {challenge || "What did you actually do and what output did you get?"}
        </div>
        <textarea
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          placeholder="Be specific. Vague answers don't count."
          style={{ width: '100%', minHeight: 90, resize: 'vertical', marginBottom: 16, boxSizing: 'border-box' }}
        />
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={onClose}
            style={{ flex: 1, padding: '10px 0', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontFamily: 'DM Sans' }}
          >
            Not yet
          </button>
          <button
            onClick={() => onConfirm(answer)}
            disabled={answer.trim().length < 5}
            style={{ flex: 2, padding: '10px 0', background: answer.trim().length >= 5 ? 'linear-gradient(135deg, #ff6b1a, #ffd93d)' : 'rgba(255,255,255,0.05)', border: 'none', borderRadius: 8, color: answer.trim().length >= 5 ? '#000' : 'rgba(255,255,255,0.2)', cursor: answer.trim().length >= 5 ? 'pointer' : 'not-allowed', fontFamily: 'Syne', fontWeight: 700, fontSize: 14 }}
          >
            ✓ Mark Complete
          </button>
        </div>
      </div>
    </div>
  )
}

function SurpriseModal({ surprise, onClose }) {
  const icons = { meal: '🍕', quote: '💬', flex: '💪' }
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001, padding: 24 }}>
      <div className="surprise-card" style={{ background: 'linear-gradient(135deg, #1a0a2e, #0a1a2e)', border: '1px solid rgba(199,125,255,0.5)', borderRadius: 20, padding: 36, maxWidth: 420, width: '100%', textAlign: 'center', boxShadow: '0 0 80px rgba(199,125,255,0.3)' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>{icons[surprise.type] || '🎁'}</div>
        <h2 style={{ fontFamily: 'Syne', fontSize: 22, color: '#ffd93d', margin: '0 0 16px' }}>
          FULL DAY CRUSHED. 🔥
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 28 }}>
          {surprise.content}
        </p>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 20, fontFamily: 'JetBrains Mono' }}>
          day complete · progress saved · streak updated
        </div>
        <button
          onClick={onClose}
          style={{ padding: '12px 32px', background: 'linear-gradient(135deg, #c77dff, #ff6b9d)', border: 'none', borderRadius: 30, color: '#fff', fontFamily: 'Syne', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}
        >
          Let's go. Tomorrow too. 🚀
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

  useEffect(() => {
    const s = getScheduleForDate(dateStr)
    setSchedule(s)
    getProgress(dateStr).then(data => {
      if (data) {
        setChecks(data.checks || {})
        setNotes(data.notes || '')
      }
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [dateStr])

  const totalTasks = schedule?.tasks?.length || 0
  const completedTasks = Object.values(checks).filter(Boolean).length
  const allDone = totalTasks > 0 && completedTasks === totalTasks

  const handleCheck = useCallback((taskId, task) => {
    if (isFuture) return
    if (checks[taskId]) {
      // Uncheck is fine
      const newChecks = { ...checks, [taskId]: false }
      setChecks(newChecks)
      saveProgress(dateStr, newChecks, notes)
      return
    }
    // Verify before checking — only for today
    if (isToday && task.verifyType) {
      setVerifyTask({ ...task, id: taskId })
    } else {
      confirmCheck(taskId, '')
    }
  }, [checks, isFuture, isToday, dateStr, notes])

  const confirmCheck = useCallback((taskId, answer) => {
    const newChecks = { ...checks, [taskId]: true }
    setChecks(newChecks)
    setVerifyTask(null)
    const newCompleted = Object.values(newChecks).filter(Boolean).length
    saveProgress(dateStr, newChecks, notes + (answer ? `\n[${taskId}]: ${answer}` : '')).then(() => setSaved(true))

    if (newCompleted === totalTasks && totalTasks > 0) {
      setTimeout(() => {
        setConfetti(c => c + 1)
        setTimeout(() => setShowSurprise(true), 1500)
      }, 300)
    }
  }, [checks, dateStr, notes, totalTasks])

  const handleNotes = (val) => {
    setNotes(val)
    saveProgress(dateStr, checks, val)
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 300 }}>
        <div style={{ fontFamily: 'JetBrains Mono', color: '#ff6b1a', fontSize: 13 }}>loading schedule...</div>
      </div>
    )
  }

  if (!schedule) return null

  const phaseColors = ['#f97316','#6bcb77','#c77dff','#4d96ff','#ffd93d','#ff6b9d']
  const pColor = schedule.phase > 0 ? phaseColors[schedule.phase - 1] : '#6bcb77'

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <ConfettiBurst trigger={confetti} />
      {verifyTask && <VerifyModal task={verifyTask} onConfirm={(ans) => confirmCheck(verifyTask.id, ans)} onClose={() => setVerifyTask(null)} />}
      {showSurprise && <SurpriseModal surprise={getRandomSurprise(dateStr)} onClose={() => setShowSurprise(false)} />}

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
          {schedule.phase > 0 && (
            <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', background: `${pColor}20`, border: `1px solid ${pColor}40`, color: pColor, padding: '3px 10px', borderRadius: 20 }}>
              PHASE {schedule.phase}
            </span>
          )}
          {isToday && (
            <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', background: 'rgba(255,107,26,0.15)', border: '1px solid rgba(255,107,26,0.4)', color: '#ff6b1a', padding: '3px 10px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff6b1a', display: 'inline-block', animation: 'pulse-glow 1.5s ease-in-out infinite' }} />
              TODAY
            </span>
          )}
          {isPast && <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: 'rgba(255,255,255,0.3)' }}>PAST</span>}
          {isFuture && <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: 'rgba(255,255,255,0.3)' }}>UPCOMING</span>}
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono', marginLeft: 'auto' }}>
            {schedule.hoursAvailable && `⏰ ${schedule.hoursAvailable}`}
          </span>
        </div>
        <h1 style={{ fontFamily: 'Syne', fontSize: 'clamp(22px, 4vw, 32px)', color: '#fff', margin: '0 0 4px', fontWeight: 800, lineHeight: 1.2 }}>
          {schedule.isBreak ? '🌿' : '🔥'} {schedule.title}
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, margin: 0, lineHeight: 1.6 }}>
          {schedule.subtitle}
        </p>
      </div>

      {/* Progress bar */}
      {!schedule.isBreak && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono' }}>
              {completedTasks}/{totalTasks} tasks
            </span>
            <span style={{ fontSize: 12, color: pColor, fontFamily: 'JetBrains Mono' }}>
              {totalTasks > 0 ? Math.round(completedTasks / totalTasks * 100) : 0}%
            </span>
          </div>
          <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0}%`,
              background: `linear-gradient(90deg, ${pColor}, #ffd93d)`,
              borderRadius: 3,
              transition: 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: `0 0 10px ${pColor}60`,
            }} />
          </div>
          {allDone && (
            <div style={{ textAlign: 'center', marginTop: 12, fontFamily: 'Syne', fontSize: 13, color: '#ffd93d', textShadow: '0 0 20px rgba(255,211,61,0.6)' }}>
              ✨ All tasks complete! You crushed it.
            </div>
          )}
        </div>
      )}

      {/* Quick links */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <a href={NEETCODE_ROADMAP} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 11, fontFamily: 'JetBrains Mono', background: 'rgba(255,107,26,0.1)', border: '1px solid rgba(255,107,26,0.3)', color: '#ff6b1a', padding: '5px 12px', borderRadius: 20, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
          ⚡ NeetCode Roadmap
        </a>
        <a href={DSA_SHEET} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 11, fontFamily: 'JetBrains Mono', background: 'rgba(255,211,61,0.1)', border: '1px solid rgba(255,211,61,0.3)', color: '#ffd93d', padding: '5px 12px', borderRadius: 20, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
          📋 Striver A2Z Sheet
        </a>
        <a href="https://leetcode.com/problemset/" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 11, fontFamily: 'JetBrains Mono', background: 'rgba(199,125,255,0.1)', border: '1px solid rgba(199,125,255,0.3)', color: '#c77dff', padding: '5px 12px', borderRadius: 20, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
          🔗 LeetCode Daily
        </a>
      </div>

      {/* Tasks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {schedule.tasks?.map((task, i) => {
          const tc = TYPE_COLORS[task.type] || TYPE_COLORS.build
          const done = !!checks[task.id]
          return (
            <div
              key={task.id}
              style={{
                background: done ? 'rgba(255,107,26,0.06)' : tc.bg,
                border: `1px solid ${done ? 'rgba(255,107,26,0.3)' : tc.border}`,
                borderRadius: 12,
                padding: '14px 16px',
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
                opacity: isFuture ? 0.5 : 1,
                transition: 'all 0.3s ease',
                cursor: isFuture ? 'not-allowed' : 'default',
              }}
            >
              {!isFuture && (
                <input
                  type="checkbox"
                  className="task-checkbox"
                  checked={done}
                  onChange={() => handleCheck(task.id, task)}
                  style={{ marginTop: 1 }}
                />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: tc.text, background: `${tc.text}15`, padding: '2px 8px', borderRadius: 10 }}>
                    {tc.icon} {tc.label}
                  </span>
                  {isToday && task.verifyType && !done && (
                    <span style={{ fontSize: 10, color: 'rgba(255,211,61,0.6)', fontFamily: 'JetBrains Mono' }}>
                      🔍 verification required
                    </span>
                  )}
                  {done && <span style={{ fontSize: 10, color: '#6bcb77', fontFamily: 'JetBrains Mono' }}>✓ verified</span>}
                </div>
                <p style={{ margin: 0, fontSize: 14, color: done ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.85)', lineHeight: 1.6, textDecoration: done ? 'line-through' : 'none' }}>
                  {task.label}
                </p>
                {task.link && !done && (
                  <a href={task.link} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 8, fontSize: 11, color: tc.text, textDecoration: 'none', fontFamily: 'JetBrains Mono', opacity: 0.8 }}>
                    → Open resource ↗
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Notes */}
      {!isFuture && (
        <div style={{ marginTop: 24 }}>
          <label style={{ display: 'block', fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono', marginBottom: 8 }}>
            📝 DAY NOTES / BLOCKERS
          </label>
          <textarea
            value={notes}
            onChange={e => handleNotes(e.target.value)}
            placeholder="What broke? What clicked? What do you need to revisit?"
            style={{ width: '100%', minHeight: 80, resize: 'vertical', boxSizing: 'border-box' }}
          />
          {saved && <p style={{ fontSize: 11, color: '#6bcb77', fontFamily: 'JetBrains Mono', margin: '6px 0 0' }}>✓ auto-saved</p>}
        </div>
      )}
    </div>
  )
}
