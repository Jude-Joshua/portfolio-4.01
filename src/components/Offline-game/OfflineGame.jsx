import { useState, useEffect, useRef, useCallback } from "react";


const LANES = 3;
const LANE_H = 36;
const GAME_W = 480;
const GAME_H = LANES * LANE_H;
const PLAYER_X = 52;
const PLAYER_W = 18;
const PLAYER_H = 18;

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const laneY = (lane) => lane * LANE_H + (LANE_H - PLAYER_H) / 2;

function spawnObs(speed) {
  return {
    id: Math.random(),
    lane: Math.floor(Math.random() * LANES),
    x: GAME_W + 20,
    w: 12 + Math.floor(Math.random() * 8),
    h: PLAYER_H + Math.floor(Math.random() * 8),
    speed,
  };
}

export default function App() {
  const [phase, setPhase] = useState("idle");
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [isNewBest, setIsNewBest] = useState(false);

  const stateRef = useRef({
    lane: 1, obs: [], score: 0, frame: 0,
    nextSpawn: 80, speed: 3.2, alive: true,
  });
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const phaseRef = useRef("idle");

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const s = stateRef.current;

    ctx.clearRect(0, 0, GAME_W, GAME_H);

    // Lanes
    for (let i = 0; i < LANES; i++) {
      ctx.fillStyle = i % 2 === 0 ? "#fafafa" : "#f5f5f5";
      ctx.fillRect(0, i * LANE_H, GAME_W, LANE_H);
    }

    // Dashed dividers
    ctx.strokeStyle = "#e4e4e4";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 7]);
    for (let i = 1; i < LANES; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * LANE_H);
      ctx.lineTo(GAME_W, i * LANE_H);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Player
    const py = laneY(s.lane);
    ctx.fillStyle = "#111";
    ctx.fillRect(PLAYER_X, py, PLAYER_W, PLAYER_H);
    // serif feet
    ctx.fillRect(PLAYER_X - 2, py + PLAYER_H - 3, 5, 3);
    ctx.fillRect(PLAYER_X + PLAYER_W - 3, py + PLAYER_H - 3, 5, 3);
    // white eye
    ctx.fillStyle = "#fff";
    ctx.fillRect(PLAYER_X + 5, py + 5, 4, 4);

    // Obstacles
    s.obs.forEach((ob) => {
      const oy = laneY(ob.lane) + (PLAYER_H - ob.h) / 2;
      ctx.fillStyle = "#111";
      ctx.beginPath();
      ctx.roundRect(ob.x, oy, ob.w, ob.h, 2);
      ctx.fill();
    });

    // Score
    ctx.fillStyle = "#ccc";
    ctx.font = "400 11px 'DM Sans', sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(String(s.score).padStart(5, "0"), GAME_W - 12, 15);
  }, []);

  const loop = useCallback(() => {
    const s = stateRef.current;
    if (!s.alive) return;

    s.frame++;
    s.score++;
    setScore(s.score);

    s.speed = 3.2 + s.score / 900;

    s.nextSpawn--;
    if (s.nextSpawn <= 0) {
      s.obs.push(spawnObs(s.speed));
      s.nextSpawn = Math.max(30, 60 + Math.floor(Math.random() * 40) - Math.floor(s.score / 300));
    }

    s.obs = s.obs.map((ob) => ({ ...ob, x: ob.x - ob.speed })).filter((ob) => ob.x + ob.w > -10);

    // Collision
    const py = laneY(s.lane);
    for (const ob of s.obs) {
      if (ob.lane !== s.lane) continue;
      const oy = laneY(ob.lane) + (PLAYER_H - ob.h) / 2;
      if (
        PLAYER_X + PLAYER_W - 2 > ob.x + 2 &&
        PLAYER_X + 2 < ob.x + ob.w - 2 &&
        py + PLAYER_H - 2 > oy + 2 &&
        py + 2 < oy + ob.h - 2
      ) {
        s.alive = false;
        setBest((b) => {
          const nb = Math.max(b, s.score);
          setIsNewBest(s.score >= nb && s.score > 0);
          return nb;
        });
        setPhase("dead");
        phaseRef.current = "dead";
        return;
      }
    }

    draw();
    rafRef.current = requestAnimationFrame(loop);
  }, [draw]);

  const startGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setIsNewBest(false);
    stateRef.current = {
      lane: 1, obs: [], score: 0, frame: 0,
      nextSpawn: 80, speed: 3.2, alive: true,
    };
    setScore(0);
    setPhase("playing");
    phaseRef.current = "playing";
    rafRef.current = requestAnimationFrame(loop);
  }, [loop]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      e.preventDefault();
      if (phaseRef.current !== "playing") return;
      const s = stateRef.current;
      if (e.key === "ArrowUp") s.lane = Math.max(0, s.lane - 1);
      if (e.key === "ArrowDown") s.lane = Math.min(LANES - 1, s.lane + 1);
    };
    window.addEventListener("keydown", onKey, { passive: false });
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  useEffect(() => { if (phase === "idle") draw(); }, [phase, draw]);

  return (
    <>
      <style>{css}</style>
      <div style={st.page}>

        {/* Nav */}
        <nav style={st.nav}>
          <div style={st.logo}>
            <span>JU</span><span>DE</span>
          </div>
          <div style={st.navLinks}>
            {["Home", "Portfolio", "Mentoring", "Speaking"].map((l) => (
              <a key={l} href="#" style={st.navLink}>{l}</a>
            ))}
            <span style={{ color: "#ccc" }}>—</span>
            <span style={st.email}>thejudejoshua@gmail.com</span>
          </div>
        </nav>

        {/* Main */}
        <main style={st.main}>
          <div style={st.pill}>OOPS! 🫠</div>

          <h1 style={st.headline}>
            You're not connected to<br />the internet right now.
          </h1>

          <p style={st.body}>
            Not much to show you here. While you wait —&nbsp;
            <em>wanna play a game?</em>
          </p>

          {/* Widget */}
          <div style={st.widget}>
            <canvas ref={canvasRef} width={GAME_W} height={GAME_H} style={st.canvas} />

            {phase === "idle" && (
              <div style={st.overlay}>
                <button style={st.btn} onClick={startGame}>Start</button>
                <p style={st.hint}>↑ ↓ to switch lanes</p>
              </div>
            )}

            {phase === "dead" && (
              <div style={{ ...st.overlay, animation: "fadeUp 0.25s ease both" }}>
                <p style={st.deadScore}>{String(score).padStart(5, "0")}</p>
                {isNewBest && <p style={st.bestTag}>new best ✦</p>}
                <button style={st.btn} onClick={startGame}>Try again</button>
              </div>
            )}
          </div>

          {phase === "playing" && (
            <p style={{ ...st.hint, marginTop: 10 }}>
              best — {String(best).padStart(5, "0")}
            </p>
          )}
        </main>
      </div>
    </>
  );
}

const st = {
  page: {
    minHeight: "100vh",
    background: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    color: "#111",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 40px",
    borderBottom: "1px solid #f0f0f0",
  },
  logo: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    fontFamily: "'DM Serif Display', serif",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    userSelect: "none",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 28,
    fontSize: 14,
  },
  navLink: {
    textDecoration: "none",
    color: "#111",
    fontWeight: 400,
  },
  email: { fontSize: 14, color: "#111" },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 72,
    paddingBottom: 80,
    animation: "fadeUp 0.5s ease both",
  },
  pill: {
    background: "#d6ede8",
    color: "#1a6b55",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    padding: "6px 16px",
    borderRadius: 999,
    marginBottom: 28,
  },
  headline: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)",
    fontWeight: 400,
    textAlign: "center",
    lineHeight: 1.15,
    margin: "0 0 20px",
    letterSpacing: "-0.02em",
  },
  body: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    maxWidth: 480,
    lineHeight: 1.7,
    margin: "0 0 36px",
    fontWeight: 300,
  },
  widget: {
    position: "relative",
    width: GAME_W,
    maxWidth: "calc(100vw - 32px)",
    border: "1px solid #e8e8e8",
    borderRadius: 6,
    overflow: "hidden",
    boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
  },
  canvas: { display: "block", width: "100%" },
  overlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(3px)",
    gap: 8,
  },
  btn: {
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    padding: "9px 26px",
    fontSize: 13,
    fontWeight: 500,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: "0.04em",
    cursor: "pointer",
  },
  hint: {
    fontSize: 11,
    color: "#bbb",
    fontWeight: 300,
    letterSpacing: "0.04em",
    margin: 0,
  },
  deadScore: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 30,
    fontWeight: 400,
    margin: "0 0 2px",
    letterSpacing: "0.05em",
  },
  bestTag: {
    fontSize: 11,
    color: "#1a6b55",
    fontWeight: 500,
    letterSpacing: "0.08em",
    margin: "-4px 0 4px",
  },
};
