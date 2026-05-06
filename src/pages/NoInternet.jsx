import OopsImage from '../assets/images/oopsImage.svg?react';

import { ArrowUpIcon, ArrowDownIcon } from "@phosphor-icons/react";

import { useState, useEffect, useRef, useCallback } from "react";

const LANES = 3;
const LANE_H = 36;
const GAME_W = 480;
const GAME_H = LANES * LANE_H;
const PLAYER_X = 52;
const PLAYER_W = 18;
const PLAYER_H = 18;

const css = `
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

export default function NoInternet() {
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
            ctx.fillStyle = i % 2 === 0 ? "#dff1ea" : "#dff1ea";
            ctx.fillRect(0, i * LANE_H, GAME_W, LANE_H);
        }

        // Dashed dividers
        ctx.strokeStyle = "#009559";
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
        ctx.fillStyle = "#009559";
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
            ctx.fillStyle = "#111111";
            ctx.beginPath();
            ctx.roundRect(ob.x, oy, ob.w, ob.h, 2);
            ctx.fill();
        });

        // Score
        ctx.fillStyle = "#111111";
        ctx.font = "400 11px";
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
            <main className={'notfound flex flex-col items-center justify-center'}>
                <section className="hero flex flex-col justify-center items-center">
                    <article className="hero-title flex flex-col items-center justify-center">
                        <div className="hero-title-role flex flex-row justify-center items-center">
                            <p className="t-caption text-center text-secondary">OOPS!</p>
                            <OopsImage />
                        </div>
                        <h1 className="h1 text-center">You're not connected to the internet right now.</h1>
                        <p className="t-copy text-center">Not much to show you right now. While you wait, how about a game?</p>
                    </article>
                </section>

                <section className="internet-box flex items-center justify-center">
                    <div className='internet-box-content'>
                        <canvas ref={canvasRef} width={GAME_W} height={GAME_H} style={{ display: "block", width: "100%" }} />

                        {phase === "idle" && (
                            <div className='internet-box-content-start flex flex-col items-center justify-center'>
                                <button className='t-buttons internet-box-content-start-btn flex flex-col items-center justify-center' onClick={startGame}>Sure</button>
                                <p className='t-copy internet-box-content-start-par flex flex-row items-center justify-center'>
                                    Press <ArrowUpIcon /> <ArrowDownIcon /> to switch lanes.
                                </p>
                            </div>
                        )}

                        {phase === "dead" && (
                            <div className='internet-box-content-start flex flex-col items-center justify-center'>
                                <p className='h4 internet-box-content-start-par'>{String(score).padStart(5, "0")}</p>
                                {isNewBest && <p className='t-copy internet-box-content-start-score'>new best ✦</p>}
                                <button className='t-buttons internet-box-content-start-btn flex flex-col items-center justify-center' onClick={startGame}>Try again</button>
                            </div>
                        )}

                        {phase === "playing" && (
                            <p className='t-highlights internet-box-content-start-par score-counter'>
                                best — {String(best).padStart(5, "0")}
                            </p>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}