---
name: AutoLead Pro
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  sidebar_width: 260px
  container_gutter: 24px
  component_padding_sm: 12px
  component_padding_md: 16px
  component_padding_lg: 24px
  stack_gap: 16px
---

## Brand & Style

The design system is engineered for efficiency, precision, and trust within the automotive sales sector. It adopts a **Corporate / Modern** aesthetic that prioritizes clarity over decoration, ensuring that high-volume data remains legible and actionable. 

The brand personality is authoritative yet helpful, acting as a reliable co-pilot for sales teams. The interface utilizes generous white space and a structured information hierarchy to reduce cognitive load during fast-paced lead management. High-quality typography and a disciplined grid system evoke a sense of technological sophistication and professional stability.

## Colors

The palette is anchored by a clean white background and a systematic use of neutrals to create a logical workspace. 

- **Primary Blue (#2563EB):** Used for primary actions, navigation states, and the "New" lead status. It represents reliability and professional focus.
- **Success Green (#10B981):** Applied to positive outcomes, completion states, and the "Interested" status.
- **Semantic Status Colors:** Yellow (#FBBF24) and Red (#EF4444) are reserved strictly for "Contacted" and "Not Interested" statuses respectively, providing immediate visual categorization in dense data tables.
- **Borders & Dividers:** Use #E2E8F0 for all UI borders to maintain a soft but clear distinction between containers.

## Typography

This design system utilizes **Inter** for its exceptional legibility and neutral character. 

Hierarchy is established primarily through weight shifts. Headlines use Semi-Bold (600) or Bold (700) to anchor sections, while body text remains at Regular (400) for maximum readability in long-form data. 

Labels and small metadata should use Medium (500) weight to maintain clarity at smaller scales. All display and headline sizes incorporate a slight negative letter-spacing to tighten the visual appearance on digital displays.

## Layout & Spacing

The system follows a **Fixed Sidebar** model for desktop, providing constant access to the primary navigation links. The main content area utilizes a fluid grid with a maximum content width to prevent line lengths from becoming unreadable on ultra-wide monitors.

- **Grid:** A 12-column grid is used for the dashboard, allowing cards to span 3, 4, 6, or 12 columns.
- **Rhythm:** An 8px linear scale governs all spacing.
- **Margins:** Desktop views use 24px outer margins; mobile views collapse to 16px.
- **Data Tables:** Tables must feature generous 16px vertical padding within rows to ensure touch targets are accessible and data doesn't feel cramped.

## Elevation & Depth

This design system uses **Tonal Layers** and **Ambient Shadows** to create a functional hierarchy without clutter.

1.  **Level 0 (Background):** The base canvas uses the Neutral Gray (#F8FAFC).
2.  **Level 1 (Cards/Sidebar):** Pure white (#FFFFFF) surfaces with a subtle 1px border (#E2E8F0).
3.  **Elevation (Lift):** For interactive cards or modals, use a soft, diffused shadow: `0px 4px 6px -1px rgba(0, 0, 0, 0.05), 0px 2px 4px -1px rgba(0, 0, 0, 0.03)`. 

Avoid heavy dropshadows; depth should feel like light filtering through a clean office environment.

## Shapes

The shape language is balanced and modern. 

- **Containers:** Standard cards, input fields, and buttons utilize a 0.5rem (8px) radius. 
- **Large Elements:** Modals and large feature banners may use `rounded-lg` (16px) to appear more approachable.
- **Status Pills:** Badges and chips should use a fully rounded (pill-shaped) radius to distinguish them from interactive buttons.

## Components

### Buttons
Primary buttons use a solid #2563EB fill with white text. Secondary buttons use a #FFFFFF fill with #E2E8F0 borders. Use 12px horizontal and 8px vertical padding for standard buttons.

### Cards
Cards are the primary layout unit. They must include a white background, a 1px #E2E8F0 border, and the standard 8px corner radius. Header sections within cards should be separated by a subtle divider.

### Data Tables
Rows should have a hover state of #F8FAFC. Column headers must be uppercase, 12px Medium weight, with a muted text color to differentiate from the data itself.

### Input Fields
Inputs use a 1px #E2E8F0 border. On focus, the border transitions to #2563EB with a 2px soft blue outer glow.

### Status Badges
Status indicators for leads use a "soft" palette: a light background tint of the status color with high-contrast text (e.g., New = Light Blue bg / Dark Blue text).

### Sidebar
The fixed sidebar uses a slightly darker neutral or the primary blue in a very dark shade to provide structural contrast against the white main content area. Icons in the sidebar are 20px minimalist line drawings.
