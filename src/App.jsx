import React, { useState, useEffect } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  FileText,
  FlaskConical,
  Briefcase,
  GraduationCap,
  Award,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Cpu,
  TrendingUp,
} from 'lucide-react'
import tejasPhoto from './assets/tejas-photo.jpg'
import {
  basics,
  impact,
  publications,
  currentResearch,
  experience,
  projects,
  education,
  skills,
  awards,
  pillars,
} from './data/content.js'
import './App.css'

const PILLAR_ICONS = { research: FlaskConical, engineering: Cpu, datascience: TrendingUp }

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

/* ---------- small building blocks ---------- */

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

function Section({ id, eyebrow, title, intro, children, muted = false }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${muted ? 'bg-muted/40' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand mb-3">{eyebrow}</p>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
          {intro && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

function Chip({ children, tone = 'default' }) {
  const tones = {
    default: 'border-border bg-background text-muted-foreground',
    brand: 'border-transparent bg-brand-soft text-brand',
    solid: 'border-transparent bg-foreground text-background',
  }
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
  )
}

function LinkButton({ href, children, variant = 'outline', icon: Icon, download }) {
  const styles = {
    solid: 'bg-foreground text-background hover:opacity-90',
    brand: 'bg-brand text-white dark:text-background hover:opacity-90',
    outline: 'border border-border bg-background hover:bg-muted',
  }
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external || href.endsWith('.pdf') ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      download={download}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${styles[variant]}`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </a>
  )
}

function Bullets({ items, limit, brand = false }) {
  const [open, setOpen] = useState(false)
  const shown = limit && !open ? items.slice(0, limit) : items
  return (
    <>
      <ul className="space-y-2.5">
        {shown.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${brand ? 'bg-brand' : 'bg-muted-foreground/50'}`} />
            <span>
              {typeof b === 'string' ? (
                b
              ) : (
                <>
                  <span className="font-semibold text-foreground">{b.lead}: </span>
                  {b.text}
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
      {limit && items.length > limit && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
          aria-expanded={open}
        >
          {open ? 'Show less' : `Show ${items.length - limit} more`}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      )}
    </>
  )
}

function Links({ links }) {
  if (!links || links.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-xs font-medium hover:bg-muted"
        >
          {l.label}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  )
}

/* ---------- theme ---------- */

function useTheme() {
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  )
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch (e) {
      /* storage unavailable */
    }
  }, [dark])
  return [dark, setDark]
}

/* ---------- page ---------- */

function App() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useTheme()
  const [projectFilter, setProjectFilter] = useState('All')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
  const visibleProjects = projectFilter === 'All' ? projects : projects.filter((p) => p.category === projectFilter)

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <a href="#top" className="font-bold tracking-tight text-lg">
              Tejas<span className="text-brand">.</span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {NAV.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    active === id ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setDark(!dark)}
                className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden rounded-md p-2 text-muted-foreground hover:bg-muted"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden border-t border-border bg-background px-4 py-3 grid grid-cols-2 gap-1">
              {NAV.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Hero */}
        <header id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/15 blur-3xl"
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div className="space-y-7">
              <div className="flex flex-wrap gap-2">
                <Chip tone="brand">
                  <Sparkles className="h-3 w-3 mr-1" /> 2 papers accepted at NeurIPS 2026 workshops
                </Chip>
                <Chip>M.S. at Georgia Tech · 4.0 GPA</Chip>
                <Chip>3 years of industry ML and data science</Chip>
              </div>
              <div>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">{basics.name}</h1>
                <p className="mt-4 text-xl sm:text-2xl font-medium">
                  {basics.headline}
                  <span className="block mt-1 text-muted-foreground font-normal">
                    {basics.focus.join(' · ')}
                  </span>
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{basics.shortBio}</p>
              <div className="flex flex-wrap gap-3">
                <LinkButton href={basics.resume} variant="solid" icon={Download}>
                  Resume
                </LinkButton>
                <LinkButton href={`mailto:${basics.email}`} icon={Mail}>
                  Email
                </LinkButton>
                <LinkButton href={basics.github} icon={Github}>
                  GitHub
                </LinkButton>
                <LinkButton href={basics.linkedin} icon={Linkedin}>
                  LinkedIn
                </LinkButton>
                <LinkButton href={basics.scholar} icon={BookOpen}>
                  Scholar
                </LinkButton>
              </div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {basics.location}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand/30 to-transparent blur-xl" />
                <img
                  src={tejasPhoto}
                  alt={basics.name}
                  className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-[1.75rem] object-cover object-top border border-border shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Impact strip */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 rounded-2xl border border-border bg-card overflow-hidden">
                {impact.map((s, i) => (
                  <div key={i} className="p-5 border-border border-b border-r -mb-px -mr-px">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-brand">{s.area}</p>
                    <p className="text-2xl sm:text-3xl font-bold tracking-tight tabular-nums">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* About */}
        <Section id="about" eyebrow="About" title="AI research, ML engineering, and data science" muted>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10">
            <Reveal className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              {basics.longBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Research interests</h3>
                <div className="flex flex-wrap gap-2">
                  {basics.interests.map((t) => (
                    <Chip key={t} tone="brand">
                      {t}
                    </Chip>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {pillars.map((pl, i) => {
              const Icon = PILLAR_ICONS[pl.key]
              return (
                <Reveal key={pl.key} delay={i * 0.06}>
                  <Card className="p-6 h-full flex flex-col">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <h3 className="text-lg font-semibold">{pl.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{pl.summary}</p>
                    <ul className="mt-4 space-y-2 flex-1">
                      {pl.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 text-sm">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={pl.href} className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline">
                      {pl.cta} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </Section>

        {/* Current research */}
        <Section
          id="research"
          eyebrow="Current Research"
          title={currentResearch.lab}
          intro="Ongoing work on where model capabilities come from, how to steer model behavior, and how to make forecasting models cheaper."
        >
          <div className="space-y-6">
            {currentResearch.projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <Card className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <Chip>{p.period}</Chip>
                      {p.status && <Chip tone="brand">In progress</Chip>}
                    </div>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed border-l-2 border-brand pl-4">{p.tagline}</p>
                  {p.metrics && (
                    <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
                      {p.metrics.map((m) => (
                        <div key={m.label} className="rounded-xl bg-brand-soft px-3 py-3">
                          <p className="text-xl font-bold text-brand tabular-nums">{m.value}</p>
                          <p className="text-xs text-muted-foreground">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-6">
                    <Bullets items={p.bullets} limit={3} brand />
                  </div>
                  {p.status && <p className="mt-4 text-sm italic text-muted-foreground">Status: {p.status}</p>}
                  {p.related && (
                    <p className="mt-4 text-sm">
                      <span className="text-muted-foreground">Related paper: </span>
                      <a href="#publications" className="font-medium text-brand hover:underline">
                        {p.related}
                      </a>
                    </p>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Publications */}
        <Section id="publications" eyebrow="Publications" title="Papers and manuscripts" muted>
          <ol className="space-y-6">
            {publications.map((pub, i) => (
              <Reveal key={pub.title} delay={i * 0.05}>
                <li>
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Chip tone={pub.status === 'Accepted' ? 'solid' : 'default'}>{pub.status}</Chip>
                      <Chip tone="brand">{pub.venue}</Chip>
                      <span className="text-xs text-muted-foreground">{pub.kind}</span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight flex gap-2">
                      <FileText className="h-5 w-5 mt-1 shrink-0 text-brand" />
                      {pub.title}
                    </h3>
                    {pub.authors && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {pub.authors.split(', ').map((a, k, arr) => (
                          <span key={a}>
                            <span className={a === basics.name ? 'font-semibold text-foreground' : ''}>{a}</span>
                            {k < arr.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </p>
                    )}
                    <div className={`mt-4 grid gap-8 ${pub.highlight || pub.image ? 'lg:grid-cols-[1.4fr_1fr]' : ''}`}>
                      <div className="space-y-4">
                        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{pub.summary}</p>
                        {pub.methods && (
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            <span className="font-semibold text-foreground">Methods: </span>
                            {pub.methods}
                          </p>
                        )}
                        <Links links={pub.links} />
                      </div>
                      {pub.highlight && (
                        <div className="rounded-xl border border-border p-5 self-start">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                            Negotiation {pub.highlight.metric}
                          </p>
                          {[pub.highlight.a, pub.highlight.b].map((row, j) => (
                            <div key={row.label} className="mb-3 last:mb-0">
                              <div className="flex justify-between text-sm mb-1">
                                <span>{row.label}</span>
                                <span className="font-semibold tabular-nums">{row.value}%</span>
                              </div>
                              <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${j === 0 ? 'bg-brand' : 'bg-muted-foreground/50'}`}
                                  style={{ width: `${row.value}%` }}
                                />
                              </div>
                            </div>
                          ))}
                          <p className="mt-4 text-xs text-muted-foreground">Same persona and urgency; only the language changes.</p>
                        </div>
                      )}
                      {pub.image && (
                        <figure className="self-start">
                          <img
                            src={pub.image}
                            alt={pub.imageAlt}
                            loading="lazy"
                            className="w-full rounded-xl border border-border bg-white object-contain"
                          />
                          <figcaption className="mt-2 text-xs text-muted-foreground">{pub.imageAlt}.</figcaption>
                        </figure>
                      )}
                    </div>
                  </Card>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="Experience" title="Research and industry">
          <div className="relative">
            <div aria-hidden className="absolute left-[11px] top-2 bottom-2 w-px bg-border hidden sm:block" />
            <div className="space-y-8">
              {experience.map((exp, i) => {
                const Icon = exp.group === 'Research' ? FlaskConical : Briefcase
                return (
                  <Reveal key={exp.title + exp.org} delay={i * 0.04}>
                    <div className="sm:pl-12 relative">
                      <div className="hidden sm:flex absolute left-0 top-6 h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
                        <Icon className="h-3.5 w-3.5 text-brand" />
                      </div>
                      <Card className="p-6 sm:p-7">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                          <div className="flex items-start gap-3">
                            {exp.logo && (
                              <img
                                src={exp.logo}
                                alt=""
                                className="h-9 w-9 rounded-lg border border-border bg-white p-1.5 object-contain"
                              />
                            )}
                            <div>
                              <h3 className="text-lg font-semibold">{exp.org}</h3>
                              <p className="text-sm text-muted-foreground">{exp.title}</p>
                            </div>
                          </div>
                          <div className="flex gap-2 sm:flex-col sm:items-end">
                            <Chip>{exp.period}</Chip>
                            <span className="text-xs text-muted-foreground">{exp.group}</span>
                          </div>
                        </div>
                        <Bullets items={exp.bullets} />
                      </Card>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="Projects" title="Selected projects" muted>
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={projectFilter === c}
                onClick={() => setProjectFilter(c)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium border transition ${
                  projectFilter === c
                    ? 'bg-foreground text-background border-foreground'
                    : 'border-border bg-background text-muted-foreground hover:text-foreground'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {visibleProjects.map((p) => (
              <motion.div key={p.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Chip tone="brand">{p.category}</Chip>
                    <span className="text-xs text-muted-foreground">{p.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-1 mb-4 text-sm font-medium text-foreground/80">{p.tagline}</p>
                  {p.images && (
                    <div className={`mb-4 grid gap-2 ${p.images.length > 1 ? 'grid-cols-2' : ''}`}>
                      {p.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${p.title} figure ${i + 1}`}
                          loading="lazy"
                          className="w-full h-40 rounded-lg border border-border bg-white object-contain"
                        />
                      ))}
                    </div>
                  )}
                  <div className="flex-1">
                    <Bullets items={p.bullets} />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                  {p.links?.length > 0 && (
                    <div className="mt-4">
                      <Links links={p.links} />
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" eyebrow="Education" title="Education">
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.05}>
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-brand-soft p-2">
                      <GraduationCap className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{e.school}</h3>
                      <p className="text-sm text-muted-foreground">{e.location}</p>
                    </div>
                  </div>
                  <p className="mt-4 font-medium">{e.degree}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Chip>{e.period}</Chip>
                    <Chip tone="solid">GPA {e.gpa}</Chip>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Selected coursework
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{e.coursework.join(' · ')}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="Skills" title="Technical toolkit" muted>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([cat, list], i) => (
              <Reveal key={cat} delay={i * 0.04}>
                <Card className="p-6 h-full">
                  <h3 className="font-semibold mb-4">{cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {list.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Awards */}
        <Section id="awards" eyebrow="Awards & Leadership" title="Recognition and community">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.04}>
                <Card className="p-5 h-full">
                  <Award className="h-5 w-5 text-brand mb-3" />
                  <h3 className="font-semibold text-sm">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <section id="contact" className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="rounded-3xl bg-foreground text-background px-6 py-12 sm:px-12 sm:py-16 relative overflow-hidden">
                <div aria-hidden className="absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
                <div className="relative max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let's talk</h2>
                  <p className="mt-4 text-lg opacity-80 leading-relaxed">
                    Interested in research collaborations and roles across applied AI, machine learning, and data science.
                  </p>
                  <a
                    href={`mailto:${basics.email}`}
                    className="mt-6 inline-flex items-center gap-2 text-lg font-semibold underline-offset-4 hover:underline"
                  >
                    <Mail className="h-5 w-5" /> {basics.email}
                  </a>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {[
                      { href: basics.linkedin, label: 'LinkedIn', icon: Linkedin },
                      { href: basics.github, label: 'GitHub', icon: Github },
                      { href: basics.scholar, label: 'Google Scholar', icon: BookOpen },
                      { href: basics.resume, label: 'Resume (PDF)', icon: ExternalLink },
                    ].map(({ href, label, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-background/25 px-4 py-2 text-sm font-medium hover:bg-background/10"
                      >
                        <Icon className="h-4 w-4" /> {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="py-8 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-2 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {basics.name}</p>
            <p>{basics.location}</p>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}

export default App
