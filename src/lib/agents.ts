export type Connector = "filesystem" | "terminal" | "browser" | "github" | "firebase" | "vercel" | "notion" | "slack" | "telegram" | "whatsapp" | "youtube" | "linkedin" | "email";

export type AgentProfile = {
  id: string;
  name: string;
  title: string;
  role: string;
  tagline: string;
  color: string;
  rgb: string;
  image: string;
  abilities: string[];
  desc: string;
  story: string;
  mission: string;
  connectors: Connector[];
  worksWith: string[];
  workflow: string;
};

export const AGENT_PROFILES: AgentProfile[] = [
  {
    id: "jose",
    name: "Jose",
    title: "Orchestrator",
    tagline: "Mission routing, decomposition, coordination, and final confirmation.",
    role: "Mission routing, decomposition, coordination, and final confirmation.",
    color: "#F5B535",
    rgb: "245,181,53",
    image: "/agents/jose.png",
    abilities: ["Route & Coordinate", "Plan & Delegate", "Monitor & Adapt", "Confirm & Report"],
    desc: "The brain of the operation. Every task flows through Jose — he routes, assigns, merges, and confirms.",
    story: "Jose keeps the crew from becoming noise. He turns a vague mission into ordered packets, assigns ownership, watches state transitions, and makes sure every completed loop reports back cleanly.",
    mission: "Keep the ecosystem coherent: no orphan tasks, no silent failures, no work without confirmation.",
    connectors: ["filesystem", "terminal", "github", "firebase"],
    worksWith: ["alphonso", "miya", "marcus"],
    workflow: "Jose receives a task: 'Research and write a LinkedIn post about AI trends'.\n1. Jose analyzes the request and identifies it needs research and creative work.\n2. Routes to Hector for evidence gathering on AI trends.\n3. Sends Hector's findings to Miya for creative drafting.\n4. Validates Miya's draft meets Alphonso's quality standards.\n5. Routes final post to Marcus for LinkedIn publishing.",
  },
  {
    id: "alphonso",
    name: "Alphonso",
    title: "Execution Agent",
    tagline: "Task execution, output verification, and delivery packaging.",
    role: "Task execution, output verification, and delivery packaging.",
    color: "#00C8E0",
    rgb: "0,200,224",
    image: "/agents/alphonso.png",
    abilities: ["Strategize", "Align", "Delegate", "Execute"],
    desc: "The hands. Alphonso runs tasks, verifies output, and packages deliverables. Nothing ships without his approval.",
    story: "Alphonso is built for execution discipline. He takes the plan, runs the work, checks the result, and packages the output so the next agent or human operator can trust it.",
    mission: "Turn approved intent into completed work without drifting from the mission.",
    connectors: ["filesystem", "terminal", "browser", "vercel"],
    worksWith: ["jose", "hector", "maria"],
    workflow: "Alphonso gets a coding task: 'Build a Next.js component'.\n1. Forks the repo and creates a feature branch.\n2. Writes the component using framework patterns.\n3. Runs local tests and type checks.\n4. Packages changes into a clear diff.\n5. Reports back status and artifacts to Jose.",
  },
  {
    id: "miya",
    name: "Miya",
    title: "Creative Agent",
    tagline: "Scripts, storyboards, creative strategy, and export-ready creative.",
    role: "Scripts, storyboards, creative strategy, and export-ready creative.",
    color: "#B060FF",
    rgb: "176,96,255",
    image: "/agents/miya.png",
    abilities: ["Create", "Design", "Write", "Inspire"],
    desc: "Scripts, storyboards, creative strategy, and export-ready deliverables. Miya turns a brief into a finished piece.",
    story: "Miya protects the creative spark. She translates a brief into story, structure, visual direction, and language that can move from concept to publishable asset.",
    mission: "Make the work feel human, sharp, and ready for the world.",
    connectors: ["filesystem", "browser", "firebase", "linkedin", "youtube"],
    worksWith: ["jose", "marcus", "alphonso"],
    workflow: "Miya receives a brief: 'Create a product announcement video'.\n1. Generates storyboard and script using creative framework.\n2. Designs visual assets and copy.\n3. Packages export-ready files.\n4. Sends to Alphonso for quality check.\n5. Routes to Marcus for YouTube distribution.",
  },
  {
    id: "marcus",
    name: "Marcus",
    title: "Distribution Agent",
    tagline: "Approved publishing, amplification, engagement, and channel analytics.",
    role: "Approved publishing, amplification, engagement, and channel analytics.",
    color: "#3ED464",
    rgb: "62,212,100",
    image: "/agents/marcus.png",
    abilities: ["Distribute", "Amplify", "Engage", "Analyze"],
    desc: "Once Marcus runs it, it's live — YouTube, Telegram, WhatsApp, Meta. Under approved paths only.",
    story: "Marcus is the launch path. He understands that distribution is not just posting; it is timing, channel fit, audience response, and measurable impact.",
    mission: "Move approved content into the world through the right channels, with receipts.",
    connectors: ["telegram", "whatsapp", "youtube", "linkedin", "email"],
    worksWith: ["jose", "miya", "alphonso"],
    workflow: "Marcus receives: 'Publish this to LinkedIn'.\n1. Validates approval gate from Maria.\n2. Formats content for platform.\n3. Publishes with timing strategy.\n4. Monitors initial engagement.\n5. Reports metrics back to Jose.",
  },
  {
    id: "maria",
    name: "Maria",
    title: "Governance Agent",
    tagline: "Risk scoring, audit trails, approval gates, and policy enforcement.",
    role: "Risk scoring, audit trails, approval gates, and policy enforcement.",
    color: "#B0B8C0",
    rgb: "176,184,192",
    image: "/agents/maria.png",
    abilities: ["Govern", "Verify", "Audit", "Ensure"],
    desc: "Nothing risky moves without Maria. Audit trails, risk scoring, and approval gates at every step.",
    story: "Maria is the calm brake and the clear record. She scores risk, checks policy, and makes sure high-stakes actions pause for human approval.",
    mission: "Keep Alphonso trustworthy: auditable, safe, and human-approved where it matters.",
    connectors: ["filesystem", "github", "firebase"],
    worksWith: ["jose", "sentinel", "alphonso"],
    workflow: "Maria receives: 'Execute this shell command from user'.\n1. Scores risk level of the action.\n2. Checks against policy rules.\n3. If high-risk, pauses for approval.\n4. Logs decision to Echo.\n5. Signals Jose to proceed or wait.",
  },
  {
    id: "hector",
    name: "Hector",
    title: "Research Agent",
    tagline: "Evidence gathering, source comparison, and context synthesis.",
    role: "Evidence gathering, source comparison, and context synthesis.",
    color: "#52CBA0",
    rgb: "82,203,160",
    image: "/agents/hector.png",
    abilities: ["Research", "Compare", "Summarize", "Source"],
    desc: "Hector gathers context, compares sources, and gives the crew grounded material before decisions are made.",
    story: "Hector keeps the crew from guessing. He collects references, separates signal from noise, and gives Jose enough context to route the mission intelligently.",
    mission: "Give every decision a grounded evidence trail.",
    connectors: ["browser", "filesystem", "github"],
    worksWith: ["jose", "nova", "miya"],
    workflow: "Hector gets: 'Research React Server Components'.\n1. Searches and reads documentation.\n2. Compares multiple sources.\n3. Summarizes key patterns and tradeoffs.\n4. Stores findings in Echo.\n5. Routes insights to Miya for explanation.",
  },
  {
    id: "echo",
    name: "Echo",
    title: "Memory Agent",
    tagline: "Local memory, decision history, receipts, and replayable context.",
    role: "Local memory, decision history, receipts, and replayable context.",
    color: "#60B8E8",
    rgb: "96,184,232",
    image: "/agents/echo.png",
    abilities: ["Remember", "Index", "Retrieve", "Replay"],
    desc: "Echo stores decisions, receipts, and mission history locally so the crew gets smarter without leaking data.",
    story: "Echo is the crew's long-term memory. Every decision, receipt, and event is stored locally so future missions start with context instead of starting from zero.",
    mission: "Make memory private, durable, and useful.",
    connectors: ["filesystem", "firebase"],
    worksWith: ["jose", "maria", "nova"],
    workflow: "Echo receives: 'Store this session log'.\n1. Indexes the entry with timestamps.\n2. Encrypts and saves to local storage.\n3. Updates search vectors.\n4. Maintains rolling context window.\n5. Provides retrieval API for all agents.",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    title: "Security Agent",
    tagline: "Policy checks, connector safety, secrets protection, and fail-closed behavior.",
    role: "Policy checks, connector safety, secrets protection, and fail-closed behavior.",
    color: "#FF6060",
    rgb: "255,96,96",
    image: "/agents/sentinel.png",
    abilities: ["Protect", "Scan", "Block", "Report"],
    desc: "Sentinel watches outbound paths, blocks risky actions, and protects secrets before anything leaves the machine.",
    story: "Sentinel is the fail-closed layer. If a path looks unsafe, unclear, or unapproved, Sentinel stops the action and asks for review.",
    mission: "Protect the machine, the data, and the operator.",
    connectors: ["filesystem", "terminal", "browser"],
    worksWith: ["maria", "alphonso", "marcus"],
    workflow: "Sentinel scans: 'User wants to push to production'.\n1. Checks outbound URL against allowlist.\n2. Scans code for secrets.\n3. Validates environment variables.\n4. If risk found, blocks and alerts.\n5. Reports clean audit to Maria.",
  },
  {
    id: "nova",
    name: "Nova",
    title: "Intelligence Agent",
    tagline: "Scoring, pattern detection, recommendations, and mission intelligence.",
    role: "Scoring, pattern detection, recommendations, and mission intelligence.",
    color: "#FFD040",
    rgb: "255,208,64",
    image: "/agents/nova.png",
    abilities: ["Score", "Detect", "Recommend", "Learn"],
    desc: "Nova scores options, detects patterns, and recommends the next best move for the crew.",
    story: "Nova looks for the pattern behind the work. She scores tradeoffs, flags opportunities, and helps the crew choose the move with the highest mission value.",
    mission: "Turn raw activity into smarter decisions.",
    connectors: ["filesystem", "github", "firebase"],
    worksWith: ["jose", "hector", "echo"],
    workflow: "Nova receives: 'Analyze workflow efficiency'.\n1. Pulls logs from Echo.\n2. Detects bottlenecks in task routing.\n3. Scores alternative paths.\n4. Recommends optimizations to Jose.\n5. Tracks improvement metrics.",
  },
];

export function getAgentProfile(id: string) {
  return AGENT_PROFILES.find((agent) => agent.id === id) ?? null;
}
