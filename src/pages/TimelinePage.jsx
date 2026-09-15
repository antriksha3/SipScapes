import { useNavigate } from 'react-router-dom';

export default function TimelinePage() {
  const navigate = useNavigate();

  const openDetail = () => {
    navigate('/memory/1');
  };

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
      {/* Status */}
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
        <span></span>
      </div>

      {/* Header */}
      <div
        style={{
          padding: '8px 26px 10px',
        }}
      >
        <div
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            color: 'var(--rust)',
            fontWeight: 700,
            marginBottom: 5,
          }}
        >
          The scrapbook
        </div>

        <h1
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 26,
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Your timeline
        </h1>
      </div>

      {/* TODAY */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 26px',
        }}
      >
        <div
          style={{
            flex: 1,
            height: 1,
            background: 'var(--line)',
          }}
        />
        <span
          style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 17,
            color: 'var(--ink-soft)',
          }}
        >
          today
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: 'var(--line)',
          }}
        />
      </div>

      {/* Today's memory */}
      <button
        onClick={openDetail}
        style={{
          position: 'relative',
          display: 'block',
          width: 'calc(100% - 52px)',
          margin: '0 26px',
          padding: 20,
          textAlign: 'left',
          background: 'var(--card)',
          border: 'none',
          borderRadius: 14,
          boxShadow: 'inset 0 0 0 1px var(--line)',
          cursor: 'pointer',
          color: 'var(--ink)',
        }}
      >
        {/* Washi tape */}
        <div
          style={{
            position: 'absolute',
            top: -7,
            left: 24,
            width: 54,
            height: 17,
            background: '#9C4A2E',
            opacity: 0.8,
            transform: 'rotate(-2deg)',
          }}
        />

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '2px solid var(--rust)',
              flexShrink: 0,
            }}
          />

          <div>
            <b
              style={{
                display: 'block',
                fontFamily: 'Fraunces, serif',
                fontSize: 15,
              }}
            >
              Ethiopia Yirgacheffe
            </b>

            <span
              style={{
                fontSize: 11.5,
                color: 'var(--ink-soft)',
              }}
            >
              pour over · 9:14am
            </span>
          </div>
        </div>

        {/* Note */}
        <p
          style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 18,
            lineHeight: 1.4,
            color: 'var(--ink-soft)',
            margin: '16px 0 12px',
          }}
        >
          "steam fogging the window, book finally finished."
        </p>

        {/* Photos */}
        <div
          style={{
            display: 'flex',
            gap: 10,
            marginTop: 10,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: 6,
              background: '#fff',
              transform: 'rotate(-3deg)',
            }}
          >
            <div
              style={{
                height: 90,
                background:
                  'linear-gradient(150deg,#c6a379,#6e4526)',
              }}
            />
          </div>

          <div
            style={{
              flex: 1,
              padding: 6,
              background: '#fff',
              transform: 'rotate(2deg)',
            }}
          >
            <div
              style={{
                height: 90,
                background:
                  'linear-gradient(150deg,#efe0c4,#9c6b41)',
              }}
            />
          </div>
        </div>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginTop: 14,
          }}
        >
          <span
            style={{
              padding: '6px 9px',
              borderRadius: 20,
              background: 'var(--paper-deep)',
              fontSize: 11,
              color: 'var(--ink-soft)',
            }}
          >
            ☕ pour over
          </span>

          <span
            style={{
              padding: '6px 9px',
              borderRadius: 20,
              background: 'var(--paper-deep)',
              fontSize: 11,
              color: 'var(--ink-soft)',
            }}
          >
            📖 finished a book
          </span>
        </div>
      </button>

      {/* YESTERDAY */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '22px 26px 14px',
        }}
      >
        <div
          style={{
            flex: 1,
            height: 1,
            background: 'var(--line)',
          }}
        />

        <span
          style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 17,
            color: 'var(--ink-soft)',
          }}
        >
          yesterday
        </span>

        <div
          style={{
            flex: 1,
            height: 1,
            background: 'var(--line)',
          }}
        />
      </div>

      {/* Yesterday — Cortado */}
      <button
        onClick={openDetail}
        style={{
          position: 'relative',
          display: 'block',
          width: 'calc(100% - 52px)',
          margin: '0 26px 14px',
          padding: 20,
          textAlign: 'left',
          background: 'var(--card)',
          border: 'none',
          borderRadius: 14,
          boxShadow: 'inset 0 0 0 1px var(--line)',
          cursor: 'pointer',
          color: 'var(--ink)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -7,
            right: 24,
            width: 54,
            height: 17,
            background: '#B0842E',
            opacity: 0.8,
            transform: 'rotate(2deg)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '2px solid var(--rust)',
              flexShrink: 0,
            }}
          />

          <div>
            <b
              style={{
                display: 'block',
                fontFamily: 'Fraunces, serif',
                fontSize: 15,
              }}
            >
              Oat Cortado
            </b>

            <span
              style={{
                fontSize: 11.5,
                color: 'var(--ink-soft)',
              }}
            >
              Maren's Café · 4:32pm
            </span>
          </div>
        </div>

        <p
          style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 18,
            lineHeight: 1.4,
            color: 'var(--ink-soft)',
            margin: '16px 0 12px',
          }}
        >
          "lo-fi playlist, rain finally stopped."
        </p>

        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              padding: '6px 9px',
              borderRadius: 20,
              background: 'var(--paper-deep)',
              fontSize: 11,
              color: 'var(--ink-soft)',
            }}
          >
            🎧 playlist
          </span>

          <span
            style={{
              padding: '6px 9px',
              borderRadius: 20,
              background: 'var(--paper-deep)',
              fontSize: 11,
              color: 'var(--ink-soft)',
            }}
          >
            🐾 with Biscuit
          </span>
        </div>
      </button>

      {/* Yesterday — Home Drip */}
      <div
        style={{
          position: 'relative',
          width: 'calc(100% - 52px)',
          margin: '0 26px',
          padding: 20,
          background: 'var(--card)',
          borderRadius: 14,
          boxShadow: 'inset 0 0 0 1px var(--line)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '2px solid var(--rust)',
              flexShrink: 0,
            }}
          />

          <div>
            <b
              style={{
                display: 'block',
                fontFamily: 'Fraunces, serif',
                fontSize: 15,
              }}
            >
              Home Drip, dark roast
            </b>

            <span
              style={{
                fontSize: 11.5,
                color: 'var(--ink-soft)',
              }}
            >
              kitchen table · 7:02am
            </span>
          </div>
        </div>

        <p
          style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 18,
            lineHeight: 1.4,
            color: 'var(--ink-soft)',
            margin: '16px 0 12px',
          }}
        >
          "receipt from the bookstore, tucked in."
        </p>

        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              padding: '6px 9px',
              borderRadius: 20,
              background: 'var(--paper-deep)',
              fontSize: 11,
              color: 'var(--ink-soft)',
            }}
          >
            🧾 receipt
          </span>

          <span
            style={{
              padding: '6px 9px',
              borderRadius: 20,
              background: 'var(--paper-deep)',
              fontSize: 11,
              color: 'var(--ink-soft)',
            }}
          >
            ✍️ journaling
          </span>
        </div>
      </div>
    </section>
  );
}
