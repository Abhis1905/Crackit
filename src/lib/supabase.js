import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// DB helpers
export async function getProgress(date) {
  const { data } = await supabase
    .from('daily_progress')
    .select('*')
    .eq('date', date)
    .single()
  return data
}

export async function saveProgress(date, checks, notes) {
  const { data, error } = await supabase
    .from('daily_progress')
    .upsert({ date, checks, notes, updated_at: new Date().toISOString() }, { onConflict: 'date' })
    .select()
    .single()
  if (error) console.error('Save error:', error)
  return data
}

export async function getAllProgress() {
  const { data } = await supabase
    .from('daily_progress')
    .select('*')
    .order('date', { ascending: true })
  return data || []
}

export async function getLeetcodeLog() {
  const { data } = await supabase
    .from('leetcode_log')
    .select('*')
    .order('solved_at', { ascending: false })
  return data || []
}

export async function logLeetcode(problem, difficulty, pattern, timeTaken, approach) {
  const { data } = await supabase
    .from('leetcode_log')
    .insert({ problem, difficulty, pattern, time_taken: timeTaken, approach, solved_at: new Date().toISOString() })
    .select()
    .single()
  return data
}

// SQL to create tables — paste in Supabase SQL editor:
export const SETUP_SQL = `
CREATE TABLE IF NOT EXISTS daily_progress (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  date text UNIQUE NOT NULL,
  checks jsonb DEFAULT '{}',
  notes text DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS leetcode_log (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  problem text NOT NULL,
  difficulty text DEFAULT 'Medium',
  pattern text DEFAULT 'Array',
  time_taken integer DEFAULT 25,
  approach text DEFAULT '',
  solved_at timestamptz DEFAULT now()
);

ALTER TABLE daily_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE leetcode_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all" ON daily_progress FOR ALL USING (true);
CREATE POLICY "Allow all" ON leetcode_log FOR ALL USING (true);
`
