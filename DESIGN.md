---
name: Cinematic Architectural Luxury
colors:
  surface: '#06132c'
  surface-dim: '#06132c'
  surface-bright: '#2d3953'
  surface-container-lowest: '#020d26'
  surface-container-low: '#0e1b34'
  surface-container: '#131f38'
  surface-container-high: '#1e2a43'
  surface-container-highest: '#29344f'
  on-surface: '#d9e2ff'
  on-surface-variant: '#c4c6d3'
  inverse-surface: '#d9e2ff'
  inverse-on-surface: '#24304a'
  outline: '#8e909d'
  outline-variant: '#434652'
  surface-tint: '#b1c5ff'
  primary: '#b1c5ff'
  on-primary: '#002c71'
  primary-container: '#0b3d91'
  on-primary-container: '#8dadff'
  inverse-primary: '#345baf'
  secondary: '#ffb2ba'
  on-secondary: '#670020'
  secondary-container: '#8c1b36'
  on-secondary-container: '#ff9da8'
  tertiary: '#58d6f4'
  on-tertiary: '#003640'
  tertiary-container: '#004957'
  on-tertiary-container: '#37bedb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001947'
  on-primary-fixed-variant: '#144296'
  secondary-fixed: '#ffd9dc'
  secondary-fixed-dim: '#ffb2ba'
  on-secondary-fixed: '#400010'
  on-secondary-fixed-variant: '#891834'
  tertiary-fixed: '#adecff'
  tertiary-fixed-dim: '#58d6f4'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5d'
  background: '#06132c'
  on-background: '#d9e2ff'
  surface-variant: '#29344f'
  champagne-gold: '#D8C3A5'
  soft-pink: '#FFD6E7'
  off-white: '#FAFAFA'
  royal-blue: '#2B56F5'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 92px
    fontWeight: '700'
    lineHeight: '0.9'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 54px
    fontWeight: '700'
    lineHeight: '1.0'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 74px
    fontWeight: '600'
    lineHeight: '1.0'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 34px
    fontWeight: '500'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '300'
    lineHeight: '1.8'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.9'
  label-caps:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 4px
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 2px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-v-lg: 130px
  section-v-md: 110px
  container-margin: 8%
  gutter-grid: 30px
  gap-component: 20px
---

## Brand & Style

This design system is engineered to position the product as a premiere authority in commercial interior design. The brand personality is **Elite, Professional, and Innovative**, focusing on the intersection of high-end aesthetics and strategic workspace engineering.

The visual style is **Modern Editorial with Immersive Depth**. It draws heavily from luxury fashion and architectural journals, utilizing high-contrast typography and expansive whitespace to create a sense of scale. The experience is "cinematic"—relying on smooth, orchestrated motion, layered transparencies, and subtle environmental lighting effects (like radial glows) to mimic the feeling of walking through a curated, high-end physical space. 

Key attributes include:
- **Architectural Rigor:** Strong vertical and horizontal grid lines used as decorative elements.
- **Boutique Sophistication:** High-quality photography takes precedence over UI chrome.
- **Cinematic Tension:** High-contrast color pairings and oversized display type create a commanding visual presence.

## Colors

The palette is anchored in a **Deep Navy (#08152E)** foundation to establish a professional, "after-hours luxury" atmosphere. The color strategy uses chromatic depth rather than flat neutrals to maintain an immersive feel.

- **Primary (Deep Blue):** Used for branding, interaction states, and structural gradients. It represents stability and corporate trust.
- **Secondary (Coral/Pink):** Acts as a high-visibility accent for status labels, thin decorative lines, and highlight spans within dark sections.
- **Tertiary (Bright Teal):** Reserved for technical accents, mouse-glow effects, and digital-forward UI elements to signal innovation.
- **Champagne Gold:** Utilized specifically for primary Call-to-Action (CTA) surfaces and custom cursor borders to denote premium quality.

The design defaults to a **Dark Mode** aesthetic to emphasize "Cinematic Workspaces," but utilizes **Off-white** for content-heavy "About" or "Whitepaper" sections to provide visual relief and architectural clarity.

## Typography

This system employs a classic high-contrast pairing: **Playfair Display** (Serif) for narrative and display, and **Inter** (Sans-serif) for technical precision.

- **Display & Headings:** Use Playfair Display with tight line-heights and slight negative letter-spacing for a modern editorial look. On mobile, these scale down significantly to maintain the "architectural" aspect ratio without breaking containers.
- **Body Copy:** Inter is used with generous line-height (1.8x - 1.9x) to enhance readability and contribute to the "open" feeling of the layout. 
- **Labels & Captions:** These are strictly uppercase with wide letter-spacing (2px - 4px). This "technical label" style creates a contrast against the more organic serif headings, mimicking architectural blueprints or gallery notations.

## Layout & Spacing

The layout follows a **Fixed Grid with Fluid Margins**. A standard 12-column grid is used, but content is often offset to create asymmetrical, dynamic compositions typical of boutique design firms.

- **Margins:** A consistent 8% horizontal margin is maintained across all screen sizes to ensure whitespace is felt as a tangible design element.
- **Vertical Rhythm:** Sections are separated by massive vertical gaps (110px - 130px) to give each architectural project room to breathe.
- **Grid Strategy:**
    - **Service/Portfolio Grids:** Use a 3-column layout that collapses to 1-column on mobile.
    - **Bento Grids:** Employed for portfolio showcases, mixing "Large," "Wide," and "Standard" aspect ratios to create visual interest.
- **Mobile Reflow:** Gutters shrink from 30px to 16px on mobile, but section padding remains generous (minimum 60px) to preserve the luxury feel.

## Elevation & Depth

Visual hierarchy is established through **Environmental Depth** rather than traditional drop shadows.

- **Tonal Layering:** The primary depth comes from the interaction between background videos, semi-transparent overlays (`rgba(8,21,46,0.95)`), and foreground text. 
- **The "Glow" Effect:** A dynamic radial gradient (15% opacity Primary Color) follows the cursor, acting as a "flashlight" that subtly illuminates UI elements, creating a sense of physical space.
- **Glassmorphism:** Cards and navigation bars use backdrop blurs and low-opacity borders (`1px solid rgba(255,255,255,0.18)`) to maintain context with the background imagery while creating a distinct interactive plane.
- **Lifted States:** Hovering over cards (Portfolio/Partner) uses a subtle `translateY(-8px)` and increased background opacity rather than heavy shadows.

## Shapes

The shape language is **Organic and Oversized**. Large border radii are used to soften the "industrial" nature of commercial architecture, making the brand feel approachable and sophisticated.

- **Global Radius:** A standard 0.5rem (8px) is avoided in favor of "Rounded" (2) and "Pill" (3) styles.
- **Pill Shapes (60px+):** Reserved for primary interactive elements like buttons and partner cards.
- **Architectural Radius (35px - 45px):** Applied to service cards and portfolio imagery to create a consistent, softened frame for photography.
- **Circle (50%):** Used for decorative elements, the custom cursor, and the background glow.

## Components

### Buttons
- **Primary CTA:** Pill-shaped, Champagne Gold background with high-contrast navy text. Bold weight.
- **Secondary/Outline:** Pill-shaped with a 1px border. Uses transparent backgrounds to sit elegantly over imagery.
- **Hover State:** Smooth 0.5s transition with a slight scale-up (1.05x).

### Cards (Service & Portfolio)
- **Container:** Rounded corners (35px), low-opacity background or glass effect.
- **Content:** Minimalist. A label-caps subtitle, a Serif Card Heading, and a brief Sans description.
- **Imagery:** Aspect ratios vary (1:1, 4:5, 16:9) to create a "gallery" feel. On hover, images should zoom slightly within their frames.

### Input Fields
- **Style:** Minimalist underline or low-opacity boxed fields. Focus state should trigger a transition to a Primary color border.
- **Labels:** Always in `label-sm` (all caps) positioned above the field.

### Custom Interactive Elements
- **Custom Cursor:** A 2px Champagne Gold ring that follows the mouse. It should expand when hovering over interactive elements.
- **Infinite Marquee:** Use for "Partner" logos to show social proof without cluttering the architectural layout.
- **Section Reveal:** All components should utilize GSAP-driven scroll entrance (opacity 0 -> 1, Y shift 80px -> 0) to reinforce the cinematic narrative.