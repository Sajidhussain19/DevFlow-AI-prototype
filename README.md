# DevFlow AI

DevFlow AI is a private AI onboarding workspace for software teams. It helps freshers and new developers understand an existing project faster by turning repos, docs, tickets, and KT notes into a guided project mentor.

## Problem

New developers often spend days or weeks understanding project structure, setup steps, architecture, tickets, APIs, and team conventions. Senior engineers repeat the same KT sessions, while freshers often do not know what to ask first.

## Solution

DevFlow AI creates a reusable project brain with:

- Project overview and module map
- Grounded Q&A with file references
- 7-day onboarding roadmap
- Ticket explanation and related file suggestions
- KT document generation for future joiners
- Privacy-first positioning for self-hosted or local-first company deployments

## Prototype Flow

The current prototype uses a sample `SmartReco` project to show how a fresher moves from zero context to first-task readiness:

1. Import repo, docs, tickets, and KT notes
2. Generate module map and setup guidance
3. Ask onboarding questions in the mentor chat
4. Explain a bug ticket and suggest files to inspect
5. Track progress through a 7-day onboarding roadmap
6. Generate a KT handoff pack

## Tech Stack

- React
- TypeScript
- Vite
- Lucide React
- CSS

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Render Deployment

Use these settings on Render:

- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Node version: 24 or compatible current Node runtime

## Hackathon Track

Developer Tools - tools that help developers create, test, deploy, or collaborate faster using AI.
