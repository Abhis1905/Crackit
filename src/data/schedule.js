// schedule.js — helpers & constants used across the app
export { MASTER_SCHEDULE, SCHEDULE_START, getScheduleByDate, getScheduleByDayNum } from './schedule_data';

export const NEETCODE_ROADMAP = 'https://neetcode.io/roadmap';
export const DSA_SHEET = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/';
export const SHRADHA_SHEET = 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt';
export const BREAK_DAYS = new Set([]);

export const PHASES = [
  { id: 1, name: 'Java + DSA',       icon: '☕', color: '#ff6b1a' },
  { id: 2, name: 'College + DSA',    icon: '🎓', color: '#c77dff' },
  { id: 3, name: 'Interview Forge',  icon: '⚔️', color: '#4d96ff' },
  { id: 4, name: 'Placement Mode',   icon: '🎯', color: '#ffd93d' },
  { id: 5, name: 'Final Push',       icon: '🚀', color: '#6bcb77' },
];

export function getTotalDays() { return 262; }

export function getTodayIST() {
  const now = new Date();
  const istDate = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
  return istDate.toISOString().split('T')[0];
}

export function getDayNumber(dateStr) {
  const start = new Date('2026-04-14');
  const target = new Date(dateStr);
  return Math.floor((target - start) / (1000 * 60 * 60 * 24)) + 1;
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function isDatePast(dateStr)   { return dateStr < getTodayIST(); }
export function isDateToday(dateStr)  { return dateStr === getTodayIST(); }
export function isDateFuture(dateStr) { return dateStr > getTodayIST(); }

export function getRandomSurprise(dateStr) {
  const surprises = [
    { type: 'meal',  content: '🍕 CHEAT MEAL UNLOCKED! You earned it. Order whatever you want tonight. No guilt.' },
    { type: 'quote', content: '🔥 The person who finished today is going to get the job. Keep that identity alive.' },
    { type: 'flex',  content: '💪 REST BONUS: Tomorrow is optional review only. Recharge. Sleep 8 hrs.' },
    { type: 'meal',  content: '🍔 You crushed it. Tonight: your favourite comfort food. Balance is not weakness.' },
    { type: 'quote', content: '⚡ MILESTONE: DSA ✓ Projects ✓ Communication ✓. Keep stacking.' },
    { type: 'flex',  content: '🎮 GAME NIGHT PASS: 2 hours of whatever you want. Total brain-off time earned.' },
    { type: 'meal',  content: '🍦 ICE CREAM + CHILL: Go outside. Eat something cold. Walk.' },
    { type: 'quote', content: '🌟 You are in the top 5% of students who actually follow structured plans.' },
    { type: 'flex',  content: '📺 BINGE PASS: Watch one episode you\'ve been putting off. Guilt-free.' },
    { type: 'meal',  content: '🍜 FEAST UNLOCKED: Tonight someone else cooks. Order out.' },
    { type: 'quote', content: '🏆 You\'ve proven you show up even on hard days. JPMC will notice that.' },
    { type: 'flex',  content: '🛁 SELF-CARE DAY: Long shower. Nap. Journal. Productivity tomorrow 2x.' },
  ];
  const seed = dateStr.split('-').reduce((a, b) => a + parseInt(b), 0);
  return surprises[seed % surprises.length];
}
