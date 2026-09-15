import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function SettingsPage() {
  const { dark, toggleTheme } = useTheme();

  const [paperGrain, setPaperGrain] = useState(true);
  const [dailyReminder, setDailyReminder] = useState(true);
  const [location, setLocation] = useState(false);

  const Toggle = ({ on, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      style={{
        width: 44,
        height: 26,
        border: 'none',
        borderRadius: 20,
        background: on ? 'var(--rust)' : 'var(--line)',
        position: 'relative',
        cursor: 'pointer',
        transition: '.3s',
        flexShrink: 0,
        padding: 0,
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 3,
          left: 3,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#fff',
          transform: on ? 'translateX(18px)' : 'translateX(0)',
          transition: '.3s cubic-bezier(.22,1,.36,1)',
          boxShadow: '0 2px 4px rgba(0,0,0,.25)',
        }}
      />
    </button>
  );

  const SettingRow = ({ children, last = false }) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 16px',
        background: 'var(--card)',
        marginBottom: last ? 0 : 2,
        fontSize: 14,
        color: 'var(--ink)',
        borderRadius: last
          ? '0 0 14px 14px'
          : '0',
      }}
    >
      {children}
    </div>
  );

  const Group = ({ title, children }) => (
    <div
      style={{
        margin: '18px 26px',
      }}
    >
      <h4
        style={{
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '.1em',
          color: 'var(--rust)',
          margin: '0 0 10px',
          paddingLeft: 4,
        }}
      >
        {title}
      </h4>

      <div
        style={{
          borderRadius: 14,
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  );

  return (
    <section
      style={{
        minHeight: '100%',
        background: 'var(--paper)',
        color: 'var(--ink)',
        paddingBottom: 110,
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '22px 26px 6px',
        }}
      >
        <span
          style={{
            display: 'block',
            marginBottom: 4,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            color: 'var(--rust)',
          }}
        >
          The desk
        </span>

        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--display)',
            fontSize: 26,
            lineHeight: 1.1,
            color: 'var(--ink)',
          }}
        >
          Settings
        </h1>
      </div>

      {/* Appearance */}
      <Group title="Appearance">
        <SettingRow>
          <span>Night café mode</span>

          <Toggle
            on={dark}
            onClick={toggleTheme}
          />
        </SettingRow>

        <SettingRow last>
          <span>Paper grain</span>

          <Toggle
            on={paperGrain}
            onClick={() => setPaperGrain(!paperGrain)}
          />
        </SettingRow>
      </Group>

      {/* Journal */}
      <Group title="Journal">
        <SettingRow>
          <span>Daily reminder</span>

          <Toggle
            on={dailyReminder}
            onClick={() => setDailyReminder(!dailyReminder)}
          />
        </SettingRow>

        <SettingRow>
          <span>Include location</span>

          <Toggle
            on={location}
            onClick={() => setLocation(!location)}
          />
        </SettingRow>

        <SettingRow last>
          <span>Export as PDF</span>

          <span
            style={{
              color: 'var(--ink-soft)',
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            ›
          </span>
        </SettingRow>
      </Group>

      {/* About */}
      <Group title="About">
        <SettingRow last>
          <span>Version</span>

          <span
            style={{
              color: 'var(--ink-soft)',
            }}
          >
            1.0.0
          </span>
        </SettingRow>
      </Group>
    </section>
  );
}
