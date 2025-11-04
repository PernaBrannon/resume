# React Resume Website Project

## Project Overview
Modern resume website with Singapore-themed parallax background built with:
- React 18 + TypeScript for type safety
- Vite 5 for fast development and building
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Multi-layer parallax scrolling system
- Responsive design (3 images desktop, 5 mobile)

## Project Status
✅ Fully deployed and optimized  
✅ All components implemented  
✅ Parallax background system complete  
✅ Image preloading and performance optimized  
✅ GitHub Pages deployment configured  

## Live Site
🔗 https://pernabrannon.github.io/resume/

## Quick Start
```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run deploy       # Deploy to GitHub Pages
```

## Key Features
- **Parallax Background**: Multi-layer Singapore images with depth effect
- **Glass Morphism UI**: Semi-transparent components with backdrop blur
- **Performance**: Image preloading, hardware acceleration, optimized rendering
- **Responsive**: Adaptive layout and image count based on screen size
- **SEO Ready**: Proper meta tags and semantic HTML

## Components
- **Header**: Mobile-responsive navigation with hamburger menu
- **About**: Professional summary targeting Singapore opportunities
- **Experience**: Work history with expandable details
- **Education**: Academic background with coursework
- **Skills**: Categorized technical skills with hover effects
- **Projects**: Portfolio with technology stacks
- **Contact**: Contact form and information
- **ImagePreloader**: Optimized background image loading

## Technical Highlights
- Images stored in `src/assets/images/` for Vite optimization
- Custom parallax system with variable scroll speeds
- Responsive breakpoint at 768px for mobile/desktop
- Fallback background to prevent gaps
- TypeScript interfaces for all data structures