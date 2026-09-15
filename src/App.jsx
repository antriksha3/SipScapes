import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { JournalProvider } from './context/JournalContext';
import CoffeeTransition from './components/CoffeeTransition/CoffeeTransition';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import { useCoffeeRipple } from './hooks/useCoffeeRipple';

import SplashPage from './pages/SplashPage';
import OnboardingPage from './pages/OnboardingPage';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import MemoryDetailPage from './pages/MemoryDetailPage';
import CreateMemoryPage from './pages/CreateMemoryPage';
import MoodPage from './pages/MoodPage';
import ProfilePage from './pages/ProfilePage';
import StatisticsPage from './pages/StatisticsPage';
import SettingsPage from './pages/SettingsPage';

import styles from './App.module.css';

function AppShell() {
  const { isFiring } = useCoffeeRipple();

  return (
    <div className={styles.appRoot}>
      <div className={styles.device}>
        <div className={styles.notch} aria-hidden="true" />
        <div className={styles.screenFrame}>
          <svg className={styles.grain} width="100%" height="100%" aria-hidden="true">
            <filter id="g">
              <feTurbulence baseFrequency="0.85" numOctaves="2" />
            </filter>
            <rect width="100%" height="100%" filter="url(#g)" />
          </svg>

          <CoffeeTransition isFiring={isFiring} />

          <div className={styles.screenStack}>
            <Routes>
              <Route path="/" element={<Screen><SplashPage /></Screen>} />
              <Route path="/onboarding" element={<Screen><OnboardingPage /></Screen>} />
              <Route path="/home" element={<Screen><HomePage /></Screen>} />
              <Route path="/timeline" element={<Screen><TimelinePage /></Screen>} />
              <Route path="/memory/:id" element={<Screen><MemoryDetailPage /></Screen>} />
              <Route path="/create" element={<Screen><CreateMemoryPage /></Screen>} />
              <Route path="/mood" element={<Screen><MoodPage /></Screen>} />
              <Route path="/profile" element={<Screen><ProfilePage /></Screen>} />
              <Route path="/stats" element={<Screen><StatisticsPage /></Screen>} />
              <Route path="/settings" element={<Screen><SettingsPage /></Screen>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          <BottomNavigation />
        </div>
      </div>
    </div>
  );
}

// Thin wrapper so every route gets the same paper-textured,
// scrollable container that .screen provided in the original prototype.
function Screen({ children }) {
  return <main className={styles.screen}>{children}</main>;
}

export default function App() {
  return (
    <ThemeProvider>
      <JournalProvider>
        <AppShell />
      </JournalProvider>
    </ThemeProvider>
  );
}
