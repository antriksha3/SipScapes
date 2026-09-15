import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateMemoryPage() {
  const navigate = useNavigate();
  const [captured, setCaptured] = useState(false);
  const [title, setTitle] = useState('');

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
          onClick={() => navigate('/home')}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: 20,
            color: 'var(--ink)',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          ✕
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
          New page
        </span>

        <span style={{ width: 38 }} />
      </div>

      {/* Capture zone */}
      <button
        onClick={() => setCaptured(true)}
        style={{
          margin: '14px 26px',
          width: 'calc(100% - 52px)',
          height: 230,
          borderRadius: 16,
          background:
            'repeating-linear-gradient(45deg, var(--paper-deep), var(--paper-deep) 10px, var(--card) 10px, var(--card) 20px)',
          border: '2px dashed var(--line)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          color: 'var(--ink-soft)',
          fontSize: 13,
          cursor: 'pointer',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="34"
          height="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7l1.5-3h5L16 7" />
          <circle cx="12" cy="13.5" r="3" />
        </svg>

        <span>{captured ? 'captured ✓' : 'tap to capture a photo'}</span>
      </button>

      {/* Attachments */}
      <div
        style={{
          display: 'flex',
          gap: 10,
          padding: '6px 26px',
          overflowX: 'auto',
        }}
      >
        {[
          ['📷', 'Photo'],
          ['🧾', 'Receipt'],
          ['📖', 'Book'],
          ['🎧', 'Playlist'],
          ['✍️', 'Note'],
        ].map(([icon, label]) => (
          <button
            key={label}
            style={{
              flexShrink: 0,
              width: 66,
              padding: '12px 6px',
              borderRadius: 14,
              background: 'var(--card)',
              border: '1px solid var(--line)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              fontSize: 10.5,
              color: 'var(--ink-soft)',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontSize: 19,
                color: 'var(--rust)',
              }}
            >
              {icon}
            </span>
            {label}
          </button>
        ))}
      </div>

      {/* Title */}
      <div
        style={{
          margin: '18px 26px 0',
        }}
      >
        <label
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.1em',
            color: 'var(--rust)',
            fontWeight: 700,
          }}
        >
          What are you drinking?
        </label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ethiopia Yirgacheffe..."
          style={{
            marginTop: 8,
            width: '100%',
            border: 'none',
            borderBottom: '1.5px solid var(--line)',
            background: 'transparent',
            fontFamily: 'Caveat, cursive',
            fontSize: 19,
            color: 'var(--ink)',
            padding: '6px 2px',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Journal note */}
      <div
        style={{
          margin: '22px 26px 0',
        }}
      >
        <label
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.1em',
            color: 'var(--rust)',
            fontWeight: 700,
          }}
        >
          A little note
        </label>

        <textarea
          placeholder="What made this cup memorable?"
          rows={3}
          style={{
            marginTop: 8,
            width: '100%',
            border: 'none',
            borderBottom: '1.5px solid var(--line)',
            background: 'transparent',
            fontFamily: 'Caveat, cursive',
            fontSize: 19,
            lineHeight: 1.45,
            color: 'var(--ink)',
            padding: '6px 2px',
            outline: 'none',
            resize: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Save */}
      <button
        onClick={() => navigate('/timeline')}
        style={{
          margin: '28px 26px 0',
          width: 'calc(100% - 52px)',
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
        Save this memory
      </button>
    </section>
  );
}
