# GSBOR Website - Component Mapping & Reusability Guide

## 🏗️ Component Architecture Overview

This document maps out how reusable components will be shared across different pages and sections of the GSBOR website, ensuring consistency and maintainability.

**📋 Content Reference:** See [CONTENT_MAPPING.md](./CONTENT_MAPPING.md) for direct mapping of crawl-output markdown files to planned pages.

## 📋 Core Layout Components

### AppHeader.vue

**Used on:** All pages
**Features:**

- Main navigation menu
- GSBOR logo
- Member login link
- Contact information
- Mobile hamburger menu

**Variations:**

- Default: Full navigation
- Mobile: Collapsed hamburger menu
- Sticky: Condensed version on scroll

### AppFooter.vue

**Used on:** All pages
**Features:**

- Contact information
- Social media links
- Quick links
- Legal/accessibility links
- Partner logos

### MegaMenu.vue

**Used in:** AppHeader
**Features:**

- Multi-column dropdown navigation
- Service categories
- Quick access links
- Featured content

## 🎯 Page-Specific Layout Components

### MembershipLayout.vue

**Used on:**

- `/new-members/`
- `/new-members/become-a-member/`
- `/new-members/benefits-of-membership/`
- `/new-members/dues-calculator/`
- `/member-faq/`

**Features:**

- Membership-focused sidebar navigation
- Progress indicators for multi-step processes
- Member testimonials section
- Call-to-action buttons

### AboutLayout.vue

**Used on:**

- `/about-gsbor/`
- `/about-gsbor/staff/`
- `/about-gsbor/meet-our-board/`
- `/about-gsbor/leadership-academy/`
- `/about-gsbor/awards/`

**Features:**

- Organization-focused navigation
- Leadership showcase areas
- Award display sections
- Contact information prominence

### EducationLayout.vue

**Used on:**

- `/edu/`
- `/education/realtor-education/`
- `/education/realtor-education/courses/`
- `/education/realtor-safety-information/`
- `/events-calendar/`
- `/courses/`

**Features:**

- Course category navigation
- Calendar integration
- Resource download areas
- Registration call-to-actions

### ConnectionsLayout.vue

**Used on:**

- `/connections/`
- All `/connection-category/*` pages (12 categories)
- `/find-an-affiliate-old/`

**Features:**

- Category filter sidebar
- Search functionality
- Provider listing grids
- Contact integration

## 🧩 Reusable Content Components

### HeroSection.vue

**Used on:** Most main pages
**Variations:**

- **Homepage:** Large hero with member onboarding steps
- **Section Pages:** Medium hero with page title and description
- **Category Pages:** Compact hero with breadcrumbs

**Props:**

```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showSteps?: boolean;
  ctaButton?: {
    text: string;
    link: string;
    variant: "primary" | "secondary";
  };
}
```

### ServiceCard.vue

**Used on:**

- Homepage (MLS, Supra, Education, Market Stats)
- `/mls-nxt-tech-suite/` (Partner services)
- `/gsbor-plus/` (Member benefits)
- Service category pages

**Variations:**

- **Large:** Homepage featured services
- **Medium:** Category page listings
- **Small:** Related services sidebar

**Props:**

```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  link: string;
  variant: "large" | "medium" | "small";
  featured?: boolean;
}
```

### PersonCard.vue

**Used on:**

- `/about-gsbor/staff/` (Staff directory)
- `/about-gsbor/meet-our-board/` (Board members)
- `/about-gsbor/leadership-academy/` (Academy participants)

**Props:**

```typescript
interface PersonCardProps {
  name: string;
  title: string;
  photo: string;
  email?: string;
  phone?: string;
  bio?: string;
  linkedIn?: string;
  showContact?: boolean;
}
```

### ProviderCard.vue

**Used on:**

- `/connections/` (Service provider listings)
- All connection category pages
- `/find-an-affiliate-old/` (Affiliate directory)

**Props:**

```typescript
interface ProviderCardProps {
  name: string;
  company: string;
  category: string;
  description: string;
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  logo?: string;
  featured?: boolean;
}
```

## 🎨 Interactive Components

### StepIndicator.vue

**Used on:**

- Homepage (Member onboarding flow)
- `/new-members/become-a-member/` (Application process)
- `/new-members/dues-calculator/` (Calculator steps)

**Props:**

```typescript
interface StepIndicatorProps {
  steps: Array<{
    title: string;
    description: string;
    icon?: string;
    completed?: boolean;
    active?: boolean;
  }>;
  currentStep: number;
  variant: "horizontal" | "vertical";
}
```

### AccordionComponent.vue

**Used on:**

- `/member-faq/` (FAQ sections)
- `/education/realtor-safety-information/` (Safety topics)
- `/forms/` (Document categories)

**Props:**

```typescript
interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
    id: string;
    defaultOpen?: boolean;
  }>;
  allowMultiple?: boolean;
  variant: "default" | "bordered" | "minimal";
}
```

### SearchForm.vue

**Used on:**

- `/connections/` (Provider search)
- `/find-an-affiliate-old/` (Member search)
- `/forms/` (Document search)
- `/events-calendar/` (Event search)

**Props:**

```typescript
interface SearchFormProps {
  placeholder: string;
  filters?: Array<{
    name: string;
    options: Array<{ label: string; value: string }>;
  }>;
  onSearch: (query: string, filters: Record<string, string>) => void;
  variant: "simple" | "advanced";
}
```

### CalendarComponent.vue

**Used on:**

- `/events-calendar/` (Main calendar)
- `/education/realtor-education/courses/` (Course schedule)
- Homepage (Upcoming events widget)

**Props:**

```typescript
interface CalendarProps {
  events: Array<{
    id: string;
    title: string;
    date: Date;
    time?: string;
    location?: string;
    category: string;
    registrationLink?: string;
  }>;
  view: "month" | "week" | "list";
  showFilters?: boolean;
}
```

## 📊 Data Display Components

### CardGrid.vue

**Used on:** Multiple pages for consistent grid layouts
**Variations:**

- **2-column:** Small content areas
- **3-column:** Medium content (services, benefits)
- **4-column:** Large content areas (provider listings)

**Props:**

```typescript
interface CardGridProps {
  columns: 2 | 3 | 4;
  gap: "small" | "medium" | "large";
  responsive?: boolean;
}
```

### ResourceList.vue

**Used on:**

- `/forms/` (Document downloads)
- `/education/realtor-education/` (Learning resources)
- `/mls-nxt-tech-suite/` (Tool links)

**Props:**

```typescript
interface ResourceListProps {
  resources: Array<{
    title: string;
    description?: string;
    type: "pdf" | "link" | "video" | "document";
    url: string;
    size?: string;
    lastUpdated?: Date;
  }>;
  showFilters?: boolean;
  variant: "list" | "grid" | "compact";
}
```

### StatsDisplay.vue

**Used on:**

- `/market-statistics/` (Market data)
- Homepage (Key statistics)
- `/about-gsbor/` (Organization stats)

**Props:**

```typescript
interface StatsDisplayProps {
  stats: Array<{
    label: string;
    value: string | number;
    trend?: "up" | "down" | "neutral";
    description?: string;
  }>;
  layout: "horizontal" | "vertical" | "grid";
  animated?: boolean;
}
```

## 🎯 Form Components

### ContactForm.vue

**Used on:**

- `/contact-us/`
- Footer contact section
- Modal popups

**Features:**

- Name, email, phone, message fields
- Subject selection
- File attachment support
- Validation and error handling

### MembershipForm.vue

**Used on:**

- `/membership-application-form/`
- `/new-members/become-a-member/`

**Features:**

- Multi-step form process
- Personal and business information
- Payment integration
- Document upload

### DuesCalculator.vue

**Used on:**

- `/new-members/dues-calculator/`
- Membership application process

**Features:**

- Interactive calculation
- Membership type selection
- Fee breakdown display
- Save/share results

## 🔄 Component Relationships

### Parent-Child Component Mapping

```
AppHeader
├── MegaMenu
│   ├── ServiceCard (mini variant)
│   └── LinkCollection
└── SearchForm (header search)

Homepage
├── HeroSection
│   └── StepIndicator
├── CardGrid
│   └── ServiceCard (multiple)
├── StatsDisplay
└── SocialLinks

MembershipLayout
├── HeroSection
├── StepIndicator (sidebar)
├── AccordionComponent (FAQ)
└── CallToAction

AboutLayout
├── HeroSection
├── CardGrid
│   └── PersonCard (multiple)
└── ContactInfo

EducationLayout
├── HeroSection
├── CalendarComponent
├── ResourceList
└── CourseCard (extends ServiceCard)

ConnectionsLayout
├── SearchForm
├── FilterComponent
├── CardGrid
│   └── ProviderCard (multiple)
└── CategoryNavigation
```

## 🎨 Design System Integration

### Shared Design Tokens

All components use consistent:

- **Colors:** GSBOR brand palette
- **Typography:** Heading and body text scales
- **Spacing:** Tailwind spacing system
- **Shadows:** Consistent elevation levels
- **Borders:** Radius and width standards

### Component Variants

Each component supports multiple variants for different contexts:

- **Size variants:** small, medium, large
- **Style variants:** default, bordered, minimal, featured
- **Color variants:** primary, secondary, neutral, accent

### Responsive Behavior

All components are mobile-first and responsive:

- **Mobile:** Stacked layouts, touch-friendly interactions
- **Tablet:** Balanced layouts, hover states
- **Desktop:** Full layouts, advanced interactions

## 📈 Performance Considerations

### Component Lazy Loading

- Large components (Calendar, Directory) are lazy-loaded
- Image-heavy components use progressive loading
- Form components load validation rules on demand

### State Management

- Shared state through Pinia stores
- Component-level state for UI interactions
- Persistent state for user preferences

### Caching Strategy

- Static components cached at build time
- Dynamic components cached at runtime
- API responses cached with appropriate TTL

## 🔧 Development Usage

### Content Integration Process

1. **Reference the mapping** to find the correct markdown file
2. **Read the content file** from `crawl-output/data/`
3. **Extract relevant sections** for page content
4. **Adapt content structure** to component needs
5. **Implement with Nuxt Content v3** using the new API

### Example Usage with Content Files

```typescript
// For About GSBOR page using about-gsbor.md
const aboutContent = await queryCollection("content")
  .path("/about-gsbor")
  .first();

// For Staff directory using about-gsbor_staff.md
const staffContent = await queryCollection("content")
  .path("/about-gsbor/staff")
  .first();

// For New Members page using new-members.md
const newMembersContent = await queryCollection("content")
  .path("/new-members")
  .first();
```

### Component Content Integration

Each component can receive content from the mapped markdown files:

```vue
<!-- PersonCard.vue with content from about-gsbor_staff.md -->
<PersonCard
  :name="staffMember.name"
  :title="staffMember.title"
  :photo="staffMember.photo"
  :email="staffMember.email"
  :phone="staffMember.phone"
  :bio="staffMember.bio"
/>

<!-- ServiceCard.vue with content from mls.md -->
<ServiceCard
  :title="service.title"
  :description="service.description"
  :icon="service.icon"
  :link="service.link"
  variant="large"
/>
```

This component mapping ensures efficient development, consistent user experience, and maintainable code across the entire GSBOR website.
