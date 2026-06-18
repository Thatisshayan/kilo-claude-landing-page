import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AGENT_PROFILES, type AgentProfile } from "@/lib/agents";

const GH = "https://github.com/Thatisshayan/AlphonsoEcosystem";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function generateStaticParams() {
  return AGENT_PROFILES.map((agent) => ({ id: agent.id }));
}

function AgentPage({ params }: { params: { id: string } }) {
  const agent = AGENT_PROFILES.find((a) => a.id === params.id);
  if (!agent) notFound();

  const isPrimary = "abilities" in agent && "story" in agent;

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-32 text-[var(--cream)] md:px-12 lg:px-20">
      <article className="mx-auto max-w-5xl">
        <Link href={asset("/")} className="mb-6 inline-flex text-sm font-medium text-[var(--lime)] hover:text-[var(--lime-hi)]">
          ← Back to home
        </Link>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl bg-[var(--bg2)] sm:h-80 sm:w-80">
            <Image src={asset(agent.image)} alt={agent.name} fill className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-3 font-display text-[10px] font-bold tracking-[3px] uppercase text-[var(--lime)]">{agent.title}</p>
            <h1 className="mb-3 font-display text-[42px] font-extrabold leading-none -tracking-[2.5px] text-[var(--cream)] sm:text-6xl">{agent.name}</h1>
            <p className="mb-5 text-sm leading-7 text-[var(--muted)]">{agent.role}</p>
            <a href={GH} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--cream)]">
              View on GitHub
            </a>
          </div>
        </div>

        <div className="space-y-10">
          {isPrimary && (
            <section>
              <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-1px] text-[var(--lime)]">Abilities</h2>
              <ul className="grid gap-3 md:grid-cols-2">
                {agent.abilities.map((ab) => (
                  <li key={ab} className="flex items-center gap-3 rounded-lg border border-white/6 bg-[var(--bg2)] p-4 text-sm text-[var(--muted)]">
                    <span className="text-[var(--lime)]">▶</span>{ab}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {"story" in agent && (
            <section>
              <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-1px] text-[var(--lime)]">Story</h2>
              <p className="text-sm leading-7 text-[var(--muted)]">{agent.story}</p>
            </section>
          )}

          {"mission" in agent && (
            <section>
              <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-1px] text-[var(--lime)]">Mission</h2>
              <p className="text-sm leading-7 text-[var(--muted)]">{agent.mission}</p>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}

export default AgentPage;