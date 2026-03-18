"use client";
export default function Page() {
  return (
    <main className="teaser-page">
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />
      <div className="noise" />

      <section className="hero">
        <div className="logo-wrap">
          <img src="/hylo_logo.png" alt="Hylo" className="logo" />
        </div>

        <div className="beam" />

        <div className="sphere-wrap">
          <div className="sphere-shadow" />

          <div className="sphere-outer-glow" />

          <div className="sphere">
            <div className="sphere-core-glow" />
            <div className="sphere-inner-light" />
            <div className="sphere-shine" />
            <div className="sphere-rim" />

            <span className="crack crack-main" />
            <span className="crack crack-left-top" />
            <span className="crack crack-left-mid" />
            <span className="crack crack-left-low" />
            <span className="crack crack-right-top" />
            <span className="crack crack-right-mid" />
            <span className="crack crack-right-low" />

            <span className="fragment fragment-1" />
            <span className="fragment fragment-2" />
            <span className="fragment fragment-3" />
            <span className="fragment fragment-4" />
            <span className="fragment fragment-5" />
          </div>
        </div>

        <div className="content">
          <p className="eyebrow">ALGO ESTÁ DESPERTANDO</p>
          <h1>Hylo está a punto de llegar.</h1>
          <p className="subtitle">
            Una nueva red social universitaria se está preparando para romperse
            desde dentro.
          </p>

          <div className="pill">
            <span className="pill-dot" />
            <span>PRÓXIMAMENTE</span>
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(html, body) {
          margin: 0;
          padding: 0;
          background: #05060b;
          overflow-x: hidden;
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        :global(*) {
          box-sizing: border-box;
        }

        .teaser-page {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 18%, rgba(244, 178, 230, 0.1), transparent 22%),
            radial-gradient(circle at 50% 58%, rgba(120, 140, 255, 0.12), transparent 30%),
            linear-gradient(180deg, #070912 0%, #05060b 42%, #030409 100%);
          color: white;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 34px 22px 42px;
          z-index: 2;
        }

        .ambient {
          position: absolute;
          border-radius: 999px;
          filter: blur(70px);
          pointer-events: none;
          z-index: 0;
        }

        .ambient-1 {
          width: 360px;
          height: 360px;
          top: -90px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(244, 178, 230, 0.14);
        }

        .ambient-2 {
          width: 260px;
          height: 260px;
          bottom: 18%;
          left: -80px;
          background: rgba(117, 132, 255, 0.14);
        }

        .ambient-3 {
          width: 260px;
          height: 260px;
          right: -60px;
          top: 34%;
          background: rgba(244, 178, 230, 0.1);
        }

        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          pointer-events: none;
          z-index: 1;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.9) 0 1px, transparent 1.6px),
            radial-gradient(circle at 70% 40%, rgba(255,255,255,0.6) 0 1px, transparent 1.6px),
            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.7) 0 1px, transparent 1.8px),
            radial-gradient(circle at 80% 75%, rgba(255,255,255,0.5) 0 1px, transparent 1.5px),
            radial-gradient(circle at 55% 18%, rgba(255,255,255,0.55) 0 1px, transparent 1.4px);
          background-size: 220px 220px, 260px 260px, 300px 300px, 280px 280px, 240px 240px;
        }

        .logo-wrap {
          position: relative;
          z-index: 4;
          margin-bottom: 22px;
        }

        .logo {
          width: 64px;
          height: 64px;
          object-fit: contain;
          display: block;
          filter:
            drop-shadow(0 0 18px rgba(244, 178, 230, 0.24))
            drop-shadow(0 0 30px rgba(120, 140, 255, 0.14));
        }

        .beam {
          position: absolute;
          top: -8%;
          left: 50%;
          transform: translateX(-50%);
          width: 260px;
          height: 58vh;
          pointer-events: none;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.18) 0%,
            rgba(244,178,230,0.12) 14%,
            rgba(244,178,230,0.06) 30%,
            rgba(120,140,255,0.02) 56%,
            transparent 100%
          );
          clip-path: polygon(45% 0%, 55% 0%, 72% 100%, 28% 100%);
          filter: blur(10px);
          opacity: 0.95;
        }

        .sphere-wrap {
          position: relative;
          width: min(82vw, 420px);
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 34px;
          z-index: 4;
        }

        .sphere-shadow {
          position: absolute;
          bottom: 6%;
          left: 50%;
          transform: translateX(-50%);
          width: 58%;
          height: 11%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(120,140,255,0.32) 0%, rgba(0,0,0,0) 70%);
          filter: blur(12px);
          opacity: 0.9;
        }

        .sphere-outer-glow {
          position: absolute;
          inset: 10%;
          border-radius: 999px;
          background:
            radial-gradient(circle at 50% 50%, rgba(244,178,230,0.16) 0%, rgba(117,132,255,0.18) 34%, transparent 72%);
          filter: blur(28px);
          transform: scale(1.06);
        }

        .sphere {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 44%, rgba(196, 220, 255, 0.22) 0%, rgba(150, 170, 255, 0.18) 14%, rgba(48, 63, 125, 0.9) 44%, rgba(10, 14, 28, 0.98) 76%),
            radial-gradient(circle at 30% 28%, rgba(255,255,255,0.18), transparent 20%),
            linear-gradient(180deg, #3142a0 0%, #18204e 34%, #0a0e1f 100%);
          box-shadow:
            inset 0 0 0 2px rgba(255,255,255,0.08),
            inset 0 -20px 40px rgba(0,0,0,0.55),
            inset 0 18px 28px rgba(255,255,255,0.05),
            0 0 60px rgba(117,132,255,0.18),
            0 0 30px rgba(244,178,230,0.12);
        }

        .sphere-core-glow {
          position: absolute;
          left: 50%;
          top: 52%;
          transform: translate(-50%, -50%);
          width: 30%;
          height: 30%;
          border-radius: 50%;
          background:
            radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(244,178,230,0.95) 22%, rgba(140,170,255,0.65) 46%, transparent 76%);
          filter: blur(12px);
          opacity: 0.98;
        }

        .sphere-inner-light {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 58%;
          height: 58%;
          border-radius: 50%;
          background:
            radial-gradient(circle, rgba(244,178,230,0.18) 0%, rgba(120,140,255,0.16) 34%, transparent 72%);
          filter: blur(18px);
        }

        .sphere-shine {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            radial-gradient(circle at 32% 22%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 10%, transparent 18%),
            linear-gradient(135deg, rgba(255,255,255,0.1), transparent 30%);
          pointer-events: none;
        }

        .sphere-rim {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.1),
            inset 0 0 24px rgba(255,255,255,0.04);
        }

        .crack {
          position: absolute;
          background: linear-gradient(180deg, rgba(229,238,255,0.95), rgba(190,205,255,0.92));
          border-radius: 999px;
          box-shadow:
            0 0 10px rgba(255,255,255,0.5),
            0 0 18px rgba(144,184,255,0.45),
            0 0 24px rgba(244,178,230,0.18);
          z-index: 5;
        }

        .crack-main {
          left: 50%;
          top: 16%;
          width: 3px;
          height: 65%;
          transform: translateX(-50%);
          clip-path: polygon(
            40% 0%,
            62% 0%,
            64% 10%,
            30% 16%,
            72% 26%,
            44% 39%,
            66% 48%,
            32% 60%,
            60% 74%,
            36% 88%,
            55% 100%,
            26% 100%,
            35% 86%,
            18% 74%,
            40% 60%,
            22% 48%,
            44% 38%,
            20% 26%,
            42% 16%,
            36% 8%
          );
        }

        .crack-left-top {
          left: 40%;
          top: 24%;
          width: 3px;
          height: 16%;
          transform: rotate(-42deg);
        }

        .crack-left-mid {
          left: 34%;
          top: 40%;
          width: 3px;
          height: 13%;
          transform: rotate(52deg);
        }

        .crack-left-low {
          left: 41%;
          top: 58%;
          width: 3px;
          height: 12%;
          transform: rotate(-34deg);
        }

        .crack-right-top {
          left: 58%;
          top: 24%;
          width: 3px;
          height: 16%;
          transform: rotate(42deg);
        }

        .crack-right-mid {
          left: 63%;
          top: 40%;
          width: 3px;
          height: 13%;
          transform: rotate(-52deg);
        }

        .crack-right-low {
          left: 57%;
          top: 58%;
          width: 3px;
          height: 12%;
          transform: rotate(34deg);
        }

        .fragment {
          position: absolute;
          background:
            linear-gradient(180deg, rgba(18,23,48,0.95), rgba(7,10,22,0.98));
          border: 1px solid rgba(173, 196, 255, 0.18);
          box-shadow:
            inset 0 0 12px rgba(255,255,255,0.03),
            0 0 18px rgba(120,140,255,0.12);
          z-index: 4;
        }

        .fragment-1 {
          width: 18%;
          height: 18%;
          top: 24%;
          left: 28%;
          clip-path: polygon(18% 12%, 88% 0%, 100% 34%, 78% 100%, 0% 72%);
          transform: rotate(-18deg);
        }

        .fragment-2 {
          width: 16%;
          height: 16%;
          top: 22%;
          right: 28%;
          clip-path: polygon(14% 6%, 94% 18%, 100% 74%, 38% 100%, 0% 42%);
          transform: rotate(20deg);
        }

        .fragment-3 {
          width: 17%;
          height: 17%;
          top: 44%;
          left: 24%;
          clip-path: polygon(20% 0%, 100% 24%, 78% 100%, 0% 86%, 6% 30%);
          transform: rotate(8deg);
        }

        .fragment-4 {
          width: 18%;
          height: 18%;
          top: 44%;
          right: 22%;
          clip-path: polygon(28% 0%, 100% 10%, 94% 84%, 10% 100%, 0% 34%);
          transform: rotate(-14deg);
        }

        .fragment-5 {
          width: 20%;
          height: 15%;
          bottom: 18%;
          left: 40%;
          clip-path: polygon(18% 0%, 90% 18%, 72% 100%, 0% 80%);
          transform: rotate(-12deg);
        }

        .content {
          position: relative;
          z-index: 4;
          max-width: 760px;
          text-align: center;
        }

        .eyebrow {
          margin: 0 0 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.34em;
          color: rgba(255,255,255,0.72);
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          font-size: clamp(2.5rem, 7vw, 4.8rem);
          line-height: 0.96;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: white;
          text-shadow:
            0 0 18px rgba(255,255,255,0.06),
            0 0 28px rgba(244,178,230,0.1);
        }

        .subtitle {
          margin: 18px auto 0;
          max-width: 720px;
          font-size: clamp(1.02rem, 2.5vw, 1.4rem);
          line-height: 1.45;
          color: rgba(255,255,255,0.78);
        }

        .pill {
          margin: 26px auto 0;
          width: fit-content;
          min-width: 210px;
          height: 54px;
          padding: 0 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 12px 36px rgba(0,0,0,0.26);
          font-size: 0.98rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          color: white;
        }

        .pill-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #f4b2e6;
          box-shadow:
            0 0 12px rgba(244,178,230,0.9),
            0 0 22px rgba(244,178,230,0.5);
          flex: 0 0 auto;
        }

        @media (max-width: 640px) {
          .hero {
            padding-top: 28px;
            padding-bottom: 36px;
          }

          .logo {
            width: 58px;
            height: 58px;
          }

          .sphere-wrap {
            width: min(88vw, 360px);
            margin-bottom: 28px;
          }

          .subtitle {
            max-width: 330px;
          }

          .pill {
            min-width: 190px;
            height: 50px;
            padding: 0 18px;
            font-size: 0.9rem;
            letter-spacing: 0.18em;
          }
        }
      `}</style>
    </main>
  );
}