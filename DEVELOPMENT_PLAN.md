# GSBOR Website Development Plan

## Overview

Based on the crawl-output analysis, this document outlines the comprehensive plan for building the Greater Springfield Board of Realtors (GSBOR) website using Nuxt 3, Vue.js, and Tailwind CSS v4.

**📋 Content Reference:** See [CONTENT_MAPPING.md](./CONTENT_MAPPING.md) for direct mapping of crawl-output markdown files to planned pages.

## Site Structure Analysis

### Primary Page Categories

#### 1. **Core Pages** (High Priority)

- **Homepage** (`/`) - Main landing page with member onboarding flow
- **About GSBOR** (`/about-gsbor/`) - Organization information
  - Staff (`/about-gsbor/staff/`)
  - Board of Directors (`/about-gsbor/meet-our-board/`)
  - Leadership Academy (`/about-gsbor/leadership-academy/`)
  - Awards/Past Leadership (`/about-gsbor/awards/`)

#### 2. **Membership Pages** (High Priority)

- **New Members** (`/new-members/`) - Landing page for prospective members
  - Become a Member (`/new-members/become-a-member/`)
  - Benefits of Membership (`/new-members/benefits-of-membership/`)
  - Dues Calculator (`/new-members/dues-calculator/`)
- **Member FAQ** (`/member-faq/`)
- **Membership Application Form** (`/membership-application-form/`)

#### 3. **Services & Tools** (High Priority)

- **MLS** (`/mls/`) - Multiple Listing Service information
- **MLS NXT Tech Suite** (`/mls-nxt-tech-suite/`) - Technology tools
- **Supra** (`/supra/`) - Key management system
- **Market Statistics** (`/market-statistics/`)
- **Forms** (`/forms/`) - Document library

#### 4. **Education & Training** (Medium Priority)

- **Education Hub** (`/edu/`)
- **REALTOR® Education** (`/education/realtor-education/`)
  - Courses (`/education/realtor-education/courses/`)
  - Safety Information (`/education/realtor-safety-information/`)
- **Courses** (`/courses/`)
- **Events Calendar** (`/events-calendar/`)

#### 5. **Advocacy & Community** (Medium Priority)

- **Political Advocacy** (`/political-advocacy/`)
- **R Care Fund** (`/r-care-fund/`)
- **GSBOR Plus** (`/gsbor-plus/`) - Member benefits program
  - Dining Category (`/gsbor-plus-category/dining/`)
  - Health & Wellness (`/gsbor-plus-category/health-and-wellness/`)

#### 6. **Connections & Directory** (Medium Priority)

- **Connections** (`/connections/`) - Service provider directory
- **Connection Categories** (Multiple categories):
  - Finance (`/connection-category/finance/`)
  - Home Improvement Services (`/connection-category/home-improvement-services/`)
  - Insurance (`/connection-category/insurance/`)
  - Inspection Services (`/connection-category/inspection-services/`)
  - Photography & Media (`/connection-category/photography-and-media/`)
  - Title Services (`/connection-category/title/`)
  - And 6 more categories...
- **Find an Affiliate** (`/find-an-affiliate-old/`) - Member directory

#### 7. **Consumer Pages** (Low Priority)

- **Buyers and Sellers** (`/buyers-and-sellers/`) - Public-facing resources
- **Contact Us** (`/contact-us/`)
- **Web Accessibility** (`/web-accessibility/`)

#### 8. **Blog/News Categories** (Low Priority)

- Multiple blog categories under `/category/` (15+ categories)
- Individual blog posts under `/the-bottom-line/` (500+ posts)

#### 9. **Utility Pages** (Low Priority)

- Confirmation pages for forms
- E-signature documents
- Designated broker applications

## Reusable Component Strategy

### 1. **Layout Components**

- **AppHeader** - Main navigation with mega menu
- **AppFooter** - Footer with links and contact info
- **AppSidebar** - Secondary navigation for subsections
- **BreadcrumbNavigation** - Page hierarchy navigation

### 2. **Content Components**

- **HeroSection** - Large banner areas with CTA buttons
- **CardGrid** - Flexible grid layout for services/features
- **ServiceCard** - Individual service/tool cards
- **StatsDisplay** - Market statistics and data visualization
- **TestimonialCard** - Member testimonials
- **NewsCard** - Blog post previews
- **EventCard** - Event listings

### 3. **Form Components**

- **ContactForm** - Contact us form
- **MembershipForm** - Membership application
- **DuesCalculator** - Interactive dues calculation
- **SearchForm** - Directory and affiliate search
- **FilterComponent** - Category and tag filtering

### 4. **Interactive Components**

- **MegaMenu** - Complex navigation dropdown
- **TabComponent** - Tabbed content sections
- **AccordionComponent** - FAQ and expandable content
- **ModalComponent** - Popup dialogs and forms
- **CalendarComponent** - Events calendar
- **ImageGallery** - Photo galleries and carousels

### 5. **Data Display Components**

- **DirectoryListing** - Member and affiliate listings
- **CategoryGrid** - Service category displays
- **ResourceList** - Document and form listings
- **LinkCollection** - External resource links
- **SocialMediaLinks** - Social platform integration

## Development Phases

### Phase 1: Foundation & Core Pages (Weeks 1-3)

**Priority: Critical**

#### Week 1: Setup & Layout

- [ ] Initialize Nuxt 3 project with Tailwind CSS v4
- [ ] Set up project structure and configuration
- [ ] **Set up Nuxt Content v3** with crawl-output data integration
- [ ] **Create content directory structure** based on CONTENT_MAPPING.md
- [ ] Create base layout components (Header, Footer, Navigation)
- [ ] Implement responsive design system
- [ ] Set up image optimization and asset management

#### Week 2: Homepage & Navigation

- [ ] **Build homepage using `index.md` content** from crawl-output
- [ ] Implement mega menu navigation system
- [ ] Create hero sections and call-to-action components
- [ ] Build service cards and feature grids
- [ ] Add social media integration
- [ ] **Integrate homepage icons** from `home-new-version-icons.md`

#### Week 3: Core Membership Pages

- [ ] **New Members landing page** using `new-members.md`
- [ ] **Become a Member page** using `new-members_become-a-member.md`
- [ ] **Benefits of Membership page** using `new-members_benefits-of-membership.md`
- [ ] **Dues Calculator** using `new-members_dues-calculator.md`
- [ ] **Member FAQ** using `member-faq.md` with accordion interface

### Phase 2: Services & Tools (Weeks 4-6)

**Priority: High**

#### Week 4: MLS & Technology

- [ ] **MLS information page** using `mls.md`
- [ ] **MLS NXT Tech Suite** using `mls-nxt-tech-suite.md`
- [ ] **Supra key management page** using `supra.md`
- [ ] Technology resource links and documentation

#### Week 5: Forms & Resources

- [ ] **Forms library** using `forms.md` with search and filtering
- [ ] Document download functionality
- [ ] **Market Statistics page** using `market-statistics.md` with data visualization
- [ ] Resource link collections

#### Week 6: About & Organization

- [ ] **About GSBOR main page** using `about-gsbor.md`
- [ ] **Staff directory** using `about-gsbor_staff.md` with photos and contact info
- [ ] **Board of Directors page** using `about-gsbor_meet-our-board.md`
- [ ] **Leadership Academy** using `about-gsbor_leadership-academy.md`
- [ ] **Awards and past leadership** using `about-gsbor_awards.md`

### Phase 3: Education & Events (Weeks 7-8)

**Priority: Medium**

#### Week 7: Education Hub

- [ ] **Education main page** using `edu.md`
- [ ] **REALTOR® Education section** using `education_realtor-education.md`
- [ ] **Courses listing** using `education_realtor-education_courses.md` and `courses.md`
- [ ] **Safety information** using `education_realtor-safety-information.md`

#### Week 8: Events & Calendar

- [ ] **Events calendar** using `events-calendar.md` with filtering
- [ ] Event detail pages
- [ ] Registration functionality
- [ ] Course enrollment system

### Phase 4: Community & Advocacy (Weeks 9-10)

**Priority: Medium**

#### Week 9: Advocacy & Benefits

- [ ] **Political Advocacy page** using `political-advocacy.md`
- [ ] **R Care Fund** using `r-care-fund.md`
- [ ] **GSBOR Plus benefits** using `gsbor-plus.md`
- [ ] **Member benefit categories** using `gsbor-plus-category_*.md` files

#### Week 10: Connections & Directory

- [ ] **Connections service provider directory** using `connections.md`
- [ ] **Connection category pages** using `connection-category_*.md` files (12 categories)
- [ ] Search and filtering functionality
- [ ] **Affiliate directory** using `find-an-affiliate-old.md`

### Phase 5: Content & Blog (Weeks 11-12)

**Priority: Low**

#### Week 11: Blog System

- [ ] **Blog category pages** using `category_*.md` files (4+ categories)
- [ ] Blog post template
- [ ] Content management integration
- [ ] Search and filtering for posts

#### Week 12: Consumer & Utility Pages

- [ ] **Contact Us page** using `contact-us.md` with forms
- [ ] **Web Accessibility page** using `web-accessibility.md`
- [ ] **Confirmation pages** using `*_confirmation.md` files
- [ ] **Form pages** using `*-form.md` files

## Technical Implementation Notes

### Image Organization

- **Moved to**: `/public/images/`
- **Naming Convention**: `{page}_{description}_{id}.{ext}`
- **Optimization**: Use Nuxt Image module for responsive images
- **Categories**: Logos, icons, photos, graphics by page/section

### Content Management

- **Use**: Nuxt Content v3 for static content
- **Structure**: Markdown files in `/content/` directory
- **Collections**: Pages, blog posts, events, resources
- **Navigation**: Auto-generated from content structure

### State Management

- **Use**: Pinia for complex state (member data, search filters)
- **Local State**: Vue Composition API for component state
- **Persistence**: Local storage for user preferences

### SEO & Performance

- **Meta Tags**: Dynamic meta generation per page
- **Sitemap**: Auto-generated from content
- **Performance**: Code splitting, lazy loading, image optimization
- **Accessibility**: WCAG 2.1 AA compliance

## Component Hierarchy & Reusability

### Parent-Child Relationships

#### About GSBOR Section

- **Parent**: `AboutLayout.vue`
- **Children**: Staff, Board, Leadership, Awards
- **Shared Components**: PersonCard, ContactInfo, AwardDisplay

#### New Members Section

- **Parent**: `MembershipLayout.vue`
- **Children**: Become Member, Benefits, Calculator, FAQ
- **Shared Components**: StepIndicator, BenefitCard, CalculatorForm

#### Education Section

- **Parent**: `EducationLayout.vue`
- **Children**: Courses, Safety, Events
- **Shared Components**: CourseCard, EventCard, ResourceLink

#### Connections Section

- **Parent**: `ConnectionsLayout.vue`
- **Children**: All connection categories
- **Shared Components**: ProviderCard, CategoryFilter, SearchBar

### Design System Consistency

- **Colors**: GSBOR brand colors (blues, greens, grays)
- **Typography**: Consistent heading hierarchy and font usage
- **Spacing**: Tailwind spacing scale for consistency
- **Components**: Shared button styles, form elements, cards

## Quality Assurance Checklist

### Functionality Testing

- [ ] All navigation links work correctly
- [ ] Forms submit and validate properly
- [ ] Search and filtering functions work
- [ ] Responsive design on all devices
- [ ] Image loading and optimization
- [ ] External links open correctly

### Content Verification

- [ ] All text content is accurate and up-to-date
- [ ] Images display correctly with proper alt text
- [ ] Contact information is current
- [ ] Legal and compliance information is accurate

### Performance & SEO

- [ ] Page load times under 3 seconds
- [ ] Lighthouse scores above 90
- [ ] Meta tags and descriptions complete
- [ ] Structured data implementation
- [ ] Sitemap generation working

### Accessibility

- [ ] Keyboard navigation functional
- [ ] Screen reader compatibility
- [ ] Color contrast compliance
- [ ] Focus indicators visible
- [ ] Alternative text for images

## Deployment Strategy

### Development Environment

- **Local**: Nuxt dev server with hot reload
- **Staging**: Preview deployment for testing
- **Production**: Optimized build with CDN

### Content Updates

- **Static Content**: Git-based workflow
- **Dynamic Content**: CMS integration if needed
- **Images**: Automated optimization pipeline

## Content Integration Strategy

### Nuxt Content v3 Setup

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {
    sources: {
      content: {
        driver: "fs",
        prefix: "/content",
        base: resolve(__dirname, "content"),
      },
      crawlData: {
        driver: "fs",
        prefix: "/crawl-data",
        base: resolve(__dirname, "crawl-output/data"),
      },
    },
  },
});
```

### Content Migration Process

1. **Copy markdown files** from `crawl-output/data/` to `content/` directory
2. **Organize by page structure** following CONTENT_MAPPING.md
3. **Clean up frontmatter** and metadata
4. **Update image paths** to reference `public/images/`
5. **Create navigation structure** from content hierarchy

### Example Content Usage

```vue
<script setup>
// Homepage content
const { data: homepage } = await $content("/").findOne();

// About GSBOR content
const { data: aboutContent } = await $content("/about-gsbor").findOne();

// Staff directory
const { data: staffContent } = await $content("/about-gsbor/staff").findOne();
</script>
```

This comprehensive plan ensures systematic development of the GSBOR website with reusable components, consistent design, and optimal user experience across all sections.
