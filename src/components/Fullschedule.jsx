import {
  getScheduleByDate,
  getDayNumber,
  getPhase,
  isSunday,
  isVacation,
  isWeekend,
} from '../data/schedule';

export function getFullSchedule(dateStr) {
  const entry = getScheduleByDate(dateStr);
  if (!entry) return null;

  const TYPE_MAP = {
    dsa:      'sheet',
    java:     'lecture',
    frontend: 'build',
    backend:  'build',
    aptitude: 'aptitude',
    oops:     'lecture',
    sql:      'lecture',
    practice: 'practice',
  };

  const practice = (entry.tasks || []).map((task, i) => ({
    id:          task.id || `t${i}`,
    label:       task.label,
    type:        TYPE_MAP[task.type] || task.type || 'practice',
    link:        task.link || null,
    needsVerify: task.type === 'dsa',
  }));

  const vacation = isVacation(dateStr);
  const weekend  = isWeekend(dateStr);

  return {
    title:         entry.title,
    phase:         entry.phase,
    day:           getDayNumber(dateStr),
    hours:         entry.hours,
    isSunday:      isSunday(dateStr),
    isBreak:       false,
    tip:           vacation
                     ? '🏖️ Vacation mode — full sessions, no excuses.'
                     : weekend
                     ? '📅 Weekend — longer sessions. Push harder.'
                     : '🎓 College day — evening grind. 3 tasks minimum.',
    timeBlocks:    [],
    practice,
    communication: null,
  };
}