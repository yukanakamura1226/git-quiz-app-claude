# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technology Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans and Geist Mono (loaded via next/font)
- **React**: v19.0.0

## Project Structure

This is a standard Next.js App Router project:

- `/src/app/` - App Router pages and layouts
- `/src/app/page.tsx` - Main homepage component
- `/src/app/layout.tsx` - Root layout with font configuration
- `/src/app/globals.css` - Global styles
- `/public/` - Static assets (SVG icons)

## Code Conventions

- Uses TypeScript with strict typing
- Components follow React functional component patterns
- CSS classes use Tailwind utility-first approach
- Font variables are defined in layout.tsx and used via CSS custom properties