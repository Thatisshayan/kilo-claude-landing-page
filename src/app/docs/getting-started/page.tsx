import Link from "next/link";

const RELEASE = "v2.0.0";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-32 text-[var(--cream)] md:px-12 lg:px-20">
      <article className="mx-auto max-w-4xl">
        <Link href={asset("/docs")} className="mb-6 inline-flex text-sm font-medium text-[var(--lime)] hover:text-[var(--lime-hi)]">
          ← Back to docs
        </Link>
        <p className="mb-3 font-display text-[10px] font-bold tracking-[3px] text-[var(--lime)] uppercase">Getting Started</p>
        <h1 className="mb-5 font-display text-[40px] font-extrabold leading-none -tracking-[2.5px] sm:text-6xl">Run Alphonso Locally</h1>
        <p className="mb-8 text-sm leading-7 text-[var(--muted)] sm:text-base">
          This page is a local guide for the current {RELEASE} landing page and the public documentation structure. Follow the source repository for exact install steps.
        </p>

        <div className="space-y-6">
          <section className="rounded-2xl border border-white/6 bg-[var(--bg2)] p-6">
            <h2 className="mb-3 font-display text-2xl font-extrabold tracking-[-1px]">Prerequisites</h2>
            <ul className="grid gap-3 text-sm leading-7 text-[var(--muted)] sm:grid-cols-2">
              <li><span className="text-[var(--lime)]">•</span> Node.js LTS</li>
              <li><span className="text-[var(--lime)]">•</span> Ollama for local inference</li>
              <li><span className="text-[var(--lime)]">•</span> A GitHub account for release access</li>
              <li><span className="text-[var(--lime)]">•</span> A desktop environment for Tauri builds</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/6 bg-[var(--bg2)] p-6">
            <h2 className="mb-3 font-display text-2xl font-extrabold tracking-[-1px]">Preview the landing page</h2>
            <pre className="overflow-x-auto rounded-xl bg-black/50 p-4 font-mono text-xs leading-6 text-[var(--lime)]">
              npm install
              npm run dev
            </pre>
          </section>
        </div>
      </article>
    </main>
  );
}
