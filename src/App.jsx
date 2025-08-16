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
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'research', 'experience', 'projects', 'interests', 'blog', 'contact']
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
      title: "Data Scientist",
      company: "ExxonMobil",
      location: "Bengaluru, Karnataka",
      period: "July 2022 - June 2025",
      achievements: [
        "Automated fee calculation from digitized contracts using AWS Textract and developed a contract-invoice reconciliation system to detect mismatches using AWS Bedrock by Attribute Extraction using RAG, improving accuracy and efficiency in contract management.",
        "Integrated GenAI-based fee calculator with AWS Glue ETL workflows, identifying invoice discrepancies and delivering $2.9M in cost savings.",
        "Co-developed a global demand-forecasting pipeline for thousands of SKUs, addressing data gaps and tailoring ensemble models to segmented clusters, incorporating demand planners' feedback and business processes, and reduced model run times by 50%.",
        "Improved demand-forecasting accuracy by 10% over vendor solutions, enabling $50M in business impact through enhanced planning and procurement.",
        "Developed a statistical forecasting model for price predictions, enabling better capacity planning and trading decisions, achieving direction accuracy of 78%.",
        "Achieved $2M/year financial savings by collaborating with domain experts, incorporating leading drivers, and using a custom loss function to minimize direction loss for trading.",
        "Built a Dockerized segmentation model, which automated clustering, reduced analysis and workload time from months to hours, and boosted tailored marketing efforts, driving significant sales growth.",
        "Presented to large audiences and hosted engaging events like Data Science Day with quizzes and interactive activities."
      ]
    },
    {
      title: "General Recruitment Coordinator",
      company: "VNIT, Nagpur",
      location: "Nagpur, India",
      period: "October 2021 - July 2022",
      achievements: [
        "Coordinated company visits, interviews, and communications for recruiting events across departments, managing logistics for over 10 companies and 100+ students.",
        "Assisted in organizing promotional materials and ensuring smooth execution of technical interviews and events, enhancing candidate experience.",
        "Worked closely with students and faculty to manage schedules and event logistics, improving operational efficiency."
      ]
    },
    {
      title: "Project Engineering Intern",
      company: "ExxonMobil",
      location: "Bengaluru, Karnataka",
      period: "May 2021 - July 2021",
      achievements: [
        "Created an information management tool using Power BI and SharePoint lists to organize deliverables and improve accessibility of information, storing and displaying data on a Project information portal written in TypeScript."
      ]
    }
  ]

  const projects = [
    {
      title: "Comparison of Time Series Foundational Models (Draft)",
      organization: "Lancaster University & ExxonMobil",
      period: "2024 - Present",
      description: "Co-authored a research paper draft evaluating foundation models (Chronos, TimeGPT, Moirai) against established neural networks, machine learning, and statistical benchmarks. Conducted rigorous empirical evaluation using rolling time origins and robust error metrics. This work was submitted to the NeurIPS 2024 Workshop on Time Series in the Age of Large Models.",
      tags: ["Research", "Time Series", "Foundation Models", "NeurIPS 2024"],
      type: "research",
      images: [figure2]
    },
    {
      title: "iETS Models for Intermittent Demand Forecasting",
      organization: "Lancaster University",
      period: "June 2024 - Present",
      description: "Collaborated with Prof. Ivan from Lancaster University to test innovation state space models (iETS) for forecasting intermittent demand. Applied R's smooth package to improve forecasts for irregular demand scenarios in retail sales data vs other models, demonstrating a 15% improvement in forecast accuracy.",
      tags: ["R", "Time Series", "Forecasting", "Research", "Statistical Modeling"],
      type: "academic",
      images: [ietsModelsTrends]
    },
    {
      title: "Natural Language Processing for Question Answering",
      organization: "Visvesvaraya National Institute of Technology",
      period: "May 2021 - January 2022",
      description: "Enhanced state-of-the-art NLP models for multi-hop question answering across multiple documents. Built knowledge graphs and applied unsupervised methods for reasoning sentence selection; co-trained LSTM and fine-tuned BERT for improved QA performance, achieving a 10% increase in F1 score.",
      tags: ["NLP", "BERT", "LSTM", "Knowledge Graphs", "Deep Learning"],
      type: "academic",
      images: [] 
    },
    {
      title: "Automated Vibration Comfort Classification",
      organization: "Visvesvaraya National Institute of Technology",
      period: "Academic Project",
      description: "Engineered a comprehensive vehicle vibration dataset using control theory in MATLAB, subsequently implementing 1D CNNs to accurately categorize time-series vibrations into comfort scores. Built a custom version 1D ResNet (CNN) to classify time series data after analyzing different methodologies and models, achieving 95% classification accuracy.",
      tags: ["CNN", "MATLAB", "Time Series", "Classification", "Computer Vision"],
      type: "academic",
      images: [] 
    },
    {
      title: "Porous Media Solver using CNN",
      organization: "Visvesvaraya National Institute of Technology",
      period: "Academic Project",
      description: "Developed a novel CNN model for simulating fluid flows in porous media, achieving a simulation speed approximately 2000 times faster than conventional CFD methods while maintaining legible results. Pioneered the creation of a comprehensive dataset for this AI-driven approach, reducing computational time from hours to seconds.",
      tags: ["CNN", "CFD", "Simulation", "Deep Learning", "Scientific Computing"],
      type: "academic",
      images: [porousMedia1]
    },
    {
      title: "Perceptrons - Trend Prediction",
      organization: "Myntra & Dare2Compete Hackathon",
      period: "Academic Project",
      description: "2nd Place – National Hackathon by Myntra & Dare2Compete. Real-time fashion trend detection system using Instagram scraping, semantic segmentation (Mask R-CNN), and attribute classification to track emerging styles from social media.",
      tags: ["Computer Vision", "Mask R-CNN", "Image Processing", "Deep Learning"],
      type: "academic",
      images: [perceptronTrend1, perceptronTrend2]
    }
  ]

  const interests = [
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
              {["About", "Research", "Experience", "Projects", "Interests", "Blog", "Contact"].map((item) => (
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
                  <span>tejas5589@gmail.com</span>
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

      {/* Experience Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A selection of my key academic and research projects, highlighting my analytical and technical skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`h-full ${project.type === 'research' ? 'border-primary/50 bg-primary/5' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {project.type === 'research' ? <FileText className="h-5 w-5" /> : <Code className="h-5 w-5" />}
                    {project.title}
                    {project.type === 'research' && <Badge variant="secondary" className="ml-2">Research</Badge>}
                  </CardTitle>
                  <CardDescription>
                    {project.organization} • {project.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  {project.images && project.images.length > 0 && (
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
            ))}
          </div>
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
                        <p className="text-sm text-muted-foreground">tejas5589@gmail.com</p>
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
                      onClick={() => window.open('/resume.pdf', '_blank')}
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


