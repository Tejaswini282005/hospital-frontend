# Hospital Frontend (Vite + React)

This project is a simple React frontend for the Hospital Management System.
It expects a backend API running at http://localhost:8081

## How to use

1. Install dependencies:
   ```
   npm install
   ```
2. Run locally:
   ```
   npm run dev
   ```
3. Build:
   ```
   npm run build
   ```

## GitHub Pages Deployment

A GitHub Actions workflow is included which builds and deploys the `dist` to GitHub Pages when you push to `main`.
After uploading this repo to GitHub, enable GitHub Pages from the `gh-pages` branch (the workflow will create/update it).
