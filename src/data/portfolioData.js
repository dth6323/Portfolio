export const DEVELOPER_PROFILE = {
  name: "Alex Mercer",
  title: "Senior Full-Stack Engineer & System Architect",
  handle: "amercer.dev",
  location: "San Francisco, CA (Remote Available)",
  experienceYears: 9,
  availability: "Available for Senior / Staff Roles & Advisory",
  bio: "Senior Full-Stack Engineer specializing in high-concurrency cloud architectures, modern React micro-frontends, event-driven backends, and sub-50ms distributed data pipelines. Passionate about production-grade UI design and clean system boundaries.",
  metrics: [
    { label: "Global P99 Latency", value: "< 42ms" },
    { label: "Daily Active Requests", value: "8.4M+" },
    { label: "Production Uptime", value: "99.99%" },
    { label: "Systems Engineered", value: "24+" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "alex@mercer.dev",
    twitter: "https://twitter.com"
  }
};

export const SYSTEM_TOPOLOGY_NODES = [
  {
    id: "client-app",
    layer: "Client Tier",
    name: "React 19 PWA",
    tech: "React, TypeScript, Vite",
    status: "active",
    latency: "12ms",
    throughput: "12.4k req/s",
    description: "Ultra-responsive client frontend with optimistic UI mutations, client-side state caching, dynamic code splitting, and zero layout shift.",
    tradeoffs: "Tradeoff: Higher initial JavaScript bundle footprint vs. sub-50ms page route transitions.",
    codeSnippet: `// Client State Synchronizer
const useOptimisticState = (initial, syncFn) => {
  const [state, setState] = useState(initial);
  const mutate = async (update) => {
    setState(prev => ({ ...prev, ...update }));
    await syncFn(update).catch(() => setState(initial));
  };
  return [state, mutate];
};`
  },
  {
    id: "edge-gateway",
    layer: "Edge & Security",
    name: "Edge API Gateway",
    tech: "Cloudflare Workers, Rust",
    status: "active",
    latency: "4ms",
    throughput: "45.0k req/s",
    description: "Globally distributed edge layer performing JWT auth validation, rate limiting, geo-routing, and dynamic WAF attack filtering.",
    tradeoffs: "Tradeoff: V8 isolate memory limits (128MB) compensated by instant cold starts (<5ms).",
    codeSnippet: `// Edge Auth Validator (Rust Wasm)
pub fn validate_jwt(token: &str, secret: &[u8]) -> Result<Claims, AuthError> {
    let validation = Validation::new(Algorithm::HS256);
    decode::<Claims>(token, &DecodingKey::from_secret(secret), &validation)
        .map(|data| data.claims)
        .map_err(|_| AuthError::InvalidToken)
}`
  },
  {
    id: "microservice-core",
    layer: "Backend Microservices",
    name: "Event Core Service",
    tech: "Go (Golang), gRPC",
    status: "active",
    latency: "8ms",
    throughput: "28.5k req/s",
    description: "High-throughput Go service processing transactional state events and streaming updates over bidirectional gRPC channels.",
    tradeoffs: "Tradeoff: Strong typing and verbose error handling yield zero unhandled panic crashes in production.",
    codeSnippet: `// Concurrent Worker Pool (Go)
func (p *WorkerPool) Dispatch(ctx context.Context, job Job) error {
    select {
    case p.jobQueue <- job:
        return nil
    case <-ctx.Done():
        return ctx.Err()
    }
}`
  },
  {
    id: "data-persistence",
    layer: "Data & Storage",
    name: "Distributed DB & Cache",
    tech: "PostgreSQL, Redis, ClickHouse",
    status: "active",
    latency: "2ms",
    throughput: "60.0k op/s",
    description: "Multi-region PostgreSQL with read replicas paired with a Redis L2 cache layer and ClickHouse columnar database for real-time analytics.",
    tradeoffs: "Tradeoff: Eventual consistency on read replicas balanced by immediate cache invalidation triggers.",
    codeSnippet: `-- ClickHouse Real-time Telemetry Aggregation
SELECT 
    toStartOfMinute(timestamp) AS time_window,
    service_id,
    quantile(0.99)(latency_ms) AS p99_latency
FROM service_telemetry
WHERE timestamp >= now() - INTERVAL 1 HOUR
GROUP BY time_window, service_id
ORDER BY time_window DESC;`
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "hyperscale",
    category: "Distributed Systems",
    title: "HyperScale — Real-Time Telemetry Engine",
    tagline: "High-concurrency time-series ingestion processing 100k+ events/sec.",
    description: "Designed and implemented a distributed telemetry pipeline for cloud infrastructure monitoring. Reduced query latency by 74% and infrastructure costs by $180k annually.",
    metrics: [
      { label: "Throughput", value: "120k evt/s" },
      { label: "P99 Latency", value: "14ms" },
      { label: "Data Reduction", value: "-65%" },
      { label: "Cost Savings", value: "$180k/yr" }
    ],
    techStack: ["Go", "ClickHouse", "Redis", "Kafka", "React", "WebSockets"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    architectureDetails: {
      problem: "Ingesting 100k+ metric pulses/sec choked legacy relational databases and caused dashboard freeze during peak load spikes.",
      solution: "Engineered an event-driven Go pipeline backed by Kafka message partitioning, ClickHouse columnar storage, and WebSocket delta push updates.",
      keyDecisions: [
        "Swapped HTTP polling for persistent WebSocket delta feeds, reducing bandwidth usage by 82%.",
        "Configured ClickHouse Mergetree engines with LZ4 compression for ultra-dense time-series logs.",
        "Built a custom React virtualized canvas graph renderer to plot 50,000 live data points smooth at 60 FPS."
      ],
      architectureDiagram: "Kafka Ingestion → Go Aggregator → ClickHouse Storage → WebSocket Gateway → React WebGL Frontend"
    }
  },
  {
    id: "nexus-flow",
    category: "High-Scale Web",
    title: "NexusFlow — Enterprise Micro-Frontend Orchestrator",
    tagline: "Decoupled Webpack/Vite module federation platform powering 8 engineering teams.",
    description: "Architected a zero-downtime micro-frontend framework allowing independent deployment of core web suites while maintaining consistent UI performance and shared authentication.",
    metrics: [
      { label: "Build Time", value: "1.2s" },
      { label: "Bundle Savings", value: "-48%" },
      { label: "Deploy Time", value: "Immediate" },
      { label: "Team Scalability", value: "8 Teams" }
    ],
    techStack: ["React 19", "TypeScript", "Vite", "Module Federation", "Tailwind/CSS", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    architectureDetails: {
      problem: "Monolithic frontend deployment created deployment bottlenecks across 40+ engineers, causing deployment blockages and fragile releases.",
      solution: "Architected a dynamic Module Federation host shell with asynchronous module loading, global state isolation, and shared design system tokens.",
      keyDecisions: [
        "Implemented runtime dependency sharing for React and UI tokens to prevent duplicate library downloads.",
        "Added automatic fallback boundaries so isolated micro-app errors never crash neighboring dashboard widgets.",
        "Built an interactive CLI tool for engineers to test localized micro-frontend modules in isolation."
      ],
      architectureDiagram: "Host Application Shell → Module Router → Dynamic Remote Imports (App A, App B, App C)"
    }
  },
  {
    id: "vault-mesh",
    category: "Security & Cloud",
    title: "VaultMesh — Zero-Trust Identity & Secrets Mesh",
    tagline: "High-security secret management & cryptographic authorization service.",
    description: "Built an enterprise zero-trust security service supporting fine-grained RBAC policies, automatic secret rotation, and eBPF network packet auditing.",
    metrics: [
      { label: "Auth Overhead", value: "< 2ms" },
      { label: "Secured Secrets", value: "50,000+" },
      { label: "Audit SLA", value: "100%" },
      { label: "Compliance", value: "SOC2 Type II" }
    ],
    techStack: ["Node.js", "PostgreSQL", "eBPF", "Docker", "Redis", "Vault API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    architectureDetails: {
      problem: "Legacy microservices used static environment variables for database credentials, presenting severe security vulnerabilities.",
      solution: "Created dynamic short-lived token rotation with cryptographic verification signatures and automated eBPF kernel-level socket filtering.",
      keyDecisions: [
        "Tokens expire automatically every 15 minutes, requiring background refreshing without user session interruption.",
        "All audit logs are cryptographically hashed in append-only log chains for tamper-proof compliance validation.",
        "Designed lightweight React administrative console with real-time anomaly telemetry alerts."
      ],
      architectureDiagram: "Service Request → eBPF Packet Interceptor → VaultMesh Auth Node → PostgreSQL Ledger"
    }
  },
  {
    id: "pulsestream",
    category: "Real-Time Data",
    title: "PulseStream — High-Throughput Live Event Pipeline",
    tagline: "Real-time analytics engine and notification service.",
    description: "Developed a distributed notification and live event dispatcher capable of delivering sub-second notifications to over 500k concurrent WebSocket clients.",
    metrics: [
      { label: "Message Delivery", value: "< 85ms" },
      { label: "Max Connections", value: "500k" },
      { label: "Drop Rate", value: "0.000%" },
      { label: "CPU Efficiency", value: "+40%" }
    ],
    techStack: ["Python", "Rust", "Kafka", "WebSockets", "React", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    architectureDetails: {
      problem: "Broadcasting real-time market updates to hundreds of thousands of concurrent clients caused severe memory leakage and socket drops.",
      solution: "Combined a Rust WebSocket connection pool daemon with Python streaming workers and Kafka message channels.",
      keyDecisions: [
        "Utilized Rust's async tokio runtime to handle 100,000 persistent sockets per instance with minimal RAM usage.",
        "Implemented delta-encoding to only broadcast modified data fields rather than full JSON payload objects.",
        "Created an intuitive frontend visualizer showing real-time socket health and packet delivery latency."
      ],
      architectureDiagram: "Kafka Event Bus → Rust Tokio Engine → WebSocket Swarm → Client Dashboard"
    }
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend & Architecture",
    skills: [
      { name: "React 19 / Modern Hooks", level: 98, exp: "8 Yrs", note: "Concurrent Rendering, Server Components, State Machines" },
      { name: "TypeScript & JavaScript (ESNext)", level: 96, exp: "9 Yrs", note: "Strict Type Systems, Generics, AST Processing" },
      { name: "CSS Architecture & Performance", level: 95, exp: "9 Yrs", note: "Vanilla CSS, CSS Modules, Modern Layout Grid/Flexbox" },
      { name: "Next.js & Vite", level: 92, exp: "5 Yrs", note: "SSG/SSR, Module Federation, Build Optimization" },
      { name: "Web Performance & A11y", level: 94, exp: "7 Yrs", note: "Core Web Vitals, WebGL/Canvas, WCAG AA Compliance" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Cloud Systems",
    skills: [
      { name: "Go (Golang)", level: 90, exp: "5 Yrs", note: "Goroutines, Channels, gRPC Services, High Concurrency" },
      { name: "Node.js & Express / Fastify", level: 96, exp: "8 Yrs", note: "Async I/O, Streams, Microservices, REST / GraphQL APIs" },
      { name: "Python / FastAPI", level: 88, exp: "6 Yrs", note: "Data Pipelines, AsyncIO, AI Integration, Web Scraping" },
      { name: "Rust", level: 80, exp: "3 Yrs", note: "Systems Programming, Memory Safety, WebAssembly / Edge" },
      { name: "Distributed Systems & gRPC", level: 92, exp: "6 Yrs", note: "Event-Driven Specs, Protobufs, Rate Limiting" }
    ]
  },
  {
    id: "data",
    title: "Database & Data Infra",
    skills: [
      { name: "PostgreSQL & SQL", level: 94, exp: "8 Yrs", note: "Query Optimization, Indexing, Partitioning, Replication" },
      { name: "Redis & In-Memory Caching", level: 92, exp: "7 Yrs", note: "Pub/Sub, Distributed Locking, L2 Caching Strategies" },
      { name: "ClickHouse & Time-Series DB", level: 86, exp: "3 Yrs", note: "Columnar Storage, High-Volume Analytical Queries" },
      { name: "Kafka & Event Streams", level: 88, exp: "4 Yrs", note: "Message Partitioning, Consumer Groups, Stream Processing" }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    skills: [
      { name: "Docker & Containerization", level: 95, exp: "7 Yrs", note: "Multi-stage builds, Container Security, Distroless" },
      { name: "Kubernetes & Orchestration", level: 85, exp: "4 Yrs", note: "Helm Charts, Ingress Controllers, Auto-scaling" },
      { name: "CI/CD & GitHub Actions", level: 92, exp: "6 Yrs", note: "Automated Testing, Canary Deploys, Release Automation" },
      { name: "Observability (Datadog/Grafana)", level: 90, exp: "5 Yrs", note: "Prometheus Metrics, Tracing, P99 Alerting" }
    ]
  }
];

export const ARCHITECTURE_TRADEOFFS = [
  {
    id: "microservices-vs-monolith",
    title: "Monolith vs. Event-Driven Microservices",
    sideA: {
      name: "Modular Monolith",
      pros: "Zero network latency between modules, single deployment pipeline, simple transactions.",
      cons: "Blast radius of bug spans whole app; long compile times at scale."
    },
    sideB: {
      name: "Event-Driven Microservices",
      pros: "Independent team scaling, fault isolation, heterogenous tech choices per service.",
      cons: "Network latency overhead, eventual consistency complexity, distributed tracing requirement."
    },
    verdict: "My Approach: Start with a strict modular monolith. Extract to microservices only when domain boundaries stabilize and team/scaling demands necessitate independent deployment."
  },
  {
    id: "rest-vs-grpc",
    title: "REST / JSON vs. gRPC / Protobuf",
    sideA: {
      name: "REST / JSON",
      pros: "Universally supported by web browsers, human-readable payloads, rich tooling ecosystem.",
      cons: "Larger payload size due to JSON string overhead; loose runtime contract validation."
    },
    sideB: {
      name: "gRPC / Protobuf",
      pros: "Up to 7x faster serialization, 50% smaller payload size, compile-time strict contract code generation.",
      cons: "Requires Envoy browser proxy translation for web frontends."
    },
    verdict: "My Approach: Standardize gRPC / Protobuf for internal microservice-to-microservice communication, while exposing REST/GraphQL edge endpoints for web client consumption."
  }
];
