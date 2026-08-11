---
name: Đặng Thái Hà — Backend Developer (Node.js & Java) Portfolio
description: System Architecture Blueprint design system for Đặng Thái Hà featuring CAD node schematics, blueprint slate palette, signal cyan accents, and JetBrains Mono telemetry typography.
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

# Design System: Đặng Thái Hà Portfolio

## Overview

**Creative North Star: "The Technical CAD System Blueprint"**

Hệ thống thiết kế trình bày năng lực Backend Developer (Node.js & Java) của Đặng Thái Hà như một bản vẽ kỹ thuật CAD (System Blueprint) tương tác. Trình bày chi tiết kinh nghiệm thực tế tại Cadpro (Node.js, PostgreSQL Partitioning, MQTT, Redis, RBAC) và VINARE (Java Spring Boot, MinIO, Elasticsearch).

**Đặc Tính Cốt Lõi:**
- Tone nền xanh đen đá bản vẽ CAD (`#070B12`, `#0C1220`, `#111A2E`).
- Tông Signal Cyan (`#00F0FF`) dành riêng cho các nút tương tác, mục tiêu hành động chính và trạng thái live.
- Hệ thống font kép kết hợp Plus Jakarta Sans và JetBrains Mono cho số liệu kỹ thuật.
- Bo góc 4px/8px với các dấu định vị góc CAD (`::before` / `::after`).

## Colors

### Primary
- **Signal Cyan** (`#00F0FF`): Dùng cho nút hành động chính, tab đang chọn, đường viền CAD và highlight tiêu đề.

### Secondary
- **Amber Voltage** (`#FFB000`): Dùng cho thông báo thách thức kỹ thuật và điểm nghẽn hệ thống.
- **Emerald Live Node** (`#00E699`): Dùng cho trạng thái live, chỉ số uptime và chỉ số đo lường tích cực.

### Neutral
- **Blueprint Dark Ground** (`#070B12`): Nền body chính.
- **CAD Slate Container** (`#0C1220`): Nền khung container.
- **Elevated CAD Surface** (`#111A2E`): Khung tương tác và modal.
