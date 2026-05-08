# nind AI — PRD

## Original Problem Statement
GitHub repo provided: https://github.com/Edgard1977-hash/nind-ai.git — user requested deployment + several light-theme UI fixes.

## What's Implemented (recent)
- 2026-05-08: Cloned & ran nind-ai (FastAPI + React + MongoDB). All services up.
- 2026-05-08: Light-theme fixes:
  - Default avatar bg → `#1A1A1C` (header + Account card with username/plan).
  - Account user-card bg now dark `#1A1A1C` (white username/plan inside).
  - Outer input wrapper restored (light-grey `#E5E5EA`) — mirrors dark-theme layered look.
  - Upgrade pricing buttons: clean black (gradient sheen disabled).
  - FAQ answer body text: now dark/visible.
  - Log out icon + text remain red (`#FF4444`).
  - `.black-section-start` content (anonymous landing bottom) preserved as dark theme; rounded lip matches light page bg.

## Backlog / Next Action Items
- Verify Google OAuth flow in light theme (popup styling).
- E2E testing of generation flows (video/voice/Stripe).
