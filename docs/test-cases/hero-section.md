# Test Cases — Hero Section

## Happy Path Scenarios

**Scenario**: Hero renders headline, subheadline, and both CTA buttons at full viewport height on desktop
**Given**: The landing page is loaded on a desktop viewport (≥1024px)
**When**: The Hero section is rendered
**Then**: The headline "AI Team. Không cần thuê dev." is visible, the subheadline explaining aiteam's value prop is visible below it, the "Bắt đầu ngay" CTA button is present, the "Xem cách hoạt động" CTA button is present, and the section occupies full viewport height

**Scenario**: "Bắt đầu ngay" CTA links to Telegram bot
**Given**: The Hero section is rendered
**When**: The user clicks or taps the "Bắt đầu ngay" button
**Then**: The browser navigates to the Telegram bot link (external URL)

**Scenario**: "Xem cách hoạt động" CTA smooth-scrolls to Pipeline section
**Given**: The Hero section is rendered
**When**: The user clicks or taps the "Xem cách hoạt động" button
**Then**: The page smooth-scrolls to the element with id="pipeline"

**Scenario**: Dark background with animated blue gradient glow
**Given**: The Hero section is rendered
**When**: The page is displayed
**Then**: The section background is dark (`#0F172A`) with a visible animated gradient glow using the primary blue color (`#3B82F6`), and the glow animation runs continuously in a 4–6s smooth loop without jank

**Scenario**: Hero is responsive and both CTAs are tappable on mobile
**Given**: The landing page is loaded on a mobile viewport ≤375px wide
**When**: The Hero section is rendered
**Then**: Both "Bắt đầu ngay" and "Xem cách hoạt động" buttons are visible and tappable (not hidden, overlapping, or clipped), and the headline/subheadline text scales appropriately for the viewport

**Scenario**: Typography is large and modern with bold headline
**Given**: The Hero section is rendered
**When**: The headline text is displayed
**Then**: The headline "AI Team. Không cần thuê dev." uses a large, bold font weight with modern styling, clearly distinguishable from the subheadline text
