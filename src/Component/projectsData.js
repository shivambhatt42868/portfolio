export const PROJECTS = [
  {
    id: 'racknap',
    title: 'RackNap',
    image: 'images/img-1.jpg',
    cardSummary: 'On-prem + multi-tenant SaaS for CSP licensing, subscription, and automated provisioning',
    role: 'Technical Architect · Intimetec Visionsoft · June 2025 – Present',
    oneLiner:
      'A common-codebase product that ships as license-driven on-prem and multi-tenant SaaS for CSP licensing, subscriptions, and automated provisioning.',
    bullets: [
      'Architected Admin/Marketplace plus Identity, IntegrationHub, Catalog, Order, and Payment Gateway as independently bounded services.',
      'Designed plug-and-play extraction from a primary Web API into microservices with minimal code change as scale grows.',
      'Set infrastructure on MySQL, Azure Service Bus/Queues, Redis, Docker, and AKS.',
      'Gave technical direction to 14 developers and 2 QA, working with product and demo teams.',
      'Supports enterprise customers including Telecom Malaysia and ZNet.',
    ],
  },
  {
    id: 'integrationhub',
    title: 'IntegrationHub',
    image: 'images/img-2.jpg',
    cardSummary: 'JSON-driven CSP vendor provisioning; onboarding from months to about 1–2 weeks',
    role: 'Technical Architect · Intimetec Visionsoft · June 2025 – Present',
    oneLiner:
      'A configurable CSP vendor provisioning framework that onboards vendors through reusable JSON-driven workflows.',
    bullets: [
      'Supports Microsoft, Wasabi, Acronis, Akamai, and ClearTax on a shared workflow model.',
      'Reduced vendor onboarding from potentially months to about 1–2 weeks.',
      'Built as a bounded RackNap service so provisioning stays independent of core order and catalog flows.',
    ],
  },
  {
    id: 'nav-rta',
    title: 'NAV RTA / financial processing',
    image: 'images/img-3.jpg',
    cardSummary: 'Large-scale financial file processing with Redis queues and multi-format import',
    role: 'Tech Lead · NAV Backoffice · September 2022 – June 2025',
    oneLiner:
      'On-prem financial data processing for reconciliation, accounting, and reporting at NAV RTA scale.',
    bullets: [
      'Cut processing from 3–5 hours to about 30–45 minutes for around 150 files with 800+ records each.',
      'Used Redis-backed custom queues, backpressure, and memory thresholds to prevent RAM spikes and OOM.',
      'Built a generic import framework for Excel, CSV, PDF, and text with Adapter-based mapping.',
      'Supported full rollback and partial-success so valid records commit while invalid ones are isolated.',
      'Led about 5 developers and moved source control from TFS to Git.',
    ],
  },
  {
    id: 'canopy',
    title: 'JLL Canopy',
    image: 'images/img-4.jpg',
    cardSummary: 'B2B energy and sustainability platform with metering, Azure Blob, and SignalR',
    role: 'Assistant Manager / Senior Software Developer · JLL · November 2019 – September 2021',
    oneLiner:
      'Backend for Canopy, a B2B energy and sustainability platform used to track electricity consumption and optimization insights.',
    bullets: [
      'Delivered metering and backend modules used by enterprise customers including Facebook and Atlassian.',
      'Handled large-scale metering data across SQL/RDBMS and NoSQL with indexing, background processing, and caching.',
      'Implemented Azure Blob Storage for bill and document uploads.',
      'Added SignalR-based real-time support chat.',
      'Worked in a lean 3-member engineering team and independently designed backend modules.',
    ],
  },
  {
    id: 'hp',
    title: 'HP Product Configurator & Contract Manager',
    image: 'images/img-5.jpg',
    cardSummary: 'HP printing and configuration products with a 1,000+ step formula engine',
    role: 'Senior Software Developer · Intimetec Visionsoft · August 2015 – November 2019',
    oneLiner:
      'Printing and product-configuration systems in the HP ecosystem, including configurator, quoting, and contract management.',
    bullets: [
      'Took technical ownership of up to two concurrent HP projects through design, development, and delivery.',
      'Built an Excel-driven formula engine for predictive ink-throughput calculations.',
      'Turned 1,000+ sequence-dependent calculation steps into runtime-configurable SQL rules.',
      'Let administrators update calculation logic without application code changes, with XSS and input validation.',
      'Applied Adapter, Unit of Work, and Generic Repository patterns across application and data access.',
    ],
  },
];
