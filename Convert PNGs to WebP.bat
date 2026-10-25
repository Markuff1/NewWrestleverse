@echo off
REM Double-click to convert every PNG under public\Images to WebP (the PNGs are deleted after converting).
REM A PNG that's newer than an existing WebP of the same name replaces that WebP.
cd /d "%~dp0"
echo Converting PNGs in public\Images to WebP...
echo.
node scripts\convert-to-webp.mjs
echo.
pause
