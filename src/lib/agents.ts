export type AgentProfile = {
  id: string;
  name: string;
  title: string;
  role: string;
  color: string;
  rgb: string;
  image: string;
  abilities: string[];
  desc: string;
  story: string;
  mission: string;
};

export const AGENT_PROFILES: AgentProfile[] = [
  {
    id: "jose",
    name: "Jose",
    title: "Orchestrator",
    role: "Mission routing, decomposition, coordination, and final confirmation.",
    color: "#F5B535",
    rgb: "245,181,53",
    image: "/agents/jose.png",
    abilities: ["Route & Coordinate", "Plan & Delegate", "Monitor & Adapt", "Confirm & Report"],
    desc: "The brain of the operation. Every task flows through Jose — he routes, assigns, merges, and confirms.",
    story: "Jose keeps the crew from becoming noise. He turns a vague mission into ordered packets, assigns ownership, watches state transitions, and makes sure every completed loop reports back cleanly.",
    mission: "Keep the ecosystem coherent: no orphan tasks, no silent failures, no work without confirmation.",
  },
  {
    id: "alphonso",
    name: "Alphonso",
    title: "Execution Agent",
    role: "Task execution, output verification, and delivery packaging.",
    color: "#00C8E0",
    rgb: "0,200,224",
    image: "/agents/alphonso.png",
    abilities: ["Strategize", "Align", "Delegate", "Execute"],
    desc: "The hands. Alphonso runs tasks, verifies output, and packages deliverables. Nothing ships without his approval.",
    story: "Alphonso is built for execution discipline. He takes the plan, runs the work, checks the result, and packages the output so the next agent or human operator can trust it.",
    mission: "Turn approved intent into completed work without drifting from the mission.",
  },
  {
    id: "miya",
    name: "Miya",
    title: "Creative Agent",
    role: "Scripts, storyboards, creative strategy, and export-ready creative.",
    color: "#B060FF",
    rgb: "176,96,255",
    image: "/agents/miya.png",
    abilities: ["Create", "Design", "Write", "Inspire"],
    desc: "Scripts, storyboards, creative strategy, and export-ready deliverables. Miya turns a brief into a finished piece.",
    story: "Miya protects the creative spark. She translates a brief into story, structure, visual direction, and language that can move from concept to publishable asset.",
    mission: "Make the work feel human, sharp, and ready for the world.",
  },
  {
    id: "marcus",
    name: "Marcus",
    title: "Distribution Agent",
    role: "Approved publishing, amplification, engagement, and channel analytics.",
    color: "#3ED464",
    rgb: "62,212,100",
    image: "/agents/marcus.png",
    abilities: ["Distribute", "Amplify", "Engage", "Analyze"],
    desc: "Once Marcus runs it, it's live — YouTube, Telegram, WhatsApp, Meta. Under approved paths only.",
    story: "Marcus is the launch path. He understands that distribution is not just posting; it is timing, channel fit, audience response, and measurable impact.",
    mission: "Move approved content into the world through the right channels, with receipts.",
  },
  {
    id: "maria",
    name: "Maria",
    title: "Governance Agent",
    role: "Risk scoring, audit trails, approval gates, and policy enforcement.",
    color: "#B0B8C0",
    rgb: "176,184,192",
    image: "/agents/maria.png",
    abilities: ["Govern", "Verify", "Audit", "Ensure"],
    desc: "Nothing risky moves without Maria. Audit trails, risk scoring, and approval gates at every step.",
    story: "Maria is the calm brake and the clear record. She scores risk, checks policy, and makes sure high-stakes actions pause for human approval.",
    mission: "Keep Alphonso trustworthy: auditable, safe, and human-approved where it matters.",
  },
  {
    id: "hector",
    name: "Hector",
    title: "Research Agent",
    role: "Evidence gathering, source comparison, and context synthesis.",
    color: "#52CBA0",
    rgb: "82,203,160",
    image: "/agents/hector.png",
    abilities: ["Research", "Compare", "Summarize", "Source"],
    desc: "Hector gathers context, compares sources, and gives the crew grounded material before decisions are made.",
    story: "Hector keeps the crew from guessing. He collects references, separates signal from noise, and gives Jose enough context to route the mission intelligently.",
    mission: "Give every decision a grounded evidence trail.",
  },
  {
    id: "echo",
    name: "Echo",
    title: "Memory Agent",
    role: "Local memory, decision history, receipts, and replayable context.",
    color: "#60B8E8",
    rgb: "96,184,232",
    image: "/agents/echo.png",
    abilities: ["Remember", "Index", "Retrieve", "Replay"],
    desc: "Echo stores decisions, receipts, and mission history locally so the crew gets smarter without leaking data.",
    story: "Echo is the crew's long-term memory. Every decision, receipt, and event is stored locally so future missions start with context instead of starting from zero.",
    mission: "Make memory private, durable, and useful.",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    title: "Security Agent",
    role: "Policy checks, connector safety, secrets protection, and fail-closed behavior.",
    color: "#FF6060",
    rgb: "255,96,96",
    image: "/agents/sentinel.png",
    abilities: ["Protect", "Scan", "Block", "Report"],
    desc: "Sentinel watches outbound paths, blocks risky actions, and protects secrets before anything leaves the machine.",
    story: "Sentinel is the fail-closed layer. If a path looks unsafe, unclear, or unapproved, Sentinel stops the action and asks for review.",
    mission: "Protect the machine, the data, and the operator.",
  },
  {
    id: "nova",
    name: "Nova",
    title: "Intelligence Agent",
    role: "Scoring, pattern detection, recommendations, and mission intelligence.",
    color: "#FFD040",
    rgb: "255,208,64",
    image: "/agents/nova.png",
    abilities: ["Score", "Detect", "Recommend", "Learn"],
    desc: "Nova scores options, detects patterns, and recommends the next best move for the crew.",
    story: "Nova looks for the pattern behind the work. She scores tradeoffs, flags opportunities, and helps the crew choose the move with the highest mission value.",
    mission: "Turn raw activity into smarter decisions.",
  },
];

export function getAgentProfile(id: string) {
  return AGENT_PROFILES.find((agent) => agent.id === id) ?? null;
}
