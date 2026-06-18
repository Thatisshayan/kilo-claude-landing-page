import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AGENT_PROFILES } from "@/lib/agents";

const GH = "https://github.com/Thatisshayan/AlphonsoEcosystem";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function generateStaticParams() {
  return AGENT_PROFILES.map((agent) => ({ id: agent.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const agent = AGENT_PROFILES.find((a) => a.id === params.id);
  if (!agent) return {};
  const title = `${agent.name} — ${agent.title} | Alphonso Ecosystem`;
  const description = agent.role;
  const url = `https://thatisshayan.github.io/kilo-claude-landing-page/agents/${params.id}/`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: agent.image }],
    },
    alternates: {
      canonical: url,
    },
  };
}

function AgentPage({ params }: { params: { id: string } }) {
  const agent = AGENT_PROFILES.find((a) => a.id === params.id);
  if (!agent) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: agent.name,
    jobTitle: agent.title,
    url: `https://thatisshayan.github.io/kilo-claude-landing-page/agents/${agent.id}/`,
    image: `https://thatisshayan.github.io/kilo-claude-landing-page${agent.image}`,
    description: agent.role,
    worksFor: {
      "@type": "Organization",
      name: "Alphonso Ecosystem",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--cream)]">
        <article className="mx-auto max-w-5xl px-6 py-32 md:px-12 lg:px-20">
          <Link href={asset("/")} className="mb-8 inline-flex text-sm font-medium text-[var(--lime)] hover:text-[var(--lime-hi)]">
            ← Back to Ecosystem
          </Link>
          <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-3xl sm:h-80 sm:w-80" style={{ boxShadow: `0 24px 80px rgba(${agent.rgb},0.25)` }}>
              <Image src={asset(agent.image)} alt={agent.name} fill className="h-full w-full object-cover" priority />
            </div>
            <div>
              <p className="mb-3 font-display text-[10px] font-bold tracking-[3px] uppercase" style={{ color: agent.color }}>{agent.title}</p>
              <h1 className="mb-3 font-display text-[42px] font-extrabold leading-none -tracking-[2.5px] text-[var(--cream)] sm:text-6xl">{agent.name}</h1>
              <p className="mb-5 text-base leading-7 text-[var(--muted)]">{agent.tagline}</p>
              <a href={GH} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--cream)]">View on GitHub</a>
            </div>
          </div>
          <div className="space-y-12">
            <section>
              <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-1px]" style={{ color: agent.color }}>About</h2>
              <p className="text-sm leading-7 text-[var(--muted)]">{agent.role}</p>
            </section>
            <section>
              <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-1px]" style={{ color: agent.color }}>Capabilities</h2>
              <ul className="grid gap-3 md:grid-cols-2">
                {agent.abilities.map((ab) => (
                  <li key={ab} className="flex items-center gap-3 rounded-lg border border-white/6 bg-[var(--bg2)] p-4 text-sm text-[var(--muted)]"><span style={{ color: agent.color }}>▶</span>{ab}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-1px]" style={{ color: agent.color }}>Connectors</h2>
              <div className="flex flex-wrap gap-2">
                {agent.connectors.map((c) => (
                  <span key={c} className="rounded-full border border-white/10 bg-[var(--bg2)] px-3 py-1 text-xs font-medium text-[var(--muted)]">{c}</span>
                ))}
              </div>
            </section>
            <section>
              <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-1px]" style={{ color: agent.color }}>Works With</h2>
              <ul className="flex flex-wrap gap-3">
                {agent.worksWith.map((w) => {
                  const partner = AGENT_PROFILES.find((a) => a.id === w);
                  return (
                    <li key={w}>
                      <Link href={asset(`/agents/${w}`)} className="flex items-center gap-2 rounded-full border border-white/10 bg-[var(--bg2)] px-3 py-1 text-xs font-medium transition-colors hover:border-white/20" style={{ color: partner?.color ?? "var(--muted)" }}>{partner?.name ?? w}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section>
              <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-1px]" style={{ color: agent.color }}>Example Workflow</h2>
              <pre className="whitespace-pre-wrap rounded-xl border border-white/6 bg-[var(--bg2)] p-5 text-xs leading-relaxed text-[var(--muted)]">{agent.workflow}</pre>
            </section>
            <section className="rounded-2xl border border-white/6 bg-gradient-to-br from-[var(--bg2)] to-transparent p-8 text-center">
              <h3 className="mb-3 font-display text-xl font-bold" style={{ color: agent.color }}>Ready to work with {agent.name}?</h3>
              <p className="mb-5 text-sm text-[var(--muted)]">Download Alphonso and experience local-first AI execution.</p>
              <a href={GH} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-[var(--bg)] transition-opacity hover:opacity-90" style={{ background: agent.color }}>Get Started</a>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

export default AgentPage;