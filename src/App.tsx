import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardList,
  FileText,
  GitBranch,
  Laptop,
  Lock,
  Map,
  MessageSquare,
  Mic,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Ticket,
  UploadCloud,
} from 'lucide-react'
import './App.css'

const sources = [
  { label: 'GitHub repo', detail: '84 files indexed', status: 'Ready' },
  { label: 'README + API docs', detail: '12 docs parsed', status: 'Ready' },
  { label: 'KT notes', detail: '5 sessions summarized', status: 'Ready' },
  { label: 'Jira tickets', detail: '18 tasks mapped', status: 'Ready' },
]

const modules = [
  {
    name: 'Authentication',
    files: 'auth.py, security.py, login.html',
    summary: 'Handles signup, login, session state, password hashing, and route access checks.',
  },
  {
    name: 'Product Catalog',
    files: 'products.py, models.py, products.html',
    summary: 'Loads SmartReco product data, filters categories, and prepares listing pages.',
  },
  {
    name: 'Recommendation Engine',
    files: 'recommendations.py, vector_store.py, mesh_client.py',
    summary: 'Combines user behavior, vector search, and AI reasoning for personalized picks.',
  },
]

const roadmap = [
  'Run the app locally and understand folder structure',
  'Study auth and session flow before editing protected pages',
  'Trace product listing APIs from route to template',
  'Understand vector search and recommendation ranking',
  'Read common bugs and take a beginner ticket',
  'Open first PR with generated checklist',
  'Review architecture quiz and KT summary',
]

const suggestedPrompts = [
  'What is this project?',
  'What should I learn first?',
  'Explain authentication flow',
  'Which files should I study for recommendations?',
]

const answers: Record<string, string> = {
  'What is this project?':
    'SmartReco is an ecommerce recommendation app. It lets users browse products, log in, and receive personalized suggestions from product data and vector search signals.',
  'What should I learn first?':
    'Start with app/main.py for routing, then auth.py and security.py for login, then products.py for catalog flow. After that, study recommendation.py and vector_store.py.',
  'Explain authentication flow':
    'The user submits login.html, auth.py validates credentials, security.py handles password and session logic, and protected routes check session state before showing account-specific pages.',
  'Which files should I study for recommendations?':
    'Focus on recommendation.py, vector_store.py, mesh_client.py, products.py, and models.py. These files connect catalog data, user intent, embeddings, and output ranking.',
}

const ticketOutput = [
  'Meaning: users are seeing generic product suggestions after login.',
  'Likely modules: Recommendation Engine, Product Catalog, User Session.',
  'Files to inspect: recommendation.py, vector_store.py, auth.py, products.py.',
  'First step: verify whether logged-in user id reaches the recommendation route.',
]

function App() {
  const [query, setQuery] = useState('What should I learn first?')
  const [answer, setAnswer] = useState(answers['What should I learn first?'])
  const [activeDay, setActiveDay] = useState(1)
  const [ticket, setTicket] = useState(
    'Bug: recommendations are not personalized after a user logs in',
  )

  const readiness = useMemo(
    () => Math.round(((activeDay + 2) / roadmap.length) * 100),
    [activeDay],
  )

  function askMentor(nextQuery = query) {
    setQuery(nextQuery)
    setAnswer(
      answers[nextQuery] ||
        'DevFlow checked the project brain and found related context in the repo, docs, and KT notes. Start from the module map, then open the cited files before changing code.',
    )
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">
            <Brain size={22} strokeWidth={2.5} />
          </span>
          <span>
            <strong>DevFlow AI</strong>
            <small>Private onboarding workspace</small>
          </span>
        </div>
        <div className="status-pills" aria-label="Prototype scope">
          <span>SmartReco demo</span>
          <span>7-day plan</span>
          <span>Local-first mode</span>
        </div>
        <button className="import-button" type="button">
          <UploadCloud size={17} />
          <span>Import</span>
        </button>
      </header>

      <section className="hero-grid">
        <div className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Project brain</p>
            <h1>Turn messy KT into a guided first week for new developers.</h1>
            <p>
              DevFlow analyzes repo files, docs, tickets, and KT notes, then creates a
              project map, learning roadmap, file references, and beginner-ready tasks.
            </p>
          </div>
          <div className="readiness-card" aria-label="Readiness score">
            <small>Readiness</small>
            <strong>{readiness}%</strong>
          </div>
          <div className="source-grid">
            {sources.map((source) => (
              <article className="source-card" key={source.label}>
                <div>
                  <FileText size={17} />
                  <span>{source.status}</span>
                </div>
                <h2>{source.label}</h2>
                <p>{source.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="proof-stack">
          <StoryCard
            icon={<ShieldCheck size={20} />}
            tone="green"
            title="Privacy posture"
            body="Self-hosted workspace, local embeddings, secret redaction, and source-cited answers for teams that cannot paste private repos into public chat tools."
          />
          <StoryCard
            icon={<Smartphone size={20} />}
            tone="amber"
            title="Phone-first KT"
            body="Freshers use the phone for voice Q&A, roadmap review, quizzes, KT revision, and scanning whiteboard notes. Coding stays on the laptop."
          />
          <StoryCard
            icon={<Laptop size={20} />}
            tone="cyan"
            title="Office Kit bridge"
            body="Repo processing and heavy analysis can run on laptop compute, while the iQOO phone remains the onboarding and demo surface."
          />
        </div>
      </section>

      <section className="workspace-grid">
        <div className="left-column">
          <section className="panel">
            <PanelTitle icon={<Map size={20} />} title="Module map" meta="Source-cited" />
            <div className="module-list">
              {modules.map((module) => (
                <article className="module-card" key={module.name}>
                  <div>
                    <h3>{module.name}</h3>
                    <GitBranch size={16} />
                  </div>
                  <p>{module.summary}</p>
                  <code>{module.files}</code>
                </article>
              ))}
            </div>
          </section>

          <section className="panel">
            <PanelTitle icon={<Ticket size={20} />} title="Ticket explainer" />
            <textarea
              aria-label="Ticket text"
              value={ticket}
              onChange={(event) => setTicket(event.target.value)}
            />
            <div className="ticket-output">
              {ticketOutput.map((item) => (
                <p key={item}>
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </section>
        </div>

        <div className="right-column">
          <section className="panel mentor-panel">
            <PanelTitle
              icon={<MessageSquare size={20} />}
              title="Fresher mentor"
              action={
                <button className="ghost-button" type="button">
                  <Mic size={15} />
                  Voice mode
                </button>
              }
            />
            <div className="prompt-row">
              {suggestedPrompts.map((prompt) => (
                <button type="button" key={prompt} onClick={() => askMentor(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>
            <div className="ask-box">
              <label htmlFor="mentor-query">
                <Search size={14} />
                Ask project brain
              </label>
              <div className="input-row">
                <input
                  id="mentor-query"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <button type="button" onClick={() => askMentor()} aria-label="Ask DevFlow">
                  <Send size={18} />
                </button>
              </div>
              <div className="answer-card">
                <strong>Grounded answer</strong>
                <p>{answer}</p>
                <div className="file-tags">
                  <code>app/main.py</code>
                  <code>auth.py</code>
                  <code>README.md</code>
                </div>
              </div>
            </div>
          </section>

          <section className="panel">
            <PanelTitle
              icon={<ClipboardList size={20} />}
              title="7-day onboarding roadmap"
              meta={`Day ${activeDay + 1}`}
            />
            <div className="roadmap-list">
              {roadmap.map((item, index) => {
                const complete = index <= activeDay
                return (
                  <button
                    type="button"
                    key={item}
                    className={complete ? 'roadmap-item complete' : 'roadmap-item'}
                    onClick={() => setActiveDay(index)}
                  >
                    <span>{index + 1}</span>
                    <strong>{item}</strong>
                  </button>
                )
              })}
            </div>
          </section>

          <section className="panel">
            <PanelTitle icon={<BookOpen size={20} />} title="KT document generator" />
            <p className="body-copy">
              Generated handoff pack: project overview, setup checklist, module glossary,
              API notes, beginner tickets, PR checklist, and a short readiness quiz.
            </p>
            <button className="secondary-button" type="button">
              Generate KT pack
              <ArrowRight size={16} />
            </button>
          </section>

          <section className="quote-panel">
            <Lock size={19} />
            <p>
              Codex helps an individual write code. DevFlow helps a team onboard
              developers with reusable, private project memory before coding starts.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}

function StoryCard({
  icon,
  title,
  body,
  tone,
}: {
  icon: React.ReactNode
  title: string
  body: string
  tone: 'green' | 'amber' | 'cyan'
}) {
  return (
    <article className={`story-card ${tone}`}>
      <div>
        {icon}
        <h2>{title}</h2>
      </div>
      <p>{body}</p>
    </article>
  )
}

function PanelTitle({
  icon,
  title,
  meta,
  action,
}: {
  icon: React.ReactNode
  title: string
  meta?: string
  action?: React.ReactNode
}) {
  return (
    <div className="panel-title">
      <div>
        {icon}
        <h2>{title}</h2>
      </div>
      {action || (meta ? <span>{meta}</span> : null)}
    </div>
  )
}

export default App
