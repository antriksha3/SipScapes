import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MoodPage() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    ['🌧️', 'rainy'],
    ['☀️', 'golden'],
    ['📖', 'reading'],
    ['🎧', 'lo-fi'],
    ['🐾', 'cozy'],
    ['✍️', 'reflective'],
    ['🤍', 'quiet'],
    ['🍂', 'autumn'],
    ['🕯️', 'evening'],
  ];

  return (
    <section
      style={{
        minHeight: '100%',
        background: 'var(--paper)',
        color: 'var(--ink)',
        paddingBottom: 90,
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '18px 26px 4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => navigate('/create')}
          style={{
            border: 'none',
            background: 'transparent',
            color: 'var(--ink)',
            fontSize: 24,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          ←
        </button>

        <span
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            color: 'var(--rust)',
            fontWeight: 700,
          }}
        >
          How's this cup feel?
        </span>

        <span style={{ width: 38 }} />
      </div>

      {/* Mood grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 14,
          padding: '20px 26px 10px',
        }}
      >
        {moods.map(([emoji, label]) => {
          const selected = selectedMood === label;

          return (
            <button
              key={label}
              onClick={() => setSelectedMood(label)}
              style={{
                aspectRatio: '1',
                borderRadius: 18,
                background: selected
                  ? 'var(--rust)'
                  : 'var(--card)',
                border: selected
                  ? '1.5px solid var(--rust)'
                  : '1.5px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                fontSize: 11.5,
                fontWeight: 600,
                color: selected ? '#fbf3e6' : 'var(--ink-soft)',
                cursor: 'pointer',
                transform: selected
                  ? 'rotate(-3deg) scale(1.04)'
                  : 'none',
                transition: '.25s',
              }}
            >
              <span
                style={{
                  fontSize: 28,
                }}
              >
                {emoji}
              </span>

              {label}
            </button>
          );
        })}
      </div>

      {/* Save */}
      <div
        style={{
          margin: '20px 26px 0',
        }}
      >
        <button
          onClick={() => navigate('/create')}
          style={{
            width: '100%',
            padding: '14px',
            border: 'none',
            borderRadius: 12,
            background: 'var(--rust)',
            color: '#fff',
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Save mood
        </button>
      </div>
    </section>
  );
}
