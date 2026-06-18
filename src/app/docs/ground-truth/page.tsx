import Link from "next/link";

const GH = "https://github.com/Thatisshayan/AlphonsoEcosystem";
const RELEASE = "v2.0.0";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function GroundTruthPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-32 text-[var(--cream)] md:px-12 lg:px-20">
      <article className="mx-auto max-w-4xl">
        <Link href={asset("/docs")} className="mb-6 inline-flex text-sm font-medium text-[var(--lime)] hover:text-[var(--lime-hi)]">
          ← Back to docs
        </Link>
        <p className="mb-3 font-display text-[10px] font-bold tracking-[3px] text-[var(--lime)] uppercase">Ground Truth</p>
        <h1 className="mb-5 font-display text-[40px] font-extrabold leading-none -tracking-[2.5px] sm:text-6xl">Why Alphonso Exists</h1>
        <p className="mb-8 text-sm leading-7 text-[var(--muted)] sm:text-base">
          Alphonso is built around one belief: AI should amplify human intent without taking control away from humans. The ecosystem coordinates specialized agents while keeping execution local, auditable, and approval-gated.
        </p>

        <div className="space-y-6">
          <section className="rounded-2xl border border-white/6 bg-[var(--bg2)] p-6">
            <h2 className="mb-3 font-display text-2xl font-extrabold tracking-[-1px]">Mission</h2>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Build a durable AI operating environment that can research, create, execute, govern, and distribute work while keeping the human operator in command.
            </p>
          </section>

          <section className="rounded-2xl border border-white/6 bg-[var(--bg2)] p-6">
            <h2 className="mb-3 font-display text-2xl font-extrabold tracking-[-1px]">Non-Negotiables</h2>
            <ul className="grid gap-3 text-sm leading-7 text-[var(--muted)] sm:grid-cols-2">
              <li><span className="text-[var(--lime)]">•</span> Local-first memory and execution.</li>
              <li><span className="text-[var(--lime)]">•</span> Human approval before high-stakes actions.</li>
              <li><span className="text-[var(--lime)]">•</span> Auditability for every agent decision.</li>
              <li><span className="text-[var(--lime)]">•</span> Open, modular architecture.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/6 bg-[var(--bg2)] p-6">
            <h2 className="mb-3 font-display text-2xl font-extrabold tracking-[-1px]">Release</h2>
            <p className="text-sm leading-7 text-[var(--muted)]">
              The current public release target is <span className="text-[var(--lime)]">{RELEASE}</span>.
            </p>
            <a href={`${GH}/releases/tag/${RELEASE}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-medium text-[var(--lime)] hover:text-[var(--lime-hi)]">
              Open GitHub release →
            </a>
          </section>
        </div>
      </article>
    </main>
  );
}
