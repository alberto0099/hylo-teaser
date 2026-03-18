"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const progress = 75;
  const animationDuration = 1800;

  const [displayProgress, setDisplayProgress] = useState(0);
  const [barReady, setBarReady] = useState(false);

  useEffect(() => {
    const startDelay = 180;
    const startTimer = window.setTimeout(() => {
      setBarReady(true);

      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const ratio = Math.min(elapsed / animationDuration, 1);
        const eased = 1 - Math.pow(1 - ratio, 3);
        const value = Math.round(progress * eased);

        setDisplayProgress(value);

        if (ratio < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimer);
    };
  }, [progress]);

  const particles = Array.from({ length: 18 }, (_, i) => i);

  return (
    <>
      <main className="teaser-page">
        <div className="teaser-bg" />
        <div className="teaser-overlay" />

        <div className="particles-layer" aria-hidden="true">
          {particles.map((i) => (
            <span
              key={i}
              className={`particle particle-${i + 1}`}
            />
          ))}
        </div>

        <section className="teaser-content">
          <div className="teaser-top">
            <p className="teaser-tagline">Your campus, your secrets</p>
          </div>

          <div className="teaser-bottom">
            <button type="button" className="teaser-badge">
              PRÓXIMAMENTE
            </button>

            <div className="progress-card">
              <div className="progress-head">
                <span>Estado del lanzamiento</span>
                <span className="progress-percent">{displayProgress}%</span>
              </div>

              <div className="progress-track">
                <div
                  className={`progress-fill ${barReady ? "is-ready" : ""}`}
                  style={
                    {
                      "--target-width": `${progress}%`,
                      "--fill-duration": `${animationDuration}ms`,
                    } as React.CSSProperties
                  }
                >
                  <span className="progress-shine" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&display=swap");

        html,
        body {
          margin: 0;
          padding: 0;
          background: #07070b;
          overflow: hidden;
        }

        * {
          box-sizing: border-box;
        }

        .teaser-page {
          position: relative;
          min-height: 100dvh;
          width: 100%;
          overflow: hidden;
          background: #07070b;
          color: white;
          font-family: "Raleway", sans-serif;
        }

        .teaser-bg {
          position: absolute;
          inset: 0;
          background-image: url("/hylo-lock-hero.webp");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: scale(1.02);
        }

        .teaser-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to bottom,
              rgba(8, 8, 12, 0.16) 0%,
              rgba(8, 8, 12, 0.08) 24%,
              rgba(8, 8, 12, 0.12) 58%,
              rgba(8, 8, 12, 0.38) 80%,
              rgba(8, 8, 12, 0.66) 100%
            );
        }

        .particles-layer {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          display: block;
          border-radius: 999px;
          background: rgba(244, 178, 230, 0.7);
          box-shadow: 0 0 10px rgba(244, 178, 230, 0.18);
          opacity: 0;
          animation-name: floatParticle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        .particle-1  { width: 4px; height: 4px; left: 8%;  top: 72%; animation-duration: 8s;  animation-delay: 0.2s; }
        .particle-2  { width: 5px; height: 5px; left: 18%; top: 58%; animation-duration: 9s;  animation-delay: 1.1s; }
        .particle-3  { width: 3px; height: 3px; left: 26%; top: 82%; animation-duration: 7.2s; animation-delay: 0.7s; }
        .particle-4  { width: 6px; height: 6px; left: 34%; top: 46%; animation-duration: 10s; animation-delay: 1.8s; }
        .particle-5  { width: 4px; height: 4px; left: 42%; top: 66%; animation-duration: 8.6s; animation-delay: 0.4s; }
        .particle-6  { width: 3px; height: 3px; left: 48%; top: 30%; animation-duration: 7.8s; animation-delay: 1.4s; }
        .particle-7  { width: 5px; height: 5px; left: 56%; top: 74%; animation-duration: 9.4s; animation-delay: 0.9s; }
        .particle-8  { width: 4px; height: 4px; left: 63%; top: 52%; animation-duration: 8.2s; animation-delay: 2s; }
        .particle-9  { width: 3px; height: 3px; left: 71%; top: 64%; animation-duration: 7.4s; animation-delay: 0.5s; }
        .particle-10 { width: 6px; height: 6px; left: 78%; top: 42%; animation-duration: 10.2s; animation-delay: 1.6s; }
        .particle-11 { width: 4px; height: 4px; left: 84%; top: 80%; animation-duration: 8.8s; animation-delay: 1s; }
        .particle-12 { width: 3px; height: 3px; left: 90%; top: 56%; animation-duration: 7.6s; animation-delay: 0.3s; }
        .particle-13 { width: 5px; height: 5px; left: 12%; top: 24%; animation-duration: 9.2s; animation-delay: 2.2s; }
        .particle-14 { width: 3px; height: 3px; left: 22%; top: 36%; animation-duration: 7.3s; animation-delay: 0.6s; }
        .particle-15 { width: 4px; height: 4px; left: 59%; top: 20%; animation-duration: 8.4s; animation-delay: 1.3s; }
        .particle-16 { width: 3px; height: 3px; left: 68%; top: 28%; animation-duration: 7.9s; animation-delay: 1.9s; }
        .particle-17 { width: 5px; height: 5px; left: 80%; top: 18%; animation-duration: 9.6s; animation-delay: 0.8s; }
        .particle-18 { width: 4px; height: 4px; left: 38%; top: 16%; animation-duration: 8.1s; animation-delay: 1.5s; }

        @keyframes floatParticle {
          0% {
            transform: translate3d(0, 14px, 0) scale(0.95);
            opacity: 0;
          }
          15% {
            opacity: 0.35;
          }
          50% {
            transform: translate3d(8px, -10px, 0) scale(1);
            opacity: 0.55;
          }
          85% {
            opacity: 0.25;
          }
          100% {
            transform: translate3d(-6px, -26px, 0) scale(0.96);
            opacity: 0;
          }
        }

        .teaser-content {
  position: relative;
  z-index: 2;
  min-height: 100svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding:
    calc(env(safe-area-inset-top, 0px) + 18px)
    18px
    calc(env(safe-area-inset-bottom, 0px) + 18px);
  text-align: center;
}

        .teaser-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
        }

        .teaser-tagline {
          margin: 0;
          font-size: clamp(20px, 5vw, 32px);
          font-weight: 500;
          letter-spacing: -0.03em;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 6px 22px rgba(0, 0, 0, 0.35);
        }

        .teaser-bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: auto;
  margin-bottom: 18px;
  transform: translateY(0);
}

        .teaser-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(10, 10, 16, 0.42);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow:
            0 12px 32px rgba(0, 0, 0, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          font-size: clamp(11px, 1.2vw, 13px);
          font-weight: 800;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.92);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
          cursor: default;
        }

        .teaser-badge:hover {
          transform: translateY(-1px);
          border-color: rgba(255, 255, 255, 0.22);
          background: rgba(16, 16, 24, 0.56);
        }

        .progress-card {
          width: min(92vw, 620px);
          border-radius: 24px;
          padding: 18px 18px 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(12, 12, 18, 0.5);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .progress-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.18);
          background: rgba(16, 16, 24, 0.58);
        }

        .progress-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
          font-size: clamp(14px, 1.25vw, 16px);
          font-weight: 800;
          color: rgba(255, 255, 255, 0.94);
        }

        .progress-percent {
          color: #f4b2e6;
          text-shadow: 0 0 14px rgba(244, 178, 230, 0.22);
          min-width: 52px;
          text-align: right;
          font-variant-numeric: tabular-nums;
        }

        .progress-track {
          width: 100%;
          height: 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          overflow: hidden;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.35);
        }

        .progress-fill {
          position: relative;
          height: 100%;
          width: 0;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            #f4b2e6 0%,
            #f7c4ee 50%,
            #ffd7f5 100%
          );
          box-shadow:
            0 0 12px rgba(244, 178, 230, 0.18),
            0 0 20px rgba(244, 178, 230, 0.1);
          overflow: hidden;
          transition: width var(--fill-duration) cubic-bezier(0.22, 1, 0.36, 1);
        }

        .progress-fill.is-ready {
          width: var(--target-width);
        }

        .progress-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 0%,
            rgba(255, 255, 255, 0.08) 28%,
            rgba(255, 255, 255, 0.38) 50%,
            rgba(255, 255, 255, 0.08) 72%,
            transparent 100%
          );
          transform: translateX(-120%);
          animation: hyloShine 2.8s linear infinite;
        }

        @keyframes hyloShine {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(140%);
          }
        }

       @media (max-width: 640px) {
  .teaser-content {
    padding:
      calc(env(safe-area-inset-top, 0px) + 16px)
      16px
      calc(env(safe-area-inset-bottom, 0px) + 16px);
  }

  .teaser-top {
    margin-top: 20px;
  }

  .teaser-tagline {
    font-size: 16px;
    max-width: 260px;
  }

  .teaser-bottom {
    gap: 11px;
    margin-top: auto;
    margin-bottom: 35px;
    transform: none;
  }

  .teaser-badge {
    padding: 8px 14px;
    font-size: 11px;
  }

  .progress-card {
    width: min(92vw, 400px);
    padding: 14px 14px 13px;
    border-radius: 20px;
  }

  .progress-head {
    font-size: 13px;
    margin-bottom: 10px;
  }

  .progress-percent {
    min-width: 44px;
  }

  .progress-track {
    height: 12px;
  }
}

        @media (min-width: 641px) and (max-width: 1023px) {
          .teaser-tagline {
            font-size: 22px;
          }

          .teaser-bottom {
            margin-bottom: 28px;
          }
        }

        @media (min-width: 1024px) {
          .teaser-content {
            padding: 28px 28px 36px;
          }

          .teaser-top {
            margin-top: 22px;
          }

          .teaser-tagline {
            font-size: 26px;
          }

          .teaser-bottom {
            gap: 14px;
            margin-bottom: 38px;
          }

          .progress-card {
            width: min(82vw, 640px);
          }
        }

        @media (min-width: 1440px) {
          .progress-card {
            width: 640px;
          }
        }
      `}</style>
    </>
  );
}

