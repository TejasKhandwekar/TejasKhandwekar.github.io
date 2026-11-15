// Single source of truth for site content.
// To add a link later, fill in the `links` array on any item: { label: 'Paper', href: 'https://...' }

import figure2 from '../assets/figure2.png'
import ietsModelsTrends from '../assets/iets-models-trends.png'
import whyHere1 from '../assets/why_here_1.png'
import whyHere2 from '../assets/why_here_2.png'
import perceptronTrend1 from '../assets/perceptron-trend-1.png'
import perceptronTrend2 from '../assets/perceptron-trend-2.png'
import appleLogo from '../assets/apple-logo.svg'

export const basics = {
  name: 'Tejas Khandwekar',
  headline: 'Applied AI Researcher and Engineer',
  focus: ['LLM Agents', 'Evaluation', 'Data Attribution'],
  location: 'Atlanta, GA',
  email: 'khandwekar.t@gmail.com',
  linkedin: 'https://linkedin.com/in/tejas-khandwekar',
  github: 'https://github.com/TejasKhandwekar',
  scholar: 'https://scholar.google.com/citations?user=qywwD5wAAAAJ&hl=en',
  resume: '/resume.pdf',
  shortBio:
    'Applied AI researcher and engineer working on language models, agentic systems, and model evaluation. M.S. student at Georgia Tech, researching capability provenance and persona vectors in LLMs at the Human-Centered AI Lab.',
  longBio: [
    'I am an applied AI researcher and engineer focused on language models, agentic systems, model evaluation, retrieval, and behavioral analysis. I am currently pursuing my M.S. at Georgia Tech, where I research capability provenance and persona vectors for large language models in the Human-Centered AI Lab.',
    'Before graduate school, I spent three years as an AI Scientist / Data Scientist at ExxonMobil, building production GenAI, forecasting, and customer analytics systems that delivered measurable business impact, including $2.9M in identified overbilling, $1.3M in incremental revenue, and $50M in working-capital optimization. Most recently, I was a Data Scientist Intern at Apple working on anomaly detection across AppleCare customer cases, and a Graduate Research Assistant with Ford building unsupervised pipelines for near-miss detection from vehicle telemetry.',
    'My work spans controlled LLM experiments, long-horizon agent systems with dynamic plan repair, production RAG workflows, reinforcement learning, and large-scale enterprise ML.',
  ],
  interests: [
    'Foundation models',
    'Pretraining data curation',
    'Training data attribution',
    'Capability provenance',
    'Post-training',
    'Persona vectors',
    'Representation steering',
    'LLM agents',
    'Multi-agent systems',
    'LLM evaluation',
    'Cross-lingual LLM behavior',
  ],
}

export const impact = [
  { value: '$50M', label: 'working-capital optimization' },
  { value: '$2.9M', label: 'overbilling identified' },
  { value: '$2M', label: 'annual savings' },
  { value: '$1.3M', label: 'incremental annual revenue' },
  { value: '4,580', label: 'negotiation turns evaluated (430 negotiations)' },
  { value: '4.0', label: 'GPA at Georgia Tech' },
]

export const publications = [
  {
    title: 'Data Attribution Should Steer Pretraining',
    venue: 'NeurIPS 2026 Workshop',
    status: 'Accepted',
    kind: 'Position paper',
    summary:
      'Proposes a capability-provenance control loop for pretraining that links attribution, source interpretation, bounded data interventions, and adaptive curation policies. Defines evidence requirements separating historical contribution from future data value, and specifies matched-compute comparisons with existing selectors, including checkpoint dependence, transfer, and capability/safety tradeoffs.',
    links: [],
  },
  {
    title: 'Cross-Lingual Persona Effects in LLM Negotiation',
    venue: 'NeurIPS 2026 SocialAgent Workshop',
    status: 'Accepted',
    kind: 'Empirical study',
    summary:
      'A 2 x 2 x 3 matched experiment over interaction language, seller urgency, and buyer persona, producing 430 valid negotiations and 4,580 turns across English and Korean. Found 77.3% agreement in Korean vs. 52.5% in English. Direction replicated with Qwen.',
    methods:
      'Multi-agent stack in Python with Gemini (Vertex AI) and Qwen (OpenRouter), structured JSON actions, parser retries, LLM-as-a-Judge pragmatic annotation, 10,000 scenario-block bootstraps, exact sign-flip tests, and Holm correction.',
    highlight: { a: { label: 'Korean', value: 77.3 }, b: { label: 'English', value: 52.5 }, metric: 'agreement rate' },
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2611.00300' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2611.00300' },
    ],
  },
  {
    title: 'Comparison of Time Series Foundation Models',
    venue: 'NeurIPS 2024 Workshop',
    status: 'Submission',
    kind: 'Benchmark study',
    period: 'Jun 2024 – Jul 2025',
    summary:
      'Benchmarked Chronos, TimeGPT, and Moirai against statistical and ML baselines (LSTM, TCN, NBEATS, NHITS, TFT, tree models) using rolling-origin evaluation over T+1 to T+18 with RMSSE, RMSE, SMAPE, and bias. Statistical models outperformed foundation models by 36% RMSSE in the study setting (for example, AutoCES averaged 0.667 RMSSE vs. 0.928 for TimeGPT on AirPassengers).',
    image: figure2,
    imageAlt: 'Aggregated RMSSE versus runtime across forecasting models',
    links: [{ label: 'PDF', href: '/papers/comparison-of-time-series-foundational-models.pdf' }],
  },
]

export const currentResearch = {
  lab: 'Georgia Tech Human-Centered AI Lab',
  projects: [
    {
      title: 'Training Data Attribution and Capability Provenance',
      period: 'Fall 2026 – Present',
      role: 'Graduate Research Assistant',
      tagline: "Which training data drives a language model's capabilities, and can cheap attribution methods be trusted?",
      bullets: [
        'Designed and ran a checkpoint-aware training-data attribution study on Pythia-160M across 6 pretraining checkpoints: 936 controlled fine-tuning branches, 63K model updates, and 52 attribution-model fits in a ~14-hour GPU run.',
        'Built a reproducible, leakage-controlled evaluation pipeline with disjoint data splits, exact same-seed replay checks at every checkpoint, hash-locked predictions, and bootstrap confidence intervals.',
        'Tested learned (AirRep) attribution under local, shared, and frozen-forward-transfer protocols against TF-IDF, embedding, and loss baselines; found no reliable ranking advantage (Spearman ≤ 0.10).',
        "Designed the lab's shared evaluation protocol comparing AirRep vs. gradient/influence methods on Pythia-410M: LDS, rank agreement, top-k overlap, checkpoint sensitivity, and compute cost within a 100 GPU-hour budget.",
        'Wrote follow-up designs for attributing RL (GRPO) rollouts and post-training (SFT/DPO) data.',
      ],
      related: 'Data Attribution Should Steer Pretraining (NeurIPS 2026 Workshop)',
      stack: ['PyTorch', 'Hugging Face', 'Pythia', 'OLMo 3', 'AirRep', 'Influence functions', 'Slurm'],
    },
    {
      title: 'Activation Steering for Persona Persistence in LLMs',
      period: 'Nov 2026 – Present',
      role: 'Contributor',
      status: 'In progress; no results published yet.',
      tagline: 'Keeping an LLM in character over long, adversarial conversations by editing internal activations instead of re-prompting.',
      bullets: [
        'Contributing to research comparing conceptors, steering vectors, and activation capping on SmolLM3-3B and OLMo-3-7B over multi-turn adversarial conversations.',
        'Audited the multi-stage pipeline (activation collection, 4-model LLM-judge evaluation, conceptor fitting, steering, statistical pooling) and stress-tested its claims against recent work, including the Assistant Axis and Casting Call papers.',
        'Designed two falsification experiments: whether persona drift depends on conversation topic rather than only adversarial pushes, and whether results hold for roles close to the default assistant.',
        'Designed three new steering methods (sparse token-level steering, feedback-controlled steering with memory, norm-preserving rotational steering) plus ablations to address the in-character vs. coherence trade-off.',
        "Ported the Slurm-based GPU pipeline from PACE to Georgia Tech's Futurama (HCE@CoC) H100 cluster.",
      ],
      stack: ['PyTorch', 'Hugging Face', 'Activation steering', 'Conceptors', 'LLM-as-a-Judge', 'Slurm', 'H100'],
    },
    {
      title: 'Looped Time-Series Foundation Models',
      period: 'Ongoing',
      role: 'Graduate Research, Georgia Tech',
      tagline: 'Reusing transformer blocks in pretrained forecasting models (Datadog Toto 2.0, Chronos-2) to trade compute for accuracy and cut model size.',
      bullets: [
        "Compressed Datadog's Toto-2.0 (22M params) by replacing 5 temporal transformer blocks with one looped block plus a trained 657K-param output adapter, cutting stored parameters by 53.5% and inference latency by 52.6% on 97 GIFT-Eval tasks (371K forecasts).",
        'Built a compute-penalized halting classifier for adaptive per-input loop depth and swept 120 policies across cost penalties, epochs, and thresholds.',
        'Found that PCA-based layer merging collapsed to the first layer instead of combining layers, moving the project from weight merging to trained recurrence.',
        'Showed a 72-case dev panel overstated performance (7% better on dev vs. 55% worse on the full benchmark) and introduced separate selection, confirmation, and final benchmark splits.',
        'Fine-tuned original and pruned Toto on BizITObs IT observability data (51 channels), improving target MASE by 28.8% with under 1.4% general-benchmark degradation; pruning gave 14% fewer parameters and 13% lower H200 latency.',
        'Designed a recurrent Chronos-2 with a shared B3/B4 core, zero-initialized 34K-param adapter, damped residual update, and 3-stage curriculum, run against a sample-matched one-pass control.',
        'Trained shared-weight transformers from scratch on ETTh1 across 3 seeds: 70% fewer parameters at about 1% higher MAE.',
        'Current: looping Toto-2.0-4m (trained on BOOM) to test whether a looped small model can match the 22M model.',
      ],
      metrics: [
        { value: '−53.5%', label: 'stored params' },
        { value: '−52.6%', label: 'inference latency' },
        { value: '+28.8%', label: 'target MASE (fine-tuned)' },
      ],
      stack: ['PyTorch', 'Toto 2.0', 'Chronos-2', 'GIFT-Eval', 'MASE/WQL', 'H200 GPU cluster'],
    },
  ],
}

export const experience = [
  {
    group: 'Research',
    title: 'LLM Safety and Interpretability Research',
    org: 'Georgia Tech Human-Centered AI Lab',
    period: 'Jul 2026 – Present',
    bullets: [
      'Researching capability provenance for LLMs through training-data attribution, corpus-level aggregation, and controlled interventions, connecting training sources to downstream capabilities.',
      'Studying post-training provenance using OLMo 3 checkpoints.',
      'Investigating persona vectors and representation-level interventions to measure, interpret, and steer behavioral shifts in LLMs.',
    ],
  },
  {
    group: 'Industry',
    title: 'Data Scientist Intern (AppleCare)',
    org: 'Apple',
    logo: appleLogo,
    period: 'May 2026 – Aug 2026',
    bullets: [
      'Built anomaly-detection and data-quality pipelines across millions of AppleCare customer cases to surface emerging software and hardware issues and support issue prioritization.',
      'Developed pipelines to connect related customer cases across Apple products, trace anomaly journeys and escalation paths, and track distribution shifts, providing early-warning signals for engineering and operations teams.',
    ],
  },
  {
    group: 'Research',
    title: 'Graduate Research Assistant, Machine Learning',
    org: 'Ford',
    period: 'Aug 2025 – May 2026',
    bullets: [
      'Built unsupervised learning pipelines over millions of 1 Hz vehicle-telemetry observations to identify safety-critical near-miss events and quantify Time-to-Collision risk from real-world fleet data.',
      'Developed event segmentation and similarity-search workflows using signal processing, variable-length windows, z-normalization, and Dynamic Time Warping to surface rare patterns in highly imbalanced telemetry.',
      'Engineered behavioral features from longitudinal velocity, lateral velocity, yaw rate, acceleration, and jerk, and designed scalable workflows for mining high-value events from continuous fleet data.',
    ],
  },
  {
    group: 'Industry',
    title: 'AI Scientist / Data Scientist',
    org: 'ExxonMobil',
    period: 'Jul 2022 – Jun 2025',
    bullets: [
      { lead: 'GenAI contract reconciliation', text: 'Built an end-to-end contract and invoice reconciliation workflow using AWS Textract, Bedrock-powered RAG, SQL-based matching, and Glue ETL, processing 100+ contracts and thousands of invoices and identifying $2.9M in overbilling.' },
      { lead: 'NLP risk dashboard', text: 'Created a hybrid BERT and rule-based NLP dashboard to extract contract attributes, classify discrepancy patterns, score risk, and help stakeholders prioritize high-impact supplier issues.' },
      { lead: 'Customer segmentation', text: 'Productionized Dockerized segmentation models (RFM clustering) on 2M+ transaction records and validated targeting through A/B and hypothesis testing, driving a 5% upsell lift and $1.3M in annual incremental revenue.' },
      { lead: 'Demand forecasting', text: 'Co-developed a global demand-forecasting pipeline for thousands of SKUs using clustered ensemble models, automated backtesting, and planner feedback, improving accuracy by 10% over a vendor solution and enabling $50M in working-capital optimization.' },
      { lead: 'Price forecasting', text: 'Developed price-direction forecasting models with a custom loss function, achieving 72% directional accuracy at a 3-month horizon and supporting trading and capacity-planning decisions that generated $2M in annual savings.' },
    ],
  },
]

export const projects = [
  {
    title: 'Adaptive LLM Story Generation and Interactive Mystery Engine',
    period: 'Jan 2026 – May 2026',
    category: 'LLM Agents',
    tagline: 'A stateful, long-horizon LLM agent that keeps a story solvable even when players go off-script.',
    bullets: [
      'Interprets open-ended user actions, maintains persistent world state, and executes actions against a causal event plan.',
      'Multi-stage pipeline for ground-truth generation, plot validation, causal event graphs, and hybrid deterministic plus LLM action classification (constituent, consistent, exceptional, invalid actions).',
      'Failure recovery that removes non-executable plan beats, creates repair nodes, and reconnects causal and temporal dependencies to preserve solvability.',
    ],
    stack: ['Python', 'OpenRouter', 'Schema validation', 'Causal graphs'],
    links: [],
  },
  {
    title: 'Multi-Agent LLM Negotiation and Evaluation Framework',
    period: 'Jul 2026 – Sep 2026',
    category: 'LLM Agents',
    tagline: 'The engineering behind the cross-lingual negotiation paper.',
    bullets: [
      'Coordinates buyer and seller agents through Gemini on Vertex AI and Qwen on OpenRouter with role-specific histories, structured JSON actions, and explicit stopping rules.',
      'JSON validation, API timeouts, retry/backoff handling, and resumable judging over 430 negotiations and 4,580 turns.',
    ],
    stack: ['Python', 'Gemini', 'Vertex AI', 'Qwen', 'OpenRouter', 'LLM-as-a-Judge'],
    links: [{ label: 'Paper (arXiv)', href: 'https://arxiv.org/abs/2611.00300' }],
  },
  {
    title: 'WhyHere? Explainable Top-N Location Recommendation System',
    period: 'Aug 2025 – Dec 2025',
    category: 'Systems',
    tagline: 'Explainable location recommendations for Atlanta.',
    bullets: [
      'Full-stack product filtering 18.7M raw records to about 60K Atlanta points of interest for real-time weighted recommendations.',
      'Distance-decay accessibility scoring; compared thresholding with three DBSCAN variants using clustering metrics and a 22-participant user study.',
      'Interactive map and API with feature-level explanations and exportable outputs.',
    ],
    stack: ['Python', 'Flask', 'React', 'Spark', 'Databricks', 'H3', 'PostGIS'],
    images: [whyHere1, whyHere2],
    links: [],
  },
  {
    title: 'Multi-Agent Soccer AI with Deep Reinforcement Learning',
    period: 'Jan 2026 – May 2026',
    category: 'Reinforcement Learning',
    tagline: 'PPO self-play agents for 2v2 soccer.',
    bullets: [
      'Trained PPO policies in SoccerTwos with Ray RLlib, self-play, opponent-archive rotation, curriculum learning, and dense reward shaping (ball progress, possession, defensive pressure, conceding penalties).',
      'Checkpoint-based training on PACE/Slurm, packaged policies for inference, automated evaluation against random and pretrained opponents.',
    ],
    stack: ['Python', 'PyTorch', 'Ray RLlib', 'Slurm'],
    links: [],
  },
  {
    title: 'Intermittent Demand Forecasting for Pharmaceutical Products',
    period: 'Jan 2024 – Jan 2025',
    category: 'Forecasting',
    tagline: 'Forecasting sparse, irregular demand.',
    bullets: [
      'Forecasting experiments for eight sparse demand series using intermittent state-space models (R smooth package), improving long-horizon accuracy by about 15% over alternatives.',
    ],
    stack: ['R', 'smooth'],
    images: [ietsModelsTrends],
    links: [],
  },
  {
    title: 'Myntra Fashion Trend Detection with Computer Vision',
    period: 'Undergraduate',
    category: 'Computer Vision',
    tagline: 'Runner-Up, Myntra Hacker-Ramp national hackathon.',
    bullets: [
      'Computer-vision pipeline using Instagram image collection, Mask R-CNN segmentation, and visual attribute classification ("Perceptrons" team solution).',
    ],
    stack: ['Python', 'Mask R-CNN', 'CNNs'],
    images: [perceptronTrend1, perceptronTrend2],
    links: [],
  },
  {
    title: 'Automated Vibration Classification for Vehicles',
    period: 'Jan 2022 – Jul 2022',
    category: 'Computer Vision',
    tagline: 'Deep learning for ride comfort.',
    bullets: [
      'Built a 22,000-sample vibration dataset from ISO-guided simulations and trained a custom 1D ResNet with signal-processing features, reaching 95% ride-comfort classification accuracy.',
    ],
    stack: ['Python', 'TensorFlow/PyTorch', '1D CNN', 'Signal processing'],
    links: [],
  },
]

export const education = [
  {
    school: 'Georgia Institute of Technology',
    location: 'Atlanta, GA',
    degree: 'Master of Science, Computer Science (Machine Learning Specialization)',
    period: 'Aug 2025 – Dec 2026',
    gpa: '4.0 / 4.0',
    coursework: ['Machine Learning', 'Deep Learning', 'Deep Reinforcement Learning', 'High Dimensional Data Analytics', 'Data and Visual Analytics', 'Computational Algorithms', 'Analytical Modeling'],
  },
  {
    school: 'Visvesvaraya National Institute of Technology (VNIT)',
    location: 'Nagpur, India',
    degree: 'Bachelor of Technology in Mechanical Engineering',
    period: 'Jul 2018 – Jul 2022',
    gpa: '9.21 / 10',
    coursework: ['Machine Learning for Engineers', 'Machine Vision', 'Computational / Numerical Methods', 'Operations Research'],
  },
]

export const skills = {
  'LLMs and Agents': ['LLMs', 'AI agents', 'Multi-agent orchestration', 'RAG', 'LangChain', 'Embeddings', 'Vector search', 'Prompt engineering', 'Structured outputs', 'Stateful workflows', 'LLM evaluation', 'LLM-as-a-Judge', 'BERT', 'Transformers', 'Hugging Face', 'OpenRouter'],
  'Research and Evaluation': ['Experiment design', 'A/B testing', 'Hypothesis testing', 'Bootstrap confidence intervals', 'Exact tests', 'Holm correction', 'Failure-mode analysis', 'Rolling backtesting', 'Model evaluation'],
  'Machine Learning and Deep Learning': ['PyTorch', 'TensorFlow', 'scikit-learn', 'CNNs', 'ResNet', 'Mask R-CNN', 'Reinforcement learning (PPO, Ray RLlib, self-play, reward shaping, curriculum learning)', 'Anomaly detection', 'Clustering', 'Recommendation systems', 'Forecasting', 'NLP', 'Computer vision', 'GPU and batched training'],
  Programming: ['Python', 'C++', 'SQL', 'TypeScript', 'R', 'Git', 'Flask', 'REST APIs', 'SQLAlchemy', 'Docker'],
  'Cloud and Data': ['AWS (Bedrock, Textract, Glue, S3)', 'GCP (Vertex AI)', 'Azure', 'Databricks', 'Spark', 'PostgreSQL', 'PostGIS', 'Pandas', 'NumPy', 'Slurm'],
}

export const awards = [
  { title: 'Runner-Up, Myntra Hacker-Ramp Hackathon', text: 'CNN-based fashion-trend detector using Instagram data.' },
  { title: 'ExxonMobil India Recognition', text: 'Recognized by the Lead Country Manager for contributions to a forecasting initiative that improved accuracy by 10%.' },
  { title: 'Data Science Day, ExxonMobil', text: 'Organized and hosted an internal event for 100+ participants, presented analytics case studies, and led interactive sessions.' },
  { title: 'Recruitment Coordinator, VNIT', text: 'Supported department-industry engagement and recruitment.' },
  { title: 'Mentorship', text: 'Mentored junior analysts on statistical modeling, experimentation, and collaborative problem solving.' },
]
