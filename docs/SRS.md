# Software Requirements Specification — aiteam Landing Page

## 1. Overview

A responsive SaaS landing page in Vietnamese promoting **aiteam** — an AI-powered platform that automatically builds software through Telegram conversations. The page targets non-technical founders and small teams who want to ship software without hiring developers.

**Key constraint:** Dark mode only, with blue (#3B82F6) glow/gradient accents, built with Next.js + Tailwind CSS.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Deployment | Docker + Vercel / any Node host |
| No backend | Static-page SaaS landing |

---

## 3. Functional Requirements

### 3.1 Hero Section

**Title:** `AI Team. Không cần thuê dev.`
**Subheadline:** 1–2 sentences explaining aiteam's value prop (e.g. "Mô tả ý tưởng qua Telegram, AI team tự động phân tích, build và deploy.")

| Element | Spec |
|---|---|
| CTA Primary | Button "Bắt đầu ngay" — links to Telegram bot |
| CTA Secondary | Button "Xem cách hoạt động" — smooth-scrolls to Pipeline section |
| Background | Dark (`#0F172A`) with animated gradient blue (`#3B82F6`) glow |
| Typography | Large, modern, bold headline |

**Acceptance Criteria:**
- [ ] Hero renders at full viewport height on desktop
- [ ] Both CTAs visible and tappable on mobile (≤375px)
- [ ] Gradient animation runs continuously without jank
- [ ] "Xem cách hoạt động" scrolls smoothly to #pipeline section

---

### 3.2 Pipeline / How It Works

**Title:** `Từ ý tưởng đến deploy hoàn toàn tự động`

Display 5 steps in a timeline or step-card layout:

1. **Mô tả ý tưởng qua Telegram** — User describes their idea in natural language
2. **PM AI phân tích & estimate** — AI PM analyses, creates plan + cost estimate
3. **User duyệt** — User reviews and approves the plan
4. **AI team build** — TestLead writes tests → Dev codes → TL reviews → TestLead tests (sequential)
5. **Deploy** — Auto-deployed to production

| Element | Spec |
|---|---|
| Cards | Dark border (`#1E293B`), light border on hover |
| Hover | Glow effect (blue `#3B82F6` box-shadow) |
| Responsive | Vertical stack on mobile, horizontal timeline on ≥768px |

**Acceptance Criteria:**
- [ ] All 5 steps visible without scrolling on desktop
- [ ] Hover glow effect on each card
- [ ] Mobile: cards stack vertically with full width

---

### 3.3 AI Agents Section

**Title:** `4 AI Agents vận hành như engineering team thật`

4 agent cards, each with icon (outline style), role title, and description:

| Agent | Description |
|---|---|
| **PM** | Phân tích yêu cầu, lập kế hoạch, estimate |
| **TL** | Thiết kế kiến trúc, review code, merge PR |
| **Dev** | Build frontend Next.js, backend Go, PostgreSQL |
| **TestLead** | Viết test case, automation test, validate |

| Element | Spec |
|---|---|
| Cards | Outline icon per agent, hover blue glow |
| Layout | 2×2 grid on desktop, 1-column stack on mobile |
| Icons | Simple SVG outline style (no third-party icon library required) |

**Acceptance Criteria:**
- [ ] 4 cards in a 2×2 grid on ≥768px viewport
- [ ] Each card shows icon + role + description
- [ ] Hover glow effect on each card

---

### 3.4 Features + Tech Stack

**Title:** `Tự động hóa toàn bộ quy trình phát triển phần mềm`

**Features list:**
- Giao tiếp qua Telegram
- Không cần quản lý team
- Auto GitHub repo & PR
- Estimate trước build
- Auto deploy
- Realtime tracking

**Tech stack badges:** Next.js, Go, PostgreSQL, Tailwind CSS, GitHub Actions, Docker

| Element | Spec |
|---|---|
| Layout | Feature grid (3×2 on desktop, 1-col on mobile) + tech badges row |
| Visual | Clean, wide spacing, muted text (`#94A3B8`) for descriptions |

**Acceptance Criteria:**
- [ ] All 6 features visible in grid layout
- [ ] Tech badges render as styled pills/chips
- [ ] Responsive: 3-col → 2-col → 1-col

---

### 3.5 Final CTA + Footer

**CTA headline:** `Bắt đầu build sản phẩm với AI team`
**Subheadline:** Short supporting text
**Button:** "Chat qua Telegram" — links to Telegram bot

**Footer:**
- Logo: "aiteam"
- Telegram link
- GitHub link
- Copyright text

| Element | Spec |
|---|---|
| Background | Dark (`#0F172A`), same as hero |
| CTA | Central alignment, prominent button |

**Acceptance Criteria:**
- [ ] CTA button visible above the fold on mobile (no scroll)
- [ ] All footer links are `<a>` tags with `target="_blank"` + `rel="noopener noreferrer"`
- [ ] Copyright shows current year dynamically

---

### 3.6 Framer Motion Animations

| Effect | Target |
|---|---|
| Fade-in + slide-up | All sections when scrolled into viewport |
| Hover glow | Cards, buttons (CSS transition, not Framer) |
| Gradient animation | Hero background (CSS `@keyframes`, not Framer) |

**Acceptance Criteria:**
- [ ] Sections animate once on first scroll entry (not again on re-entry)
- [ ] Animation duration ≤ 0.6s, no perceivable lag
- [ ] Respects `prefers-reduced-motion` — disable all animations if set
- [ ] Gradient animation has a 4–6s cycle, smooth loop

---

## 4. Design

Design: see attached spec

**Spec summary:**
- Colors: `#3B82F6` primary, `#0F172A` bg dark, `#1E293B` card, `#94A3B8` text muted, `#F8FAFC` text white, `#10B981` success accent
- Pages: Hero, Pipeline (5-step timeline), AI Agents (4 cards), Features+TechStack (grid + badges), Final CTA+Footer

---

## 5. Constraints & Assumptions

- No user authentication required — static landing page only
- No backend API calls — all content is hardcoded JSX
- Vietnamese language throughout
- Mobile-first responsive design
- No third-party icon libraries — use inline SVGs or simple shapes
