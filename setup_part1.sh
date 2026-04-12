#!/bin/bash

# ============================================================
# SUMMER BREAK CRACK — Complete Setup Script
# Paste this entire file into your terminal line by line
# OR: chmod +x setup.sh && ./setup.sh
# ============================================================

mkdir -p crackit-prep/src/components
mkdir -p crackit-prep/src/data
mkdir -p crackit-prep/src/lib
mkdir -p crackit-prep/public
cd crackit-prep

# ── package.json ─────────────────────────────────────────────
cat > package.json << 'PKGJSON'
{
  "name": "crackit-prep",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2",
    "@supabase/supabase-js": "^2.45.4",
    "three": "^0.168.0",
    "@react-three/fiber": "^8.17.10",
    "@react-three/drei": "^9.112.0",
    "framer-motion": "^11.9.0",
    "lucide-react": "^0.453.0",
    "date-fns": "^3.6.0",
    "date-fns-tz": "^3.1.3",
    "clsx": "^2.1.1",
    "react-confetti": "^6.1.0",
    "canvas-confetti": "^1.9.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "vite": "^5.4.8"
  }
}
PKGJSON

# ── vite.config.js ───────────────────────────────────────────
cat > vite.config.js << 'VITE'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()] })
VITE

# ── tailwind.config.js ───────────────────────────────────────
cat > tailwind.config.js << 'TAILWIND'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        neon: {
          orange: "#ff6b1a",
          yellow: "#ffd93d",
          green:  "#6bcb77",
          blue:   "#4d96ff",
          purple: "#c77dff",
          pink:   "#ff6b9d",
        },
        dark: {
          900: "#0a0a0f",
          800: "#0f0f1a",
          700: "#151520",
          600: "#1a1a2e",
          500: "#252540",
        }
      },
      animation: {
        "float":      "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-up":   "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "spin-slow":  "spin 8s linear infinite",
      },
      keyframes: {
        float:        { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-20px)" } },
        "pulse-glow": { "0%,100%": { boxShadow: "0 0 20px rgba(255,107,26,0.3)" }, "50%": { boxShadow: "0 0 60px rgba(255,107,26,0.8)" } },
        slideUp:      { "0%": { transform: "translateY(30px)", opacity: 0 }, "100%": { transform: "translateY(0)", opacity: 1 } },
      },
    },
  },
  plugins: [],
}
TAILWIND

# ── postcss.config.js ────────────────────────────────────────
cat > postcss.config.js << 'POSTCSS'
export default { plugins: { tailwindcss: {}, autoprefixer: {} } }
POSTCSS

# ── index.html ───────────────────────────────────────────────
cat > index.html << 'HTML'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Summer Break Crack — FAANG Prep 2026</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; }
      html, body { margin: 0; padding: 0; background: #0a0a0f; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #0f0f1a; }
      ::-webkit-scrollbar-thumb { background: #ff6b1a; border-radius: 3px; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
HTML

# ── public/favicon.svg ───────────────────────────────────────
cat > public/favicon.svg << 'FAV'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#0a0a0f"/>
  <text x="16" y="22" font-size="18" text-anchor="middle" font-family="sans-serif">☀️</text>
</svg>
FAV

# ── .env ─────────────────────────────────────────────────────
cat > .env << 'ENVFILE'
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
ENVFILE

# ── src/main.jsx ─────────────────────────────────────────────
cat > src/main.jsx << 'MAIN'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
MAIN

# ── src/index.css ────────────────────────────────────────────
cat > src/index.css << 'CSS'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { font-family: 'DM Sans', sans-serif; }
  body { background: #0a0a0f; color: #e8e6e0; }
}

@layer components {
  .glass { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(12px); }
  .glass-strong { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); backdrop-filter: blur(20px); }
  .neon-orange { box-shadow: 0 0 20px rgba(255,107,26,0.4), 0 0 60px rgba(255,107,26,0.15); }
  .gradient-text { background: linear-gradient(135deg,#ff6b1a 0%,#ffd93d 50%,#ff6b9d 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
}

@keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
@keyframes orbFloat { 0%,100%{transform:translate(0,0) scale(1);opacity:.15} 33%{transform:translate(30px,-40px) scale(1.1);opacity:.25} 66%{transform:translate(-20px,20px) scale(.95);opacity:.1} }
@keyframes bounceIn { 0%{transform:scale(0) rotate(-10deg);opacity:0} 60%{transform:scale(1.1) rotate(2deg);opacity:1} 100%{transform:scale(1) rotate(0);opacity:1} }
@keyframes pulse-glow { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.7;transform:scale(1.05)} }

.orb { position:fixed; border-radius:50%; filter:blur(80px); pointer-events:none; z-index:0; animation:orbFloat 15s ease-in-out infinite; }
.orb-1 { width:600px; height:600px; background:radial-gradient(circle,rgba(255,107,26,.15),transparent 70%); top:-200px; left:-100px; }
.orb-2 { width:500px; height:500px; background:radial-gradient(circle,rgba(199,125,255,.1),transparent 70%); bottom:10%; right:-100px; animation-delay:-5s; }
.orb-3 { width:400px; height:400px; background:radial-gradient(circle,rgba(77,150,255,.1),transparent 70%); top:40%; left:30%; animation-delay:-10s; }

.shimmer-text { background:linear-gradient(90deg,#ff6b1a,#ffd93d,#ff6b9d,#c77dff,#ff6b1a); background-size:400% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:gradientShift 4s linear infinite; }
.surprise-card { animation:bounceIn .8s cubic-bezier(.34,1.56,.64,1) forwards; }

.task-checkbox { appearance:none; width:22px; height:22px; border:2px solid rgba(255,255,255,.2); border-radius:6px; cursor:pointer; transition:all .2s ease; flex-shrink:0; position:relative; }
.task-checkbox:checked { background:#ff6b1a; border-color:#ff6b1a; box-shadow:0 0 12px rgba(255,107,26,.6); }
.task-checkbox:checked::after { content:'✓'; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:white; font-size:13px; font-weight:700; }
.task-checkbox:hover { border-color:#ff6b1a; box-shadow:0 0 8px rgba(255,107,26,.3); }

::-webkit-scrollbar { width:5px; }
::-webkit-scrollbar-track { background:#0f0f1a; }
::-webkit-scrollbar-thumb { background:linear-gradient(#ff6b1a,#c77dff); border-radius:3px; }

input[type="text"], textarea { background:rgba(255,255,255,.05)!important; border:1px solid rgba(255,255,255,.1)!important; color:#e8e6e0!important; border-radius:8px!important; padding:8px 12px!important; font-family:'DM Sans',sans-serif!important; font-size:14px!important; transition:border-color .2s!important; outline:none!important; }
input[type="text"]:focus, textarea:focus { border-color:rgba(255,107,26,.5)!important; box-shadow:0 0 0 2px rgba(255,107,26,.1)!important; }
CSS

echo "✅ Config files done. Writing source files..."
