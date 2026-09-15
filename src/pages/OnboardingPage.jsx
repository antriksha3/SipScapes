import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    title: 'A journal, not a log',
    text: "SipScapes isn't for tracking caffeine. It's for keeping the small, quiet moments that happen around a cup.",
    visual: (
      <svg width="180" height="180" viewBox="0 0 180 180">
        <rect
          x="20"
          y="20"
          width="140"
          height="140"
          rx="4"
          fill="#FBF5E7"
          stroke="#E4D3AE"
          strokeWidth="2"
        />
        <circle
          cx="90"
          cy="80"
          r="34"
          fill="none"
          stroke="#9C4A2E"
          strokeWidth="3"
          opacity=".55"
        />
        <text
          x="90"
          y="130"
          textAnchor="middle"
          fontFamily="Caveat"
          fontSize="20"
          fill="#5A4433"
        >
          rainy tuesday ☕
        </text>
      </svg>
    ),
  },
  {
    title: 'Keep the little things',
    text: 'Save the places, people, moods, and details that made each coffee moment worth remembering.',
    visual: (
      <svg width="180" height="180" viewBox="0 0 180 180">
        <rect
          x="30"
          y="16"
          width="90"
          height="110"
          rx="2"
          fill="#fff"
          stroke="#e5e5e5"
        />
        <rect
          x="38"
          y="24"
          width="74"
          height="74"
          fill="#C6A379"
        />
        <path
          d="M40 120c40-30 70 0 100-10"
          stroke="#9C4A2E"
          strokeWidth="2"
          fill="none"
          strokeDasharray="3 4"
        />
      </svg>
    ),
  },
  {
    title: 'Make every cup a memory',
    text: 'Build your own scrapbook of coffee moments and revisit the memories whenever you want.',
    visual: (
      <svg width="180" height="180" viewBox="0 0 180 180">
        <path
          d="M40 140 L90 40 L140 140Z"
          fill="none"
          stroke="#B0842E"
          strokeWidth="2"
        />
        <circle cx="90" cy="90" r="6" fill="#9C4A2E" />
        <circle cx="65" cy="120" r="4" fill="#707F5C" />
        <circle cx="115" cy="115" r="4" fill="#707F5C" />
      </svg>
    ),
  },
];

export default function OnboardingPage() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate('/home');
    }
  };

  const skipOnboarding = () => {
    navigate('/home');
  };

  const slide = slides[current];

  return (
    <section
      style={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'var(--paper)',
        boxSizing: 'border-box',
        padding: '20px 0 22px',
      }}
    >
      {/* Visual */}
      <div
        style={{
          height: 400,
          position: 'relative',
          margin: '20px 26px 0',
          borderRadius: 22,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          key={current}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 20,
            animation: 'onboardFade .5s ease',
          }}
        >
          {slide.visual}
        </div>
      </div>

      {/* Text */}
      <div
        style={{
          padding: '8px 30px 0',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 25,
            lineHeight: 1.25,
            margin: '0 0 8px',
            color: 'var(--ink)',
          }}
        >
          {slide.title}
        </h2>

        <p
          style={{
            color: 'var(--ink-soft)',
            fontSize: 14.5,
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          {slide.text}
        </p>
      </div>

      {/* Dots */}
      <div
        style={{
          display: 'flex',
          gap: 7,
          justifyContent: 'center',
          margin: '20px 0',
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            style={{
              width: index === current ? 20 : 6,
              height: 6,
              borderRadius: index === current ? 4 : '50%',
              background:
                index === current ? 'var(--rust)' : 'var(--line)',
              transition: '.3s',
            }}
          />
        ))}
      </div>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          gap: 10,
          padding: '0 26px',
        }}
      >
        <button
          onClick={skipOnboarding}
          style={{
            flex: 1,
            padding: '13px 16px',
            borderRadius: 10,
            border: '1px solid var(--line)',
            background: 'transparent',
            color: 'var(--ink)',
            fontFamily: 'Work Sans, sans-serif',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Skip
        </button>

        <button
          onClick={nextSlide}
          style={{
            flex: 1,
            padding: '13px 16px',
            borderRadius: 10,
            border: 'none',
            background: 'var(--rust)',
            color: '#fff',
            fontFamily: 'Work Sans, sans-serif',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {current === slides.length - 1 ? 'Get started' : 'Continue'}
        </button>
      </div>

      <style>{`
        @keyframes onboardFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
