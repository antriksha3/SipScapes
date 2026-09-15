import { NavLink, useLocation } from 'react-router-dom';
import styles from './BottomNavigation.module.css';

// Screens that hide the tab bar entirely, matching the original
// updateTabbar() hideOn list from the prototype.
const HIDDEN_ON = ['/', '/onboarding', '/mood'];

const TABS = [
  {
    to: '/home',
    label: 'Home',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 11l9-8 9 8" />
        <path d="M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    to: '/timeline',
    label: 'Timeline',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    to: '/create',
    label: 'Create a new journal entry',
    isCreate: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
  },
  {
    to: '/stats',
    label: 'Stats',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 20V10M12 20V4M20 20v-7" />
      </svg>
    ),
  },
  {
    to: '/profile',
    label: 'Profile',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
      </svg>
    ),
  },
];

export default function BottomNavigation() {
  const location = useLocation();
  const isDetailRoute = location.pathname.startsWith('/memory/');

  if (HIDDEN_ON.includes(location.pathname) || isDetailRoute) return null;

  return (
    <nav className={styles.tabbar} aria-label="Primary">
      {TABS.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          aria-label={tab.label}
          className={({ isActive }) =>
            `${styles.tab} ${tab.isCreate ? styles.tabCreate : ''} ${isActive ? styles.active : ''}`
          }
        >
          {tab.icon}
          {!tab.isCreate && tab.label}
        </NavLink>
      ))}
    </nav>
  );
}
