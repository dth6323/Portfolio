---
name: Senior Full-Stack Developer Portfolio
description: Technical System Blueprint design system featuring CAD node schematics, blueprint slate palette, signal cyan accents, and JetBrains Mono telemetry typography.
colors:
  primary: "#00F0FF"
  primary-glow: "rgba(0, 240, 255, 0.25)"
  neutral-bg: "#070B12"
  neutral-slate: "#0C1220"
  neutral-surface: "#111A2E"
  neutral-surface-elevated: "#16223B"
  text-primary: "#F0F4FC"
  text-secondary: "#94A3B8"
  text-muted: "#64748B"
  amber-voltage: "#FFB000"
  emerald-live: "#00E699"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.85rem"
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "rgba(0, 240, 255, 0.12)"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.25rem"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.25rem"
---

# Design System: Senior Full-Stack Developer Portfolio

## Overview

**Creative North Star: "The Technical CAD System Blueprint"**

The design system treats software craftsmanship as an interactive engineering blueprint rather than a generic resume document. It presents full-stack architecture, system metrics, microservice topologies, and technical trade-offs through precision CAD schematics, technical grids, monospace telemetry callouts, and signal cyan indicators.

**Key Characteristics:**
- Deep blueprint slate and CAD surface grounding (`#070B12`, `#0C1220`, `#111A2E`).
- High-visibility signal cyan (`#00F0FF`) reserved for active system nodes, primary action targets, and live status signals.
- Dual-font typography hierarchy combining authoritative sans-serif headings with JetBrains Mono for specs, data points, and code telemetry.
- Precision 4px/8px corner framing with subtle CAD corner ticks (`::before` / `::after` indicators).

## Colors

The color system uses deep blueprint slate substrates with vibrant signal accents to convey production observability and architectural clarity.

### Primary
- **Signal Cyan** (`#00F0FF`): Used exclusively for key interactive nodes, primary CTA buttons, active filter states, and active CAD highlights.

### Secondary
- **Amber Voltage** (`#FFB000`): Used for problem/bottleneck warnings and critical architecture trade-off headers.
- **Emerald Live Node** (`#00E699`): Used for live system health badges, P99 latency metrics, and verified impact indicators.

### Neutral
- **Blueprint Dark Ground** (`#070B12`): Base body background.
- **CAD Slate Container** (`#0C1220`): Panel and card background substrate.
- **Elevated CAD Surface** (`#111A2E`): Interactive node cards and modal drawers.
- **Foreground Primary Text** (`#F0F4FC`): High-contrast title and body copy.
- **Foreground Secondary Text** (`#94A3B8`): Supporting body paragraphs and descriptive labels.

### Named Rules
**The Signal Cyan Hierarchy Rule.** Signal Cyan (`#00F0FF`) is reserved for intentional interactive targets, status indicators, and focus states. It must never be applied as random background fills or decorative gradient text.

## Typography

**Display Font:** Plus Jakarta Sans (with system sans-serif fallback)  
**Body Font:** Plus Jakarta Sans (with system sans-serif fallback)  
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** Technical precision paired with executive legibility. JetBrains Mono conveys raw data, code, metrics, and CAD labels, while Plus Jakarta Sans delivers crisp readability across headlines and body copy.

### Hierarchy
- **Display** (800, clamp(2.25rem, 5vw, 3.25rem), 1.12): Hero headlines and major section anchors.
- **Headline** (700, 2.25rem, 1.2): Section titles.
- **Title** (700, 1.4rem, 1.3): Project titles and node inspector headers.
- **Body** (400, 1.05rem, 1.65): Main prose and case study descriptions (max 70ch measure).
- **Label** (600, 0.85rem, 0.05em, uppercase): Monospace CAD metadata, node telemetry, and status chips.

## Layout

Built on a flexible 1280px max-width container with a responsive fluid grid. Page rhythm alternates between wide topology visualizers (Hero and Project Grid) and structured two-column technical data matrices. Spacing follows an 8px base rhythm (`0.5rem`, `1rem`, `1.5rem`, `2rem`, `3.5rem`, `6rem`).

## Elevation & Depth

Surfaces use flat slate substrate planes (`#0C1220`, `#111A2E`) with subtle CAD borders (`rgba(0, 240, 255, 0.18)`). Elevation is expressed through subtle glowing shadows (`box-shadow: 0 0 15px rgba(0, 240, 255, 0.15)`) on hover or selection states rather than heavy blurred drop shadows.

## Shapes

- **Corner Radius:** 4px (`var(--radius-sm)`) for buttons, nodes, and inputs; 8px (`var(--radius-md)`) for cards and containers.
- **CAD Frame Corner Accents:** Custom top-left and bottom-right 2px tick marks (`::before` / `::after`) on `.cad-frame` containers reinforce the engineering schematic aesthetic.

## Components

### Buttons
- **Shape:** 4px radius (`var(--radius-sm)`).
- **Primary:** Background `rgba(0, 240, 255, 0.12)`, text `#00F0FF`, border `1px solid #00F0FF`. Glow on hover.
- **Secondary:** Background `#111A2E`, text `#F0F4FC`, border `1px solid rgba(0, 240, 255, 0.18)`.
- **Hover/Focus:** Smooth transition translateY(-1px), border brightens to `#00F0FF`.

### Cards & Nodes
- **Corner Style:** 8px radius.
- **Background:** Slate substrate `#0C1220` with `#111A2E` elevated regions.
- **Border:** 1px subtle CAD border `rgba(0, 240, 255, 0.18)`.
- **Selected State:** Border `#00F0FF`, cyan glow, active live-node pulse dot.

### Inputs / Terminal Fields
- **Style:** Dark surface `#111A2E` background, 1px border `rgba(255, 255, 255, 0.07)`, JetBrains Mono labels.
- **Focus:** Border transitions to `#00F0FF` with soft cyan focus glow (`0 0 10px rgba(0, 240, 255, 0.2)`).

## Do's and Don'ts

### Do:
- **Do** use JetBrains Mono for numbers, metrics, code snippets, coordinates, and CAD labels.
- **Do** maintain strict WCAG AA contrast (≥ 4.5:1 for body text against dark slate background).
- **Do** provide clickable node inspection drawers for architectural deep dives.

### Don't:
- **Don't** use gradient text fills across headlines (keep typography solid and crisp).
- **Don't** place kickers/eyebrows above main headings.
- **Don't** use thick single-sided colored border tabs on cards or alert boxes (use full subtle CAD borders).
- **Don't** use emoji or unstyled icons; use crisp, single-weight Lucide SVG icons.
