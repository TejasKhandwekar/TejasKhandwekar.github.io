import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  BookOpen,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Brain,
  TrendingUp,
  Users,
  Calendar,
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
import georgiaTechPhoto from './assets/georgia-tech.jpeg'
import figure1 from './assets/figure1.png'
import figure2 from './assets/figure2.png'
import perceptronTrend1 from './assets/perceptron-trend-1.png'
import perceptronTrend2 from './assets/perceptron-trend-2.png'
import porousMedia1 from './assets/porous-media-1.png'
import ietsModelsTrends from './assets/iets-models-trends.png'
import whyHere1 from './assets/why_here_1.png'
import whyHere2 from './assets/why_here_2.png'
import resume from './assets/ML Internship Resume.pdf'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'about', 'research', 'projects', 'interests', 'blog', 'contact']
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
    'Programming & Tools': ['Python', 'R', 'SQL', 'Power BI', 'AWS', 'Microsoft Office Suite', 'Git', 'Docker'],
    'Machine Learning & AI': ['Machine Learning', 'Deep Learning', 'NLP', 'Gen AI', 'LLMs', 'RAG', 'Computer Vision', 'Time Series Models'],
    'Analytics & Data Science': ['Time Series Analysis', 'Demand Forecasting', 'Statistical Analysis', 'Customer Segmentation', 'Anomaly Detection', 'Supply Chain Analytics', 'A/B Testing', 'Data Visualization'],
    'Professional Skills': ['Analytical Thinking', 'Strong Communication', 'Collaborative', 'Adaptable', 'Version Control', 'Actionable Insights', 'Problem Solving', 'Project Management']
  }

  const experiences = [
    {
      title: "Graduate Research Assistant",
      company: "Ford / Georgia Institute of Technology",
      location: "Atlanta, GA",
      period: "Aug 2025 - Present",
      achievements: [
        "Engineering unsupervised learning pipelines on 1 Hz vehicle telemetry to detect near miss collisions, compute Time to Collision metrics, and generate risk scores informing insurance pricing and safety analytics.",
        "Applying signal processing techniques and Dynamic Time Warping to discover, cluster, and classify driving patterns, surfacing rare but critical anomalous behaviors across millions of datapoints.",
        "Framing methodology analogous to anomaly detection in high-frequency trading streams, emphasizing rare high-impact events over average behavior."
      ]
    },
    {
      title: "Data Scientist",
      company: "ExxonMobil",
      location: "Bengaluru, India",
      period: "Jul 2022 - Jun 2025",
      achievements: [
        "Built and co-owned a global demand forecasting pipeline for thousands of SKUs using ensemble time series models tailored to product/region clusters, validated via planner feedback and backtesting; ~10% accuracy improvement over vendor models, unlocking ~$50M working capital savings and better service levels.",
        "Developed statistical and ML price forecasting models with a custom loss prioritizing directional correctness at a 3-month horizon; ~72% directional accuracy supporting trading and capacity planning, ~$2M/year financial benefit.",
        "Designed and productionized RFM-based customer segmentation on 2M+ transactions; clustering created actionable segments that lifted upsell conversion ~5%, ~$1.3M incremental annual revenue, and reduced analysis time from months to hours via Dockerized automation.",
        "Led GenAI-driven automation for contracts and invoicing: AWS Textract for field extraction; Bedrock-based RAG 'GenAI calculator' to compute/reconcile fees across 100+ contracts and thousands of invoices; integrated into Glue ETL to auto-flag discrepancies; identified ~$2.9M in overbilling and cut manual validation.",
        "Built a contract analysis dashboard combining regex pattern matching with a BERT model to flag non-standard clauses and high-risk contracts, using risk scores to standardize language and reduce review time.",
        "Implemented a Power BI + SharePoint information portal centralizing deliverables, dashboards, and documentation, improving discoverability and self-service for stakeholders."
      ]
    }
  ]

  const projects = [
    {
      title: "Unsupervised Detection of Critical Near Miss Events in Urban and Highway Driving",
      organization: "Ford / Georgia Tech",
      period: "Aug 2025 - Present",
      description: "Detect, characterize, and quantify near miss driving events from real-world 1 Hz vehicle telemetry to support insurance, safety analytics, and product design decisions. Built ingestion and windowing, anomaly detection and clustering, DTW-based sequence similarity, and Time to Collision risk scoring for interpretable pattern libraries.",
      tags: ["Python", "Time Series", "DTW", "Anomaly Detection", "Unsupervised"],
      type: "research",
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
      title: "Comparison of Time Series Foundational Models for Forecasting",
      organization: "Independent / Academic",
      period: "Jun 2024 - Jul 2025",
      description: "Systematically compare foundation models (Chronos, TimeGPT, Moirai) against strong statistical and ML baselines in a multi-origin framework; found tuned statistical models outperform foundation models by ~36% in RMSSE.",
      tags: ["Python", "Foundation Models", "Forecasting", "Benchmarking", "RMSSE"],
      type: "research",
      images: [figure2]
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
      period: "2025",
      description: "Transparent, user-controllable recommender: users rank 8 features converted to Borda weights; Databricks distance-decay scoring over H3 hex grid (~2,143 units); Flask backend computes suitability and explanations; visualization evaluated (DBSCAN vs thresholds) choosing interpretable thresholding; mock frontend with map and CSV export.",
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
    { icon: Telescope, title: "Astronomy & Stargazing", description: "Passionate about exploring the cosmos and celestial phenomena, regularly attending stargazing events and following astronomical discoveries." },
    { icon: Brain, title: "Emerging Tech & AI Trends", description: "Actively researching and staying current with the latest developments in AI, machine learning, and other disruptive technologies, attending webinars and conferences." },
    { icon: Users, title: "Event Planning", description: "Experienced in organizing and coordinating engaging events and activities, from academic workshops to social gatherings, ensuring smooth execution and high participant satisfaction." },
    { icon: Mic, title: "Public Speaking", description: "Comfortable presenting complex topics to diverse audiences, including technical presentations and motivational talks, with a focus on clear and engaging communication." },
    { icon: Trophy, title: "Trivia & Quizzing", description: "An avid participant in competitive quizzing and knowledge competitions, enjoying the challenge of diverse topics and quick recall." },
    { icon: Gamepad2, title: "Board Games", description: "Engaging in strategic thinking through various board and strategy games, appreciating the blend of logic, planning, and social interaction." },
    { icon: FileText, title: "Creative Writing", description: "Expressing ideas through creative and technical writing, including short stories, articles, and detailed project documentation." },
    { icon: Star, title: "Volunteering", description: "Actively contributing to student activities and community initiatives, believing in giving back and fostering a supportive environment." }
  ]

  const blogPosts = [
    {
      title: "Foundation Models vs Traditional Methods in Time Series Forecasting",
      date: "December 2024",
      excerpt: "Insights from our NeurIPS 2024 research on comparing foundation models with established forecasting methods. This draft explores the nuances and practical implications of each approach.",
      tags: ["Research", "Foundation Models", "Time Series", "Forecasting"],
      featured: true
    },
    {
      title: "The Future of Time Series Forecasting in Supply Chain",
      date: "Coming Soon",
      excerpt: "Exploring how advanced ML models are revolutionizing demand forecasting and supply chain optimization, focusing on real-world applications and challenges.",
      tags: ["Forecasting", "Supply Chain", "ML", "Industry Trends"]
    },
    {
      title: "GenAI in Enterprise: Lessons from Real-World Implementation",
      date: "Coming Soon",
      excerpt: "Insights from implementing GenAI solutions at scale in enterprise environments, discussing best practices, challenges, and success stories.",
      tags: ["GenAI", "Enterprise", "Implementation", "AI Ethics"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">TK</div>
            <div className="hidden md:flex space-x-8">
              {["Experience", "About", "Research", "Projects", "Interests", "Blog", "Contact"].map((item) => (
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
                  Data Scientist & Analytics Professional | Seeking Summer 2026 Internships
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experienced Data Scientist with 3+ years of expertise in machine learning, AI, and advanced analytics. 
                Currently pursuing MS Analytics at Georgia Tech while conducting cutting-edge research in time series 
                forecasting and foundation models.
              </p>

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

              <div className="flex gap-4">
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
              onClick={() => scrollToSection('about')}
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
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcasing my professional journey and key achievements in data science and analytics.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {exp.company} • {exp.location}
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
            <h2 className="text-3xl font-bold mb-4">About My Research & Passion</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My work focuses on solving complex business challenges through advanced analytics and AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Work Philosophy & Research Passions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    I believe in leveraging cutting-edge AI technologies to solve complex business challenges 
                    and drive data-driven decision making. My approach combines rigorous statistical methods 
                    with practical business understanding to deliver solutions that create real value.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Time Series Forecasting</h4>
                    <p className="text-sm text-muted-foreground">
                      Developing innovative models for demand forecasting and supply chain optimization, 
                      with focus on intermittent demand patterns and ensemble methods. Currently researching 
                      foundation models vs traditional approaches.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Natural Language Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Advancing multi-hop question answering systems and implementing GenAI solutions 
                      for enterprise applications using RAG and LLMs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Applied Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating production-ready ML systems that deliver measurable business impact, 
                      from customer segmentation to automated contract analysis.
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
                    Current Research
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">MS Analytics at Georgia Tech</h4>
                    <p className="text-sm text-muted-foreground">
                      Currently pursuing advanced studies in analytics, focusing on cutting-edge 
                      methodologies in machine learning and statistical modeling.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lancaster University Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Working with Prof. Ivan on innovation state space models (iETS) for 
                      intermittent demand forecasting in retail environments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">NeurIPS 2024 Workshop Submission</h4>
                    <p className="text-sm text-muted-foreground">
                      Co-authored a research paper draft on comparing time series foundation models with traditional 
                      methods, which was submitted to the NeurIPS 2024 Workshop. This work highlights my contribution to 
                      rigorous empirical evaluation in the field.
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
              Key contributions to time series forecasting and foundation models
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Comparison of Time Series Foundational Models (Draft)
              </CardTitle>
              <CardDescription>
                Submitted to NeurIPS 2024 Workshop on Time Series in the Age of Large Models
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                This research paper draft, which I co-authored, rigorously evaluates foundation models (Chronos, TimeGPT, Moirai) against established 
                neural networks, machine learning, and statistical benchmarks. Through a comprehensive empirical evaluation 
                using rolling time origins and robust error metrics, we found that while foundation models show promise and outperform 
                simple benchmarks and most neural networks, traditional statistical methods still demonstrate superior performance 
                for low-frequency monthly data. This work emphasizes the importance of robust evaluation frameworks for advanced 
                forecasting techniques.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Key Findings & Contributions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Demonstrated that statistical methods (e.g., ETS, ARIMA) still outperform current foundation models for low-frequency time series forecasting.</li>
                    <li>• Conducted a rigorous multi-origin rolling forecast setup, enhancing the reliability of error estimates compared to single-origin designs.</li>
                    <li>• Showed that the best statistical model achieved a 36% improvement in RMSsE over the best foundation model.</li>
                    <li>• Contributed to the understanding of practical applicability and computational efficiency trade-offs of advanced forecasting models.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Research Impact & Context</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Submitted to the prestigious NeurIPS 2024 Workshop on Time Series in the Age of Large Models.</li>
                    <li>• A collaboration with researchers from Iqast.</li>
                    <li>• Addresses critical questions regarding the real-world efficacy of emerging AI models in time series forecasting.</li>
                    <li>• Provides industry-relevant insights, particularly for supply chain and demand planning, where monthly data is prevalent.</li>
                    <li>• Reinforces the need for critical assessment of advanced techniques against established methods using robust evaluation frameworks.</li>
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
              A comprehensive overview of my technical skills and proficiencies across various domains.
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
              Consolidated showcase of research, industry, and hackathon projects with clear goals, methods, and outcomes.
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
                    {project.organization} • {project.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className={`space-y-4 ${hasImages ? '' : 'min-h-48'}`}>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
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
              Beyond data science, I'm passionate about diverse activities that fuel creativity and learning
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

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground">
              Thoughts on data science, AI, and industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className={`h-full hover:shadow-lg transition-shadow ${post.featured ? 'border-primary/50 bg-primary/5' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {post.title}
                    {post.featured && <Badge variant="secondary">Featured</Badge>}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2 p-0">
                    Read More <ExternalLink className="h-3 w-3" />
                  </Button>
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
              Open to discussing data science opportunities, research collaborations, or industry insights
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
            <p>© 2025 Tejas Khandwekar. Built with React and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


