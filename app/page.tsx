"use client";

const REVEAL_STAGE = 2;
/*
0 = totalmente sellado
1 = primeras grietas
2 = apertura media
3 = casi abierto
4 = muy abierto / cerca de salir
*/

export default function Page() {
  const stage = Math.max(0, Math.min(4, REVEAL_STAGE));
  const progressMap = [0.06, 0.18, 0.38, 0.62, 0.88];
  const progress = progressMap[stage];

  const shellScale = 1 + progress * 0.035;
  const crackOpacity = 0.22 + progress * 0.7;
  const coreGlow = 0.35 + progress * 0.65;
  const leftShift = 8 + progress * 34;
  const rightShift = 8 + progress * 34;
  const topLift = progress * 10;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 35%, rgba(180,140,255,0.16) 0%, rgba(80,50,130,0.10) 18%, rgba(8,8,14,1) 58%, rgba(3,3,7,1) 100%)",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03), transparent 40%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120vw",
          height: "60vh",
          background:
            "radial-gradient(circle, rgba(151,109,255,0.10) 0%, rgba(151,109,255,0.03) 28%, transparent 55%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 20px 56px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            marginBottom: 18,
            fontSize: 12,
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            opacity: 0.62,
          }}
        >
          Something is waking up
        </div>

        <div
          style={{
            position: "relative",
            width: "min(78vw, 360px)",
            aspectRatio: "1 / 1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 34,
            transform: `scale(${shellScale})`,
            transition: "transform 500ms ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "48%",
              height: "48%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.92) 0%, rgba(213,178,255,0.92) 18%, rgba(141,94,255,0.85) 42%, rgba(82,35,175,0.45) 66%, rgba(82,35,175,0.05) 100%)",
              boxShadow: `
                0 0 ${35 + progress * 35}px rgba(154,101,255,${coreGlow}),
                0 0 ${80 + progress * 60}px rgba(119,69,255,${coreGlow * 0.6})
              `,
              filter: "blur(0.2px)",
              opacity: 0.82 + progress * 0.18,
              transition: "all 500ms ease",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: "12%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), rgba(255,255,255,0.01) 45%, transparent 70%)",
              transform: `translateX(-${leftShift}px) translateY(-${topLift}px) rotate(-16deg)`,
              clipPath:
                "polygon(0 0, 100% 0, 72% 24%, 62% 38%, 56% 53%, 54% 100%, 0 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.09), 0 20px 40px rgba(0,0,0,0.28)",
              transition: "transform 700ms cubic-bezier(.22,1,.36,1)",
            }}
          >
            <CrackLines opacity={crackOpacity} flip={false} />
          </div>

          <div
            style={{
              position: "absolute",
              inset: "12%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), rgba(255,255,255,0.01) 45%, transparent 70%)",
              transform: `translateX(${rightShift}px) translateY(${topLift}px) rotate(14deg)`,
              clipPath:
                "polygon(28% 0, 100% 0, 100% 100%, 46% 100%, 44% 54%, 38% 38%, 28% 24%)",
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.09), 0 20px 40px rgba(0,0,0,0.28)",
              transition: "transform 700ms cubic-bezier(.22,1,.36,1)",
            }}
          >
            <CrackLines opacity={crackOpacity} flip />
          </div>

          <div
            style={{
              position: "absolute",
              width: "82%",
              height: "82%",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.05)",
              boxShadow: "inset 0 0 40px rgba(255,255,255,0.03)",
              pointerEvents: "none",
            }}
          />
        </div>

        <img
          src="/hylo_logo.png"
          alt="Hylo"
          style={{
            width: "min(44vw, 210px)",
            height: "auto",
            display: "block",
            marginBottom: 16,
            filter: "drop-shadow(0 10px 26px rgba(0,0,0,0.35))",
          }}
        />

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(34px, 7vw, 64px)",
            lineHeight: 0.96,
            textAlign: "center",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            maxWidth: 900,
          }}
        >
          Hylo is coming.
        </h1>

        <p
          style={{
            marginTop: 16,
            marginBottom: 0,
            maxWidth: 560,
            textAlign: "center",
            fontSize: "clamp(14px, 2.8vw, 18px)",
            lineHeight: 1.5,
            opacity: 0.72,
          }}
        >
          A new social space for university life is getting ready to break open.
        </p>

        <div
          style={{
            marginTop: 28,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "12px 18px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.04)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            opacity: 0.86,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#c59cff",
              boxShadow: "0 0 16px rgba(197,156,255,0.9)",
              display: "inline-block",
            }}
          />
          Coming soon
        </div>
      </section>
    </main>
  );
}

function CrackLines({
  opacity,
  flip,
}: {
  opacity: number;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity,
        transform: flip ? "scaleX(-1)" : "none",
        transition: "opacity 500ms ease",
      }}
      aria-hidden="true"
    >
      <path
        d="M165 18 L152 62 L170 98 L148 132 L160 168 L140 214 L150 282"
        fill="none"
        stroke="rgba(255,255,255,0.65)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M154 70 L116 92 L134 116"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M160 122 L194 144 L180 173"
        fill="none"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M148 180 L118 198 L126 230"
        fill="none"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M154 212 L188 228 L176 256"
        fill="none"
        stroke="rgba(255,255,255,0.24)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}