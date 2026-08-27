import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Briefcase,
  Award,
  Code,
  Brain,
  TrendingUp,
  Users,
  ArrowRight,
  Download,
  Star,
  Telescope,
  Gamepad2,
  Mic,
  Trophy,
  FileText
} from 'lucide-react'
import tejasPhoto from './assets/tejas-photo.jpg'
import figure2 from './assets/figure2.png'
import perceptronTrend1 from './assets/perceptron-trend-1.png'
import perceptronTrend2 from './assets/perceptron-trend-2.png'
import ietsModelsTrends from './assets/iets-models-trends.png'
import whyHere1 from './assets/why_here_1.png'
import whyHere2 from './assets/why_here_2.png'
import appleLogo from './assets/apple-logo.svg'
import './App.css'

const resume = '/resume.pdf'
const paper = '/papers/comparison-of-time-series-foundational-models.pdf'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'about', 'research', 'projects', 'interests', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skills = {
    'Programming & Tools': ['Python', 'R', 'SQL', 'Power BI', 'Excel', 'Git', 'Docker'],
    'Machine Learning & AI': ['Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'NLP', 'Language Models', 'Generative AI', 'RAG', 'Embeddings', 'Vector Databases', 'Anomaly Detection'],
    'Analytics & Experimentation': ['Statistical Analysis', 'A/B Testing', 'Hypothesis Testing', 'Product Analytics', 'Funnel Analytics', 'Customer Journey Mapping', 'Voice of Customer Analytics', 'Customer Segmentation'],
    'Cloud & Data Platforms': ['Databricks', 'Spark', 'AWS Bedrock', 'Textract', 'Glue', 'S3', 'Azure', 'GCP']
  }

  const experiences = [
    {
      title: "Data Scientist Intern",
      company: "Apple",
      location: "",
      period: "May 2026 - Aug 2026",
      logo: appleLogo,
      logoAlt: "Apple logo",
      achievements: [
        "Built anomaly detection models on millions of AppleCare customer cases to identify abnormal product feedback patterns, surface emerging software and hardware issues, and support product issue prioritization.",
        "Developed customer journey analytics pipelines to connect related support cases across Apple products, trace escalation paths, and generate early-warning signals for engineering and operations teams."
      ]
    },
    {
      title: "Graduate Research Assistant, Machine Learning",
      company: "Ford / Georgia Institute of Technology",
      location: "Atlanta, GA",
      period: "Aug 2025 - May 2026",
      achievements: [
        "Engineered unsupervised machine learning pipelines across millions of 1 Hz vehicle-telemetry observations to detect critical near-miss events and calculate Time-to-Collision risk metrics.",
        "Developed event-segmentation and similarity-search workflows using signal processing, variable-length windows, and z-normalized Dynamic Time Warping to identify rare driving patterns in highly imbalanced telemetry data."
      ]
    },
    {
      title: "Data Scientist",
      company: "ExxonMobil",
      location: "Bengaluru, India",
      period: "Jul 2022 - Jun 2025",
      achievements: [
        "Built Dockerized customer segmentation models on 2M+ transaction records using RFM clustering; designed A/B and hypothesis tests to validate targeting strategies, driving a 5% upsell conversion lift and $1.3M in incremental annual revenue.",
        "Automated contract and invoice intelligence workflows using AWS Textract, Bedrock, and RAG-based attribute extraction; integrated outputs with Glue ETL pipelines to identify discrepancies and deliver $2.9M in savings.",
        "Built a BERT and regex-based contract analytics dashboard to classify discrepancy patterns, score risk, and help business stakeholders prioritize high-impact supplier issues.",
        "Co-developed global forecasting models for thousands of SKUs using clustered ensemble models, backtesting, and planner feedback to improve forecast accuracy by 10% and support $50M in working-capital optimization.",
        "Developed statistical price forecasting models with custom loss functions, achieving 72% directional accuracy at a 3-month horizon and supporting trading and capacity-planning decisions with $2M in annual savings."
      ]
    }
  ]

  const projects = [
    {
      title: "Unsupervised Detection of Critical Near Miss Events in Urban and Highway Driving",
      organization: "Ford / Georgia Tech",
      period: "Aug 2025 - Present",
      description: "Engineered unsupervised learning pipelines on 1 Hz vehicle telemetry to detect near-miss collisions, quantify Time-to-Collision events, and surface rare driving patterns from millions of telemetry points.",
      tags: ["Python", "Time Series", "DTW", "Anomaly Detection", "Unsupervised"],
      type: "research",
      images: []
    },
    {
      title: "Adaptive Story Generation and Interactive Mystery Engine",
      organization: "Georgia Tech",
      period: "Jan 2026 - May 2026",
      description: "Built an OpenRouter-based mystery engine that interprets open-ended player actions and keeps responses tied to a persistent world model. Designed crime-ledger generation, plot validation, causal event graphs, action classification, and story repair when players disrupt planned evidence paths.",
      tags: ["Python", "Language Models", "OpenRouter", "World Models", "Event Graphs", "Agents"],
      type: "academic",
      images: []
    },
    {
      title: "Cross-Lingual Negotiation Agents",
      organization: "Research / NeurIPS 2026 Submission",
      period: "Jul 2026 - Sep 2026",
      description: "Built a multi-agent negotiation framework using Gemini through Vertex AI and Qwen through OpenRouter. Added structured actions, stopping rules, parser retries, reproducible transcripts, and an evaluation pipeline across 430 valid negotiations and 4,580 turns.",
      tags: ["Python", "Multi-Agent AI", "Model Evaluation", "Gemini", "Qwen", "Cross-Lingual"],
      type: "research",
      images: []
    },
    {
      title: "Multi-Agent Soccer AI with Deep Reinforcement Learning",
      organization: "Georgia Tech",
      period: "Jan 2026 - May 2026",
      description: "Designed and trained a PPO-based multi-agent reinforcement learning policy using Ray RLlib and self-play in the SoccerTwos environment. Improved policy performance through reward shaping, curriculum learning, and checkpoint-based distributed training, then packaged the trained agent for automated inference and evaluation.",
      tags: ["Python", "PPO", "Ray RLlib", "Self-Play", "Deep RL", "Multi-Agent Systems"],
      type: "academic",
      images: []
    },
    {
      title: "iETS Models for Pharmaceutical / Retail Intermittent Demand Forecasting",
      organization: "Independent",
      period: "Jun 2024 - Jul 2025",
      description: "Evaluate intermittent state space (iETS) models for long-horizon sparse demand forecasting using R's smooth package; designed an experimental protocol and benchmarked against baselines, showing ~15% improvement for irregular retail sales.",
      tags: ["R", "Intermittent Demand", "Forecasting", "Time Series", "Evaluation"],
      type: "academic",
      images: [ietsModelsTrends]
    },
    {
      title: "Comparison of Time Series Foundational Models",
      organization: "NeurIPS 2024 Workshop Submission",
      period: "Jun 2024 - Jul 2025",
      description: "Co-authored a study comparing statistical, machine learning, neural network, and foundation models for time series forecasting. Using multi-origin rolling forecasts and four error metrics, the study found that traditional statistical methods remained more accurate and faster for the evaluated low-frequency datasets.",
      tags: ["Python", "Foundation Models", "Forecasting", "Benchmarking", "RMSSE"],
      type: "research",
      images: [figure2],
      link: paper
    },
    {
      title: "Automated Vibration Classification for Vehicles using Deep CNNs",
      organization: "VNIT Nagpur",
      period: "Jan 2022 - Jul 2022",
      description: "Predict ride comfort from vibration signals with a 1D ResNet-style CNN trained on ~22k MATLAB-generated vibration samples following ISO standards; achieved ~95% test accuracy.",
      tags: ["MATLAB", "Signal Processing", "1D CNN", "ResNet", "Time Series"],
      type: "academic",
      images: []
    },
    {
      title: "WhyHere - Explainable Top N Location Recommender for Atlanta",
      organization: "Georgia Tech (CSE 6242)",
      period: "Aug 2025 - Dec 2025",
      description: "Built an explainable recommendation system that ranks Atlanta locations using user-weighted lifestyle, safety, transit, and amenity features, then returns transparent score breakdowns for each recommendation. Processed geospatial datasets with Databricks and Spark, converted raw data into H3 hexagonal units, and used a 22-person survey to choose the clearest product experience.",
      tags: ["Databricks", "Spark", "Geospatial", "H3", "Flask", "Explainable AI"],
      type: "academic",
      images: [whyHere1, whyHere2]
    },
    {
      title: "Myntra Hacker Ramp - Fashion Trend Detection using CNNs (Runner up)",
      organization: "Myntra Hacker Ramp",
      period: "BTech",
      description: "Built a CNN-based computer vision pipeline on Instagram fashion images to detect styles and trends; delivered signals for merchandising decisions; runner up in hackathon.",
      tags: ["Computer Vision", "CNN", "Image Classification", "Prototyping"],
      type: "academic",
      images: [perceptronTrend1, perceptronTrend2]
    },
    {
      title: "GenAI Contract and Invoice Reconciliation System",
      organization: "ExxonMobil",
      period: "2023 - 2025",
      description: "AWS Textract digitization of 100+ contracts and thousands of invoices; Bedrock-based RAG 'GenAI calculator' applies complex fee/discount rules to compute expected charges; integrated into Glue ETL to auto-check every invoice and flag discrepancies; identified ~$2.9M savings and reduced manual checks.",
      tags: ["AWS Textract", "Bedrock", "RAG", "ETL", "Glue", "Automation"],
      type: "industry",
      images: []
    },
    {
      title: "Customer Segmentation and Targeting Pipeline",
      organization: "ExxonMobil",
      period: "2022 - 2024",
      description: "Engineered RFM and behavioral features over 2M+ transactions; clustering yielded interpretable segments; partnered with marketing for strategies; validated via A/B and hypothesis testing; Dockerized pipeline for automated refresh and scoring.",
      tags: ["Feature Engineering", "Clustering", "RFM", "A/B Testing", "Docker"],
      type: "industry",
      images: []
    }
  ]

  const interests = [
    { icon: TrendingUp, title: "Supply Chain Data Science", description: "Forecasting, inventory optimization, demand planning and pricing analytics across complex supply chains." },
    { icon: Brain, title: "Autonomous Driving Analytics", description: "Telemetry analysis, anomaly detection, DTW similarity, risk scoring for safety and insurance." },
    { icon: Code, title: "Time Series Data Science", description: "Classical + ML forecasting, intermittent demand, multi-origin evaluation, interpretable modeling." },
    { icon: Award, title: "Financial Data Science", description: "Market signals, price direction modeling, anomaly detection in financial time series." },
    { icon: Telescope, title: "Astronomy & Stargazing", description: "Stargazing nights, astronomy missions, and the occasional deep dive into sky maps." },
    { icon: Brain, title: "Tech Reading", description: "Research talks, engineering blogs, and new AI tools worth testing." },
    { icon: Users, title: "Event Planning", description: "Academic, recruiting, and community events from planning through day-of coordination." },
    { icon: Mic, title: "Public Speaking", description: "Technical talks, workshops, and team presentations for mixed audiences." },
    { icon: Trophy, title: "Trivia & Quizzing", description: "Competitive quizzing, general knowledge contests, and fast recall under pressure." },
    { icon: Gamepad2, title: "Board Games", description: "Strategy games with a mix of planning, negotiation, and table talk." },
    { icon: FileText, title: "Creative Writing", description: "Short fiction, project notes, and clear technical writing." },
    { icon: Star, title: "Volunteering", description: "Student activities, recruiting support, and community work." }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">TK</div>
            <div className="hidden md:flex space-x-8">
              {["Experience", "About", "Research", "Projects", "Interests", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                  Tejas Khandwekar
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground">
                  Data Scientist | MSCS Machine Learning Candidate | December 2026
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Data Scientist with 3+ years of industry experience at ExxonMobil, a 2026 Apple Data Scientist Internship, 
                and graduate machine learning research with Ford and Georgia Tech. Currently pursuing an MS in Computer Science 
                with a Machine Learning specialization at Georgia Tech, graduating in December 2026.
              </p>

              <div className="inline-flex items-center gap-3 rounded-md border bg-card px-4 py-3 shadow-sm">
                <img
                  src={appleLogo}
                  alt="Apple logo"
                  className="h-6 w-6 object-contain"
                />
                <span className="text-sm font-medium">Apple Data Scientist Intern, May-Aug 2026</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Atlanta, GA</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>khandwekar.t@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>(404) 396-9196</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => window.open('https://linkedin.com/in/tejas-khandwekar/', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => window.open('https://github.com/TejasKhandwekar', '_blank')}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(resume, '_blank')}
                >
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={tejasPhoto} 
                  alt="Tejas Khandwekar" 
                  className="w-full h-full object-cover object-center scale-90"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection('experience')}
              className="animate-bounce"
            >
              <ChevronDown className="h-6 w-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* Professional Experience - moved up */}
      <section id="experience" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={exp.logoAlt}
                            className="h-7 w-7 rounded-md border bg-white p-1 object-contain"
                          />
                        ) : (
                          <Briefcase className="h-5 w-5" />
                        )}
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {exp.company}{exp.location ? ` | ${exp.location}` : ''}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I work on forecasting, customer analytics, anomaly detection, and applied machine learning systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    What I Work On
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    My work sits between product data, operations, and machine learning. I like models that can be checked, 
                    explained, and used by planners, engineers, or support teams.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Time Series Forecasting</h4>
                    <p className="text-sm text-muted-foreground">
                      SKU demand, price signals, intermittent demand, and benchmark studies that compare foundation models 
                      with statistical baselines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Text Analytics and RAG</h4>
                    <p className="text-sm text-muted-foreground">
                      Contract, invoice, and customer-feedback workflows using Textract, Bedrock, BERT, retrieval, and 
                      structured evaluation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Applied Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Segmentation, anomaly detection, risk scoring, and recommendation systems that tie model outputs 
                      back to business decisions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Current Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">MS Computer Science at Georgia Tech</h4>
                    <p className="text-sm text-muted-foreground">
                      MS in Computer Science with a Machine Learning specialization. Expected graduation: December 2026.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apple Data Science Internship</h4>
                    <p className="text-sm text-muted-foreground">
                      Customer case anomaly detection, product feedback patterns, escalation paths, and early-warning 
                      signals for engineering and operations teams.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Series Paper</h4>
                    <p className="text-sm text-muted-foreground">
                      Co-authored Comparison of Time Series Foundational Models, submitted to the NeurIPS 2024 Workshop 
                      on Time Series in the Age of Large Models.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights Section */}
      <section id="research" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Research Highlights</h2>
            <p className="text-lg text-muted-foreground">
              Time series forecasting work with a public paper and reproducible comparisons.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Comparison of Time Series Foundational Models
              </CardTitle>
              <CardDescription>
                Submitted to NeurIPS 2024 Workshop on Time Series in the Age of Large Models
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                This paper compares Chronos, TimeGPT, and Moirai with neural network, machine learning, and statistical 
                benchmarks. With rolling time origins and multiple error metrics, traditional statistical methods performed 
                best on the evaluated low-frequency datasets and were faster to run.
              </p>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => window.open(paper, '_blank')}
              >
                <FileText className="h-4 w-4" />
                Open Public Paper
              </Button>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Key Findings & Contributions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Statistical methods (e.g., ETS, ARIMA) still outperform current foundation models for low-frequency time series forecasting.</li>
                    <li>Multi-origin rolling forecasts improve reliability compared to single-origin designs.</li>
                    <li>The best statistical model achieved a 36% improvement in RMSsE over the best foundation model.</li>
                    <li>The study clarifies practical accuracy and computational efficiency trade-offs for advanced forecasting models.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Research Impact & Context</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Submitted to the NeurIPS 2024 Workshop on Time Series in the Age of Large Models.</li>
                    <li>Collaboration with researchers from Lancaster University and Georgia Tech.</li>
                    <li>Addresses critical questions about the real-world efficacy of emerging AI models in time series forecasting.</li>
                    <li>Provides industry-relevant insights for supply chain and demand planning use cases where monthly data is common.</li>
                    <li>Reinforces the need to compare new techniques against established methods using robust evaluation frameworks.</li>
                  </ul>
                </div>
              </div>
            <div className="flex flex-col items-center space-y-3">
              <h4 className="font-semibold">Runtime vs Accuracy Trade-off</h4>
              <img
                src={figure2}
                alt="Forecasting landscape"
                className="max-w-full rounded-lg border object-contain"
              />
              <p className="text-xs text-muted-foreground text-center">
                Figure 1: Forecasting landscape of aggregated RMSsE versus runtime for both datasets. Highlights the efficiency and accuracy of statistical methods.
              </p>
            </div>
            </CardContent>
          </Card>
        </div>
      </section> 
      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tools and methods I use across product, research, and operations work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section moved above */}

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Major Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Research, industry, and course projects with measurable outcomes.
            </p>
          </div>

          {(() => {
            const withImages = projects.filter(p => Array.isArray(p.images) && p.images.length > 0)
            const withoutImages = projects.filter(p => !Array.isArray(p.images) || p.images.length === 0)

            const renderCard = (project, index, hasImages) => (
              <Card
                key={index}
                className={`h-full`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.organization} | {project.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className={`space-y-4 ${hasImages ? '' : 'min-h-48'}`}>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open Paper
                    </Button>
                  )}
                  {hasImages && (
                    <div className={project.images.length === 1 ? 'text-center' : 'grid grid-cols-2 gap-2'}>
                      {project.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Project figure ${i+1}`}
                          className={`rounded border object-contain ${
                            project.images.length === 1
                              ? 'max-w-md mx-auto max-h-64'
                              : 'w-full max-h-40'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )

            return (
              <>
                {/* Group: Projects with images */}
                {withImages.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {withImages.map((p, i) => renderCard(p, `img-${i}`, true))}
                  </div>
                )}

                {/* Group: Projects without images */}
                {withoutImages.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {withoutImages.map((p, i) => renderCard(p, `noimg-${i}`, false))}
                  </div>
                )}
              </>
            )
          })()}
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Personal Interests</h2>
            <p className="text-lg text-muted-foreground">
              A few interests outside data science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <interest.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              Open to data science roles, applied ML work, and research collaborations.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">khandwekar.t@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">(404) 396-9196</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">Atlanta, GA 30363</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full gap-2"
                      onClick={() => window.open('https://linkedin.com/in/tejas-khandwekar/', '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                      Connect on LinkedIn
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full gap-2"
                      onClick={() => window.open('https://github.com/TejasKhandwekar', '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      View GitHub
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full gap-2"
                      onClick={() => window.open(resume, '_blank')}
                    >
                      <Download className="h-4 w-4" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 Tejas Khandwekar. Built with React and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
