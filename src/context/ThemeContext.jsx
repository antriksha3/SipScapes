import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isNight, setIsNight] = useLocalStorage('sipscapes:nightMode', false);

  // Mirror the .night class onto <body>, exactly like the original prototype's
  // toggleTheme() did, so every existing CSS selector (body.night ...) keeps working.
  useEffect(() => {
    document.body.classList.toggle('night', isNight);
  }, [isNight]);

  const toggleTheme = () => setIsNight((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isNight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
