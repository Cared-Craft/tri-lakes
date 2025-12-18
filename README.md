# GSBOR Website - Nuxt 3 Development

## 🏗️ Project Overview

Modern, responsive website for the Greater Springfield Board of REALTORS® built with Nuxt 3, Vue.js, and Tailwind CSS v4.

## 📋 Planning Documents

### Core Planning

- **[DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md)** - Complete development roadmap with phases and timelines
- **[COMPONENT_MAPPING.md](./COMPONENT_MAPPING.md)** - Reusable component architecture and relationships
- **[CONTENT_MAPPING.md](./CONTENT_MAPPING.md)** - Direct mapping of crawl-output files to planned pages

### Design & Architecture

- **Site Design Guide** - Professional design system and visual identity
- **Forms Guidelines** - Form implementation standards and patterns

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Yarn package manager
- Pinia (already installed)

### Development Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
```

## 📁 Content Integration

### Content Sources

- **Crawl Data:** `crawl-output/data/*.md` - Original website content
- **Images:** `public/images/` - Optimized image assets
- **Content Directory:** `content/` - Nuxt Content v3 structure

### Content Mapping Example

```typescript
// Homepage content from index.md
const homepage = await queryCollection("content").path("/").first();

// About GSBOR from about-gsbor.md
const about = await queryCollection("content").path("/about-gsbor").first();

// Staff directory from about-gsbor_staff.md
const staff = await queryCollection("content")
  .path("/about-gsbor/staff")
  .first();
```

## 🎯 Development Phases

### Phase 1 (Weeks 1-3): Foundation

- ✅ Nuxt 3 + Tailwind CSS v4 setup
- ✅ Pinia state management
- 🔄 Content integration with Nuxt Content v3
- 🔄 Core layout components
- 🔄 Homepage and navigation

### Phase 2 (Weeks 4-6): Services & Tools

- 🔄 MLS and technology pages
- 🔄 Forms library and resources
- 🔄 About GSBOR section

### Phase 3 (Weeks 7-8): Education & Events

- 🔄 Education hub and courses
- 🔄 Events calendar integration

### Phase 4 (Weeks 9-10): Community & Advocacy

- 🔄 Political advocacy and R Care Fund
- 🔄 GSBOR Plus benefits program
- 🔄 Connections directory

### Phase 5 (Weeks 11-12): Content & Utility

- 🔄 Blog categories and posts
- 🔄 Contact and utility pages

## 🧩 Component Architecture

### Layout Components

- `AppHeader.vue` - Main navigation with mega menu
- `AppFooter.vue` - Footer with links and contact info
- `MegaMenu.vue` - Multi-column dropdown navigation

### Content Components

- `HeroSection.vue` - Page banners and CTAs
- `ServiceCard.vue` - Service and tool cards
- `PersonCard.vue` - Staff and board member profiles
- `ProviderCard.vue` - Service provider listings

### Interactive Components

- `StepIndicator.vue` - Multi-step processes
- `AccordionComponent.vue` - FAQ and expandable content
- `SearchForm.vue` - Directory and content search
- `CalendarComponent.vue` - Events calendar

## 🎨 Design System

### Brand Colors

- **Primary:** Navy blues (#1d3557 family)
- **Secondary:** Teal (#2a9d8f)
- **Accent:** Warm gold (#e9c46a)
- **CTA:** Vibrant green (#139E78)

### Typography

- **Headings:** Poppins, Montserrat, Inter
- **Body:** Inter (primary), Poppins (secondary)
- **Weights:** 400, 500, 600, 700

### Layout Patterns

- **Container:** `container mx-auto px-6`
- **Grid:** Responsive 2-4 column layouts
- **Spacing:** `py-16` to `py-24` for sections
- **Cards:** `rounded-xl` with backdrop-blur effects

## 📊 Content Structure

### Page Content Files

Each page has a corresponding markdown file in `crawl-output/data/`:

```
Homepage → index.md
About GSBOR → about-gsbor.md
Staff → about-gsbor_staff.md
New Members → new-members.md
MLS → mls.md
Forms → forms.md
... (see CONTENT_MAPPING.md for complete list)
```

### Image Assets

- **Source:** `crawl-output/images/`
- **Destination:** `public/images/`
- **Naming:** `{page}_{description}_{id}.{ext}`

## 🔧 Technical Stack

### Core Technologies

- **Framework:** Nuxt 3
- **UI Framework:** Vue.js 3 (Composition API)
- **Styling:** Tailwind CSS v4
- **State Management:** Pinia
- **Content:** Nuxt Content v3
- **Package Manager:** Yarn

### Key Features

- **SSR/SSG:** Server-side rendering and static generation
- **Responsive Design:** Mobile-first approach
- **Performance:** Optimized images, code splitting, lazy loading
- **Accessibility:** WCAG 2.1 AA compliance
- **SEO:** Meta tags, structured data, sitemap

## 📈 Performance Goals

- **Lighthouse Score:** 90+ across all metrics
- **Page Load Time:** < 3 seconds
- **Core Web Vitals:** Optimized LCP, CLS, FID
- **Image Optimization:** WebP format, lazy loading
- **Bundle Size:** Optimized chunking strategy

## 🧪 Quality Assurance

### Testing Checklist

- [ ] All navigation links functional
- [ ] Forms validate and submit correctly
- [ ] Responsive design on all devices
- [ ] Image loading and optimization
- [ ] Accessibility compliance
- [ ] Cross-browser compatibility

### Content Verification

- [ ] All text content accurate and current
- [ ] Images display with proper alt text
- [ ] Contact information up-to-date
- [ ] Legal and compliance information accurate

## 🚀 Deployment

### Environment Setup

- **Development:** Local Nuxt dev server
- **Staging:** Preview deployment for testing
- **Production:** Optimized build with CDN

### Content Updates

- **Static Content:** Git-based workflow
- **Dynamic Content:** Nuxt Content v3 integration
- **Images:** Automated optimization pipeline

---

**Ready to begin development!** Start with Phase 1 foundation setup and refer to the planning documents for detailed implementation guidance.
