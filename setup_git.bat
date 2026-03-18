@echo off
cd /d "c:\Users\looka\Documents\dev\US_website\US_website"
git init
git add .
git commit -m "Initial commit: US website with Vite + Hono"
echo.
echo === Git initialized and committed! ===
echo Now run: git remote add origin YOUR_REPO_URL
echo Then run: git push -u origin main
pause
