#!/bin/bash
# MASTER SETUP — Paste this ENTIRE file into terminal
# OR: chmod +x run_all.sh && ./run_all.sh

set -e

echo "🚀 Starting Summer Break Crack setup..."

bash setup_part1.sh
bash setup_part2.sh
bash setup_part3.sh
bash setup_part4.sh
bash setup_part5.sh

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ ALL FILES WRITTEN"
echo ""
echo "STEP 1: Add your Supabase keys to .env"
echo "STEP 2: npm install"
echo "STEP 3: npm run dev"
echo "STEP 4: Deploy → vercel --prod"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
