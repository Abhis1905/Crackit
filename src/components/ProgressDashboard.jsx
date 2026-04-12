import { useState, useEffect } from 'react'
import { getAllProgress, getLeetcodeLog, logLeetcode } from '../lib/supabase'
import { getTotalDays, getTodayIST, PHASES } from '../data/schedule'

function StatCard({ label, value, sub, color, glow }) {
  return (
    <div style={{
      background:'rgba(255,255,255,0.03)', border:`1px solid ${color}22`, borderRadius:14, padding:'18px 22px',
      boxShadow: glow ? `0 0 20px ${color}18` : 'none', transition:'all 0.3s',
    }}>
      <div style={{ fontSize:10, color:'rgba(255,255,255,0.3)', fontFamily:'JetBrains Mono', marginBottom:7, letterSpacing:0.5 }}>{label}</div>
      <div style={{ fontSize:30, fontWeight:800, fontFamily:'Syne', color: color || '#fff', lineHeight:1 }}>{value}</div>
      {sub && <div style={{ fontSize:12, color:'rgba(255,255,255,0.32)', marginTop:5 }}>{sub}</div>}
    </div>
  )
}

const PATTERNS = ['Array','Two Pointers','Sliding Window','HashMap','Binary Search','Stack','Queue','Linked List','Trees','BST','Heaps','Graph','BFS','DFS','DP','Greedy','Trie','Backtracking','Intervals','Math']
const DIFFICULTIES = ['Easy','Medium','Hard']

export default function ProgressDashboard() {
  const [progress, setProgress] = useState([])
  const [lcLog, setLcLog] = useState([])
  const [showLcForm, setShowLcForm] = useState(false)
  const [lcForm, setLcForm] = useState({ problem:'', difficulty:'Medium', pattern:'Array', timeTaken:25, approach:'' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    getAllProgress().then(setProgress)
    getLeetcodeLog().then(setLcLog)
  }, [])

  const completedDays = progress.filter(p => Object.values(p.checks||{}).some(Boolean)).length
  const fullyDone = progress.filter(p => { const v=Object.values(p.checks||{}); return v.length>0&&v.every(Boolean) }).length
  
  let streak = 0
  const sorted = [...progress].sort((a,b)=>b.date.localeCompare(a.date))
  for (const p of sorted) { if(Object.values(p.checks||{}).some(Boolean))streak++; else break }

  const totalDays = getTotalDays()
  const pct = Math.round((completedDays/totalDays)*100)
  
  const patterns = lcLog.reduce((acc,p)=>{acc[p.pattern]=(acc[p.pattern]||0)+1;return acc},{})
  const sortedPat = Object.entries(patterns).sort((a,b)=>b[1]-a[1]).slice(0,8)
  
  const diffCounts = {Easy:0,Medium:0,Hard:0}
  lcLog.forEach(p=>{if(diffCounts[p.difficulty]!==undefined)diffCounts[p.difficulty]++})

  const handleSubmit = async () => {
    if(!lcForm.problem.trim()) return
    setSubmitting(true)
    await logLeetcode(lcForm.problem, lcForm.difficulty, lcForm.pattern, lcForm.timeTaken, lcForm.approach)
    setLcLog(await getLeetcodeLog())
    setShowLcForm(false)
    setLcForm({problem:'',difficulty:'Medium',pattern:'Array',timeTaken:25,approach:''})
    setSubmitting(false)
  }

  const totalLC = lcLog.length
  const hardPct = totalLC > 0 ? Math.round(diffCounts.Hard/totalLC*100) : 0

  const phaseData = PHASES.map((p,i) => {
    const pDays = [48,42,56,70,45,31][i]
    const done = Math.min(progress.filter(pr => {
      const pd = ['2026-04-14','2026-06-02','2026-07-14','2026-09-08','2026-11-17','2027-01-01'][i]
      const pe = ['2026-06-01','2026-07-13','2026-09-07','2026-11-16','2026-12-31','2027-01-31'][i]
      return pr.date >= pd && pr.date <= pe && Object.values(pr.checks||{}).some(Boolean)
    }).length, pDays)
    return { ...p, total:pDays, done }
  })

  return (
    <div style={{ position:'relative', zIndex:1 }}>
      <h2 style={{ fontFamily:'Syne', fontSize:24, color:'#fff', margin:'0 0 4px', fontWeight:800 }}>📊 Progress Dashboard</h2>
      <p style={{ color:'rgba(255,255,255,0.38)', fontSize:13, margin:'0 0 24px' }}>Your battle stats. Honest numbers only.</p>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:12, marginBottom:28 }}>
        <StatCard label="STREAK" value={`${streak}🔥`} sub="consecutive days" color="#ff6b1a" glow />
        <StatCard label="DAYS ACTIVE" value={completedDays} sub={`of ${totalDays} total`} color="#c77dff" />
        <StatCard label="FULL DAYS ✓" value={fullyDone} sub="all tasks done" color="#6bcb77" />
        <StatCard label="OVERALL" value={`${pct}%`} sub="program progress" color="#ffd93d" glow />
        <StatCard label="LC SOLVED" value={totalLC} sub={`${hardPct}% Hard`} color="#4d96ff" />
        <StatCard label="HARD" value={diffCounts.Hard} sub={`${diffCounts.Medium} Medium`} color="#ff6b9d" />
      </div>

      <div style={{ marginBottom:28 }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
          <span style={{ fontFamily:'Syne', fontSize:14, color:'#fff', fontWeight:700 }}>Overall Journey</span>
          <span style={{ fontFamily:'JetBrains Mono', fontSize:13, color:'#ffd93d' }}>{pct}%</span>
        </div>
        <div style={{ height:10, background:'rgba(255,255,255,0.06)', borderRadius:5, overflow:'hidden' }}>
          <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg,#ff6b1a,#ffd93d,#ff6b9d)', borderRadius:5, transition:'width 0.8s ease', boxShadow:'0 0 14px rgba(255,107,26,0.5)' }} />
        </div>
      </div>

      <div style={{ marginBottom:28 }}>
        <div style={{ fontFamily:'JetBrains Mono', fontSize:10, color:'rgba(255,255,255,0.25)', marginBottom:14, letterSpacing:1 }}>PHASE BREAKDOWN</div>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {phaseData.map(p => {
            const ppct = p.total > 0 ? Math.round(p.done/p.total*100) : 0
            return (
              <div key={p.id} style={{ background:'rgba(255,255,255,0.02)', border:`1px solid ${p.color}22`, borderRadius:12, padding:'12px 16px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
                  <span style={{ fontFamily:'Syne', fontSize:13, color:'rgba(255,255,255,0.7)', fontWeight:600 }}>
                    {p.icon} Phase {p.id}: {p.name}
                  </span>
                  <span style={{ fontFamily:'JetBrains Mono', fontSize:11, color:p.color }}>{p.done}/{p.total} days · {ppct}%</span>
                </div>
                <div style={{ height:5, background:'rgba(255,255,255,0.05)', borderRadius:3, overflow:'hidden' }}>
                  <div style={{ height:'100%', width:`${ppct}%`, background:`linear-gradient(90deg,${p.color},${p.color}99)`, borderRadius:3, transition:'width 0.6s ease', boxShadow:`0 0 8px ${p.color}55` }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ marginBottom:28 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
          <div style={{ fontFamily:'JetBrains Mono', fontSize:10, color:'rgba(255,255,255,0.25)', letterSpacing:1 }}>LEETCODE LOG ({totalLC} PROBLEMS)</div>
          <button onClick={() => setShowLcForm(!showLcForm)}
            style={{ fontSize:11, background:'rgba(255,107,26,0.12)', border:'1px solid rgba(255,107,26,0.28)', color:'#ff6b1a', padding:'5px 13px', borderRadius:18, cursor:'pointer', fontFamily:'JetBrains Mono', transition:'all 0.2s' }}>
            {showLcForm ? '✕ Cancel' : '+ Log Problem'}
          </button>
        </div>

        {showLcForm && (
          <div className="float-anim" style={{ background:'rgba(255,107,26,0.06)', border:'1px solid rgba(255,107,26,0.2)', borderRadius:13, padding:'18px 20px', marginBottom:16 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:10 }}>
              <div>
                <label style={{ fontSize:10, color:'rgba(255,255,255,0.3)', fontFamily:'JetBrains Mono', display:'block', marginBottom:5 }}>PROBLEM NAME / #</label>
                <input type="text" value={lcForm.problem} onChange={e=>setLcForm(f=>({...f,problem:e.target.value}))} placeholder="e.g. Two Sum" />
              </div>
              <div>
                <label style={{ fontSize:10, color:'rgba(255,255,255,0.3)', fontFamily:'JetBrains Mono', display:'block', marginBottom:5 }}>TIME (minutes)</label>
                <input type="number" value={lcForm.timeTaken} onChange={e=>setLcForm(f=>({...f,timeTaken:Number(e.target.value)}))} min={1} max={120} />
              </div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:10 }}>
              <div>
                <label style={{ fontSize:10, color:'rgba(255,255,255,0.3)', fontFamily:'JetBrains Mono', display:'block', marginBottom:5 }}>DIFFICULTY</label>
                <select value={lcForm.difficulty} onChange={e=>setLcForm(f=>({...f,difficulty:e.target.value}))}>
                  {DIFFICULTIES.map(d=><option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize:10, color:'rgba(255,255,255,0.3)', fontFamily:'JetBrains Mono', display:'block', marginBottom:5 }}>PATTERN</label>
                <select value={lcForm.pattern} onChange={e=>setLcForm(f=>({...f,pattern:e.target.value}))}>
                  {PATTERNS.map(p=><option key={p}>{p}</option>)}
                </select>
              </div>
            </div>
            <div style={{ marginBottom:12 }}>
              <label style={{ fontSize:10, color:'rgba(255,255,255,0.3)', fontFamily:'JetBrains Mono', display:'block', marginBottom:5 }}>APPROACH / KEY INSIGHT</label>
              <textarea value={lcForm.approach} onChange={e=>setLcForm(f=>({...f,approach:e.target.value}))} placeholder="What was the key insight?" style={{ minHeight:60 }} />
            </div>
            <button onClick={handleSubmit} disabled={!lcForm.problem.trim()||submitting}
              style={{ padding:'10px 24px', background: lcForm.problem.trim()&&!submitting ? 'linear-gradient(135deg,#ff6b1a,#ffd93d)' : 'rgba(255,255,255,0.05)', border:'none', borderRadius:10, color: lcForm.problem.trim()&&!submitting ? '#000' : 'rgba(255,255,255,0.3)', fontFamily:'Syne', fontWeight:700, fontSize:14, cursor: lcForm.problem.trim()&&!submitting ? 'pointer' : 'not-allowed', transition:'all 0.2s' }}>
              {submitting ? 'Saving...' : '⚡ Log Problem'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
