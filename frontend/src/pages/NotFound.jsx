import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── GAME CONSTANTS ───────────────────────────────────────────────────────────
const W = 800
const H = 420
const ASTRONAUT_X = 100
const ASTRONAUT_SIZE = 36
const GRAVITY = 0.45
const JUMP = -9
const OBSTACLE_WIDTH = 48
const GAP = 130
const OBSTACLE_SPEED = 3.5
const SPAWN_INTERVAL = 100 // frames

function makeObstacle(x) {
  const topH = 40 + Math.random() * (H - GAP - 80)
  return { x, topH, passed: false, id: Math.random() }
}

// ─── GAME CANVAS ──────────────────────────────────────────────────────────────
function AstroGame({ onClose }) {
  const canvasRef = useRef(null)
  const stateRef = useRef({
    y: H / 2,
    vy: 0,
    obstacles: [],
    frame: 0,
    score: 0,
    status: "idle",
    stars: Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.7 + 0.2,
    })),
  })
  const rafRef = useRef(null)
  const [uiScore, setUiScore] = useState(0)
  const [uiStatus, setUiStatus] = useState("idle")
  const [bestScore, setBestScore] = useState(0)

  const jump = useCallback(() => {
    const s = stateRef.current
    if (s.status === "idle") {
      s.status = "playing"
      setUiStatus("playing")
    }
    if (s.status === "playing") {
      s.vy = JUMP
    }
    if (s.status === "dead") {
      stateRef.current = {
        ...stateRef.current,
        y: H / 2,
        vy: 0,
        obstacles: [],
        frame: 0,
        score: 0,
        status: "playing",
      }
      setUiScore(0)
      setUiStatus("playing")
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault()
        jump()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [jump])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    function drawRoundRect(x, y, w, h, r, fill) {
      ctx.beginPath()
      ctx.roundRect(x, y, w, h, r)
      ctx.fillStyle = fill
      ctx.fill()
    }

    function drawAstronaut(x, y, angle) {
      ctx.save()
      ctx.translate(x + ASTRONAUT_SIZE / 2, y + ASTRONAUT_SIZE / 2)
      ctx.rotate(angle)
      const s = ASTRONAUT_SIZE
      ctx.fillStyle = "#dde8f0"
      ctx.beginPath()
      ctx.ellipse(0, s * 0.18, s * 0.28, s * 0.34, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(0, -s * 0.12, s * 0.26, 0, Math.PI * 2)
      ctx.fillStyle = "#dde8f0"
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(0, -s * 0.12, s * 0.16, s * 0.14, 0, 0, Math.PI * 2)
      ctx.fillStyle = "#1a1a2e"
      ctx.fill()
      ctx.fillStyle = "#8b5cf6"
      ctx.fillRect(-s * 0.1, s * 0.02, s * 0.2, s * 0.16)
      ctx.beginPath()
      ctx.arc(0, s * 0.38, s * 0.1, 0, Math.PI * 2)
      ctx.fillStyle = "#f97316"
      ctx.fill()
      ctx.restore()
    }

    function loop() {
      const s = stateRef.current
      ctx.clearRect(0, 0, W, H)

      ctx.fillStyle = "#0a0a16"
      ctx.fillRect(0, 0, W, H)

      s.stars.forEach((star) => {
        if (s.status === "playing") star.x -= star.speed
        if (star.x < 0) star.x = W
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${0.3 + star.r * 0.3})`
        ctx.fill()
      })

      if (s.status === "playing") {
        s.frame++
        s.vy += GRAVITY
        s.y += s.vy

        if (s.frame % SPAWN_INTERVAL === 0) {
          s.obstacles.push(makeObstacle(W + OBSTACLE_WIDTH))
        }

        s.obstacles.forEach((ob) => {
          ob.x -= OBSTACLE_SPEED
          if (!ob.passed && ob.x + OBSTACLE_WIDTH < ASTRONAUT_X) {
            ob.passed = true
            s.score++
            setUiScore(s.score)
          }
        })
        s.obstacles = s.obstacles.filter((ob) => ob.x > -OBSTACLE_WIDTH - 10)

        const ax = ASTRONAUT_X
        const ay = s.y
        const margin = 5
        const hitFloor = ay + ASTRONAUT_SIZE > H
        const hitCeil = ay < 0
        const hitOb = s.obstacles.some((ob) => {
          const inX = ax + margin < ob.x + OBSTACLE_WIDTH && ax + ASTRONAUT_SIZE - margin > ob.x
          const inY = ay + margin < ob.topH || ay + ASTRONAUT_SIZE - margin > ob.topH + GAP
          return inX && inY
        })

        if (hitFloor || hitCeil || hitOb) {
          s.status = "dead"
          setUiStatus("dead")
          setBestScore((prev) => Math.max(prev, s.score))
        }
      }

      stateRef.current.obstacles.forEach((ob) => {
        const gradient = ctx.createLinearGradient(ob.x, 0, ob.x + OBSTACLE_WIDTH, 0)
        gradient.addColorStop(0, "#7c3aed")
        gradient.addColorStop(1, "#a855f7")
        drawRoundRect(ob.x, 0, OBSTACLE_WIDTH, ob.topH, [0, 0, 8, 8], gradient)
        ctx.shadowColor = "#a855f7"
        ctx.shadowBlur = 14
        drawRoundRect(ob.x - 2, ob.topH - 12, OBSTACLE_WIDTH + 4, 14, 4, "#c084fc")
        ctx.shadowBlur = 0
        drawRoundRect(ob.x, ob.topH + GAP, OBSTACLE_WIDTH, H - ob.topH - GAP, [8, 8, 0, 0], gradient)
        ctx.shadowColor = "#a855f7"
        ctx.shadowBlur = 14
        drawRoundRect(ob.x - 2, ob.topH + GAP - 2, OBSTACLE_WIDTH + 4, 14, 4, "#c084fc")
        ctx.shadowBlur = 0
      })

      const angle = Math.max(-0.5, Math.min(0.7, stateRef.current.vy * 0.05))
      drawAstronaut(ASTRONAUT_X, stateRef.current.y, angle)

      if (s.status === "idle") {
        ctx.fillStyle = "rgba(0,0,0,0.5)"
        ctx.fillRect(0, 0, W, H)
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 22px monospace"
        ctx.textAlign = "center"
        ctx.fillText("TAP / SPACE to launch 🚀", W / 2, H / 2 - 12)
        ctx.font = "14px monospace"
        ctx.fillStyle = "#a855f7"
        ctx.fillText("dodge the portals, don't float away", W / 2, H / 2 + 18)
        ctx.textAlign = "left"
      }

      if (s.status === "dead") {
        ctx.fillStyle = "rgba(0,0,0,0.6)"
        ctx.fillRect(0, 0, W, H)
        ctx.font = "bold 28px monospace"
        ctx.fillStyle = "#f97316"
        ctx.textAlign = "center"
        ctx.fillText("YOU DRIFTED 💀", W / 2, H / 2 - 28)
        ctx.font = "16px monospace"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`score: ${s.score}`, W / 2, H / 2 + 8)
        ctx.font = "13px monospace"
        ctx.fillStyle = "#a855f7"
        ctx.fillText("tap / space to retry", W / 2, H / 2 + 34)
        ctx.textAlign = "left"
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="relative"
    >
      {/* header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-orange-500 uppercase tracking-widest">VOID_RUNNER.exe</span>
          <span className="text-[10px] font-mono text-muted">· dodge the portals</span>
        </div>
        <div className="flex items-center gap-3">
          {bestScore > 0 && (
            <span className="text-[10px] font-mono text-purple-400">best: {bestScore}</span>
          )}
          <span className="text-[10px] font-mono text-green-400">score: {uiScore}</span>
          <button
            onClick={onClose}
            className="text-muted hover:text-orange-400 text-[11px] font-mono transition-colors"
          >
            [close]
          </button>
        </div>
      </div>

      {/* canvas — uses intrinsic 800×420 size, scales via CSS to fill container */}
      <div
        className="relative cursor-pointer rounded-xl overflow-hidden w-full"
        style={{ border: "1px solid rgba(168,85,247,0.3)", boxShadow: "0 0 24px rgba(168,85,247,0.15)" }}
        onClick={jump}
      >
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>

      {/* controls hint */}
      <div className="flex gap-4 mt-2 px-1">
        {["SPACE", "↑ KEY", "TAP"].map((k) => (
          <span key={k} className="text-[9px] font-mono text-muted tracking-widest">{k}</span>
        ))}
      </div>
    </motion.div>
  )
}

// ─── MAIN 404 PAGE ─────────────────────────────────────────────────────────────
const NotFound = () => {
  const [dots, setDots] = useState("")
  const [glitch, setGlitch] = useState(false)
  const [showGame, setShowGame] = useState(false)

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."))
    }, 500)
    return () => clearInterval(dotsInterval)
  }, [])

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 3500)
    return () => clearInterval(glitchInterval)
  }, [])

  const steps = [
    { label: "DNS_RESOLVE", status: "ok" },
    { label: "ROUTE_MATCH", status: "ok" },
    { label: "PAGE_FOUND", status: "fail" },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-surface-950 overflow-hidden relative">

      <motion.div
        className="absolute w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl"
        style={{ top: "10%", left: "-10%" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl"
        style={{ bottom: "5%", right: "-5%" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* wider max-width so game has room */}
      <div className="w-full max-w-3xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="badge bg-orange-500/10 text-orange-500">ERROR</span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted">
            HTTP · STATUS · 404
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative flex-shrink-0">
            <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-surface-850 to-surface-900 border border-orange-500/30 flex items-center justify-center shadow-2xl relative overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{ width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2, top: `${(i * 17) % 100}%`, left: `${(i * 23) % 100}%`, opacity: 0.4 }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
              <motion.svg
                width="110" height="110" viewBox="0 0 100 100"
                animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <ellipse cx="50" cy="62" rx="18" ry="22" fill="#dde8f0" />
                <circle cx="50" cy="36" r="17" fill="#dde8f0" />
                <ellipse cx="50" cy="35" rx="11" ry="9" fill="#1a1a2e" />
                <rect x="43" y="55" width="14" height="10" rx="2" fill="#8b5cf6" />
                <circle cx="50" cy="60" r="2" fill="#f97316" />
              </motion.svg>
              <motion.div
                className="absolute bottom-4 text-[10px] font-mono text-orange-500 tracking-widest"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                SIGNAL LOST
              </motion.div>
            </div>
          </motion.div>

          <div>
            <motion.h1
              className="font-bold text-heading relative"
              style={{ fontSize: "clamp(90px,18vw,150px)", letterSpacing: "-6px" }}
              animate={glitch ? { x: [0, -4, 4, -2, 0] } : {}}
              transition={{ duration: 0.2 }}
            >
              4<span className="text-brand">0</span>4
            </motion.h1>
            <p className="text-body max-w-xs">
              The page you're looking for has vanished into the void. It may have been moved, deleted, or never existed.
            </p>
          </div>
        </div>

        {/* ── GAME SECTION ── */}
        <AnimatePresence mode="wait">
          {!showGame ? (
            <motion.div
              key="game-cta"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="card p-5 mb-6 cursor-pointer group"
              onClick={() => setShowGame(true)}
              style={{ border: "1px solid rgba(168,85,247,0.2)", background: "linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(249,115,22,0.05) 100%)" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">while you're here</span>
                    <motion.span
                      className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      NEW
                    </motion.span>
                  </div>
                  <p className="text-sm font-mono text-heading">Play VOID RUNNER 🚀</p>
                  <p className="text-[11px] text-muted mt-0.5">dodge portals · set a high score · cope with the 404</p>
                </div>
                <motion.div
                  className="text-3xl"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ▶
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="game-active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-6"
            >
              <AstroGame onClose={() => setShowGame(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Request Trace */}
        <div className="card p-5 mb-6">
          <p className="text-xs font-mono mb-4 text-muted uppercase tracking-wider">Request Trace</p>
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex justify-between mb-2"
            >
              <span className="text-xs font-mono text-muted">{s.label}</span>
              <span className={`text-xs font-mono ${s.status === "ok" ? "text-green-500" : "text-orange-500"}`}>
                {s.status === "ok" ? "OK" : "FAILED"}
              </span>
            </motion.div>
          ))}
          <div className="mt-4 pt-3 border-t border-themed text-[11px] font-mono text-muted">
            scanning for similar routes{dots}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/" className="btn-primary flex-1 text-center">
            Go Home
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="javascript:history.back()" className="btn-ghost flex-1 text-center">
            Go Back
          </motion.a>
        </div>

        <p className="text-center text-[11px] font-mono mt-6 text-muted">
          If you think this is a mistake,{" "}
          <a href="/contact" className="text-brand hover:underline">contact support</a>
        </p>
      </div>
    </div>
  )
}

export default NotFound