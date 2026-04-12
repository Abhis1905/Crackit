#!/bin/bash
# Run from inside crackit-prep/ directory

# ── src/components/ProgressDashboard.jsx ────────────────────
cat > src/components/ProgressDashboard.jsx << 'PROGRESS'
import { useState, useEffect } from 'react'
import { getAllProgress, getLeetcodeLog, logLeetcode } from '../lib/supabase'
import { getTotalDays, PHASES } from '../data/schedule'

function StatCard({label,value,sub,color}){return(<div style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.07)',borderRadius:12,padding:'16px 20px'}}><div style={{fontSize:11,color:'rgba(255,255,255,.35)',fontFamily:'JetBrains Mono',marginBottom:6}}>{label}</div><div style={{fontSize:28,fontWeight:700,fontFamily:'Syne',color:color||'#fff',lineHeight:1}}>{value}</div>{sub&&<div style={{fontSize:12,color:'rgba(255,255,255,.35)',marginTop:4}}>{sub}</div>}</div>)}

export default function ProgressDashboard(){
  const [progress,setProgress]=useState([])
  const [lcLog,setLcLog]=useState([])
  const [showForm,setShowForm]=useState(false)
  const [f,setF]=useState({problem:'',difficulty:'Medium',pattern:'Array',timeTaken:25,approach:''})

  useEffect(()=>{getAllProgress().then(setProgress);getLeetcodeLog().then(setLcLog)},[])

  const completedDays=progress.filter(p=>Object.values(p.checks||{}).some(Boolean)).length
  const fullDays=progress.filter(p=>{const v=Object.values(p.checks||{});return v.length>0&&v.every(Boolean)}).length
  let streak=0
  const sorted=[...progress].sort((a,b)=>b.date.localeCompare(a.date))
  for(const p of sorted){if(Object.values(p.checks||{}).some(Boolean))streak++;else break}
  const totalDays=getTotalDays()
  const pct=Math.round(completedDays/totalDays*100)
  const patterns=lcLog.reduce((a,p)=>{a[p.pattern]=(a[p.pattern]||0)+1;return a},{})
  const sortedP=Object.entries(patterns).sort((a,b)=>b[1]-a[1])
  const diff={Easy:0,Medium:0,Hard:0}
  lcLog.forEach(p=>{if(diff[p.difficulty]!==undefined)diff[p.difficulty]++})

  const submit=async()=>{await logLeetcode(f.problem,f.difficulty,f.pattern,f.timeTaken,f.approach);setLcLog(await getLeetcodeLog());setShowForm(false);setF({problem:'',difficulty:'Medium',pattern:'Array',timeTaken:25,approach:''})}
  const PATS=['Array','Two Pointer','Sliding Window','HashMap','Stack','Queue','Linked List','Binary Tree','Graph','DP','Backtracking','Greedy','Binary Search','Heap']

  return(
    <div style={{position:'relative',zIndex:1}}>
      <h2 style={{fontFamily:'Syne',fontSize:24,color:'#fff',margin:'0 0 24px',fontWeight:800}}>📊 Your Progress</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))',gap:12,marginBottom:28}}>
        <StatCard label="DAYS ACTIVE" value={completedDays} sub={`/ ${totalDays} total`} color="#ff6b1a" />
        <StatCard label="FULLY CRUSHED" value={fullDays} sub="all tasks done" color="#ffd93d" />
        <StatCard label="STREAK" value={`${streak}🔥`} sub="consecutive" color="#ff6b1a" />
        <StatCard label="LC SOLVED" value={lcLog.length} sub={`E:${diff.Easy} M:${diff.Medium} H:${diff.Hard}`} color="#c77dff" />
        <StatCard label="OVERALL" value={`${pct}%`} sub="of 8-month plan" color="#6bcb77" />
      </div>

      <div style={{marginBottom:28}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
          <span style={{fontSize:12,color:'rgba(255,255,255,.4)',fontFamily:'JetBrains Mono'}}>8-month journey</span>
          <span style={{fontSize:12,color:'#ff6b1a',fontFamily:'JetBrains Mono'}}>Day {completedDays} of {totalDays}</span>
        </div>
        <div style={{height:8,background:'rgba(255,255,255,.06)',borderRadius:4,overflow:'hidden'}}>
          <div style={{height:'100%',width:`${pct}%`,background:'linear-gradient(90deg,#ff6b1a,#ffd93d,#c77dff)',borderRadius:4,transition:'width 1s ease',boxShadow:'0 0 15px rgba(255,107,26,.4)'}} />
        </div>
      </div>

      <div style={{background:'rgba(255,255,255,.02)',border:'1px solid rgba(255,255,255,.07)',borderRadius:14,padding:20}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
          <h3 style={{fontFamily:'Syne',fontSize:16,color:'#c77dff',margin:0}}>⚡ LeetCode Log</h3>
          <button onClick={()=>setShowForm(!showForm)} style={{padding:'6px 14px',background:'rgba(199,125,255,.15)',border:'1px solid rgba(199,125,255,.3)',borderRadius:20,color:'#c77dff',cursor:'pointer',fontFamily:'Syne',fontSize:12}}>+ Log Problem</button>
        </div>

        {showForm&&(
          <div style={{background:'rgba(0,0,0,.3)',borderRadius:10,padding:16,marginBottom:16,display:'flex',flexDirection:'column',gap:10}}>
            <input type="text" value={f.problem} onChange={e=>setF({...f,problem:e.target.value})} placeholder="Problem name / number (e.g. 'Two Sum #1')" style={{width:'100%',boxSizing:'border-box'}} />
            <div style={{display:'flex',gap:8}}>
              {['Easy','Medium','Hard'].map(d=><button key={d} onClick={()=>setF({...f,difficulty:d})} style={{flex:1,padding:'6px 0',border:'1px solid',borderColor:f.difficulty===d?(d==='Easy'?'#6bcb77':d==='Medium'?'#ffd93d':'#ff6b1a'):'rgba(255,255,255,.1)',background:f.difficulty===d?'rgba(255,107,26,.1)':'transparent',color:f.difficulty===d?'#fff':'rgba(255,255,255,.4)',borderRadius:8,cursor:'pointer',fontFamily:'DM Sans',fontSize:12}}>{d}</button>)}
            </div>
            <select value={f.pattern} onChange={e=>setF({...f,pattern:e.target.value})} style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',color:'#e8e6e0',borderRadius:8,padding:'8px 12px',fontFamily:'DM Sans',fontSize:14}}>
              {PATS.map(p=><option key={p} value={p}>{p}</option>)}
            </select>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <span style={{fontSize:12,color:'rgba(255,255,255,.4)',whiteSpace:'nowrap'}}>Time: {f.timeTaken}m</span>
              <input type="range" min="5" max="90" value={f.timeTaken} onChange={e=>setF({...f,timeTaken:Number(e.target.value)})} style={{flex:1,accentColor:'#c77dff'}} />
            </div>
            <textarea value={f.approach} onChange={e=>setF({...f,approach:e.target.value})} placeholder="Your approach / pattern used (required)" style={{width:'100%',minHeight:60,resize:'vertical',boxSizing:'border-box'}} />
            <button onClick={submit} disabled={!f.problem||!f.approach} style={{padding:'10px 0',background:f.problem&&f.approach?'linear-gradient(135deg,#c77dff,#4d96ff)':'rgba(255,255,255,.05)',border:'none',borderRadius:8,color:f.problem&&f.approach?'#fff':'rgba(255,255,255,.2)',cursor:f.problem&&f.approach?'pointer':'not-allowed',fontFamily:'Syne',fontWeight:700}}>Save Problem</button>
          </div>
        )}

        {sortedP.length>0&&(
          <div style={{marginBottom:16}}>
            <div style={{fontSize:12,color:'rgba(255,255,255,.3)',fontFamily:'JetBrains Mono',marginBottom:10}}>PATTERN BREAKDOWN</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {sortedP.map(([pat,cnt])=><span key={pat} style={{fontSize:11,background:'rgba(199,125,255,.1)',border:'1px solid rgba(199,125,255,.2)',color:'#c77dff',padding:'3px 10px',borderRadius:20,fontFamily:'JetBrains Mono'}}>{pat}: {cnt}</span>)}
            </div>
          </div>
        )}

        {lcLog.length>0&&(
          <div>
            <div style={{fontSize:12,color:'rgba(255,255,255,.3)',fontFamily:'JetBrains Mono',marginBottom:10}}>RECENT SOLVES</div>
            {lcLog.slice(0,8).map(p=>(
              <div key={p.id} style={{display:'flex',gap:10,alignItems:'center',padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,.04)'}}>
                <span style={{fontSize:11,fontFamily:'JetBrains Mono',color:p.difficulty==='Easy'?'#6bcb77':p.difficulty==='Hard'?'#ff6b1a':'#ffd93d',minWidth:50}}>{p.difficulty}</span>
                <span style={{fontSize:13,color:'rgba(255,255,255,.7)',flex:1}}>{p.problem}</span>
                <span style={{fontSize:11,color:'rgba(255,255,255,.3)',fontFamily:'JetBrains Mono'}}>{p.time_taken}m</span>
                <span style={{fontSize:10,background:'rgba(199,125,255,.1)',color:'#c77dff',padding:'2px 8px',borderRadius:10}}>{p.pattern}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
PROGRESS

# ── src/components/CalendarView.jsx ─────────────────────────
cat > src/components/CalendarView.jsx << 'CALENDAR'
import { useState, useEffect } from 'react'
import { getTodayIST, PHASES } from '../data/schedule'
import { getAllProgress } from '../lib/supabase'

const BREAK_DAYS=['2026-05-01','2026-06-15','2026-07-04','2026-08-15','2026-09-05','2026-10-02','2026-10-24','2026-11-14','2026-12-25']
const PC=['#f97316','#6bcb77','#c77dff','#4d96ff','#ffd93d','#ff6b9d']
function getPhase(d){if(d>='2026-04-14'&&d<='2026-06-01')return 1;if(d>='2026-06-02'&&d<='2026-07-27')return 2;if(d>='2026-07-28'&&d<='2026-09-28')return 3;if(d>='2026-09-29'&&d<='2026-12-14')return 4;if(d>='2026-12-15'&&d<='2026-12-31')return 5;return 0}
const MONTHS=[{y:2026,m:3,label:'April 2026'},{y:2026,m:4,label:'May 2026'},{y:2026,m:5,label:'June 2026'},{y:2026,m:6,label:'July 2026'},{y:2026,m:7,label:'August 2026'},{y:2026,m:8,label:'September 2026'},{y:2026,m:9,label:'October 2026'},{y:2026,m:10,label:'November 2026'},{y:2026,m:11,label:'December 2026'}]

export default function CalendarView({onSelectDate}){
  const today=getTodayIST()
  const [ymi,setYmi]=useState(0)
  const [prog,setProg]=useState({})
  useEffect(()=>{getAllProgress().then(data=>{const m={};data.forEach(p=>{const v=Object.values(p.checks||{});if(v.length>0)m[p.date]=v.every(Boolean)?'full':'partial'});setProg(m)})},[])
  const {y,m,label}=MONTHS[ymi]
  const days=new Date(y,m+1,0).getDate()
  const fd=new Date(y,m,1).getDay()
  function ds(d){return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`}
  function inProg(d){return d>='2026-04-14'&&d<='2026-12-31'}

  return(
    <div style={{position:'relative',zIndex:1}}>
      <h2 style={{fontFamily:'Syne',fontSize:24,color:'#fff',margin:'0 0 6px',fontWeight:800}}>📅 Calendar View</h2>
      <p style={{color:'rgba(255,255,255,.4)',fontSize:14,margin:'0 0 20px'}}>Click any date to view or log that day's tasks.</p>
      <div style={{display:'flex',gap:16,marginBottom:20,flexWrap:'wrap'}}>
        {[{c:'#ff6b1a',l:'Today'},{c:'#6bcb77',l:'Fully done'},{c:'#ffd93d',l:'Partial'},{c:'rgba(255,255,255,.1)',l:'In program'}].map(x=><div key={x.l} style={{display:'flex',alignItems:'center',gap:6}}><div style={{width:10,height:10,borderRadius:'50%',background:x.c}} /><span style={{fontSize:12,color:'rgba(255,255,255,.4)'}}>{x.l}</span></div>)}
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
        <button onClick={()=>setYmi(i=>Math.max(0,i-1))} disabled={ymi===0} style={{background:'none',border:'1px solid rgba(255,255,255,.1)',color:ymi===0?'rgba(255,255,255,.1)':'rgba(255,255,255,.6)',borderRadius:8,padding:'6px 14px',cursor:ymi===0?'not-allowed':'pointer',fontFamily:'Syne'}}>←</button>
        <span style={{fontFamily:'Syne',fontSize:18,color:'#fff',fontWeight:700}}>{label}</span>
        <button onClick={()=>setYmi(i=>Math.min(MONTHS.length-1,i+1))} disabled={ymi===MONTHS.length-1} style={{background:'none',border:'1px solid rgba(255,255,255,.1)',color:ymi===MONTHS.length-1?'rgba(255,255,255,.1)':'rgba(255,255,255,.6)',borderRadius:8,padding:'6px 14px',cursor:ymi===MONTHS.length-1?'not-allowed':'pointer',fontFamily:'Syne'}}>→</button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:4,marginBottom:4}}>
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=><div key={d} style={{textAlign:'center',fontSize:11,color:'rgba(255,255,255,.25)',fontFamily:'JetBrains Mono',padding:'4px 0'}}>{d}</div>)}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:4}}>
        {Array.from({length:fd}).map((_,i)=><div key={`e${i}`} />)}
        {Array.from({length:days},(_,i)=>{
          const day=i+1,d=ds(day),ip=inProg(d),it=d===today,ib=BREAK_DAYS.includes(d),p=prog[d],ph=getPhase(d),pc=ph>0?PC[ph-1]:null,sun=new Date(d+'T00:00:00').getDay()===0
          let bg='rgba(255,255,255,.02)',border='rgba(255,255,255,.06)',tc=ip?'rgba(255,255,255,.6)':'rgba(255,255,255,.15)'
          if(!ip){bg='transparent';border='transparent'}
          if(it){bg='rgba(255,107,26,.15)';border='#ff6b1a';tc='#fff'}
          else if(p==='full'){bg='rgba(107,203,119,.1)';border='rgba(107,203,119,.4)';tc='#6bcb77'}
          else if(p==='partial'){bg='rgba(255,211,61,.08)';border='rgba(255,211,61,.3)';tc='#ffd93d'}
          else if(ib){bg='rgba(107,203,119,.05)';border='rgba(107,203,119,.15)'}
          else if(ip&&pc){border=`${pc}30`}
          return(
            <button key={day} onClick={()=>ip&&onSelectDate(d)} style={{background:bg,border:`1px solid ${border}`,borderRadius:8,aspectRatio:'1',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',cursor:ip?'pointer':'default',transition:'all .2s',padding:4}}>
              <span style={{fontSize:13,color:tc,fontWeight:it?700:400,fontFamily:it?'Syne':'DM Sans'}}>{day}</span>
              {sun&&ip&&<span style={{fontSize:8,color:pc||'rgba(255,255,255,.2)',fontFamily:'JetBrains Mono',lineHeight:1}}>SUN</span>}
              {ib&&<span style={{fontSize:8}}>🌿</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
CALENDAR

# ── src/components/PhasesView.jsx ───────────────────────────
cat > src/components/PhasesView.jsx << 'PHASES'
import { PHASES, NEETCODE_ROADMAP, DSA_SHEET } from '../data/schedule'
const PD=[
  {id:1,weeks:[{l:"Week 1 (Apr 14–20)",t:"Java syntax, loops, methods + Arrays two-pointer",lc:"10 problems",b:"Calculator CLI"},{l:"Week 2 (Apr 21–27)",t:"OOP — classes, inheritance, polymorphism in Java",lc:"20 total",b:"Bank Account OOP model"},{l:"Week 3 (Apr 28–May 3)",t:"Collections, HashMap, Generics + Recursion",lc:"30 total",b:"Student Grade Manager CLI"},{l:"Week 4 (May 4–10)",t:"LinkedList from scratch — Node, add/remove/reverse",lc:"40 total",b:"Your own LinkedList class"},{l:"Week 5 (May 11–17)",t:"Stack + Queue — array and linked implementations",lc:"50 total",b:"Expression Evaluator CLI"},{l:"Week 6 (May 18–24)",t:"Binary Trees — DFS, BFS, level order",lc:"57 total",b:"Tree Visualizer CLI"},{l:"Week 7 (May 25–Jun 1)",t:"HashMap deep dive + consolidation + DEPLOY",lc:"65 total",b:"Deploy project to GitHub"},],rules:["1 video → close tab → code immediately. Non-negotiable.","25-minute timer on every LC problem. No hints in first 25.","Push to GitHub every single day.","Sunday = re-solve 3 hardest problems from the week from memory."],cp:"65 LC + 1 deployed Java project by June 1"},
  {id:2,weeks:[{l:"Jun 2–8",t:"Spring Boot intro — Initializr, first REST endpoint",lc:"70 total",b:"GET /hello running"},{l:"Jun 9–15",t:"Spring Boot CRUD + PostgreSQL + JPA",lc:"78 total",b:"Full CRUD API"},{l:"Jun 16–22",t:"JWT Authentication — spring-security, token filter",lc:"86 total",b:"Login + protected endpoint"},{l:"Jun 23–29",t:"React fundamentals — components, state, hooks",lc:"94 total",b:"React form connected to API"},{l:"Jun 30–Jul 6",t:"React + Axios + CORS + Tailwind styling",lc:"102 total",b:"Working full-stack app"},{l:"Jul 7–13",t:"Deploy: Render.com + Vercel + Supabase",lc:"110 total",b:"LIVE deployed project with URL"},{l:"Jul 14–20",t:"System Design intro: Gaurav Sen — load balancers, caching",lc:"118 total",b:"System design notes + diagram"},{l:"Jul 21–27",t:"Polish + MongoDB intro as second data layer",lc:"130 total",b:"Project 2: deployed + README"},],rules:["4-5 hrs weekdays, 7-8 Sunday — college has started.","Every project gets a live URL before going on resume.","No new tech until current stack is deployed."],cp:"130 LC + deployed Spring Boot + React app with JWT auth"},
  {id:3,weeks:[{l:"Jul 28–Aug 3",t:"DP: Climbing Stairs, House Robber, Fibonacci variants",lc:"140 total",b:"DP cheatsheet in your own words"},{l:"Aug 4–10",t:"DP: Coin Change, Knapsack, LCS, LIS",lc:"150 total",b:"Python + scikit-learn project started"},{l:"Aug 11–17",t:"Graphs: DFS/BFS, Number of Islands, Clone Graph",lc:"158 total",b:"Graph visualizer (bonus)"},{l:"Aug 18–24",t:"Graphs: Topological sort, Dijkstra, Course Schedule",lc:"165 total",b:"System design: URL shortener write-up"},{l:"Aug 25–31",t:"Backtracking: Subsets, Permutations, N-Queens",lc:"172 total",b:"ML project: iris classifier deployed"},{l:"Sep 1–7",t:"Intervals + Greedy patterns",lc:"178 total",b:"AMCAT mock #1"},{l:"Sep 8–14",t:"Blind 75 — fill gaps in weakest patterns",lc:"184 total",b:"Record 2-min concept explanation"},{l:"Sep 15–21",t:"Hard problems + company-tagged review",lc:"190 total",b:"System design: Twitter feed 45-min answer"},{l:"Sep 22–28",t:"Full review — re-solve 10 struggled problems",lc:"195 total",b:"Resume draft: all 3 projects with live URLs"},],rules:["DP and Graphs appear in every FAANG OA. Not optional.","Communication practice starts this phase. Record yourself.","AMCAT mocks from Sep — treat as real OA."],cp:"195 LC + Blind 75 ~90% done + Python ML project deployed"},
  {id:4,weeks:[{l:"Sep 29–Oct 5",t:"AWS EC2: deploy Spring Boot, configure env vars",lc:"200 total",b:"API live on EC2"},{l:"Oct 6–12",t:"AWS S3: file upload, pre-signed URLs from Spring Boot",lc:"203 total",b:"S3 integration in project"},{l:"Oct 13–19",t:"MongoDB: Spring Data MongoDB, NoSQL vs SQL comparison",lc:"206 total",b:"Project with SQL and NoSQL endpoints"},{l:"Oct 20–26",t:"Company-tagged LC: JPMC + PayPal filter",lc:"210 total",b:"Resume finalized — peer review"},{l:"Oct 27–Nov 2",t:"Mock interviews: 2 Pramp sessions this week",lc:"213 total",b:"Apply to 10 companies"},{l:"Nov 3–9",t:"System design: Instagram feed full answer",lc:"216 total",b:"Apply 10 more"},{l:"Nov 10–16",t:"HR: STAR method — 6 behavioural answers written",lc:"219 total",b:"LinkedIn profile updated"},{l:"Nov 17–Dec 7",t:"OA practice + mock interview weeks",lc:"222-228 total",b:"Apply + follow up consistently"},{l:"Dec 8–14",t:"Final polish — fix project bugs, update READMEs",lc:"230 total",b:"GitHub profile pinned — best 3 projects"},],rules:["AWS on resume only if actually deployed.","Pramp mocks are non-negotiable — you need reps.","Apply 3-5 companies per week minimum."],cp:"230+ LC + 3 deployed projects + 30+ applications sent"},
  {id:5,weeks:[{l:"Dec 15–21",t:"Portfolio audit: every project live, every README complete",lc:"233 total",b:"3 live URLs on resume"},{l:"Dec 22–31",t:"Resume lock + January preparation — no new tech",lc:"235 total",b:"January interview plan ready"},],rules:["No new technology in Phase 5. Lock what you have.","No live URL = remove from resume. No exceptions."],cp:"Resume final · 3 live URLs · Applications ongoing · January plan ready"},
  {id:6,weeks:[{l:"Jan Week 1",t:"2 Hard LC/day + system design 45-min daily drill",lc:"250 total",b:"Pramp daily"},{l:"Jan Week 2",t:"Company-specific OA practice — JPMC pattern bank",lc:"255 total",b:"10 STAR stories written"},{l:"Jan Week 3",t:"Full mock rounds: technical + HR + system design",lc:"260 total",b:"Simulate entire interview day"},{l:"Jan Week 4",t:"Sharpen weak spots only — no new topics",lc:"265 total",b:"You're ready. Trust the 8 months."},],rules:["This phase is drill, not learn. Don't start new topics now.","Mock interviews every 2 days minimum.","Sleep 8 hours. Your brain needs it for Hard DP under pressure."],cp:"JPMC/PayPal/MNC internship offer. That's the only checkpoint."},
]

export default function PhasesView(){
  return(
    <div style={{position:'relative',zIndex:1}}>
      <h2 style={{fontFamily:'Syne',fontSize:24,color:'#fff',margin:'0 0 6px',fontWeight:800}}>🗺️ The Full Battle Plan</h2>
      <p style={{color:'rgba(255,255,255,.4)',fontSize:14,margin:'0 0 28px'}}>6 phases · 8 months · one goal.</p>
      <div style={{display:'flex',flexDirection:'column',gap:16}}>
        {PD.map((pd,i)=>{
          const ph=PHASES[i],pc=ph.color
          return(
            <details key={pd.id} style={{background:'rgba(255,255,255,.02)',border:`1px solid ${pc}25`,borderRadius:14,overflow:'hidden'}}>
              <summary style={{padding:'18px 20px',cursor:'pointer',display:'flex',alignItems:'center',gap:14,listStyle:'none',userSelect:'none'}}>
                <span style={{fontSize:28}}>{ph.icon}</span>
                <div style={{flex:1}}>
                  <div style={{display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
                    <span style={{fontFamily:'Syne',fontSize:16,color:pc,fontWeight:700}}>Phase {ph.id}: {ph.name}</span>
                    <span style={{fontSize:11,fontFamily:'JetBrains Mono',color:'rgba(255,255,255,.3)',background:'rgba(255,255,255,.05)',padding:'2px 8px',borderRadius:10}}>{ph.dates}</span>
                  </div>
                  <p style={{margin:'3px 0 0',fontSize:13,color:'rgba(255,255,255,.45)'}}>{ph.tag}</p>
                </div>
                <span style={{fontSize:18,color:'rgba(255,255,255,.2)'}}>▾</span>
              </summary>
              <div style={{padding:'0 20px 20px',borderTop:`1px solid ${pc}20`}}>
                <div style={{background:`${pc}10`,border:`1px solid ${pc}25`,borderRadius:8,padding:'10px 14px',margin:'16px 0 14px',fontSize:13,color:pc}}>🎯 {pd.cp}</div>
                <div style={{marginBottom:16}}>
                  <div style={{fontSize:11,fontFamily:'JetBrains Mono',color:'rgba(255,255,255,.3)',marginBottom:8}}>NON-NEGOTIABLE RULES</div>
                  {pd.rules.map((r,ri)=><div key={ri} style={{display:'flex',gap:8,marginBottom:6,fontSize:13,color:'rgba(255,255,255,.65)',alignItems:'flex-start'}}><span style={{color:pc,flexShrink:0}}>→</span>{r}</div>)}
                </div>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}>
                    <thead><tr>{['Week','Focus','LC target','Build'].map(h=><th key={h} style={{textAlign:'left',color:'rgba(255,255,255,.3)',fontFamily:'JetBrains Mono',fontSize:10,padding:'6px 8px',borderBottom:'1px solid rgba(255,255,255,.07)',fontWeight:400}}>{h}</th>)}</tr></thead>
                    <tbody>{pd.weeks.map((w,wi)=><tr key={wi}><td style={{padding:'8px',color:'rgba(255,255,255,.35)',fontSize:11,fontFamily:'JetBrains Mono',whiteSpace:'nowrap',borderBottom:'1px solid rgba(255,255,255,.04)',verticalAlign:'top'}}>{w.l}</td><td style={{padding:'8px',color:'rgba(255,255,255,.7)',borderBottom:'1px solid rgba(255,255,255,.04)',verticalAlign:'top',lineHeight:1.5}}>{w.t}</td><td style={{padding:'8px',color:pc,fontFamily:'JetBrains Mono',fontSize:11,borderBottom:'1px solid rgba(255,255,255,.04)',verticalAlign:'top',whiteSpace:'nowrap'}}>{w.lc}</td><td style={{padding:'8px',color:'rgba(255,255,255,.55)',borderBottom:'1px solid rgba(255,255,255,.04)',verticalAlign:'top',fontSize:12}}>{w.b}</td></tr>)}</tbody>
                  </table>
                </div>
                <div style={{display:'flex',gap:10,marginTop:14,flexWrap:'wrap'}}>
                  <a href={NEETCODE_ROADMAP} target="_blank" rel="noopener noreferrer" style={{fontSize:11,background:'rgba(255,107,26,.1)',border:'1px solid rgba(255,107,26,.25)',color:'#ff6b1a',padding:'5px 12px',borderRadius:20,textDecoration:'none'}}>⚡ NeetCode Roadmap</a>
                  <a href={DSA_SHEET} target="_blank" rel="noopener noreferrer" style={{fontSize:11,background:'rgba(255,211,61,.1)',border:'1px solid rgba(255,211,61,.25)',color:'#ffd93d',padding:'5px 12px',borderRadius:20,textDecoration:'none'}}>📋 Striver Sheet</a>
                </div>
              </div>
            </details>
          )
        })}
      </div>
    </div>
  )
}
PHASES

# ── src/App.jsx ──────────────────────────────────────────────
cat > src/App.jsx << 'APP'
import { useState, useEffect } from 'react'
import ThreeBackground from './components/ThreeBackground'
import DailyView from './components/DailyView'
import ProgressDashboard from './components/ProgressDashboard'
import PhasesView from './components/PhasesView'
import CalendarView from './components/CalendarView'
import { getTodayIST, formatDate, getDayNumber, getTotalDays, PHASES } from './data/schedule'
import { getAllProgress } from './lib/supabase'

const TABS=[{id:'today',label:"Today's Mission",icon:'🎯'},{id:'calendar',label:'Calendar',icon:'📅'},{id:'phases',label:'All Phases',icon:'🗺️'},{id:'progress',label:'Progress',icon:'📊'}]

export default function App(){
  const [tab,setTab]=useState('today')
  const [selDate,setSelDate]=useState(getTodayIST())
  const [stats,setStats]=useState({streak:0,totalDone:0})
  const todayStr=getTodayIST()
  const isInProg=todayStr>='2026-04-14'&&todayStr<='2026-12-31'
  const dayNum=getDayNumber(todayStr)
  const totalDays=getTotalDays()

  useEffect(()=>{getAllProgress().then(data=>{let s=0;const sorted=[...data].sort((a,b)=>b.date.localeCompare(a.date));for(const p of sorted){if(Object.values(p.checks||{}).some(Boolean))s++;else break};setStats({streak:s,totalDone:data.filter(p=>Object.values(p.checks||{}).some(Boolean)).length})})},[])

  function handleCalSelect(date){setSelDate(date);setTab('today')}
  const isViewingToday=selDate===todayStr

  return(
    <div style={{minHeight:'100vh',background:'#0a0a0f',position:'relative',overflow:'hidden'}}>
      <ThreeBackground />
      <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
      <div style={{position:'relative',zIndex:1,maxWidth:900,margin:'0 auto',padding:'0 16px 80px'}}>

        <header style={{padding:'24px 0 20px',borderBottom:'1px solid rgba(255,255,255,.05)',marginBottom:24}}>
          <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
            <div>
              <h1 className="shimmer-text" style={{fontFamily:'Syne',fontSize:'clamp(24px,5vw,40px)',fontWeight:800,margin:'0 0 4px',lineHeight:1.1}}>☀️ Summer Break Crack</h1>
              <p style={{color:'rgba(255,255,255,.4)',fontSize:13,margin:0,fontFamily:'JetBrains Mono'}}>{isInProg?`Day ${dayNum} of ${totalDays}`:formatDate(todayStr)} · JPMC/PayPal ready Dec 2026</p>
            </div>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <div style={{background:'rgba(255,107,26,.1)',border:'1px solid rgba(255,107,26,.25)',borderRadius:10,padding:'8px 14px',textAlign:'center'}}><div style={{fontFamily:'Syne',fontSize:20,color:'#ff6b1a',fontWeight:800}}>{stats.streak}🔥</div><div style={{fontSize:10,color:'rgba(255,255,255,.3)',fontFamily:'JetBrains Mono'}}>STREAK</div></div>
              <div style={{background:'rgba(199,125,255,.1)',border:'1px solid rgba(199,125,255,.25)',borderRadius:10,padding:'8px 14px',textAlign:'center'}}><div style={{fontFamily:'Syne',fontSize:20,color:'#c77dff',fontWeight:800}}>{stats.totalDone}</div><div style={{fontSize:10,color:'rgba(255,255,255,.3)',fontFamily:'JetBrains Mono'}}>DAYS ACTIVE</div></div>
            </div>
          </div>
          <div style={{display:'flex',gap:6,marginTop:14,flexWrap:'wrap'}}>
            {PHASES.map(p=><span key={p.id} style={{fontSize:10,fontFamily:'JetBrains Mono',background:`${p.color}12`,border:`1px solid ${p.color}30`,color:p.color,padding:'3px 10px',borderRadius:20}}>P{p.id} {p.icon}</span>)}
          </div>
        </header>

        {!isViewingToday&&tab==='today'&&(
          <div style={{background:'rgba(255,211,61,.08)',border:'1px solid rgba(255,211,61,.2)',borderRadius:10,padding:'10px 16px',marginBottom:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span style={{fontSize:13,color:'#ffd93d'}}>📅 Viewing: {formatDate(selDate)}</span>
            <button onClick={()=>setSelDate(todayStr)} style={{fontSize:11,background:'rgba(255,107,26,.15)',border:'1px solid rgba(255,107,26,.3)',color:'#ff6b1a',padding:'4px 12px',borderRadius:20,cursor:'pointer',fontFamily:'JetBrains Mono'}}>→ Go to today</button>
          </div>
        )}

        <nav style={{display:'flex',gap:4,marginBottom:24,background:'rgba(255,255,255,.02)',border:'1px solid rgba(255,255,255,.07)',borderRadius:12,padding:4}}>
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:'8px 4px',border:`1px solid ${tab===t.id?'rgba(255,107,26,.4)':'transparent'}`,background:tab===t.id?'rgba(255,107,26,.1)':'transparent',color:tab===t.id?'#ff6b1a':'rgba(255,255,255,.4)',borderRadius:8,cursor:'pointer',fontFamily:'Syne',fontSize:'clamp(10px,1.5vw,13px)',fontWeight:tab===t.id?700:400,transition:'all .2s',display:'flex',alignItems:'center',justifyContent:'center',gap:4}}>
              <span style={{fontSize:14}}>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </nav>

        {tab==='today'    &&<DailyView dateStr={selDate} />}
        {tab==='calendar' &&<CalendarView onSelectDate={handleCalSelect} />}
        {tab==='phases'   &&<PhasesView />}
        {tab==='progress' &&<ProgressDashboard />}
      </div>
    </div>
  )
}
APP

echo "✅ All components done!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "NOW RUN:"
echo "  npm install"
echo "  npm run dev"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
