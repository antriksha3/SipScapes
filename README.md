# SipScapes

*A warm, tactile scrapbook for the small moments that happen around a cup of coffee.*

## Overview

SipScapes is a mobile-first React application that reimagines a coffee log as a personal journal. Instead of focusing on caffeine tracking, it lets users capture the small moments attached to a cup of coffee — a rainy afternoon, a finished book, a playlist, a mood, or a quiet moment — and revisit them through a scrapbook-style timeline.

The experience uses a cream-paper and espresso-brown visual language, polaroid-inspired cards, handwritten typography, coffee-ring motifs, and a custom transition animation to make the interface feel closer to a physical journal than a conventional tracking application.

## ✨ Highlights

- **Coffee-ring page transition** — a custom `CoffeeTransition` animation reinforces the coffee/journal theme during navigation.
- **Journal entry creation** — users can create memories containing coffee details, notes, moods, and related information.
- **Persisted journal state** — journal data is managed through `JournalContext` and persisted with `localStorage`.
- **Cross-screen draft state** — the Create Memory and Mood screens share an in-progress draft, allowing users to move between them without losing entered information.
- **Timeline search and mood filtering** — journal entries can be explored through the scrapbook timeline.
- **Statistics and profile views** — the app provides a visual summary of journaling activity, streaks, and profile information.
- **Night café mode** — the Settings screen provides a persisted dark-mode preference.
- **Framer Motion interactions** — selected interactions use Framer Motion for smoother onboarding and mood-selection animations.
- **Responsive phone-frame presentation** — the interface is designed around a mobile device frame while remaining presentable on larger screens.

## 🎨 Design & UX

SipScapes follows a warm editorial visual system built around cream paper, espresso brown, rust, gold, and sage tones. The interface combines:

- **Fraunces** for display headings
- **Work Sans** for interface and body text
- **Caveat** for handwritten-style notes and captions

Polaroid-style cards, paper textures, coffee-ring effects, handwritten elements, and subtle motion are used throughout the experience to maintain the scrapbook metaphor.

The application is designed mobile-first, with the main experience presented inside a centered phone-style frame on larger screens.

## 🧩 Key Screens / User Flow

The application opens with a splash screen and onboarding experience before moving into the main journaling interface.

```text
Splash → Onboarding → Home ⇄ Timeline → Memory Detail
                         ↕
                      Create Memory ⇄ Mood
                         ↕
                 Statistics · Profile → Settings
```

| Screen | Route | Purpose |
|---|---|---|
| **Splash** | `/` | Brand introduction and entry point to the application. |
| **Onboarding** | `/onboarding` | Three-slide introduction to the SipScapes concept. |
| **Home** | `/home` | Daily greeting, quick mood prompt, and recent memories. |
| **Timeline** | `/timeline` | Scrapbook feed with journal entries, search, and mood filtering. |
| **Memory Detail** | `/memory/:id` | Detailed view of an individual journal entry. |
| **Create Memory** | `/create` | Flow for creating a new journal memory. |
| **Mood** | `/mood` | Mood selection screen connected to the Create Memory draft. |
| **Statistics** | `/stats` | Visual overview of journaling activity and statistics. |
| **Profile** | `/profile` | Journal statistics, badges, collections, and profile information. |
| **Settings** | `/settings` | Appearance and journal preferences. |

## 🏗️ Project Structure

```text
SipScapes/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.module.css
    ├── components/
    │   ├── BottomNavigation/
    │   └── CoffeeTransition/
    ├── pages/
    │   ├── SplashPage.jsx
    │   ├── OnboardingPage.jsx
    │   ├── HomePage.jsx
    │   ├── TimelinePage.jsx
    │   ├── MemoryDetailPage.jsx
    │   ├── CreateMemoryPage.jsx
    │   ├── MoodPage.jsx
    │   ├── ProfilePage.jsx
    │   ├── StatisticsPage.jsx
    │   └── SettingsPage.jsx
    ├── context/
    │   ├── JournalContext.jsx
    │   └── ThemeContext.jsx
    ├── hooks/
    │   ├── useCoffeeRipple.js
    │   └── useLocalStorage.js
    ├── data/
    │   └── seedEntries.js
    └── styles/
        └── tokens.css
```

### Architecture

- **`App.jsx`** — defines the route structure and shared application shell.
- **`main.jsx`** — mounts the React application and configures `BrowserRouter` with the `/SipScapes` GitHub Pages basename.
- **`pages/`** — contains the route-level screens.
- **`components/`** — contains reusable interface components such as the bottom navigation and coffee transition.
- **`context/`** — manages journal data and theme state across screens.
- **`hooks/`** — contains reusable persistence and navigation-animation logic.
- **`data/`** — contains the initial seed journal data.
- **`styles/`** — contains global design tokens used across the application.
- **`.github/workflows/`** — contains the GitHub Actions deployment workflow.

## ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Component-based application UI. |
| **Vite** | Development server and production build tooling. |
| **JavaScript / JSX** | Application logic and UI implementation. |
| **React Router** | Client-side routing between application screens. |
| **Framer Motion** | Selected UI and transition animations. |
| **CSS / CSS Modules** | Global design tokens and scoped component styling. |
| **Web Storage API (`localStorage`)** | Persistence for client-side journal and preference data. |
| **ESLint** | Code quality and React linting. |

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/antriksha3/SipScapes.git
cd SipScapes
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The Vite development server runs on:

```text
http://localhost:5173
```

## 📦 Build for Production

Create a production build with:

```bash
npm run build
```

The generated static files are placed in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

SipScapes is deployed as a Vite project site using **GitHub Pages** and **GitHub Actions**.

### GitHub Pages configuration

Because the repository is named `SipScapes`, the project is served from:

```text
https://antriksha3.github.io/SipScapes/
```

The Vite configuration uses:

```js
base: '/SipScapes/',
```

The application also uses React Router's `BrowserRouter` with:

```jsx
<BrowserRouter basename="/SipScapes">
```

This keeps client-side routes under the GitHub Pages project path.

### Live application

**[Open SipScapes](https://antriksha3.github.io/SipScapes/)**

Example routes:

```text
https://antriksha3.github.io/SipScapes/
https://antriksha3.github.io/SipScapes/onboarding
https://antriksha3.github.io/SipScapes/home
https://antriksha3.github.io/SipScapes/timeline
```

### Automatic deployment

The repository contains a GitHub Actions workflow under:

```text
.github/workflows/deploy.yml
```

The workflow builds the Vite application and publishes the generated `dist/` output to GitHub Pages whenever changes are pushed to the `main` branch.

## 🧠 Architecture / Implementation Notes

- **Component-based architecture** keeps route-level screens separate from reusable interface elements.
- **Two React contexts** manage shared journal state and theme state.
- **`useLocalStorage`** provides client-side persistence without requiring a backend.
- **`useCoffeeRipple`** connects route changes to the signature coffee-ring transition.
- **React Router** provides navigation between the ten application screens.
- **Seed data** provides initial journal content for the application experience.

## 🔮 Future Improvements

- Add a real backend/database for cross-device journal synchronization.
- Add authentication so journal entries can belong to individual accounts.
- Support actual image uploads instead of placeholder visual treatments.
- Expand Timeline filtering with date ranges, multiple moods, and sorting.
- Add cloud backup and export functionality.
- Further improve accessibility, including keyboard navigation, screen-reader support, and contrast auditing.
- Package the application as a PWA with offline support and installability.

## 👩‍💻 Author

**Antriksha Sharma**  
B.Tech Mechanical Engineering, NIT Delhi

---

*SipScapes — every cup, a small memory.*
