import Link from "next/link";

const GH = "https://github.com/Thatisshayan/AlphonsoEcosystem";
const RELEASE = "v2.0.0";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

const docs = [
  {
    title: "Ground Truth",
    href: "/docs/ground-truth",
    source: `${GH}/blob/main/docs/ALPHONSO_GROUND_TRUTH.md`,
    desc: "The mission, philosophy, and non-negotiables behind Alphonso.",
  },
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    source: `${GH}/blob/main/docs/GETTING_STARTED.md`,
    desc: "Install, configure, and run the local-first AI ecosystem.",
  },
  {
    title: "Architecture",
    href: "/docs/architecture",
    source: `${GH}/blob/main/ARCHITECTURE.md`,
    desc: "How orchestration, governance, memory, and connectors work together.",
  },
  {
    title: "Roadmap",
    href: "/docs/roadmap",
    source: `${GH}/blob/main/docs/ROADMAP.md`,
    desc: "The path from alpha to a resilient, community-driven ecosystem.",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-32 text-[var(--cream)] md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <Link href={asset("/")} className="mb-6 inline-flex text-sm font-medium text-[var(--lime)] hover:text-[var(--lime-hi)]">
            ← Back to landing page
          </Link>
          <p className="mb-3 font-display text-[10px] font-bold tracking-[3px] text-[var(--lime)] uppercase">Documentation</p>
          <h1 className="mb-4 font-display text-[40px] font-extrabold leading-none -tracking-[2.5px] text-[var(--cream)] sm:text-6xl">Alphonso Docs</h1>
          <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Local documentation pages for the Alphonso Ecosystem. Each page mirrors the current structure and links back to the source files in GitHub release {RELEASE}.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {docs.map((doc) => (
            <Link key={doc.title} href={asset(doc.href)} className="group rounded-2xl border border-white/7 bg-[var(--bg2)] p-6 transition hover:-translate-y-1 hover:border-lime/20 hover:bg-white/[0.025]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="rounded-full border border-lime/15 bg-lime/[0.04] px-3 py-1 font-mono text-xs text-[var(--lime)]">{RELEASE}</span>
                <span className="text-sm text-[var(--dim)] transition group-hover:text-[var(--lime)]">Open →</span>
              </div>
              <h2 className="mb-2 font-display text-2xl font-extrabold tracking-[-1px]">{doc.title}</h2>
              <p className="mb-5 text-sm leading-6 text-[var(--muted)]">{doc.desc}</p>
              <span className="text-xs font-medium text-[var(--dim)]">{doc.source.replace(`${GH}/blob/main/`, "")}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
