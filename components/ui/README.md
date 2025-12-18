# Reusable Section Components

This directory contains flexible, reusable components extracted from the homepage sections. Each component supports multiple themes, layouts, and customization options.

## Components Overview

### 1. HeroSectionAdvanced.vue

An advanced hero section with support for floating images, stats, and flexible layouts.

**Features:**

- Reversible layout (image left/right)
- Multiple themes (light, dark, primary)
- Floating images support
- Stats bar
- Background images and overlays
- Customizable actions

**Usage:**

```vue
<HeroSectionAdvanced
  title="Your Hero Title"
  subtitle="Your subtitle text"
  :main-image="{ src: '/image.jpg', alt: 'Description' }"
  layout="default"
  theme="light"
  :stats="[
    { value: '90+', label: 'Years of Service' },
    { value: '2,300+', label: 'Active Members' },
  ]"
  :primary-action="{ to: '/signup', text: 'Get Started' }"
  :secondary-action="{ to: '/about', text: 'Learn More', variant: 'outline' }"
/>
```

**Props:**

- `layout`: 'default' | 'reversed'
- `theme`: 'light' | 'dark' | 'primary'
- `minHeight`: 'default' | 'full' | 'screen'
- `showPattern`: boolean
- `showDecorative`: boolean

### 2. ContentSection.vue

A flexible content section with text and image/media content.

**Features:**

- Reversible layout
- Multiple themes
- Card-style image content
- CTA links
- Decorative elements

**Usage:**

```vue
<ContentSection
  title="About Our Company"
  content="Your content text here..."
  :image="{ src: '/image.jpg', alt: 'Description' }"
  card-title="Our Legacy"
  card-content="Additional information..."
  :cta-link="{ to: '/about', text: 'Learn more about us' }"
  layout="default"
  theme="dark"
/>
```

**Props:**

- `layout`: 'default' | 'reversed'
- `theme`: 'light' | 'dark' | 'primary' | 'secondary' | 'tertiary'
- `showPattern`: boolean
- `showDecorative`: boolean
- `showCta`: boolean

### 3. EventsSection.vue

A grid-based events/cards section with customizable columns and themes.

**Features:**

- Flexible grid (1-4 columns)
- Multiple themes
- Card hover effects
- Optional view-all button

**Usage:**

```vue
<EventsSection
  title="Upcoming Events"
  subtitle="Check out our latest events"
  :events="[
    {
      date: 'June 15, 2023',
      title: 'Monthly Meeting',
      description: 'Join us for our monthly meeting...',
      imageUrl: '/event.jpg',
      detailsUrl: '/events/monthly-meeting',
    },
  ]"
  :columns="3"
  theme="light"
  :show-view-all="true"
  view-all-link="/events"
/>
```

**Props:**

- `columns`: 1 | 2 | 3 | 4
- `theme`: 'light' | 'dark' | 'primary' | 'secondary'
- `showViewAll`: boolean

### 4. AppleStyleShowcase.vue

An Apple-inspired product showcase with optional CTA banner.

**Features:**

- Apple-style design
- Flexible grid layout
- Features list support
- CTA banner
- Multiple themes

**Usage:**

```vue
<AppleStyleShowcase
  title="How to Become A Member"
  subtitle="Join with a simple process"
  :items="[
    {
      title: 'Apply Online',
      description: 'Start your journey...',
      image: { src: '/apply.jpg', alt: 'Apply Online' },
      features: ['Quick process', 'Secure'],
      primaryAction: { to: '/apply', text: 'Apply Now' },
      secondaryAction: { to: '/learn-more', text: 'Learn more' },
    },
  ]"
  :columns="2"
  :show-cta-banner="true"
  cta-title="Ready to Join?"
  cta-content="Become a member today"
  :cta-button="{ to: '/signup', text: 'Get Started' }"
/>
```

**Props:**

- `columns`: 2 | 3 | 4
- `theme`: 'light' | 'primary' | 'secondary' | 'tertiary'
- `showCtaBanner`: boolean
- `ctaTheme`: 'primary' | 'secondary' | 'tertiary' | 'success'

### 5. FeatureCardsSection.vue

A feature cards section with hover effects and customizable layouts.

**Features:**

- Hover glow effects
- Multiple themes
- Icon support
- Optional CTAs per card
- Flexible grid

**Usage:**

```vue
<FeatureCardsSection
  title="Three Areas of Real Estate"
  subtitle="We broker transactions across all property types"
  :features="[
    {
      title: 'Residential',
      description: 'Homeownership is vital...',
      icon: 'i-lucide-home',
      cta: { to: '/residential', text: 'Learn More' },
    },
  ]"
  :columns="3"
  theme="dark"
/>
```

**Props:**

- `columns`: 1 | 2 | 3 | 4
- `theme`: 'light' | 'dark' | 'primary' | 'secondary' | 'tertiary'
- `showPattern`: boolean
- `showDecorative`: boolean

### 6. CtaBanner.vue

A flexible call-to-action banner component.

**Features:**

- Multiple themes
- Decorative elements
- Primary and secondary actions
- Pattern overlay

**Usage:**

```vue
<CtaBanner
  title="Ready to Get Started?"
  content="Join thousands of professionals today"
  :primary-action="{ to: '/signup', text: 'Sign Up Now' }"
  :secondary-action="{ to: '/contact-us', text: 'Contact Us' }"
  theme="success"
  text-theme="light"
/>
```

**Props:**

- `theme`: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger'
- `textTheme`: 'light' | 'dark'
- `sectionBackground`: 'white' | 'gray' | 'transparent'

## Common Patterns

### Slots

Most components support slots for maximum flexibility:

```vue
<ContentSection>
  <template #title>
    Custom <span class="font-bold">Title</span>
  </template>
  <template #content>
    <p>Custom content with <strong>formatting</strong></p>
  </template>
</ContentSection>
```

### Theme Consistency

Use consistent themes across components:

- `light`: White/gray backgrounds, dark text
- `dark`: Dark backgrounds, light text
- `primary`: Primary color scheme
- `secondary`: Secondary color scheme
- `tertiary`: Tertiary color scheme

### Layout Variations

Most components support layout reversals:

```vue
<!-- Default: text left, image right -->
<ContentSection layout="default" />

<!-- Reversed: image left, text right -->
<ContentSection layout="reversed" />
```

### Responsive Design

All components are mobile-first and responsive:

- Single column on mobile
- Multi-column on tablet/desktop
- Flexible image sizing
- Responsive typography

## Best Practices

1. **Consistent Spacing**: Use the default padding/margins or customize via Tailwind classes
2. **Theme Coordination**: Plan your page theme flow (light → dark → light, etc.)
3. **Content Hierarchy**: Use appropriate heading levels and content structure
4. **Performance**: Optimize images and use appropriate sizes
5. **Accessibility**: Ensure proper alt text and semantic structure

## Examples

See the homepage (`pages/index.vue`) and benefits page (`pages/new-members/benefits-of-membership.vue`) for real-world usage examples.
