@echo off
cd /d "c:\Users\looka\Documents\dev\US_website"

echo === Checking git status ===
git log --oneline -3 2>nul || echo "No commits yet"
echo.

echo === Adding all files ===
git add .
git status --short
echo.

echo === Committing (skip if already committed) ===
git commit -m "Initial commit: US website with Vite + Hono" 2>nul
echo.

echo === Setting remote to lookat222/US_website ===
git remote remove origin 2>nul
git remote add origin https://github.com/lookat222/US_website.git
echo Remote set to: https://github.com/lookat222/US_website.git
echo.

echo === Setting branch to main ===
git branch -M main
echo.

echo === Pushing to GitHub ===
git push -u origin main

echo.
echo ================================
echo Done! Check above for any errors.
echo Next step: Go to Vercel to deploy
echo ================================
pause
