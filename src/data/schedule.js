// schedule_helpers.js — date helpers & constants
export const SCHEDULE_START    = '2026-04-14';
export const NEETCODE_ROADMAP  = 'https://neetcode.io/roadmap';
export const DSA_SHEET         = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/';

function pad(n) { return String(n).padStart(2, '0'); }

export function getTodayIST() {
  const now = new Date();
  const ist = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
  return `${ist.getUTCFullYear()}-${pad(ist.getUTCMonth()+1)}-${pad(ist.getUTCDate())}`;
}

export function isDatePast(dateStr)   { return dateStr < getTodayIST(); }
export function isDateToday(dateStr)  { return dateStr === getTodayIST(); }
export function isDateFuture(dateStr) { return dateStr > getTodayIST(); }

export function getRandomSurprise(dateStr) {
  const surprises = [
    { type:'meal',  content:'🍕 CHEAT MEAL UNLOCKED! Order whatever you love. Zero guilt. Full fuel tomorrow.' },
    { type:'quote', content:'🔥 The person who finished today is going to get the JPMC offer. Keep that identity locked in.' },
    { type:'flex',  content:'💪 GAME NIGHT PASS: 2 hrs of whatever — game, movie, anything. Brain-off time earned.' },
    { type:'meal',  content:'🍔 Comfort food tonight. Balance is not weakness — it is strategy.' },
    { type:'quote', content:'⚡ MILESTONE: DSA ✓ Spring Boot ✓ React ✓ Communication ✓. You are building what top companies hire for.' },
    { type:'flex',  content:'🎮 BINGE PASS: One episode you have been putting off. Guilt-free. Then sleep well.' },
    { type:'meal',  content:'🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait.' },
    { type:'quote', content:'🌟 You are in the top 5% of students who actually follow structured plans. You execute.' },
    { type:'flex',  content:'🛁 SELF-CARE EVENING: Long shower, journal, early sleep. Productivity tomorrow will be 2x.' },
    { type:'meal',  content:'🍜 FEAST UNLOCKED: Tonight someone else cooks. Order out, call family, feed your soul.' },
    { type:'quote', content:'🏆 You show up even on hard days. JPMC will notice that discipline.' },
    { type:'flex',  content:'📺 CHILL SESSION: Tech documentary or YouTube rabbit hole — guilt-free exploration.' },
    { type:'meal',  content:'🍰 DESSERT NIGHT: Treat yourself to your favourite sweet. Celebrate small wins.' },
    { type:'quote', content:'🚀 Most students quit here. You did not. That is the difference.' },
  ];
  const seed = dateStr.split('-').reduce((a, b) => a + parseInt(b), 0);
  return surprises[seed % surprises.length];
}

// Keep backward compat with old import name
export function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(m)-1]} ${parseInt(d)}, ${y}`;
}

export function getDayNumber(dateStr) {
  const start = new Date('2026-04-14');
  const current = new Date(dateStr);
  const diff = Math.floor((current - start) / (1000 * 60 * 60 * 24));
  return diff + 1;
}

export function getTotalDays() {
  return 262;
}

export const PHASES = [
  { id: 1, icon: '🔥', label: 'Java Intensive',     color: '#ff6b1a', start: '2026-04-14', end: '2026-06-01' },
  { id: 2, icon: '⚡', label: 'DSA + Spring Boot',  color: '#c77dff', start: '2026-06-02', end: '2026-07-13' },
  { id: 3, icon: '🌐', label: 'Full Stack',          color: '#4cc9f0', start: '2026-07-14', end: '2026-09-07' },
  { id: 4, icon: '🤖', label: 'Python + ML',         color: '#6bcb77', start: '2026-09-08', end: '2026-11-16' },
  { id: 5, icon: '🏆', label: 'Interview Prep',      color: '#ffd93d', start: '2026-11-17', end: '2026-12-31' },
];

export const BREAK_DAYS = [14, 28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168, 182, 196, 210, 224, 238, 252];
