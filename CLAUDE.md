# CLAUDE.md - GSBOR Website Development Guide

This document provides essential information for Claude Code instances working on the Greater Springfield Board of REALTORS (GSBOR) website.

## 🏗️ Project Overview

**Project Type:** Nuxt 3 Static Site Generation (SSG) website  
**Domain:** Real estate organization website for Greater Springfield Board of REALTORS  
**Tech Stack:** Nuxt 3, Vue 3, Tailwind CSS v4, Pinia, Nuxt Content  
**Deployment:** Netlify with static site generation  
**Package Manager:** Yarn

## 📋 Quick Reference

### Key Commands
```bash
# Development
yarn dev              # Start development server (http://localhost:3000)
yarn build           # Build for production
yarn generate        # Generate static site
yarn preview         # Preview production build

# Brand System
yarn brand:setup     # Apply brand colors (node branding/implement.js)
```

### Important URLs
- **Development:** http://localhost:3000
- **Branding Preview:** http://localhost:3000/branding
- **Production:** https://gsbor.com

## 🗂️ Directory Structure & Key Files

### Configuration Files
- **`nuxt.config.ts`** - Main Nuxt configuration (SSG setup, modules, etc.)
- **`content.config.ts`** - Content collections schema (market stats, blog, etc.)
- **`tailwind.config.js`** - Tailwind CSS configuration with brand colors
- **`package.json`** - Dependencies and scripts
- **`netlify.toml`** - Deployment configuration

### Core Directories

#### `/components/`
- **`/components/ui/`** - Reusable UI components (Button, Card, Modal, etc.)
- **`/components/layout/`** - Layout components (AppHeader, AppFooter)
- **`/components/branding/`** - Brand-specific components
- **Component Auto-import:** All components are auto-imported (no need for explicit imports)

#### `/pages/`
- **File-based routing** - Each `.vue` file becomes a route
- **Nested folders** create nested routes (e.g., `/about-gsbor/staff.vue` → `/about-gsbor/staff`)

#### `/content/`
- **Nuxt Content v3** - Markdown and YAML content files
- **`/content/market-statistics/`** - Monthly market data (YAML files)
- **`/content/about-gsbor/`** - Organization content (Markdown)
- **`/content/affiliates/`** - Partner/affiliate data

#### `/public/`
- **Static assets** - Images, documents, data files
- **`/public/images/`** - Optimized images from original site
- **`/public/documents/`** - PDF forms and documents

#### `/assets/css/`
- **`main.css`** - Global styles with Tailwind CSS v4 theme definitions

#### `/branding/`
- **Brand system tools** - Color generation and theme implementation
- **`brand.config.json`** - Brand colors and fonts configuration

#### `/crawl-output/`
- **Original site data** - Crawled content from previous website
- **Reference only** - Used for content migration, not in production

## 🎨 Design System & Styling

### Brand Colors (CSS Variables)
```css
/* Primary Colors */
--color-primary-400: #1d3557    /* Navy blue - main brand */
--color-secondary-400: #2a9d8f  /* Teal - secondary */
--color-accent-400: #e9c46a     /* Gold - accent */
--color-background-400: #f1faee /* Light background */
--color-neutral-400: #6d6875    /* Gray - neutral */
```

### Typography
- **Font:** Inter (Google Fonts via @nuxt/fonts)
- **Weights:** 200 (ExtraLight), 300 (Light), 400 (Normal), 500 (Medium), 700 (Bold)
- **Headings:** Inter ExtraLight (200) by default
- **Body:** Inter Light (300) by default

### Component Patterns
- **Button:** Comprehensive variant system (solid, outline, soft, ghost, link)
- **Cards:** `rounded-xl` with backdrop-blur effects
- **Spacing:** `py-16` to `py-24` for sections
- **Containers:** `container mx-auto px-6`

## 🧩 Key Components Reference

### UI Components (`/components/ui/`)
- **`Button.vue`** - Multi-variant button (solid, outline, soft, ghost, link)
- **`Card.vue`** - Container component with consistent styling
- **`Modal.vue`** - Overlay modal component
- **`Input.vue`** / **`Textarea.vue`** - Form components
- **`HeroSection.vue`** - Page banner component
- **`AccordionComponent.vue`** - Expandable content
- **`StepIndicator.vue`** - Multi-step process indicator

### Layout Components
- **`AppHeader.vue`** - Main navigation with auto-hide on scroll
- **`AppFooter.vue`** - Site footer with contact info
- **`Container.vue`** - Content wrapper with consistent padding

### Business Components
- **`MarketStatCard.vue`** - Real estate market statistics display
- **`PersonCard.vue`** - Staff/board member profiles
- **`ServiceCard.vue`** - Service/tool descriptions
- **`DuesCalculator.vue`** - Membership dues calculation tool

## 📊 Content Management

### Nuxt Content Collections
1. **Market Statistics** (`/content/market-statistics/*.yml`)
   - Monthly real estate data
   - Schema: counties (Greene, Christian, Webster), sales metrics
   
2. **About Content** (`/content/about-gsbor/*.md`)
   - Organization information, staff, board members
   
3. **Blog Content** (`/content/blog/*.md`)
   - News articles, announcements

### Content Querying Examples
```javascript
// Get market statistics
const stats = await queryCollection('marketStatistics').first()

// Get about page content
const about = await queryCollection('content').where('_path', '/about-gsbor').first()

// Get all blog posts
const posts = await queryCollection('blog').sort({ date: -1 }).find()
```

## 🔧 State Management (Pinia)

### Stores (`/stores/`)
- **`search.ts`** - Search functionality state
- **Persisted state** - Uses `@pinia-plugin-persistedstate/nuxt`

## 🚀 Deployment & Build

### Static Site Generation
- **Mode:** SSG (Static Site Generation)
- **Build Command:** `yarn generate`
- **Output:** `/dist` directory
- **Platform:** Netlify with automatic deployments

### Performance Optimizations
- **Image optimization** - @nuxt/image with WebP format
- **Code splitting** - Automatic component-based splitting
- **Pre-rendering** - All routes pre-rendered at build time

## 📋 Development Guidelines

### When Working on This Project:

1. **Component Creation:**
   - Place reusable components in `/components/ui/`
   - Use the established design system (colors, typography, spacing)
   - Follow the Button.vue pattern for prop definitions and variants

2. **Page Development:**
   - Use file-based routing in `/pages/`
   - Leverage existing layout components (AppHeader, AppFooter)
   - Query content using Nuxt Content v3 patterns

3. **Styling:**
   - Use Tailwind CSS v4 with brand color variables
   - Follow consistent spacing patterns (`py-16`, `py-24`)
   - Utilize the established component patterns

4. **Content:**
   - Market statistics go in `/content/market-statistics/` as YAML
   - Organization content goes in `/content/about-gsbor/` as Markdown
   - Reference existing schema in `content.config.ts`

5. **Testing:**
   - Test responsive design (mobile-first approach)
   - Verify accessibility compliance
   - Check performance with Lighthouse

### Common Patterns:
```vue
<!-- Page Layout Pattern -->
<template>
  <div>
    <HeroSection :title="page.title" :description="page.description" />
    <Container>
      <ContentRenderer :value="page" />
    </Container>
  </div>
</template>

<script setup>
const { data: page } = await useAsyncData('page-name', () => 
  queryCollection('content').where('_path', '/page-path').first()
)
</script>
```

## 🔍 Important Context

### Business Domain
- **Real estate organization** serving Springfield, Missouri area
- **Member services** include MLS access, education, advocacy
- **Professional audience** - licensed real estate agents and brokers
- **Compliance requirements** - REALTOR® branding, legal disclaimers

### Technical Constraints
- **Static site** - No server-side functionality beyond build time
- **SEO critical** - Professional services website requiring good search visibility
- **Performance critical** - Professional audience expects fast loading
- **Accessibility required** - Must meet WCAG 2.1 AA standards

This documentation should provide everything needed to work effectively on the GSBOR website. Refer to the existing planning documents (DEVELOPMENT_PLAN.md, COMPONENT_MAPPING.md, CONTENT_MAPPING.md) for additional context on specific features and implementation details.