import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section
      style={{
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2A1B12',
        color: '#F3E6CE',
        textAlign: 'center',
        padding: '40px 26px',
        boxSizing: 'border-box',
      }}
    >
      <div>
        <div
          style={{
            width: 100,
            height: 100,
            margin: '0 auto 20px',
          }}
        >
          <svg
            className="cup-mark"
            viewBox="0 0 100 100"
            fill="none"
            width="100"
            height="100"
          >
            <path
              d="M22 40h48v22c0 14-10.7 26-24 26s-24-12-24-26V40z"
              fill="#F3E6CE"
            />
            <path
              d="M70 44h6c6 0 10 4.4 10 10s-4 10-10 10h-6"
              stroke="#F3E6CE"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M30 40c-2-6 3-8 2-14M46 40c-2-6 3-8 2-14M62 40c-2-6 3-8 2-14"
              stroke="#B0842E"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 42,
            fontWeight: 600,
            margin: '0 0 8px',
            letterSpacing: '-0.02em',
          }}
        >
          SipScapes
        </h1>

        <p
          style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 20,
            margin: 0,
            color: '#D9C7A7',
          }}
        >
          every cup, a small memory
        </p>

        <div
          style={{
            width: 100,
            height: 3,
            background: '#4A3427',
            borderRadius: 2,
            overflow: 'hidden',
            margin: '32px auto 0',
          }}
        >
          <div
            style={{
              width: '40%',
              height: '100%',
              background: '#9C4A2E',
              animation: 'sipscapes-loader 1.6s ease-in-out infinite',
            }}
          />
        </div>

        <style>{`
          @keyframes sipscapes-loader {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(350%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
