/**
 * Seed journal entries — mirrors the hand-authored content from the
 * original HTML prototype (Timeline, Home "recent pages" strip, and
 * Memory Detail screens), reshaped into structured data so the UI
 * can render any number of entries dynamically.
 */
export const MOOD_OPTIONS = [
  { emoji: '🌧️', label: 'rainy' },
  { emoji: '☀️', label: 'golden' },
  { emoji: '📖', label: 'reading' },
  { emoji: '🎧', label: 'lo-fi' },
  { emoji: '🐾', label: 'cozy' },
  { emoji: '✍️', label: 'reflective' },
  { emoji: '🤍', label: 'quiet' },
  { emoji: '🍂', label: 'autumn' },
  { emoji: '🕯️', label: 'evening' },
];

export const seedEntries = [
  {
    id: 'entry-1',
    coffee: 'Ethiopia Yirgacheffe',
    method: 'pour over',
    place: 'kitchen table',
    date: '2026-03-12',
    time: '9:14am',
    dateLabel: 'today',
    note:
      "the kind of morning where nothing needs to happen. finished the last page of the book I'd been carrying around for weeks — felt like closing a small door gently.",
    caption: 'steam fogging the window',
    photoGradient: 'linear-gradient(150deg,#c6a379,#6e4526)',
    moods: ['rainy', 'reading'],
    tags: ['☕ pour over', '📖 finished a book'],
    brew: { temp: '92°C', time: '3:30', method: 'V60', ratio: '1:16' },
    book: { title: 'a novel about long winters', author: 'finished today' },
    playlist: { title: 'slow mornings, vol. 3', meta: 'a lo-fi playlist · 42 min' },
  },
  {
    id: 'entry-2',
    coffee: 'Oat Cortado',
    method: 'espresso',
    place: "Maren's Café",
    date: '2026-03-11',
    time: '4:32pm',
    dateLabel: 'yesterday',
    note: "lo-fi playlist, rain finally stopped.",
    caption: 'the corner seat',
    photoGradient: 'linear-gradient(150deg,#d9c39a,#6e4526)',
    moods: ['lo-fi', 'cozy'],
    tags: ['🎧 playlist', '🐾 with Biscuit'],
    brew: { temp: '94°C', time: '0:28', method: 'Espresso', ratio: '1:2' },
    book: null,
    playlist: { title: 'rain, eventually', meta: 'a lo-fi playlist · 31 min' },
  },
  {
    id: 'entry-3',
    coffee: 'Home Drip, dark roast',
    method: 'drip',
    place: 'kitchen table',
    date: '2026-03-10',
    time: '7:02am',
    dateLabel: 'this week',
    note: 'receipt from the bookstore, tucked in.',
    caption: 'slow sunday',
    photoGradient: 'linear-gradient(150deg,#b98a2e,#3a2a1c)',
    moods: ['reflective'],
    tags: ['🧾 receipt', '✍️ journaling'],
    brew: { temp: '96°C', time: '4:00', method: 'Drip', ratio: '1:17' },
    book: null,
    playlist: null,
  },
];
