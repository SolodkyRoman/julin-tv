# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 portfolio website for designer Yuliya Tverdokhlib showcasing design projects with optimized media delivery.

### Key Architectural Patterns

**Image Optimization System**: The site uses a sophisticated responsive image system:
- Images are pre-generated in multiple sizes (3840, 2560, 1920, 1280, 720px widths)
- `ResponsiveImage` component automatically generates srcSet attributes for optimal loading
- `ImagePathProvider` context provides path scoping for project-specific image folders
- Both WebP and PNG formats supported
- Images stored in `/public/images/projects/[project-slug]/` structure

**Animation Framework**: 
- Global scroll-based reveal animations using `.animate-visible` class
- `CommonLayout` implements IntersectionObserver to trigger visibility animations
- Elements animate in from below when entering viewport, animate out when leaving

**Project Structure**:
- Each project lives in `/src/app/projects/[project-slug]/page.tsx`
- Projects use `ImagePathProvider` to scope image paths
- `ProjectInfo` component provides standardized project title/description layout
- Projects layout wraps all project pages with shared navigation

**Styling System**:
- Tailwind CSS 4 with custom theme variables in `globals.css`
- Custom cursor disabled globally (`cursor: none`) - likely uses `InvertingCursor` component
- Host Grotesk font loaded as local font with CSS variable
- Color palette includes electric-lime, hot-pink, lime-green accent colors

**Layout Architecture**:
- `CommonLayout` wraps all pages with Header/Footer and consistent styling
- Layout calculates content height dynamically based on header/footer heights
- Page-specific layouts (like projects layout) can extend the base layout

## Important Notes

- All images should follow the naming convention: `[name]-[width].[format]`
- New projects require both the page component and corresponding optimized images
- The site appears to be configured for static export (presence of `/out` folder)
- Custom cursor implementation requires elements to have `data-cursor-*` attributes for interaction