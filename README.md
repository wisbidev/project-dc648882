# aiteam Landing Page

A responsive SaaS landing page in Vietnamese promoting **aiteam** — an AI-powered platform that automatically builds software through Telegram conversations.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles and Tailwind directives
│   │   ├── layout.tsx     # Root layout component
│   │   └── page.tsx       # Home page
│   └── components/
│       └── Hero.tsx       # Hero section component
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| primary | #3B82F6 | CTA buttons, accent elements |
| bg-dark | #0F172A | Main background |
| card | #1E293B | Card backgrounds |
| text-muted | #94A3B8 | Secondary text |
| text-white | #F8FAFC | Primary text |
| success | #10B981 | Success indicators |

## Sections

1. **Hero Section** — Headline + subheadline + CTA buttons
2. **Pipeline** — 5-step timeline explaining the process
3. **AI Agents** — 4 agent cards with roles
4. **Features + Tech Stack** — Feature grid + tech badges
5. **Final CTA + Footer** — Conversion section + footer
