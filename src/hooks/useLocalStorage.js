import { useState, useEffect, useCallback } from 'react';

/**
 * useLocalStorage
 * Syncs a piece of state with localStorage under the given key.
 * Falls back to `initialValue` (or the result of calling it, if a function)
 * when nothing is stored yet or JSON parsing fails.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored !== null) return JSON.parse(stored);
    } catch (err) {
      console.warn(`useLocalStorage: failed to read "${key}"`, err);
    }
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`useLocalStorage: failed to write "${key}"`, err);
    }
  }, [key, value]);

  const remove = useCallback(() => {
    window.localStorage.removeItem(key);
  }, [key]);

  return [value, setValue, remove];
}
