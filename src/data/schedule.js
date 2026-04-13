// schedule.js — helpers & constants used across the app
export { MASTER_SCHEDULE, getScheduleByDate, getScheduleByDayNum } from './schedule_data';

export const SCHEDULE_START = '2026-04-14';
export const NEETCODE_ROADMAP = 'https://neetcode.io/roadmap';
export const DSA_SHEET = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/';

export function getTodayIST() {
  const now = new Date();
  // IST = UTC + 5:30
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(now.getTime() + istOffset);
  return istDate.toISOString().split('T')[0];
}

export function isDatePast(dateStr) {
  return dateStr < getTodayIST();
}

export function isDateToday(dateStr) {
  return dateStr === getTodayIST();
}

export function isDateFuture(dateStr) {
  return dateStr > getTodayIST();
}

export function getRandomSurprise(dateStr) {
  // Find the day and return its surprise, or pick one from the pool
  const surprises = [
    { type: 'meal', content: '🍕 CHEAT MEAL UNLOCKED! You earned it. Order whatever you want tonight. No guilt. Full fuel for tomorrow.' },
    { type: 'quote', content: '🔥 The person who finished today is going to get the job. Keep that identity alive.' },
    { type: 'flex', content: '💪 REST BONUS: Tomorrow is optional review only. Recharge. Sleep 8 hrs. Your brain consolidates during rest.' },
    { type: 'meal', content: '🍔 You crushed it. Tonight: your favourite comfort food. Tomorrow: back to work. Balance is not weakness.' },
    { type: 'quote', content: '⚡ MILESTONE: You\'re building the exact profile JPMC and Zomato hire for. DSA ✓ Projects ✓ Communication ✓. Keep stacking.' },
    { type: 'flex', content: '🎮 GAME NIGHT PASS: 2 hours of whatever you want. Total brain-off time earned.' },
    { type: 'meal', content: '🍦 ICE CREAM + CHILL: Go outside. Eat something cold. Walk. The algorithm will still be there.' },
    { type: 'quote', content: '🌟 You are in the top 5% of students who actually follow structured plans. That\'s rare.' },
    { type: 'flex', content: '📺 BINGE PASS: Watch one episode you\'ve been putting off. 1 episode. Guilt-free.' },
    { type: 'meal', content: '🍜 FEAST UNLOCKED: Tonight someone else cooks. Order out, call family for dinner.' },
    { type: 'quote', content: '🏆 You\'ve proven you show up even on hard days. JPMC will notice that discipline.' },
    { type: 'flex', content: '🛁 SELF-CARE DAY: Long shower. Nap. Journal. Productivity tomorrow will be 2x.' },
  ];
  // Deterministic based on date
  const seed = dateStr.split('-').reduce((a, b) => a + parseInt(b), 0);
  return surprises[seed % surprises.length];
}
export const PHASES = [
  { name: 'Phase 1', startDay: 1, endDay: 30 },
  { name: 'Phase 2', startDay: 31, endDay: 60 },
  { name: 'Phase 3', startDay: 61, endDay: 90 },
];

export function getTotalDays() {
  return 90;
}

export const PHASE_DETAILS_APP = [
  { id: 1, name: 'Java + DSA', icon: '☕', color: '#ff6b1a' },
  { id: 2, name: 'College + DSA', icon: '🎓', color: '#c77dff' },
  { id: 3, name: 'Interview Forge', icon: '⚔️', color: '#4d96ff' },
  { id: 4, name: 'Placement Mode', icon: '🎯', color: '#ffd93d' },
  { id: 5, name: 'Final Push', icon: '🚀', color: '#6bcb77' },
]

export const BREAK_DAYS = [];

export const SHRADHA_SHEET = 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt';

export function getDayNumber(dateStr) {
  const start = new Date(SCHEDULE_START);
  const target = new Date(dateStr);
  const diff = Math.floor((target - start) / (1000 * 60 * 60 * 24));
  return diff + 1;
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
