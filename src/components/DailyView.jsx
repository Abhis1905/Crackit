import { useState, useEffect, useCallback } from 'react'
import { getFullSchedule } from '../data/fullSchedule'
import { getTodayIST, isDatePast, isDateToday, isDateFuture, getRandomSurprise, NEETCODE_ROADMAP, DSA_SHEET } from '../data/schedule'
import { getProgress, saveProgress } from '../lib/supabase'
import ConfettiBurst from './ConfettiBurst'

const TC = {
  lecture:     {bg:'rgba(77,150,255,.1)',  border:'rgba(77,150,255,.3)',  text:'#4d96ff', icon:'📺',label:'LECTURE'},
  leetcode:    {bg:'rgba(255,107,26,.1)', border:'rgba(255,107,26,.3)', text:'#ff6b1a', icon:'⚡',label:'LEETCODE'},
  sheet:       {bg:'rgba(255,211,61,.1)', border:'rgba(255,211,61,.3)', text:'#ffd93d', icon:'📋',label:'SHEET'},
  neetcode:    {bg:'rgba(255,107,26,.08)',border:'rgba(255,107,26,.25)',text:'#ff6b1a', icon:'🗺️',label:'NEETCODE'},
  aptitude:    {bg:'rgba(107,203,119,.1)',border:'rgba(107,203,119,.3)',text:'#6bcb77', icon:'🧮',label:'APTITUDE'},
  build:       {bg:'rgba(199,125,255,.1)',border:'rgba(199,125,255,.3)',text:'#c77dff', icon:'🔨',label:'BUILD'},
  recall:      {bg:'rgba(255,107,157,.1)',border:'rgba(255,107,157,.3)',text:'#ff6b9d', icon:'🧠',label:'RECALL'},
  communication:{bg:'rgba(255,211,61,.1)',border:'rgba(255,211,61,.3)',text:'#ffd93d', icon:'🎤',label:'COMM'},
  contest:     {bg:'rgba(199,125,255,.15)',border:'rgba(199,125,255,.4)',text:'#c77dff', icon:'🏆',label:'CONTEST'},
  rest:        {bg:'rgba(107,203,119,.1)',border:'rgba(107,203,119,.3)',text:'#6bcb77', icon:'🌿',label:'REST'},
  practice:    {bg:'rgba(255,107,26,.1)', border:'rgba(255,107,26,.3)', text:'#ff6b1a', icon:'💻',label:'PRACTICE'},
}

function VerifyModal({task,onConfirm,onClose}){
  const [ans,setAns]=useState('')
  const questions=["What exactly did you do? Input → output — be specific.","What was the time complexity? Explain why.","What edge case did you handle or miss?","Explain your approach in one sentence to a non-programmer.","What would you do differently next time?"]
  const q=questions[Math.floor(Math.random()*questions.length)]
  return(
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.88)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000,padding:24}}>
      <div style={{background:'#151520',border:'1px solid rgba(255,107,26,.35)',borderRadius:16,padding:28,maxWidth:500,width:'100%',boxShadow:'0 0 60px rgba(255,107,26,.2)'}}>
        <div style={{fontSize:28,marginBottom:8}}>🔍</div>
        <h3 style={{fontFamily:'Syne',fontSize:18,color:'#ff6b1a',margin:'0 0 8px'}}>Prove it. Your tutor is watching.</h3>
        <p style={{color:'rgba(255,255,255,.55)',fontSize:13,marginBottom:16,lineHeight:1.6}}>Checkbox clicking without proof is lying to yourself.</p>
        <div style={{background:'rgba(255,107,26,.08)',border:'1px solid rgba(255,107,26,.2)',borderRadius:10,padding:'12px 16px',marginBottom:16,fontSize:14,color:'#ffd93d',lineHeight:1.7}}>{q}</div>
        <textarea value={ans} onChange={e=>setAns(e.target.value)} placeholder="Specific answer only." style={{width:'100%',minHeight:90,resize:'vertical',marginBottom:16,boxSizing:'border-box'}} />
        <div style={{display:'flex',gap:10}}>
          <button onClick={onClose} style={{flex:1,padding:'10px 0',background:'transparent',border:'1px solid rgba(255,255,255,.1)',borderRadius:8,color:'rgba(255,255,255,.4)',cursor:'pointer',fontFamily:'DM Sans'}}>Not done yet</button>
          <button onClick={()=>onConfirm(ans)} disabled={ans.trim().length<5} style={{flex:2,padding:'10px 0',background:ans.trim().length>=5?'linear-gradient(135deg,#ff6b1a,#ffd93d)':'rgba(255,255,255,.05)',border:'none',borderRadius:8,color:ans.trim().length>=5?'#000':'rgba(255,255,255,.2)',cursor:ans.trim().length>=5?'pointer':'not-allowed',fontFamily:'Syne',fontWeight:700,fontSize:14}}>✓ Done. Mark it.</button>
        </div>
      </div>
    </div>
  )
}

function SurpriseModal({surprise,onClose}){
  const icons={meal:'🍕',quote:'💬',flex:'💪'}
  return(
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.92)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1001,padding:24}}>
      <div className="surprise-card" style={{background:'linear-gradient(135deg,#1a0a2e,#0a1a2e)',border:'1px solid rgba(199,125,255,.5)',borderRadius:20,padding:36,maxWidth:440,width:'100%',textAlign:'center',boxShadow:'0 0 80px rgba(199,125,255,.35)'}}>
        <div style={{fontSize:60,marginBottom:16}}>{icons[surprise.type]||'🎁'}</div>
        <h2 style={{fontFamily:'Syne',fontSize:24,color:'#ffd93d',margin:'0 0 16px',fontWeight:800}}>DAY COMPLETE. 🔥</h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,.9)',lineHeight:1.8,marginBottom:28}}>{surprise.content}</p>
        <div style={{fontSize:11,color:'rgba(255,255,255,.25)',marginBottom:24,fontFamily:'JetBrains Mono'}}>progress saved · streak updated · one day closer to JPMC</div>
        <button onClick={onClose} style={{padding:'14px 36px',background:'linear-gradient(135deg,#c77dff,#ff6b9d)',border:'none',borderRadius:30,color:'#fff',fontFamily:'Syne',fontWeight:800,fontSize:15,cursor:'pointer'}}>TOMORROW TOO. 🚀</button>
      </div>
    </div>
  )
}

export default function DailyView({dateStr:propDate}){
  const dateStr=propDate||getTodayIST()
  const [schedule,setSchedule]=useState(null)
  const [checks,setChecks]=useState({})
  const [notes,setNotes]=useState('')
  const [verifyTask,setVerifyTask]=useState(null)
  const [showSurprise,setShowSurprise]=useState(false)
  const [confetti,setConfetti]=useState(0)
  const [saved,setSaved]=useState(false)
  const [loading,setLoading]=useState(true)
  const isPast=isDatePast(dateStr),isToday=isDateToday(dateStr),isFuture=isDateFuture(dateStr)

  useEffect(()=>{
    const s=getFullSchedule(dateStr); setSchedule(s)
    getProgress(dateStr).then(data=>{if(data){setChecks(data.checks||{});setNotes(data.notes||'')}; setLoading(false)}).catch(()=>setLoading(false))
  },[dateStr])

  const allTasks=schedule?[
    ...(schedule.practice||[]).map((p,i)=>({id:`p${i}`,label:p.label,type:p.type||'practice',link:p.link,needsVerify:p.type==='leetcode'||p.type==='contest'})),
    ...(schedule.communication?[{id:'comm',label:schedule.communication.label,type:'communication',link:schedule.communication.link,needsVerify:false}]:[]),
  ]:[]

  const totalTasks=allTasks.length
  const completedTasks=Object.values(checks).filter(Boolean).length
  const allDone=totalTasks>0&&completedTasks===totalTasks

  const confirmCheck=useCallback((taskId,answer)=>{
    const nc={...checks,[taskId]:true}; setChecks(nc); setVerifyTask(null)
    const newDone=Object.values(nc).filter(Boolean).length
    saveProgress(dateStr,nc,notes+(answer?`\n[${taskId}]: ${answer}`:'')).then(()=>setSaved(true))
    if(newDone===totalTasks&&totalTasks>0){setTimeout(()=>{setConfetti(c=>c+1);setTimeout(()=>setShowSurprise(true),1500)},300)}
  },[checks,dateStr,notes,totalTasks])

  const handleCheck=useCallback((task)=>{
    if(isFuture)return
    if(checks[task.id]){const nc={...checks,[task.id]:false};setChecks(nc);saveProgress(dateStr,nc,notes);return}
    if(isToday&&task.needsVerify)setVerifyTask(task); else confirmCheck(task.id,'')
  },[checks,isFuture,isToday,dateStr,notes,confirmCheck])

  const handleNotes=v=>{setNotes(v);saveProgress(dateStr,checks,v)}

  if(loading)return<div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:300}}><div style={{fontFamily:'JetBrains Mono',color:'#ff6b1a',fontSize:13}}>loading your plan...</div></div>
  if(!schedule)return null

  const PC=['#f97316','#6bcb77','#c77dff','#4d96ff','#ffd93d','#ff6b9d']
  const pColor=schedule.phase>0?PC[Math.min(schedule.phase-1,5)]:'#6bcb77'

  return(
    <div style={{position:'relative',zIndex:1}}>
      <ConfettiBurst trigger={confetti} />
      {verifyTask&&<VerifyModal task={verifyTask} onConfirm={ans=>confirmCheck(verifyTask.id,ans)} onClose={()=>setVerifyTask(null)} />}
      {showSurprise&&<SurpriseModal surprise={getRandomSurprise(dateStr)} onClose={()=>setShowSurprise(false)} />}

      <div style={{marginBottom:20}}>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8,flexWrap:'wrap'}}>
          {schedule.phase>0&&<span style={{fontSize:11,fontFamily:'JetBrains Mono',background:`${pColor}20`,border:`1px solid ${pColor}40`,color:pColor,padding:'3px 10px',borderRadius:20}}>PHASE {schedule.phase} · DAY {schedule.day}</span>}
          {isToday&&<span style={{fontSize:11,fontFamily:'JetBrains Mono',background:'rgba(255,107,26,.15)',border:'1px solid rgba(255,107,26,.5)',color:'#ff6b1a',padding:'3px 10px',borderRadius:20}}>● TODAY IST</span>}
          {isPast&&<span style={{fontSize:11,fontFamily:'JetBrains Mono',color:'rgba(255,255,255,.25)'}}>PAST</span>}
          {isFuture&&<span style={{fontSize:11,fontFamily:'JetBrains Mono',color:'rgba(255,255,255,.25)'}}>UPCOMING</span>}
          {schedule.isSunday&&<span style={{fontSize:11,fontFamily:'JetBrains Mono',background:'rgba(199,125,255,.15)',border:'1px solid rgba(199,125,255,.3)',color:'#c77dff',padding:'3px 10px',borderRadius:20}}>☀️ SUNDAY</span>}
        </div>
        <h1 style={{fontFamily:'Syne',fontSize:'clamp(18px,3.5vw,26px)',color:'#fff',margin:'0 0 10px',fontWeight:800,lineHeight:1.2}}>{schedule.title}</h1>
        {schedule.tip&&<div style={{background:'rgba(255,211,61,.06)',border:'1px solid rgba(255,211,61,.15)',borderRadius:10,padding:'10px 14px',fontSize:13,color:'rgba(255,211,61,.85)',lineHeight:1.7,fontStyle:'italic'}}>💡 {schedule.tip}</div>}
      </div>

      {!schedule.isBreak&&totalTasks>0&&(
        <div style={{marginBottom:20}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
            <span style={{fontSize:12,color:'rgba(255,255,255,.4)',fontFamily:'JetBrains Mono'}}>{completedTasks}/{totalTasks} done</span>
            <span style={{fontSize:12,color:pColor,fontFamily:'JetBrains Mono'}}>{Math.round(completedTasks/totalTasks*100)}%</span>
          </div>
          <div style={{height:5,background:'rgba(255,255,255,.06)',borderRadius:3,overflow:'hidden'}}>
            <div style={{height:'100%',width:`${(completedTasks/totalTasks)*100}%`,background:`linear-gradient(90deg,${pColor},#ffd93d)`,borderRadius:3,transition:'width .5s cubic-bezier(.34,1.56,.64,1)',boxShadow:`0 0 8px ${pColor}60`}} />
          </div>
          {allDone&&<div style={{textAlign:'center',marginTop:10,fontFamily:'Syne',fontSize:14,color:'#ffd93d',fontWeight:700}}>🔥 All done. You earned it.</div>}
        </div>
      )}

      <div style={{display:'flex',gap:8,marginBottom:20,flexWrap:'wrap'}}>
        <a href={NEETCODE_ROADMAP} target="_blank" rel="noopener noreferrer" style={{fontSize:11,fontFamily:'JetBrains Mono',background:'rgba(255,107,26,.1)',border:'1px solid rgba(255,107,26,.3)',color:'#ff6b1a',padding:'5px 12px',borderRadius:20,textDecoration:'none'}}>⚡ NeetCode</a>
        <a href={DSA_SHEET} target="_blank" rel="noopener noreferrer" style={{fontSize:11,fontFamily:'JetBrains Mono',background:'rgba(255,211,61,.1)',border:'1px solid rgba(255,211,61,.3)',color:'#ffd93d',padding:'5px 12px',borderRadius:20,textDecoration:'none'}}>📋 Striver Sheet</a>
        <a href="https://leetcode.com/problemoftheday/" target="_blank" rel="noopener noreferrer" style={{fontSize:11,fontFamily:'JetBrains Mono',background:'rgba(199,125,255,.1)',border:'1px solid rgba(199,125,255,.3)',color:'#c77dff',padding:'5px 12px',borderRadius:20,textDecoration:'none'}}>🔗 LC Daily</a>
        <a href="https://leetcode.com/contest/" target="_blank" rel="noopener noreferrer" style={{fontSize:11,fontFamily:'JetBrains Mono',background:'rgba(107,203,119,.1)',border:'1px solid rgba(107,203,119,.3)',color:'#6bcb77',padding:'5px 12px',borderRadius:20,textDecoration:'none'}}>🏆 Contest</a>
      </div>

      {schedule.timeBlocks&&schedule.timeBlocks.length>0&&(
        <div style={{marginBottom:24}}>
          <div style={{fontSize:11,fontFamily:'JetBrains Mono',color:'rgba(255,255,255,.3)',marginBottom:10,letterSpacing:'0.08em'}}>📅 TODAY'S SCHEDULE</div>
          <div style={{display:'flex',flexDirection:'column',gap:5}}>
            {schedule.timeBlocks.map((block,i)=>(
              <div key={i} style={{display:'flex',gap:12,alignItems:'flex-start',padding:'9px 14px',background:'rgba(255,255,255,.02)',border:'1px solid rgba(255,255,255,.05)',borderRadius:9}}>
                <span style={{fontSize:11,fontFamily:'JetBrains Mono',color:pColor,minWidth:68,flexShrink:0,paddingTop:2,opacity:.8}}>{block.time}</span>
                <div style={{flex:1}}>
                  <span style={{fontSize:13,color:'rgba(255,255,255,.78)',lineHeight:1.6}}>{block.label}</span>
                  {block.link&&<a href={block.link} target="_blank" rel="noopener noreferrer" style={{marginLeft:8,fontSize:11,color:pColor,textDecoration:'none',fontFamily:'JetBrains Mono',opacity:.75}}>↗</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {allTasks.length>0&&(
        <div style={{marginBottom:24}}>
          <div style={{fontSize:11,fontFamily:'JetBrains Mono',color:'rgba(255,255,255,.3)',marginBottom:10,letterSpacing:'0.08em'}}>✅ TICK WHEN DONE</div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {allTasks.map(task=>{
              const tc=TC[task.type]||TC.practice
              const done=!!checks[task.id]
              return(
                <div key={task.id} style={{background:done?'rgba(107,203,119,.06)':tc.bg,border:`1px solid ${done?'rgba(107,203,119,.3)':tc.border}`,borderRadius:12,padding:'12px 16px',display:'flex',gap:12,alignItems:'flex-start',opacity:isFuture?.5:1,transition:'all .25s'}}>
                  {!isFuture&&<input type="checkbox" className="task-checkbox" checked={done} onChange={()=>handleCheck(task)} style={{marginTop:2}} />}
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:4,flexWrap:'wrap'}}>
                      <span style={{fontSize:10,fontFamily:'JetBrains Mono',color:tc.text,background:`${tc.text}15`,padding:'2px 8px',borderRadius:10}}>{tc.icon} {tc.label}</span>
                      {isToday&&task.needsVerify&&!done&&<span style={{fontSize:10,color:'rgba(255,211,61,.5)',fontFamily:'JetBrains Mono'}}>🔍 proof required</span>}
                      {done&&<span style={{fontSize:10,color:'#6bcb77',fontFamily:'JetBrains Mono'}}>✓ done</span>}
                    </div>
                    <p style={{margin:0,fontSize:13,color:done?'rgba(255,255,255,.35)':'rgba(255,255,255,.85)',lineHeight:1.6,textDecoration:done?'line-through':'none'}}>{task.label}</p>
                    {task.link&&!done&&<a href={task.link} target="_blank" rel="noopener noreferrer" style={{display:'inline-block',marginTop:6,fontSize:11,color:tc.text,textDecoration:'none',fontFamily:'JetBrains Mono',opacity:.8}}>→ Open ↗</a>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {!isFuture&&(
        <div style={{marginTop:20}}>
          <label style={{display:'block',fontSize:12,color:'rgba(255,255,255,.35)',fontFamily:'JetBrains Mono',marginBottom:8}}>📝 NOTES / BLOCKERS</label>
          <textarea value={notes} onChange={e=>handleNotes(e.target.value)} placeholder="What clicked? What confused you? What to revisit tomorrow?" style={{width:'100%',minHeight:80,resize:'vertical',boxSizing:'border-box'}} />
          {saved&&<p style={{fontSize:11,color:'#6bcb77',fontFamily:'JetBrains Mono',margin:'6px 0 0'}}>✓ auto-saved</p>}
        </div>
      )}
    </div>
  )
}