# ☀️ Summer Break Crack — FAANG Prep 2026

Your personal tutor. Your accountability system. Your path to JPMC/PayPal.

---

## 🚀 Deploy in 30 Minutes (One Time Setup)

### Step 1: Supabase (Free Database)

1. Go to **https://supabase.com** → Sign up free
2. Create a new project (name it "crackit")
3. Go to **SQL Editor** → Run this SQL:

```sql
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
```

4. Go to **Settings → API** → Copy:
   - Project URL (looks like: `https://xxxx.supabase.co`)
   - `anon` public key

### Step 2: Create `.env` file

Create a file called `.env` in the project root:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 3: Run locally (test it works)

```bash
npm install
npm run dev
```

Open http://localhost:5173 — you should see the app.

### Step 4: Deploy to Vercel (Free, Private)

```bash
npm install -g vercel
vercel --prod
```

- When asked, select "No" for public (or set it private in Vercel dashboard)
- Add your env variables in Vercel → Settings → Environment Variables
- Your app is live at `https://your-app.vercel.app`

**To make it private:** Vercel Pro has password protection. Free alternative: add a simple password in the app or use Vercel's deployment protection (enable "Deployment Protection" in your project settings).

---

## 📱 Daily Use

1. Open your Vercel URL every morning
2. The app detects today's date in **Indian Standard Time (IST)** automatically
3. Complete your tasks → click checkboxes → answer the verification challenge
4. All 3 boxes checked = surprise unlocks 🎁
5. Progress saves to Supabase automatically

---

## 🔧 Tech Stack

- **React 18** + Vite
- **Tailwind CSS** with custom theme
- **Canvas API** for 3D animated background
- **Supabase** (PostgreSQL) for progress persistence
- **Framer Motion** for animations
- Date handling in **IST** timezone

---

Built for one person. Made to get them placed. 🔥
