# Test Cases — Hero Section

## Happy Path Scenarios

**Scenario**: Hero renders at full viewport height on desktop
**Given**: The page is loaded on a desktop viewport (≥1024px)
**When**: The Hero section renders
**Then**: The section has `min-h-screen` and fills the full viewport height

**Scenario**: Headline displays "AI Team. Không cần thuê dev."
**Given**: The page is loaded
**When**: The user views the hero section
**Then**: The headline `<h1>` contains "AI Team." followed by "Không cần thuê dev."

**Scenario**: Subheadline displays value proposition text
**Given**: The page is loaded
**When**: The user views the hero section
**Then**: A subheadline paragraph is visible describing the platform's value

**Scenario**: CTA Primary "Bắt đầu ngay" links to Telegram bot
**Given**: The page is loaded
**When**: The user clicks the "Bắt đầu ngay" button
**Then**: A new tab opens to the Telegram bot URL (configurable via `NEXT_PUBLIC_TELEGRAM_BOT_URL`)

**Scenario**: CTA Secondary "Xem cách hoạt động" smooth-scrolls to Pipeline section
**Given**: The page is loaded
**When**: The user clicks "Xem cách hoạt động"
**Then**: The page smooth-scrolls to the element with id `#pipeline`

**Scenario**: Dark background with blue gradient glow
**Given**: The page is loaded
**When**: The hero section is rendered
**Then**: The background is dark (`bg-dark` / `#0F172A`) with animated blue (`primary` / `#3B82F6`) gradient glow orbs

**Scenario**: Responsive on mobile (≤375px)
**Given**: The page is loaded on a mobile device (≤375px width)
**When**: The hero section renders
**Then**: Both CTA buttons are visible, tappable, and stack vertically (column layout)

**Scenario**: Gradient animation uses a 6s cycle
**Given**: The page is loaded
**When**: The hero background gradient is animating
**Then**: The `animate-gradient` CSS animation has a 6s duration with infinite loop

**Scenario**: Large, modern typography with responsive sizing
**Given**: The page is loaded
**When**: The user views the headline
**Then**: The headline uses responsive text classes (text-4xl on mobile up to text-7xl on large desktop) with bold weight

**Scenario**: Animations respect prefers-reduced-motion
**Given**: The user has `prefers-reduced-motion: reduce` set
**When**: The hero section renders
**Then**: All Framer Motion animations have zero duration and the gradient animation is disabled
