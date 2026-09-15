import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();

  const badges = [
    ['☕', false],
    ['📖', false],
    ['🌧️', false],
    ['🎧', false],
    ['🔒', true],
    ['🔒', true],
    ['🔒', true],
    ['🔒', true],
  ];

  const collections = [
    ['rainy days', 'linear-gradient(150deg,#9C4A2E,#33241a)', -3],
    ['café corners', 'linear-gradient(150deg,#707F5C,#2b3322)', 2],
    ['book pairings', 'linear-gradient(150deg,#B0842E,#5a3f14)', -1],
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
      {/* Status bar */}
      <div
        style={{
          height: 28,
          padding: '8px 22px 0',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 11,
          color: 'var(--ink-soft)',
          boxSizing: 'border-box',
        }}
      >
        <span>9:41</span>
        <span />
      </div>

      {/* Profile */}
      <div
        style={{
          textAlign: 'center',
          padding: '30px 26px 6px',
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: '50%',
            margin: '0 auto 12px',
            padding: 4,
            border: '2.5px solid var(--rust)',
            boxSizing: 'border-box',
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
        </div>

        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--display)',
            fontSize: 21,
            color: 'var(--ink)',
          }}
        >
          Wren Castillo
        </h2>

        <div
          style={{
            marginTop: 4,
            fontFamily: 'var(--script)',
            fontSize: 16,
            color: 'var(--ink-soft)',
          }}
        >
          journaling since October
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 30,
          padding: '20px 26px',
        }}
      >
        {[
          ['132', 'Pages'],
          ['19', 'Best streak'],
          ['8', 'Collections'],
        ].map(([number, label]) => (
          <div
            key={label}
            style={{
              textAlign: 'center',
            }}
          >
            <b
              style={{
                display: 'block',
                fontFamily: 'var(--display)',
                fontSize: 22,
                color: 'var(--ink)',
              }}
            >
              {number}
            </b>

            <span
              style={{
                fontSize: 11,
                color: 'var(--ink-soft)',
                textTransform: 'uppercase',
                letterSpacing: '.08em',
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Shelf badges */}
      <div
        style={{
          padding: '0 26px',
          marginTop: 6,
          marginBottom: 8,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--display)',
            fontSize: 16,
            color: 'var(--ink)',
          }}
        >
          Shelf badges
        </h3>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 12,
          padding: '6px 26px',
        }}
      >
        {badges.map(([emoji, locked], index) => (
          <div
            key={index}
            style={{
              aspectRatio: '1',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: locked
                ? 'var(--paper-deep)'
                : 'radial-gradient(circle at 35% 30%, var(--coffee-light), var(--coffee))',
              color: locked ? 'var(--line)' : '#fff',
              fontSize: 20,
              boxShadow: locked
                ? 'none'
                : '0 8px 16px -8px var(--card-shadow)',
              opacity: locked ? 0.6 : 1,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Collections */}
      <div
        style={{
          padding: '0 26px',
          marginTop: 18,
          marginBottom: 12,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--display)',
            fontSize: 16,
            color: 'var(--ink)',
          }}
        >
          Collections
        </h3>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 14,
          padding: '0 26px 8px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        {collections.map(([title, background, rotation]) => (
          <figure
            key={title}
            style={{
              width: 118,
              flexShrink: 0,
              margin: 0,
              transform: `rotate(${rotation}deg)`,
              background: 'var(--card)',
              padding: 8,
              boxSizing: 'border-box',
              boxShadow: '0 5px 12px rgba(42,27,18,.12)',
            }}
          >
            <div
              style={{
                height: 118,
                background,
              }}
            />

            <figcaption
              style={{
                fontFamily: 'var(--script)',
                fontSize: 13,
                color: 'var(--ink)',
                paddingTop: 7,
              }}
            >
              {title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
