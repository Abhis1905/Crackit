// Fullschedule.js — adapter that maps MASTER_SCHEDULE to the format DailyView expects
import { MASTER_SCHEDULE } from '../data/schedule_data';

export function getFullSchedule(dateStr) {
  const day = MASTER_SCHEDULE.find(d => d.date === dateStr);
  if (!day) return null;

  return {
    phase: day.phase,
    day: day.dayNum,
    week: day.week,
    title: day.title,
    tip: day.tip,
    commQuote: day.commQuote || null,
    aptQuote: day.aptQuote || null,
    isBreak: day.isBreak,
    isSunday: day.isSunday,
    timeBlocks: day.timeBlocks || [],
    practice: day.practice || [],
    communication: day.communication || null,
    surprises: day.surprises || null,
  };
}