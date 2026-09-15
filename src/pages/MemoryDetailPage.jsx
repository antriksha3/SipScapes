import { useNavigate } from 'react-router-dom';

export default function MemoryDetailPage() {
  const navigate = useNavigate();

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
      {/* Back */}
      <button
        onClick={() => navigate('/timeline')}
        style={{
          margin: '18px 26px 0',
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

      {/* Hero */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '8px 26px 0',
        }}
      >
        <figure
          style={{
            margin: 0,
            width: '78%',
            padding: 9,
            paddingBottom: 14,
            background: '#fff',
            boxShadow: '0 8px 20px rgba(42,27,18,.12)',
            transform: 'rotate(-2deg)',
          }}
        >
          <div
            style={{
              height: 210,
              background:
                'linear-gradient(150deg,#c6a379,#6e4526)',
            }}
          />

          <figcaption
            style={{
              fontFamily: 'Caveat, cursive',
              fontSize: 17,
              color: 'var(--ink)',
              paddingTop: 8,
            }}
          >
            steam fogging the window
          </figcaption>
        </figure>
      </div>

      {/* Title */}
      <div
        style={{
          padding: '24px 26px 0',
        }}
      >
        <div
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            color: 'var(--rust)',
            fontWeight: 700,
          }}
        >
          March 12 · 9:14am
        </div>

        <h1
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 23,
            margin: '4px 0 0',
            lineHeight: 1.25,
          }}
        >
          Ethiopia Yirgacheffe
        </h1>
      </div>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          padding: '14px 26px 0',
        }}
      >
        {['☕ pour over', '🌧️ rainy', '📖 finished a book'].map(
          (tag) => (
            <span
              key={tag}
              style={{
                padding: '6px 10px',
                borderRadius: 20,
                background: 'var(--paper-deep)',
                fontSize: 11,
                color: 'var(--ink-soft)',
              }}
            >
              {tag}
            </span>
          )
        )}
      </div>

      {/* Journal note */}
      <div
        style={{
          margin: '20px 26px 0',
          padding: 16,
          background: 'var(--card)',
          borderRadius: 14,
          boxShadow: 'inset 0 0 0 1px var(--line)',
        }}
      >
        <h4
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            color: 'var(--rust)',
            margin: '0 0 10px',
          }}
        >
          Journal note
        </h4>

        <p
          style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 19,
            lineHeight: 1.45,
            color: 'var(--ink-soft)',
            margin: 0,
          }}
        >
          the kind of morning where nothing needs to happen. finished
          the last page of the book I'd been carrying around for weeks —
          felt like closing a small door gently.
        </p>
      </div>

      {/* Brew details */}
      <div
        style={{
          margin: '16px 26px 0',
          padding: 16,
          background: 'var(--card)',
          borderRadius: 14,
          boxShadow: 'inset 0 0 0 1px var(--line)',
        }}
      >
        <h4
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            color: 'var(--rust)',
            margin: '0 0 14px',
          }}
        >
          Brew details
        </h4>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}
        >
          {[
            ['92°C', 'water temp'],
            ['3:30', 'brew time'],
            ['V60', 'method'],
            ['1:16', 'ratio'],
          ].map(([value, label]) => (
            <div key={label}>
              <b
                style={{
                  display: 'block',
                  fontFamily: 'Fraunces, serif',
                  fontSize: 15,
                  color: 'var(--ink)',
                }}
              >
                {value}
              </b>

              <span
                style={{
                  fontSize: 12,
                  color: 'var(--ink-soft)',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* On the shelf */}
      <div
        style={{
          margin: '16px 26px 0',
          padding: 16,
          background: 'var(--card)',
          borderRadius: 14,
          boxShadow: 'inset 0 0 0 1px var(--line)',
        }}
      >
        <h4
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            color: 'var(--rust)',
            margin: '0 0 12px',
          }}
        >
          On the shelf
        </h4>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 8,
              background:
                'linear-gradient(150deg,#c6a379,#6e4526)',
              flexShrink: 0,
            }}
          />

          <div>
            <b
              style={{
                display: 'block',
                fontSize: 13.5,
                color: 'var(--ink)',
              }}
            >
              Norwegian Wood
            </b>

            <span
              style={{
                fontSize: 12,
                color: 'var(--ink-soft)',
              }}
            >
              Haruki Murakami · finished today
            </span>
          </div>
        </div>
      </div>

      {/* Now playing */}
      <div
        style={{
          margin: '16px 26px 0',
          padding: 16,
          background: 'var(--card)',
          borderRadius: 14,
          boxShadow: 'inset 0 0 0 1px var(--line)',
        }}
      >
        <h4
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            color: 'var(--rust)',
            margin: '0 0 12px',
          }}
        >
          Now playing
        </h4>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 8,
              background:
                'linear-gradient(150deg,#707F5C,#33241a)',
              flexShrink: 0,
            }}
          />

          <div>
            <b
              style={{
                display: 'block',
                fontSize: 13.5,
                color: 'var(--ink)',
              }}
            >
              slow mornings, vol. 3
            </b>

            <span
              style={{
                fontSize: 12,
                color: 'var(--ink-soft)',
              }}
            >
              a lo-fi playlist · 42 min
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
