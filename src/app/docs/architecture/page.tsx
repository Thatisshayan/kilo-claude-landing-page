import Link from "next/link";

const RELEASE = "v2.0.0";

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-32 text-[var(--cream)] md:px-12 lg:px-20">
      <article className="mx-auto max-w-4xl">
        <Link href="/docs" className="mb-6 inline-flex text-sm font-medium text-[var(--lime)] hover:text-[var(--lime-hi)]">
          ← Back to docs
        </Link>
        <p className="mb-3 font-display text-[10px] font-bold tracking-[3px] text-[var(--lime)] uppercase">Architecture</p>
        <h1 className="mb-5 font-display text-[40px] font-extrabold leading-none -tracking-[2.5px] sm:text-6xl">Ecosystem Architecture</h1>
        <p className="mb-8 text-sm leading-7 text-[var(--muted)] sm:text-base">
          Alphonso is designed as a modular crew: orchestration, execution, creative, distribution, governance, research, memory, security, and intelligence layers work together through explicit state transitions.
        </p>

        <div className="space-y-6">
          <section className="rounded-2xl border border-white/6 bg-[var(--bg2)] p-6">
            <h2 className="mb-3 font-display text-2xl font-extrabold tracking-[-1px]">Core Layers</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {["Orchestration", "Execution", "Governance", "Memory", "Connectors", "Security"].map((layer) => (
                <div key={layer} className="rounded-xl border border-lime/10 bg-lime/[0.035] p-4 text-sm text-[var(--muted)]">
                  <span className="block text-[var(--lime)]">{layer}</span>
                  <span className="mt-1 block leading-6">Reusable module with explicit inputs, outputs, and approval boundaries.</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/6 bg-[var(--bg2)] p-6">
            <h2 className="mb-3 font-display text-2xl font-extrabold tracking-[-1px]">Current Release</h2>
            <p className="text-sm leading-7 text-[var(--muted)]">Architecture docs are aligned with {RELEASE} and will evolve as the ecosystem grows.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
