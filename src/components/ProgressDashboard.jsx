import { useState, useEffect } from 'react'
import { getAllProgress, getLeetcodeLog, logLeetcode } from '../lib/supabase'
import { getTotalDays, getTodayIST, PHASES } from '../data/schedule'

function StatCard({ label, value, sub, color }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '16px 20px' }}>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'Syne', color: color || '#fff', lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{sub}</div>}
    </div>
  )
}

export default function ProgressDashboard() {
  const [progress, setProgress] = useState([])
  const [lcLog, setLcLog] = useState([])
  const [showLcForm, setShowLcForm] = useState(false)
  const [lcForm, setLcForm] = useState({ problem: '', difficulty: 'Medium', pattern: 'Array', timeTaken: 25, approach: '' })

  useEffect(() => {
    getAllProgress().then(setProgress)
    getLeetcodeLog().then(setLcLog)
  }, [])

  const completedDays = progress.filter(p => {
    const checks = p.checks || {}
    return Object.values(checks).some(Boolean)
  }).length

  const fullyCompletedDays = progress.filter(p => {
    const checks = p.checks || {}
    const vals = Object.values(checks)
    return vals.length > 0 && vals.every(Boolean)
  }).length

  // Streak calculation
  let streak = 0
  const today = getTodayIST()
  const sortedProgress = [...progress].sort((a, b) => b.date.localeCompare(a.date))
  for (const p of sortedProgress) {
    const checks = p.checks || {}
    if (Object.values(checks).some(Boolean)) streak++
    else break
  }

  const totalDays = getTotalDays()
  const overallPct = Math.round((completedDays / totalDays) * 100)

  const patterns = lcLog.reduce((acc, p) => { acc[p.pattern] = (acc[p.pattern] || 0) + 1; return acc }, {})
  const sortedPatterns = Object.entries(patterns).sort((a, b) => b[1] - a[1])

  const diffCounts = { Easy: 0, Medium: 0, Hard: 0 }
  lcLog.forEach(p => { if (diffCounts[p.difficulty] !== undefined) diffCounts[p.difficulty]++ })

  const handleLcSubmit = async () => {
    await logLeetcode(lcForm.problem, lcForm.difficulty, lcForm.pattern, lcForm.timeTaken, lcForm.approach)
    setLcLog(await getLeetcodeLog())
    setShowLcForm(false)
    setLcForm({ problem: '', difficulty: 'Medium', pattern: 'Array', timeTaken: 25, approach: '' })
  }

  const PATTERNS = ['Array','Two Pointer','Sliding Window','HashMap','Stack','Queue','Linked List','Binary Tree','Graph','DP','Backtracking','Greedy','Binary Search','Heap']
  const DIFFICULTIES = ['Easy','Medium','Hard']

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <h2 style={{ fontFamily: 'Syne', fontSize: 24, color: '#fff', margin: '0 0 24px', fontWeight: 800 }}>
        📊 Your Progress
      </h2>

      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 28 }}>
        <StatCard label="DAYS ACTIVE" value={completedDays} sub={`/ ${totalDays} total`} color="#ff6b1a" />
        <StatCard label="FULLY CRUSHED" value={fullyCompletedDays} sub="all tasks done" color="#ffd93d" />
        <StatCard label="CURRENT STREAK" value={`${streak}🔥`} sub="consecutive days" color="#ff6b1a" />
        <StatCard label="LC SOLVED" value={lcLog.length} sub={`E:${diffCounts.Easy} M:${diffCounts.Medium} H:${diffCounts.Hard}`} color="#c77dff" />
        <StatCard label="OVERALL" value={`${overallPct}%`} sub="of 8-month plan" color="#6bcb77" />
      </div>

      {/* Overall progress bar */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono' }}>8-month journey</span>
          <span style={{ fontSize: 12, color: '#ff6b1a', fontFamily: 'JetBrains Mono' }}>Day {completedDays} of {totalDays}</span>
        </div>
        <div style={{ height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${overallPct}%`, background: 'linear-gradient(90deg, #ff6b1a, #ffd93d, #c77dff)', borderRadius: 4, transition: 'width 1s ease', boxShadow: '0 0 15px rgba(255,107,26,0.4)' }} />
        </div>
      </div>

      {/* Phase progress */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontFamily: 'Syne', fontSize: 16, color: 'rgba(255,255,255,0.7)', margin: '0 0 14px' }}>Phase Breakdown</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {PHASES.map(phase => {
            const phaseDays = progress.filter(p => {
              const s = p.date
              // rough phase check by position
              return true
            }).length
            return (
              <div key={phase.id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 14, minWidth: 28 }}>{phase.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Phase {phase.id}: {phase.name}</span>
                    <span style={{ fontSize: 11, color: phase.color, fontFamily: 'JetBrains Mono' }}>{phase.dates}</span>
                  </div>
                  <div style={{ height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
                    <div style={{ height: '100%', width: '0%', background: phase.color, borderRadius: 2 }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* LeetCode tracker */}
      <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontFamily: 'Syne', fontSize: 16, color: '#c77dff', margin: 0 }}>⚡ LeetCode Log</h3>
          <button
            onClick={() => setShowLcForm(!showLcForm)}
            style={{ padding: '6px 14px', background: 'rgba(199,125,255,0.15)', border: '1px solid rgba(199,125,255,0.3)', borderRadius: 20, color: '#c77dff', cursor: 'pointer', fontFamily: 'Syne', fontSize: 12 }}
          >
            + Log Problem
          </button>
        </div>

        {showLcForm && (
          <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 16, marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <input type="text" value={lcForm.problem} onChange={e => setLcForm({ ...lcForm, problem: e.target.value })} placeholder="Problem name / number (e.g. 'Two Sum #1')" style={{ width: '100%', boxSizing: 'border-box' }} />
            <div style={{ display: 'flex', gap: 8 }}>
              {DIFFICULTIES.map(d => (
                <button key={d} onClick={() => setLcForm({ ...lcForm, difficulty: d })}
                  style={{ flex: 1, padding: '6px 0', border: '1px solid', borderColor: lcForm.difficulty === d ? (d==='Easy'?'#6bcb77':d==='Medium'?'#ffd93d':'#ff6b1a') : 'rgba(255,255,255,0.1)', background: lcForm.difficulty === d ? 'rgba(255,107,26,0.1)' : 'transparent', color: lcForm.difficulty === d ? '#fff' : 'rgba(255,255,255,0.4)', borderRadius: 8, cursor: 'pointer', fontFamily: 'DM Sans', fontSize: 12 }}>
                  {d}
                </button>
              ))}
            </div>
            <select value={lcForm.pattern} onChange={e => setLcForm({ ...lcForm, pattern: e.target.value })}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e8e6e0', borderRadius: 8, padding: '8px 12px', fontFamily: 'DM Sans', fontSize: 14 }}>
              {PATTERNS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>Time: {lcForm.timeTaken} min</span>
              <input type="range" min="5" max="90" value={lcForm.timeTaken} onChange={e => setLcForm({ ...lcForm, timeTaken: Number(e.target.value) })}
                style={{ flex: 1, accentColor: '#c77dff' }} />
            </div>
            <textarea value={lcForm.approach} onChange={e => setLcForm({ ...lcForm, approach: e.target.value })} placeholder="Your approach / pattern you used (required)" style={{ width: '100%', minHeight: 60, resize: 'vertical', boxSizing: 'border-box' }} />
            <button onClick={handleLcSubmit} disabled={!lcForm.problem || !lcForm.approach}
              style={{ padding: '10px 0', background: lcForm.problem && lcForm.approach ? 'linear-gradient(135deg, #c77dff, #4d96ff)' : 'rgba(255,255,255,0.05)', border: 'none', borderRadius: 8, color: lcForm.problem && lcForm.approach ? '#fff' : 'rgba(255,255,255,0.2)', cursor: lcForm.problem && lcForm.approach ? 'pointer' : 'not-allowed', fontFamily: 'Syne', fontWeight: 700 }}>
              Save Problem
            </button>
          </div>
        )}

        {/* Pattern breakdown */}
        {sortedPatterns.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono', marginBottom: 10 }}>PATTERN BREAKDOWN</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {sortedPatterns.map(([pat, count]) => (
                <span key={pat} style={{ fontSize: 11, background: 'rgba(199,125,255,0.1)', border: '1px solid rgba(199,125,255,0.2)', color: '#c77dff', padding: '3px 10px', borderRadius: 20, fontFamily: 'JetBrains Mono' }}>
                  {pat}: {count}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Recent LC */}
        {lcLog.length > 0 && (
          <div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono', marginBottom: 10 }}>RECENT SOLVES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {lcLog.slice(0, 8).map(p => (
                <div key={p.id} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: p.difficulty==='Easy'?'#6bcb77':p.difficulty==='Hard'?'#ff6b1a':'#ffd93d', minWidth: 50 }}>{p.difficulty}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', flex: 1 }}>{p.problem}</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono' }}>{p.time_taken}m</span>
                  <span style={{ fontSize: 10, background: 'rgba(199,125,255,0.1)', color: '#c77dff', padding: '2px 8px', borderRadius: 10 }}>{p.pattern}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
