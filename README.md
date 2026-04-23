# 🌐 Personal Portfolio — React + React Router

A sleek, dark-themed personal portfolio built with React, React Router (HashRouter), and deployed via GitHub Pages.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html              ← HTML entry point (Google Fonts loaded here)
├── src/
│   ├── components/
│   │   ├── Navbar.js           ← Responsive navbar with NavLink
│   │   └── ProjectCard.js      ← Reusable project card component
│   ├── pages/
│   │   ├── Home.js             ← Home page (About, Skills, Details, Research)
│   │   └── Projects.js         ← Projects listing page
│   ├── styles/
│   │   ├── global.css          ← Design system variables, resets, animations
│   │   ├── Navbar.css          ← Navbar styles + mobile hamburger menu
│   │   ├── Home.css            ← Hero, details grid, skills, research sections
│   │   ├── ProjectCard.css     ← Card hover effects and layout
│   │   └── Projects.css        ← Projects page layout
│   ├── App.js                  ← HashRouter + Routes setup
│   └── index.js                ← ReactDOM entry point
└── package.json                ← Dependencies + gh-pages deploy scripts
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js (v16 or higher) — download from https://nodejs.org
- npm (comes with Node.js)
- Git

### Steps

**1. Download / clone the project**
```bash
# If you received the folder, just open it in a terminal.
# Or clone your own GitHub repo after pushing:
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm start
```

The app opens automatically at **http://localhost:3000**. Hot-reload is enabled — any change you save updates the browser instantly.

---

## ✏️ Customise Your Info

Open `src/pages/Home.js` and edit the `PERSONAL` object at the top:

```js
const PERSONAL = {
  name: 'Sai',
  fullName: 'Sai Your Last Name',
  phone: '+91 98765 43210',
  personalEmail: 'your@gmail.com',
  collegeEmail: 'your@college.edu',
  role: 'Computer Science Student',
  college: 'Your College Name',
  // ...
};
```

Open `src/pages/Projects.js` and edit the `PROJECTS` array:

```js
const PROJECTS = [
  {
    title: 'Your Project Title',
    description: 'What you built and what it does...',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/your-username/repo-name',
    icon: '🚀',
  },
  // Add more projects here
];
```

### Add a Profile Picture

1. Place your image (e.g. `profile.jpg`) inside the `public/` folder.
2. In `src/pages/Home.js`, find the avatar section and replace the initials block with:

```jsx
<img src={process.env.PUBLIC_URL + '/profile.jpg'} alt={PERSONAL.name} />
```

---

## 🌍 Deploy to GitHub Pages

### Step 1 — Create a GitHub Repo

1. Go to https://github.com → click **New repository**
2. Name it **portfolio**
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Update `package.json`

Open `package.json` and change the `homepage` field:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/portfolio"
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

### Step 3 — Push to GitHub

Run these commands in your project folder:

```bash
git init
git add .
git commit -m "initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/portfolio.git
git push -u origin main
```

Verify your code is visible on GitHub before continuing.

### Step 4 — Install gh-pages (already in package.json)

```bash
npm install gh-pages --save-dev
```

### Step 5 — Deploy

```bash
npm run deploy
```

This runs `npm run build` first (the `predeploy` script), then pushes the `build/` folder to the `gh-pages` branch.

### Step 6 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select branch: **gh-pages**, folder: **/ (root)**
4. Click **Save**

Your site will be live at:
**https://YOUR-GITHUB-USERNAME.github.io/portfolio**

> ⏱ It may take 2–5 minutes for the site to go live after first deploy.

### Updating Later

Whenever you make changes, run:

```bash
npm run deploy
```

This rebuilds and re-deploys automatically.

---

## ❓ Troubleshooting

| Problem | Fix |
|---|---|
| `npm: command not found` | Install Node.js from https://nodejs.org |
| Blank page on GitHub Pages | Make sure `HashRouter` is used (not `BrowserRouter`) |
| Images not showing on deployed site | Use `process.env.PUBLIC_URL + '/image.jpg'` for paths |
| `gh-pages` command not found | Run `npm install` again |
| Changes not visible after deploy | Wait 2–3 minutes, then hard-refresh (Ctrl+Shift+R) |

---

## 🔧 Key Technical Decisions

- **HashRouter** — Used instead of BrowserRouter because GitHub Pages doesn't support server-side URL rewriting. HashRouter uses `#` in URLs, which works perfectly with static hosting.
- **NavLink** — Automatically applies the `active` class to the currently-visited page link for visual feedback.
- **CSS Variables** — The entire design system is defined in `:root` inside `global.css`, making it easy to retheme by changing a few values.
- **Animations** — Pure CSS `@keyframes` (no animation library needed), with `animation-delay` used to create staggered entrance effects.

---

## 📋 Submission Checklist

- [ ] GitHub repository is **public**
- [ ] `package.json` has `homepage`, `predeploy`, and `deploy` fields
- [ ] App uses **HashRouter**
- [ ] All **NavLinks** work correctly
- [ ] At least **2 projects** shown with GitHub links
- [ ] Personal details filled in (name, phone, emails, skills)
- [ ] Site is **live on GitHub Pages**
- [ ] All links tested and working

