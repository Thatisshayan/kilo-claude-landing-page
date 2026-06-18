"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

const GH = "https://github.com/Thatisshayan/AlphonsoEcosystem";
const RELEASE = "v2.0.0";
const RELEASE_DATE = "June 2026";
const REL = `${GH}/releases/tag/${RELEASE}`;
const DOCS = `${GH}/blob/main/docs`;

const PRIMARY = [
  {
    id: "jose",
    name: "Jose",
    title: "ORCHESTRATOR",
    color: "#F5B535",
    rgb: "245,181,53",
    image: "/agents/jose.png",
    abilities: ["Route & Coordinate", "Plan & Delegate", "Monitor & Adapt", "Confirm & Report"],
    desc: "Routes, assigns, merges, and confirms every mission so the crew stays aligned.",
  },
  {
    id: "alphonso",
    name: "Alphonso",
    title: "EXECUTION AGENT",
    color: "#00C8E0",
    rgb: "0,200,224",
    image: "/agents/alphonso.png",
    abilities: ["Strategize", "Align", "Delegate", "Execute"],
    desc: "Runs tasks, verifies output, and packages deliverables before anything ships.",
  },
  {
    id: "miya",
    name: "Miya",
    title: "CREATIVE AGENT",
    color: "#B060FF",
    rgb: "176,96,255",
    image: "/agents/miya.png",
    abilities: ["Create", "Design", "Write", "Inspire"],
    desc: "Turns briefs into scripts, storyboards, strategy, and export-ready creative.",
  },
  {
    id: "marcus",
    name: "Marcus",
    title: "DISTRIBUTION AGENT",
    color: "#3ED464",
    rgb: "62,212,100",
    image: "/agents/marcus.png",
    abilities: ["Distribute", "Amplify", "Engage", "Analyze"],
    desc: "Moves approved content across YouTube, Telegram, WhatsApp, and Meta.",
  },
  {
    id: "maria",
    name: "Maria",
    title: "GOVERNANCE AGENT",
    color: "#B0B8C0",
    rgb: "176,184,192",
    image: "/agents/maria.png",
    abilities: ["Govern", "Verify", "Audit", "Ensure"],
    desc: "Keeps audit trails, risk scoring, and approval gates active at every step.",
  },
];

const SUPPORT = [
  { id: "hector", name: "Hector", title: "Research Agent", color: "#52CBA0", rgb: "82,203,160" },
  { id: "echo", name: "Echo", title: "Memory Agent", color: "#60B8E8", rgb: "96,184,232" },
  { id: "sentinel", name: "Sentinel", title: "Security Agent", color: "#FF6060", rgb: "255,96,96" },
  { id: "nova", name: "Nova", title: "Intelligence Agent", color: "#FFD040", rgb: "255,208,64" },
];

const PILLARS = [
  { label: "Local-First", desc: "Your data never leaves your machine.", icon: "local" },
  { label: "Privacy by Design", desc: "Built for privacy, security, and transparency.", icon: "lock" },
  { label: "Approval-Gated", desc: "You approve what matters. Agents execute.", icon: "check" },
  { label: "Supervised Execution", desc: "Human-in-the-loop. Always.", icon: "person" },
  { label: "Open & Extensible", desc: "Modular by design. Community driven.", icon: "bolt" },
];

const PIPELINE = [
  { n: "01", who: "You", label: "Assign the mission", desc: "Type, speak, or send via Telegram or WhatsApp.", color: "#9EF01A" },
  { n: "02", who: "Jose", label: "Route & decompose", desc: "Every task is broken into packets and assigned to agents.", color: "#F5B535" },
  { n: "03", who: "Crew", label: "Parallel execution", desc: "Hector researches. Miya creates. Nova scores. All at once.", color: "#00C8E0" },
  { n: "04", who: "Maria", label: "Governance review", desc: "Risk scored. High-stakes actions require your approval.", color: "#B0B8C0" },
  { n: "05", who: "Marcus", label: "Distribute output", desc: "Approved content goes live across every approved channel.", color: "#3ED464" },
  { n: "06", who: "Echo", label: "Memory recorded", desc: "Every decision, receipt, and event stored in SQLite.", color: "#60B8E8" },
];

function useFade(amount = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref as RefObject<Element>, { once: true, amount });
  return [ref, inView] as const;
}

function BrandLogo({ size = 38, full = false }: { size?: number; full?: boolean }) {
  if (full) {
    return <Image src="/logo.webp" alt="Alphonso logo" width={150} height={150} className="h-9 w-auto object-contain" />;
  }

  return <Image src="/logo-transparent.png" alt="" width={size} height={size} className="h-9 w-9 object-contain" />;
}

function HexShape({ size = 44, glow = false }: { size?: number; glow?: boolean }) {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 60 69"
      fill="none"
      aria-hidden="true"
      style={{
        filter: glow ? "drop-shadow(0 0 16px rgba(158,240,26,0.9))" : "none",
        flexShrink: 0,
      }}
    >
      <path
        d="M30 2 L58 18 L58 51 L30 67 L2 51 L2 18 Z"
        stroke="#9EF01A"
        strokeWidth="2.5"
        fill="rgba(158,240,26,0.06)"
      />
      <path d="M20 24H40L40 47H31L31 32H29L29 47H20Z" fill="#9EF01A" />
    </svg>
  );
}

function PillarIcon({ name }: { name: string }) {
  const iconStyle = { stroke: "currentColor", strokeWidth: 2, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const icons: Record<string, ReactNode> = {
    local: <rect x="7" y="8" width="10" height="10" rx="2" style={iconStyle} />,
    lock: <path d="M7 12V10a5 5 0 0 1 10 0v2M9 12h6v8H9zM12 16h.01" style={iconStyle} />,
    check: <path d="M6 12l4 4 8-9M7 20h10" style={iconStyle} />,
    person: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 20a7 7 0 0 1 14 0" style={iconStyle} />,
    bolt: <path d="M13 2 5 13h7l-1 9 9-12h-7l0-8Z" style={iconStyle} />,
  };

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function TrailerGate() {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(reduceMotion === true);

  if (done) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--bg)]"
      >
        <video
          src="/video/alphonso-preview.mp4"
          autoPlay
          muted
          loop={false}
          playsInline
          poster="/ALPHONSO_THUMBNAIL.webp"
          className="h-full w-full object-cover"
          onEnded={() => setDone(true)}
          onError={() => setDone(true)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/70" />
        <div className="absolute bottom-8 left-1/2 flex w-[calc(100%-32px)] max-w-xl -translate-x-1/2 items-center justify-between gap-4 rounded-2xl border border-lime/15 bg-black/70 px-5 py-4 text-center backdrop-blur-xl">
          <div className="text-left">
            <div className="font-display text-sm font-extrabold tracking-[2px] text-[var(--lime)] uppercase">Alphonso Ecosystem</div>
            <div className="mt-1 text-xs font-medium leading-5 text-[var(--muted)]">Watch the mission trailer before entering.</div>
          </div>
          <button type="button" onClick={() => setDone(true)} className="cursor-pointer rounded-lg bg-[var(--lime)] px-5 py-2.5 font-display text-sm font-extrabold text-black transition hover:bg-[var(--lime-hi)]">
            Skip
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-3 md:px-8 lg:px-12"
      style={{
        background: scrolled ? "rgba(6,10,7,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(158,240,26,0.1)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 cursor-pointer" aria-label="Alphonso home">
          <BrandLogo />
          <div>
            <div className="font-display font-extrabold text-[13px] leading-none tracking-[1.5px] text-[var(--cream)] uppercase">
              Alphonso
            </div>
            <div className="font-display font-bold text-[9px] leading-none tracking-[2.5px] text-[var(--lime)] uppercase">
              Ecosystem
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {[["Agents", "#agents"], ["Pipeline", "#pipeline"], ["Privacy", "#privacy"], ["Video", "#video"], ["Docs", "/docs"]].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="cursor-pointer text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--cream)]"
            >
              {label}
            </a>
          ))}
          <a
            href={GH}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-[7px] border border-white/10 px-4 py-2 text-sm font-medium text-[var(--muted)] transition-all duration-200 hover:border-white/25 hover:text-[var(--cream)]"
          >
            GitHub
          </a>
        </div>

        <a
          href={REL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden cursor-pointer items-center gap-2 rounded-lg bg-[var(--lime)] px-5 py-2 font-display font-extrabold text-sm text-black shadow-[0_0_28px_rgba(158,240,26,0.35)] transition-all duration-200 hover:bg-[var(--lime-hi)] md:inline-flex hover:-translate-y-0.5"
        >
          Download {RELEASE}
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 70]);
  const imgO = useTransform(scrollY, [0, 600], [1, 0.5]);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" style={{ mask: "radial-gradient(ellipse 90% 100% at 65% 50%, black 30%, transparent 80%)" }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-lime/25 to-transparent" style={{ animation: "scanline 10s linear infinite" }} />
      <div className="pointer-events-none absolute left-0 top-1/5 h-3/5 w-px bg-gradient-to-b from-transparent via-lime/40 to-transparent" />

      <div className="relative z-20 grid min-h-screen items-center gap-10 px-6 pb-12 pt-28 md:px-12 lg:px-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 flex flex-wrap gap-3"
          >
            {[{ label: "AI-POWERED", active: true }, { label: "LOCAL-FIRST", active: false }, { label: "MISSION DRIVEN", active: false }].map((item) => (
              <div key={item.label} className="flex items-center gap-2 font-display text-[10px] font-bold tracking-[1.5px] uppercase" style={{ color: item.active ? "var(--lime)" : "#2A3B2C" }}>
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: item.active ? "var(--lime)" : "#2A3B2C", boxShadow: item.active ? "0 0 7px #9EF01A" : "none", animation: item.active ? "pulse-live 2.5s ease-in-out infinite" : "none" }} />
                {item.label}
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-7">
            <h1 className="font-display text-[40px] font-extrabold leading-[0.97] -tracking-[2.5px] text-[var(--cream)] sm:text-5xl lg:text-[68px]">ONE ECOSYSTEM.</h1>
            <h1 className="font-display text-[40px] font-extrabold leading-[0.97] -tracking-[2.5px] text-[var(--lime)] sm:text-5xl lg:text-[68px]" style={{ textShadow: "0 0 50px rgba(158,240,26,0.45)" }}>INFINITE IMPACT.</h1>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mb-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Alphonso is a local-first AI operating environment that coordinates 9 specialized agents to research, create, execute, govern, and automate — while you stay in control.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mb-6 flex flex-wrap gap-3">
            <a href={REL} target="_blank" rel="noopener noreferrer" className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-[var(--lime)] px-6 py-3 font-display font-extrabold text-sm text-black shadow-[0_0_50px_rgba(158,240,26,0.4)] transition-all duration-200 hover:bg-[var(--lime-hi)] hover:-translate-y-0.5">
              Download {RELEASE}
            </a>
            <a href="/docs/ground-truth" className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-white/12 px-5 py-3 font-display text-sm font-semibold text-[var(--cream)] transition-all duration-200 hover:border-white/28 hover:bg-white/4">
              Read Ground Truth
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="flex flex-wrap items-center gap-4">
            <a href={GH} target="_blank" rel="noopener noreferrer" className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/3 px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--cream)]">
              View on GitHub
            </a>
            <span className="h-5 w-px bg-white/7" />
            <span className="text-xs text-[var(--dim)]">
              Built by an independent founder, <span className="text-[var(--lime)]">driven by a mission.</span>
            </span>
          </motion.div>
        </div>

        <motion.div style={{ y: imgY, opacity: imgO }} className="relative">
          <motion.div animate={reduceMotion ? {} : { y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-[-36px] z-30 -translate-x-1/2">
            <BrandLogo size={88} />
          </motion.div>

          {[{ top: "8%", left: "5%", size: 34 }, { top: "12%", right: "8%", size: 28 }, { top: "45%", right: "2%", size: 22 }, { bottom: "20%", left: "3%", size: 26 }, { bottom: "30%", right: "12%", size: 30 }].map((pos, i) => (
            <motion.div
              key={i}
              animate={reduceMotion ? {} : { y: [0, i % 2 === 0 ? -8 : 6, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              className="absolute"
              style={{ width: pos.size, height: pos.size, ...pos }}
            >
              <HexShape size={pos.size} />
            </motion.div>
          ))}

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-lime/12 bg-[var(--bg2)] shadow-[0_0_100px_rgba(158,240,26,0.06),0_50px_100px_rgba(0,0,0,0.8)]">
            <Image src="/ALPHONSO_THUMBNAIL.webp" alt="The Alphonso Crew — 9 specialized AI agents" fill className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bg)]/70 via-transparent to-[var(--bg)]/85" />
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-black/75 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[var(--lime)]" style={{ animation: "pulse-live 2s ease-in-out infinite" }} />
              <span className="font-display text-[11px] font-bold tracking-[0.5px] text-[var(--lime)]">9 AGENTS ACTIVE</span>
            </div>
            <div className="absolute right-5 top-5 rounded-lg border border-lime/20 bg-black/60 px-3 py-1 font-mono text-[11px] text-[var(--lime)] backdrop-blur-xl">{RELEASE}</div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="relative z-20 border-t border-lime/8 bg-[var(--bg2)]/60 px-6 py-5 backdrop-blur-xl md:px-12 lg:px-20">
        <div className="mx-auto grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[["9", "Specialized Agents"], ["13", "Live Connectors"], ["1,015", "Tests Passing"], ["100%", "Local & Private"], [RELEASE, `Released ${RELEASE_DATE}`]].map(([n, l], i) => (
            <div key={l} className="text-center" style={{ borderRight: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div className="font-display text-xl font-extrabold leading-none -tracking-[1px] text-[var(--cream)]">{n}</div>
              <div className="mt-1 text-xs font-medium text-[var(--dim)]">{l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Pillars() {
  const [ref, inView] = useFade(0.1);
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-2 border-y border-lime/12 px-3 py-6 md:grid-cols-5 md:px-12 lg:px-20">
      {PILLARS.map((p, i) => (
        <motion.div key={p.label} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.07, duration: reduceMotion ? 0 : 0.5 }} className="px-3 py-5" style={{ borderRight: i < PILLARS.length - 1 ? "1px solid rgba(158,240,26,0.08)" : "none" }}>
          <div className="mb-3 text-[var(--lime)]">
            <PillarIcon name={p.icon} />
          </div>
          <div className="mb-2 font-display text-sm font-bold tracking-[-0.2px] text-[var(--cream)]">{p.label}</div>
          <div className="text-xs leading-5 text-[var(--dim)]">{p.desc}</div>
        </motion.div>
      ))}
    </div>
  );
}

function AgentCard({ agent, index }: { agent: (typeof PRIMARY)[number] | (typeof SUPPORT)[number]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [imgOk, setImgOk] = useState(false);
  const [ref, inView] = useFade(0.05);
  const reduceMotion = useReducedMotion();
  const isPrimary = "abilities" in agent;

  if (!isPrimary) {
    return (
      <motion.div
        key={agent.id}
        initial={{ opacity: 0, x: -8 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.5 + index * 0.07 }}
        className="flex items-center gap-2 rounded-lg border border-white/6 bg-white/2 px-3 py-2"
      >
        <div className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: agent.color, boxShadow: `0 0 7px ${agent.color}` }} />
        <div>
          <div className="font-display text-sm font-bold" style={{ color: agent.color }}>{agent.name}</div>
          <div className="text-[10px] font-medium text-[var(--dim)]">{agent.title}</div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: reduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border transition-all duration-300"
      style={{
        background: hovered ? `rgba(${agent.rgb},0.07)` : "var(--bg2)",
        borderColor: hovered ? `rgba(${agent.rgb},0.5)` : "rgba(255,255,255,0.07)",
        transform: hovered && !reduceMotion ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 16px 60px rgba(${agent.rgb},0.18)` : "none",
      }}
    >
      <div className="h-1 bg-gradient-to-r" style={{ background: `linear-gradient(90deg,${agent.color},transparent)`, opacity: hovered ? 0.9 : 0.3 }} />
      <div className="relative flex h-36 items-center justify-center overflow-hidden" style={{ background: `linear-gradient(160deg,rgba(${agent.rgb},0.08) 0%,#0C110D 100%)` }}>
        <Image src={agent.image} alt={agent.name} fill className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ${imgOk ? "opacity-100" : "opacity-0"}`} onLoad={() => setImgOk(true)} onError={() => setImgOk(false)} />
        {!imgOk && (
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border font-display text-4xl font-extrabold" style={{ background: `radial-gradient(circle at 40% 35%,rgba(${agent.rgb},0.35),rgba(${agent.rgb},0.06))`, borderColor: `rgba(${agent.rgb},0.3)`, color: agent.color }}>
            {agent.name[0]}
          </div>
        )}
        <div className="absolute inset-0 transition-colors duration-300" style={{ background: `linear-gradient(to top,${hovered ? `rgba(${agent.rgb},0.08)` : "#0C110D"} 0%,transparent 60%)` }} />
        <div className="absolute right-3 top-3 rounded-md border px-3 py-1 font-display text-[9px] font-bold tracking-[1px] uppercase" style={{ color: agent.color, borderColor: `rgba(${agent.rgb},0.3)`, background: `rgba(${agent.rgb},0.12)` }}>
          {agent.title}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 font-display text-xl font-extrabold leading-none -tracking-[0.5px]" style={{ color: agent.color }}>{agent.name.toUpperCase()}</div>
        <div className="mb-3 font-display text-[10px] font-bold tracking-[1.5px] uppercase" style={{ color: `rgba(${agent.rgb},0.55)` }}>{agent.title}</div>
        <div className="mb-3 flex flex-col gap-1.5">
          {agent.abilities.map((ab) => (
            <div key={ab} className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <span className="text-[9px]" style={{ color: agent.color }}>▶</span>{ab}
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-3 text-xs leading-5 text-[var(--dim)]">{agent.desc}</div>
      </div>
    </motion.div>
  );
}

function AgentsSection() {
  const [ref, inView] = useFade(0.05);
  const reduceMotion = useReducedMotion();

  return (
    <section id="agents" className="px-6 pb-24 pt-20 md:px-12 lg:px-20">
      <motion.div ref={ref} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-10">
        <div className="mb-4 flex items-center gap-3 font-display text-[10px] font-bold tracking-[3px] uppercase text-[var(--lime)]">
          <div className="h-px w-5 bg-[var(--lime)]" />The Team
        </div>
        <h2 className="mb-3 max-w-2xl font-display text-[32px] font-extrabold leading-[1.05] -tracking-[2.5px] text-[var(--cream)] sm:text-5xl">Meet the Agents of Alphonso</h2>
        <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">Nine specialized AI agents. Each with a mission. Working together as one seamless ecosystem.</p>
      </motion.div>

      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
        {PRIMARY.map((a, i) => <AgentCard key={a.id} agent={a} index={i} />)}
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: reduceMotion ? 0 : 0.5 }} className="flex flex-wrap items-center gap-2 rounded-xl border border-white/6 bg-[var(--bg2)] p-4">
        <span className="mr-1 text-sm font-medium text-[var(--dim)]">Also in the team:</span>
        {SUPPORT.map((a, i) => <AgentCard key={a.id} agent={a} index={i} />)}
      </motion.div>
    </section>
  );
}

function Pipeline() {
  const [ref, inView] = useFade(0.05);
  const reduceMotion = useReducedMotion();

  return (
    <section id="pipeline" className="relative px-6 pb-24 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute right-[-8%] top-15 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(158,240,26,0.025)_0%,transparent_70%)]" />
      <motion.div ref={ref} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-10">
        <div className="mb-4 flex items-center gap-3 font-display text-[10px] font-bold tracking-[3px] uppercase text-[var(--lime)]">
          <div className="h-px w-5 bg-[var(--lime)]" />Built to Execute
        </div>
        <h2 className="mb-4 max-w-2xl font-display text-[32px] font-extrabold leading-[1.05] -tracking-[2.5px] text-[var(--cream)] sm:text-5xl">
          Powerful Modules.<br />
          <span className="text-white/18">Unified by Purpose.</span>
        </h2>
        <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">A durable orchestration pipeline with state transitions, dead-letter replay, and approval gates at every risk point.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {PIPELINE.map((s, i) => (
          <motion.div key={s.n} initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: reduceMotion ? 0 : 0.55 }} className="rounded-xl border border-white/5 bg-[var(--bg2)] p-5">
            <div className="mb-3 select-none text-4xl font-display font-extrabold leading-none -tracking-[3px] text-white/3">{s.n}</div>
            <div className="mb-2 font-display text-[9px] font-bold tracking-[1.5px] uppercase" style={{ color: s.color }}>{s.who}</div>
            <div className="mb-2 font-display text-base font-bold tracking-[-0.4px] text-[var(--cream)]">{s.label}</div>
            <div className="text-sm leading-6 text-[var(--muted)]">{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const TERM_LINES = [
  { cmd: true, text: "ollama pull llama3.2:3b" },
  { cmd: false, ok: true, text: "Model downloaded — 100% local, zero API calls" },
  { cmd: true, text: "npm run dev" },
  { cmd: false, ok: true, text: "Alphonso running at localhost:5173" },
  { cmd: true, text: "npm run tauri build" },
  { cmd: false, ok: true, text: "Desktop installer built — 0 bytes sent to cloud" },
  { cmd: false, ok: false, text: "# Your machine. Your crew. Your rules." },
];

function Privacy() {
  const [ref, inView] = useFade(0.08);
  const [lines, setLines] = useState<typeof TERM_LINES>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    TERM_LINES.forEach((line, i) => setTimeout(() => setLines((prev) => [...prev, line]), i * 370));
  }, [inView]);

  return (
    <section id="privacy" className="px-6 pb-24 md:px-12 lg:px-20">
      <div ref={ref} className="relative grid items-center gap-10 overflow-hidden rounded-3xl border border-lime/10 bg-gradient-to-br from-lime/4 to-transparent p-8 md:grid-cols-2 lg:p-12">
        <div className="pointer-events-none absolute left-[-15%] top-[-25%] h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(158,240,26,0.04)_0%,transparent_70%)]" />
        <motion.div initial={{ opacity: 0, x: -22 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: reduceMotion ? 0 : 0.7 }}>
          <div className="mb-4 flex items-center gap-3 font-display text-[10px] font-bold tracking-[3px] uppercase text-[var(--lime)]">
            <div className="h-px w-5 bg-[var(--lime)]" />Local-First Operating Environment
          </div>
          <h2 className="mb-5 font-display text-[28px] font-extrabold leading-[1.1] -tracking-[2px] text-[var(--cream)] sm:text-4xl">Your AI.<br />Your Machine.<br />Your Rules.</h2>
          <p className="mb-6 text-sm leading-7 text-[var(--muted)]">Alphonso runs locally on your desktop. No cloud lock-in. No data leakage. You stay in control with approval-gated execution and full visibility into every action.</p>
          <div className="flex flex-col gap-3">
            {["Ollama local inference — no external API for core LLM", "SQLite memory stored entirely on your device", "Fail-closed policy gate on every outbound connector", "Approval required before any data leaves your machine"].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-0.5 flex-shrink-0 text-sm text-[var(--lime)]">✓</span>
                <span className="text-sm leading-6 text-[var(--muted)]">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 22 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.15 }} className="overflow-hidden rounded-2xl border border-lime/10 bg-[var(--bg)]">
          <div className="flex items-center justify-between border-b border-lime/8 bg-[var(--bg2)] px-4 py-3">
            <div className="flex gap-2">{["#FF5F57", "#FEBC2E", "#28C840"].map((c) => <div key={c} className="h-3 w-3 rounded-full bg-current opacity-80" style={{ color: c }} />)}</div>
            <div className="font-mono text-[10px] text-[var(--dim)]">alphonso — local env</div>
            <div />
          </div>
          <div className="px-4 py-5 font-mono text-xs leading-7">
            <AnimatePresence>
              {lines.map((line, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} style={{ color: line.cmd ? "var(--cream)" : line.ok ? "var(--lime)" : "var(--dim)" }}>
                  {line.cmd && <span className="text-[var(--lime)]">$ </span>}
                  {!line.cmd && line.ok && <span>✓ </span>}
                  {line.text}
                </motion.div>
              ))}
            </AnimatePresence>
            {lines.length > 0 && lines.length < TERM_LINES.length && <span className="text-[var(--lime)]">▋</span>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MissionCTA() {
  const [ref, inView] = useFade(0.1);
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-6 pb-24 md:px-12 lg:px-20">
      <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl border border-lime/12 bg-[var(--bg2)]">
        <Image src="/ALPHONSO_THUMBNAIL.webp" alt="Be Part of Something Bigger" fill className="absolute inset-0 h-full w-full object-cover object-top opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent" />
        <div className="pointer-events-none absolute left-[38%] top-[35%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(158,240,26,0.05)_0%,transparent_70%)]" />

        <div className="relative max-w-2xl p-9 lg:p-12">
          <div className="mb-5 flex items-center gap-3 font-display text-[10px] font-bold tracking-[3px] uppercase text-[var(--lime)]">
            <div className="h-px w-5 bg-[var(--lime)]" />Mission Driven
          </div>
          <h2 className="mb-1 font-display text-[32px] font-extrabold leading-none -tracking-[2.5px] text-[var(--cream)] sm:text-5xl lg:text-6xl">Be Part of</h2>
          <h2 className="mb-6 font-display text-[32px] font-extrabold leading-none -tracking-[2.5px] text-[var(--lime)] sm:text-5xl lg:text-6xl" style={{ textShadow: "0 0 50px rgba(158,240,26,0.5)" }}>Something Bigger.</h2>
          <p className="mb-8 text-sm leading-7 text-[var(--muted)]">Together, we execute, engage, and deliver infinite impact across the world.</p>
          <div className="flex flex-wrap gap-3">
            <a href={REL} target="_blank" rel="noopener noreferrer" className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-[var(--lime)] px-5 py-3 font-display font-extrabold text-sm text-black shadow-[0_0_40px_rgba(158,240,26,0.4)] transition-all duration-200 hover:bg-[var(--lime-hi)] hover:-translate-y-0.5">
              Join the Mission
            </a>
            <a href="/docs/roadmap" className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-display text-sm font-semibold text-[var(--cream)] transition-colors duration-200 hover:border-white/30">
              View Roadmap
            </a>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-2.5 md:flex">
          {[["v2.0.0", "June 2026"], ["MIT", "Open Source"], ["9", "AI Agents"], ["13", "Connectors"]].map(([n, l]) => (
            <div key={n} className="rounded-lg border border-lime/15 bg-black/65 p-3 text-center backdrop-blur-xl">
              <div className="font-display text-lg font-extrabold tracking-[-1px] text-[var(--lime)]">{n}</div>
              <div className="text-[10px] font-medium text-[var(--dim)]">{l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function VideoShowcase() {
  const [ref, inView] = useFade(0.08);
  const reduceMotion = useReducedMotion();

  return (
    <section id="video" className="px-6 pb-24 pt-10 md:px-12 lg:px-20">
      <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: reduceMotion ? 0 : 0.7 }} className="overflow-hidden rounded-3xl border border-lime/12 bg-[var(--bg2)] shadow-[0_0_80px_rgba(158,240,26,0.08)]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_2fr]">
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="mb-4 flex items-center gap-3 font-display text-[10px] font-bold tracking-[3px] uppercase text-[var(--lime)]">
              <div className="h-px w-5 bg-[var(--lime)]" />Mission Preview
            </div>
            <h2 className="mb-4 font-display text-[32px] font-extrabold leading-none -tracking-[2.5px] text-[var(--cream)] sm:text-5xl">Watch Alphonso in Motion</h2>
            <p className="mb-6 text-sm leading-7 text-[var(--muted)]">A short cinematic preview of the local-first AI crew, the governance flow, and the mission behind the ecosystem.</p>
            <a href={REL} target="_blank" rel="noopener noreferrer" className="cursor-pointer inline-flex w-fit items-center gap-2 rounded-lg bg-[var(--lime)] px-5 py-3 font-display font-extrabold text-sm text-black shadow-[0_0_40px_rgba(158,240,26,0.35)] transition-all duration-200 hover:bg-[var(--lime-hi)]">
              Download {RELEASE}
            </a>
          </div>
          <div className="relative min-h-[320px] bg-black">
            <video
              src="/video/alphonso-preview.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="/ALPHONSO_THUMBNAIL.webp"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-lime/8 px-6 pb-8 pt-10 md:px-12 lg:px-20">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-5 border-b border-white/5 pb-6">
        <div className="flex items-center gap-3">
          <BrandLogo size={34} />
          <div>
            <div className="font-display text-sm font-extrabold tracking-[1px] uppercase text-[var(--cream)]">Alphonso Ecosystem</div>
            <div className="mt-1 text-xs font-medium text-[var(--dim)]">One ecosystem, Infinite impact. Execute. Engage. Deliver.</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          {[["GitHub", GH], ["Releases", `${GH}/releases`], ["Docs", "/docs"], ["Architecture", "/docs/architecture"], ["CLAUDE.md", `${GH}/blob/main/CLAUDE.md`]].map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="cursor-pointer text-sm font-medium text-[var(--dim)] transition-colors duration-200 hover:text-[var(--lime)]">{label}</a>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono text-xs text-[var(--dim)]">MIT License · 2026 · 9 agents · 13 connectors · 1,015 tests passing</div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--lime)]" style={{ animation: "pulse-live 2s ease-in-out infinite" }} />
          <span className="font-mono text-xs text-[var(--lime)]">{RELEASE} LIVE</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <TrailerGate />
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <AgentsSection />
        <Pipeline />
        <Privacy />
        <VideoShowcase />
        <MissionCTA />
      </main>
      <Footer />
    </>
  );
}
