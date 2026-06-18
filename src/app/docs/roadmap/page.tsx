import Link from "next/link";

const RELEASE = "v2.0.0";

const roadmap = [
  { phase: "Alpha", status: "Released", detail: "Core local-first runtime, crew structure, and governance model." },
  { phase: "v2.0.0", status: "Current", detail: "Expanded docs, release polish, and public landing page." },
  { phase: "Desktop", status: "Next", detail: "Tauri packaging with local SQLite memory and offline-first workflows." },
  { phase: "Connectors", status: "Next", detail: "Approved Telegram, WhatsApp, Meta, and YouTube distribution paths." },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-32 text-[var(--cream)] md:px-12 lg:px-20">
      <article className="mx-auto max-w-4xl">
        <Link href="/docs" className="mb-6 inline-flex text-sm font-medium text-[var(--lime)] hover:text-[var(--lime-hi)]">
          ← Back to docs
        </Link>
        <p className="mb-3 font-display text-[10px] font-bold tracking-[3px] text-[var(--lime)] uppercase">Roadmap</p>
        <h1 className="mb-5 font-display text-[40px] font-extrabold leading-none -tracking-[2.5px] sm:text-6xl">Roadmap</h1>
        <p className="mb-8 text-sm leading-7 text-[var(--muted)] sm:text-base">
          The roadmap tracks the transition from alpha to a durable, local-first AI operating environment for creators, operators, and founders.
        </p>

        <div className="space-y-4">
          {roadmap.map((item) => (
            <section key={item.phase} className="rounded-2xl border border-white/6 bg-[var(--bg2)] p-6">
              <div className="mb-3 flex items-center justify-between gap-4">
                <h2 className="font-display text-2xl font-extrabold tracking-[-1px]">{item.phase}</h2>
                <span className="rounded-full border border-lime/15 bg-lime/[0.04] px-3 py-1 font-mono text-xs text-[var(--lime)]">{item.status}</span>
              </div>
              <p className="text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
            </section>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-lime/12 bg-lime/[0.035] p-6">
          <p className="text-sm leading-7 text-[var(--muted)]">
            Current public release: <span className="text-[var(--lime)]">{RELEASE}</span>.
          </p>
        </div>
      </article>
    </main>
  );
}
