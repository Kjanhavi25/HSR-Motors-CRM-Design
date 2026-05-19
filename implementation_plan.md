# Implementation Plan: AutoLead Pro CRM

This plan outlines the steps to pivot the current application from the "Aether Dynamics" landing page to the "AutoLead Pro" desktop web application, based on the provided problem statement and the design system from your "AutoLead Pro CRM" Stitch project.

## Proposed Changes

1. **Design System Update**
   - **`DESIGN.md`**: Replace the current Aether Dynamics design system with the AutoLead Pro CRM design system (extracted from Stitch Project ID: `10702089761510216417`).
   - **`tailwind.config.js`**: Update tokens to use the new corporate/modern palette (Clean white background, Primary Blue `#2563EB`, Success Green `#10B981`) and the `Inter` font family.
   - **`src/index.css`**: Update global CSS variables and base body styles to a light mode aesthetic.

2. **Navigation & Layout Architecture**
   - Create a `Sidebar.jsx` component for consistent navigation across all 4 screens.
   - Update `Layout.jsx` to a dashboard layout (Sidebar on the left, content area on the right with a clean gray/white background).

3. **Screen Implementation (Modular Components)**
   We will build 4 separate screens as requested:
   - **Screen 1: `LeadListing.jsx` (Main Dashboard)**
     - CRM-style table (Name, Phone, Source, Status, Assigned, Date).
     - Filters (Status, Source, Date) and Search bar.
     - Status pills with color coding (New, Contacted, Interested, Not Interested).
     - Action buttons (Call, Email, Status Dropdown).
   - **Screen 2: `LeadDetails.jsx`**
     - Customer profile section.
     - Lead timeline / communication history panel.
     - Notes section and action buttons (Mark Status, Schedule Reminder).
   - **Screen 3: `LeadManagement.jsx`**
     - Workflow control for managers (auto-assignment rules, bulk update).
     - Team workload distribution UI.
   - **Screen 4: `BusinessDashboard.jsx`**
     - KPI cards (Total Leads, Conversion Rate).
     - Charts/visualizations for lead sources and status distribution.
     - Salesperson leaderboard.

4. **App Assembly & Routing**
   - Implement simple state-based navigation in `App.jsx` to switch between the 4 screens using the Sidebar.

## Verification Plan

### Automated Tests
- Build the project using `npm run build`.

### Manual Verification
- Run the dev server.
- Use the integrated browser subagent to navigate through all 4 screens, verifying the layout, sidebar functionality, and the new light-mode CRM aesthetic.

## User Review Required

> [!IMPORTANT]  
> This will completely replace the "Aether Dynamics" landing page we just built with the new "AutoLead Pro CRM" application. Please review this plan. Once approved, I will extract the correct design system and build out the 4 screens.
