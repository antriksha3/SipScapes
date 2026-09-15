import { createContext, useContext, useMemo, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { seedEntries } from '../data/seedEntries';

const JournalContext = createContext(null);

function makeId() {
  return `entry-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function JournalProvider({ children }) {
  const [entries, setEntries] = useLocalStorage('sipscapes:entries', seedEntries);
  const [streak, setStreak] = useLocalStorage('sipscapes:streak', {
    current: 12,
    best: 19,
  });

  const addEntry = useCallback(
    (entry) => {
      const newEntry = {
        id: makeId(),
        dateLabel: 'today',
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
        moods: [],
        tags: [],
        photoGradient: 'linear-gradient(150deg,#c6a379,#6e4526)',
        brew: null,
        book: null,
        playlist: null,
        ...entry,
      };
      setEntries((prev) => [newEntry, ...prev]);
      setStreak((prev) => ({ ...prev, current: prev.current + 1, best: Math.max(prev.best, prev.current + 1) }));
      return newEntry.id;
    },
    [setEntries, setStreak]
  );

  const updateEntry = useCallback(
    (id, patch) => {
      setEntries((prev) => prev.map((e) => (e.id === id ? { ...e, ...patch } : e)));
    },
    [setEntries]
  );

  const deleteEntry = useCallback(
    (id) => {
      setEntries((prev) => prev.filter((e) => e.id !== id));
    },
    [setEntries]
  );

  const getEntry = useCallback((id) => entries.find((e) => e.id === id), [entries]);

  const searchEntries = useCallback(
    (query, moodFilter) => {
      const q = query?.trim().toLowerCase();
      return entries.filter((e) => {
        const matchesQuery =
          !q ||
          e.coffee?.toLowerCase().includes(q) ||
          e.note?.toLowerCase().includes(q) ||
          e.place?.toLowerCase().includes(q);
        const matchesMood = !moodFilter || e.moods?.includes(moodFilter);
        return matchesQuery && matchesMood;
      });
    },
    [entries]
  );

  // Derived statistics for the Statistics + Profile screens
  const stats = useMemo(() => {
    const origins = {};
    entries.forEach((e) => {
      const key = e.coffee?.split(',')[0]?.trim() || 'Unknown';
      origins[key] = (origins[key] || 0) + 1;
    });
    const totalPages = entries.length;
    return { origins, totalPages };
  }, [entries]);

  const value = useMemo(
    () => ({
      entries,
      streak,
      addEntry,
      updateEntry,
      deleteEntry,
      getEntry,
      searchEntries,
      stats,
    }),
    [entries, streak, addEntry, updateEntry, deleteEntry, getEntry, searchEntries, stats]
  );

  return <JournalContext.Provider value={value}>{children}</JournalContext.Provider>;
}

export function useJournal() {
  const ctx = useContext(JournalContext);
  if (!ctx) throw new Error('useJournal must be used within a JournalProvider');
  return ctx;
}
