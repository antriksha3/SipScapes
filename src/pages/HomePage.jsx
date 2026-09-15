import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = ['🌧️', '📖', '🎧', '🐾', '✍️'];

  const recentPages = [
    {
      title: 'rainy window',
      rotation: '-4deg',
      background: 'linear-gradient(150deg,#c6a379,#8a5a34)',
    },
    {
      title: 'the corner seat',
      rotation: '3deg',
      background: 'linear-gradient(150deg,#d9c39a,#6e4526)',
    },
    {
      title: 'slow sunday',
      rotation: '-2deg',
      background: 'linear-gradient(150deg,#b98a2e,#3a2a1c)',
    },
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
      {/* Status row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '14px 26px 4px',
          fontSize: 11,
          color: 'var(--ink-soft)',
        }}
      >
        <span>9:41</span>
        <span>☕ 4</span>
      </div>

      {/* Header */}
      <div
        style={{
          padding: '8px 26px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'Caveat, cursive',
              fontSize: 26,
              color: 'var(--rust-deep)',
              lineHeight: 1,
            }}
          >
            Good morning, Wren
          </div>

          <div
            style={{
              fontSize: 13,
              color: 'var(--ink-soft)',
              marginTop: 4,
            }}
          >
            Thursday · a little grey outside
          </div>
        </div>

        {/* Avatar */}
        <button
          onClick={() => navigate('/profile')}
          aria-label="Open profile"
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '2px solid var(--rust)',
            padding: 2,
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background:
                'linear-gradient(160deg,#caa27a,#6e4526)',
            }}
          />
        </button>
      </div>

      {/* Today's sip */}
      <div
        style={{
          margin: '20px 26px 0',
          padding: 22,
          borderRadius: 'var(--radius-card)',
          background:
            'linear-gradient(155deg,var(--card),var(--paper-deep))',
          boxShadow:
            '0 14px 30px -14px var(--card-shadow), inset 0 0 0 1px var(--line)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Steam */}
        <div
          style={{
            position: 'absolute',
            top: -6,
            left: 26,
            display: 'flex',
            gap: 7,
            opacity: 0.35,
          }}
        >
          <span
            style={{
              width: 3,
              height: 32,
              borderRadius: 10,
              background: 'var(--rust)',
              transform: 'rotate(8deg)',
            }}
          />
          <span
            style={{
              width: 3,
              height: 42,
              borderRadius: 10,
              background: 'var(--rust)',
              transform: 'rotate(-7deg)',
            }}
          />
          <span
            style={{
              width: 3,
              height: 28,
              borderRadius: 10,
              background: 'var(--rust)',
              transform: 'rotate(10deg)',
            }}
          />
        </div>

        <div
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            color: 'var(--rust)',
            fontWeight: 700,
            marginBottom: 6,
          }}
        >
          Today's sip
        </div>

        <h3
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 21,
            lineHeight: 1.25,
            margin: '0 0 4px',
            color: 'var(--ink)',
          }}
        >
          What are you drinking right now?
        </h3>

        <p
          style={{
            fontSize: 13,
            color: 'var(--ink-soft)',
            margin: '0 0 14px',
            lineHeight: 1.5,
          }}
        >
          Log the cup in front of you before the moment slips away.
        </p>

        {/* Mood buttons */}
        <div
          style={{
            display: 'flex',
            gap: 10,
          }}
        >
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              aria-label={`Mood ${mood}`}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border:
                  selectedMood === mood
                    ? '2px solid var(--rust)'
                    : '1px solid var(--line)',
                background:
                  selectedMood === mood
                    ? 'var(--paper-deep)'
                    : 'var(--card)',
                fontSize: 18,
                cursor: 'pointer',
                transform:
                  selectedMood === mood
                    ? 'translateY(-2px)'
                    : 'none',
                transition: '.2s',
              }}
            >
              {mood}
            </button>
          ))}
        </div>
      </div>

      {/* Recent pages heading */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 26px 12px',
        }}
      >
        <h3
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 17,
            margin: 0,
            color: 'var(--ink)',
          }}
        >
          Recent pages
        </h3>

        <button
          onClick={() => navigate('/timeline')}
          style={{
            border: 'none',
            background: 'transparent',
            color: 'var(--rust)',
            fontSize: 11,
            fontWeight: 700,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          see all
        </button>
      </div>

      {/* Recent pages */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          padding: '4px 26px 0',
          overflowX: 'auto',
        }}
      >
        {recentPages.map((page) => (
          <button
            key={page.title}
            onClick={() => navigate('/memory/1')}
            style={{
              flex: '0 0 92px',
              border: 'none',
              background: 'transparent',
              padding: 0,
              cursor: 'pointer',
              transform: `rotate(${page.rotation})`,
            }}
          >
            <div
              style={{
                background: '#fff',
                padding: '7px 7px 10px',
                boxShadow: '0 5px 14px rgba(42,27,18,.12)',
              }}
            >
              <div
                style={{
                  height: 82,
                  background: page.background,
                }}
              />

              <div
                style={{
                  fontFamily: 'Caveat, cursive',
                  fontSize: 15,
                  color: 'var(--ink)',
                  paddingTop: 7,
                  whiteSpace: 'nowrap',
                }}
              >
                {page.title}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Streak */}
      <div
        style={{
          margin: '24px 26px 0',
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          background: 'var(--card)',
          borderRadius: 14,
          boxShadow: 'inset 0 0 0 1px var(--line)',
        }}
      >
        <div
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 38,
            lineHeight: 1,
            color: 'var(--rust)',
          }}
        >
          12
        </div>

        <div
          style={{
            fontSize: 12.5,
            lineHeight: 1.5,
            color: 'var(--ink-soft)',
          }}
        >
          day journaling streak.
          <br />
          your longest yet was 19 — keep the pages turning.
        </div>
      </div>
    </section>
  );
}
