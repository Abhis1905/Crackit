import { useState, useEffect } from 'react'
import { getAllProgress } from '../lib/supabase'

const BREAK_DAYS = new Set([
  '2026-05-01','2026-06-15','2026-07-04','2026-08-15','2026-09-05',
  '2026-10-02','2026-10-25','2026-10-26','2026-11-15','2026-12-25','2026-12-26'
])
const PC = ['#f97316','#6bcb77','#c77dff','#4d96ff','#ffd93d','#ff6b9d']
const MONTHS = [
  {y:2026,m:3,label:'April 2026'},{y:2026,m:4,label:'May 2026'},
  {y:2026,m:5,label:'June 2026'},{y:2026,m:6,label:'July 2026'},
  {y:2026,m:7,label:'August 2026'},{y:2026,m:8,label:'September 2026'},
  {y:2026,m:9,label:'October 2026'},{y:2026,m:10,label:'November 2026'},
  {y:2026,m:11,label:'December 2026'},
]

function getTodayIST() {
  const now = new Date()
  const ist = new Date(now.getTime() + now.getTimezoneOffset()*60000 + 5.5*60*60*1000)
  return `${ist.getFullYear()}-${String(ist.getMonth()+1).padStart(2,'0')}-${String(ist.getDate()).padStart(2,'0')}`
}

function getPhase(d) {
  if (d>='2026-04-14'&&d<='2026-06-01') return 1
  if (d>='2026-06-02'&&d<='2026-07-27') return 2
  if (d>='2026-07-28'&&d<='2026-09-28') return 3
  if (d>='2026-09-29'&&d<='2026-12-14') return 4
  if (d>='2026-12-15'&&d<='2026-12-31') return 5
  return 0
}

export default function CalendarView({ onSelectDate }) {
  const today = getTodayIST()
  const [ymi, setYmi] = useState(() => {
    const now = new Date()
    const idx = MONTHS.findIndex(x => x.y===now.getFullYear() && x.m===now.getMonth())
    return idx >= 0 ? idx : 0
  })
  const [prog, setProg] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllProgress().then(data => {
      const map = {}
      if (Array.isArray(data)) {
        data.forEach(p => {
          try {
            const v = Object.values(p.checks || {})
            if (v.length > 0) map[p.date] = v.every(Boolean) ? 'full' : 'partial'
          } catch {}
        })
      }
      setProg(map)
    }).catch(()=>{}).finally(()=>setLoading(false))
  }, [])

  const {y,m,label} = MONTHS[ymi]
  const days = new Date(y, m+1, 0).getDate()
  const firstDay = new Date(y, m, 1).getDay()
  const ds = d => `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`
  const inProg = d => d>='2026-04-14' && d<='2026-12-31'

  return (
    <div style={{position:'relative',zIndex:1}}>
      <h2 style={{fontFamily:'Syne',fontSize:24,color:'#fff',margin:'0 0 6px',fontWeight:800}}>📅 Calendar View</h2>
      <p style={{color:'rgba(255,255,255,.4)',fontSize:14,margin:'0 0 20px'}}>Click any date to view that day's tasks.</p>

      <div style={{display:'flex',gap:16,marginBottom:20,flexWrap:'wrap'}}>
        {[{c:'#ff6b1a',l:'Today'},{c:'#6bcb77',l:'Fully done'},{c:'#ffd93d',l:'Partial'},{c:'rgba(255,255,255,.12)',l:'In program'}].map(x=>(
          <div key={x.l} style={{display:'flex',alignItems:'center',gap:6}}>
            <div style={{width:10,height:10,borderRadius:'50%',background:x.c}}/>
            <span style={{fontSize:12,color:'rgba(255,255,255,.4)'}}>{x.l}</span>
          </div>
        ))}
      </div>

      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
        <button onClick={()=>setYmi(i=>Math.max(0,i-1))} disabled={ymi===0}
          style={{background:'none',border:'1px solid rgba(255,255,255,.1)',color:ymi===0?'rgba(255,255,255,.1)':'rgba(255,255,255,.6)',borderRadius:8,padding:'6px 16px',cursor:ymi===0?'not-allowed':'pointer',fontFamily:'Syne',fontSize:16}}>←</button>
        <span style={{fontFamily:'Syne',fontSize:18,color:'#fff',fontWeight:700}}>{label}</span>
        <button onClick={()=>setYmi(i=>Math.min(MONTHS.length-1,i+1))} disabled={ymi===MONTHS.length-1}
          style={{background:'none',border:'1px solid rgba(255,255,255,.1)',color:ymi===MONTHS.length-1?'rgba(255,255,255,.1)':'rgba(255,255,255,.6)',borderRadius:8,padding:'6px 16px',cursor:ymi===MONTHS.length-1?'not-allowed':'pointer',fontFamily:'Syne',fontSize:16}}>→</button>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:4,marginBottom:4}}>
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>(
          <div key={d} style={{textAlign:'center',fontSize:11,color:'rgba(255,255,255,.25)',fontFamily:'JetBrains Mono',padding:'4px 0'}}>{d}</div>
        ))}
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:4}}>
        {Array.from({length:firstDay}).map((_,i)=><div key={`e${i}`}/>)}
        {Array.from({length:days},(_,i)=>{
          const day=i+1, d=ds(day), ip=inProg(d), it=d===today
          const ib=BREAK_DAYS.has(d), p=prog[d], ph=getPhase(d)
          const pc=ph>0?PC[ph-1]:null
          const isSun=new Date(d+'T00:00:00').getDay()===0

          let bg=ip?'rgba(255,255,255,.02)':'transparent'
          let border=ip?(pc?`${pc}25`:'rgba(255,255,255,.06)'):'transparent'
          let textColor=ip?'rgba(255,255,255,.6)':'rgba(255,255,255,.12)'

          if(it){bg='rgba(255,107,26,.18)';border='#ff6b1a';textColor='#fff'}
          else if(p==='full'){bg='rgba(107,203,119,.12)';border='rgba(107,203,119,.5)';textColor='#6bcb77'}
          else if(p==='partial'){bg='rgba(255,211,61,.08)';border='rgba(255,211,61,.35)';textColor='#ffd93d'}
          else if(ib){bg='rgba(107,203,119,.04)';border='rgba(107,203,119,.15)'}

          return(
            <button key={day} onClick={()=>ip&&onSelectDate&&onSelectDate(d)}
              style={{background:bg,border:`1px solid ${border}`,borderRadius:8,aspectRatio:'1',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',cursor:ip?'pointer':'default',transition:'all .15s',padding:2,minHeight:36}}>
              <span style={{fontSize:13,color:textColor,fontWeight:it?700:400,fontFamily:it?'Syne':'DM Sans',lineHeight:1}}>{day}</span>
              {isSun&&ip&&<span style={{fontSize:7,color:pc||'rgba(255,255,255,.2)',fontFamily:'JetBrains Mono',lineHeight:1,marginTop:2}}>SUN</span>}
              {ib&&<span style={{fontSize:9,lineHeight:1}}>🌿</span>}
            </button>
          )
        })}
      </div>

      <div style={{marginTop:20,display:'flex',gap:10,flexWrap:'wrap'}}>
        {[{id:1,name:'Survival Sprint',color:'#f97316'},{id:2,name:'Backend Ignition',color:'#6bcb77'},{id:3,name:'Interview Forge',color:'#c77dff'},{id:4,name:'Placement Mode',color:'#4d96ff'},{id:5,name:'Final Push',color:'#ffd93d'}].map(p=>(
          <div key={p.id} style={{display:'flex',alignItems:'center',gap:5,fontSize:11,color:'rgba(255,255,255,.3)'}}>
            <div style={{width:8,height:8,borderRadius:2,background:p.color}}/>P{p.id}: {p.name}
          </div>
        ))}
      </div>

      {loading&&<div style={{textAlign:'center',marginTop:16,fontSize:12,color:'rgba(255,255,255,.3)',fontFamily:'JetBrains Mono'}}>loading progress...</div>}
    </div>
  )
}