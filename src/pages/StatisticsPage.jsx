import { useEffect, useState } from 'react';

export default function StatisticsPage() {
  const [animate, setAnimate] = useState(false);

  const days = [
    ['M', 40],
    ['T', 65],
    ['W', 30],
    ['T', 85],
    ['F', 55],
    ['S', 100],
    ['S', 70],
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
          padding: '28px 26px 8px',
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            color: 'var(--rust)',
            marginBottom: 4,
          }}
        >
          The ledger
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--display)',
            fontSize: 26,
            lineHeight: 1.1,
            color: 'var(--ink)',
          }}
        >
          Your statistics
        </h1>
      </div>

      {/* Chart */}
      <div
        style={{
          margin: '18px 26px',
          padding: 20,
          borderRadius: 16,
          background: 'var(--card)',
          boxShadow: 'inset 0 0 0 1px var(--line)',
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            color: 'var(--rust)',
            marginBottom: 2,
          }}
        >
          This week
        </div>

        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--display)',
            fontSize: 16,
            color: 'var(--ink)',
          }}
        >
          Cups per day
        </h3>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 10,
            height: 130,
            marginTop: 14,
          }}
        >
          {days.map(([day, height], index) => (
            <div
              key={`${day}-${index}`}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 6,
                height: '100%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: `${height}%`,
                  borderRadius: '6px 6px 2px 2px',
                  background:
                    'linear-gradient(180deg, var(--coffee-mid), var(--rust))',
                  transformOrigin: 'bottom',
                  transform: animate ? 'scaleY(1)' : 'scaleY(0)',
                  transition:
                    'transform 1s cubic-bezier(.22,1,.36,1)',
                  transitionDelay: `${index * 70}ms`,
                }}
              />

              <span
                style={{
                  fontSize: 10,
                  color: 'var(--ink-soft)',
                }}
              >
                {day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
