# React Resume Website

A modern, responsive resume website with Singapore-themed parallax background, built with React, TypeScript, Vite, and Tailwind CSS.

## 🌟 Features

- �️ **Singapore Parallax Background** - Multi-layer scrolling images with smooth transitions
- 🎨 **Glass Morphism Design** - Modern, translucent UI components
- 📱 **Fully Responsive** - 3 images on desktop, 5 on mobile for optimal coverage
- ⚡ **Optimized Performance** - Image preloading, lazy rendering, hardware acceleration
- 🔧 **TypeScript** - Full type safety throughout
- 💨 **Tailwind CSS** - Utility-first styling with custom animations
- 🎬 **Framer Motion** - Smooth animations and transitions
- 📄 **Complete Resume** - About, Experience, Education, Skills, Projects, Contact sections

## 🌐 Live Demo

**� [View Live Site](https://pernabrannon.github.io/resume/)**

## �🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- npm (comes with Node.js)

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens at http://localhost:5173/resume/

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🎨 Customization

### Personal Information
| Component | Path | Update |
|-----------|------|--------|
| **Header** | `src/components/Header.tsx` | Name, title, contact info |
| **About** | `src/components/About.tsx` | Bio and summary |
| **Experience** | `src/components/Experience.tsx` | Work history |
| **Education** | `src/components/Education.tsx` | Educational background |
| **Skills** | `src/components/Skills.tsx` | Technical skills by category |
| **Projects** | `src/components/Projects.tsx` | Portfolio projects |
| **Contact** | `src/components/Contact.tsx` | Contact form and details |

### Background Images
Images are located in `src/assets/images/`:
- `singapore-1.jpg` through `singapore-5.jpg` - Main parallax images
- Desktop uses 3 images, mobile uses 5 for full coverage
- Replace with your own images (maintain similar aspect ratios for best results)

## 📁 Project Structure

```
src/
├── assets/
│   └── images/           # Background images
│       ├── singapore-1.jpg
│       ├── singapore-2.jpg
│       ├── singapore-3.jpg
│       ├── singapore-4.jpg
│       └── singapore-5.jpg
├── components/
│   ├── Header.tsx        # Mobile-responsive header with navigation
│   ├── About.tsx         # Bio and summary
│   ├── Experience.tsx    # Work history timeline
│   ├── Education.tsx     # Educational background
│   ├── Skills.tsx        # Technical skills with categories
│   ├── Projects.tsx      # Portfolio with tech stacks
│   ├── Contact.tsx       # Contact form and info
│   └── ImagePreloader.tsx # Image loading optimization
├── types/
│   └── global.d.ts       # TypeScript declarations
├── App.tsx               # Main app with parallax system
├── main.tsx              # Entry point
└── index.css             # Global styles + Tailwind
```

## 🛠️ Technologies

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS, PostCSS |
| **Animations** | Framer Motion |
| **Deployment** | GitHub Pages, gh-pages |
| **Code Quality** | ESLint, TypeScript Compiler |

## ⚡ Performance Optimizations

- **Image Preloading** - All background images loaded before display
- **Hardware Acceleration** - CSS transforms with `willChange` optimization
- **Lazy Rendering** - Conditional visibility based on scroll position
- **Responsive Assets** - Different image counts for mobile/desktop
- **Request Animation Frame** - Smooth scroll handling at 60fps
- **Asset Hashing** - Cache-busting for optimal loading

## 🎯 Key Features Explained

### Parallax Background System
- **Multi-layer scrolling** - Each image moves at different speeds creating depth
- **Responsive distribution** - Images evenly spaced across document height
- **Smooth transitions** - Fade effects and hardware-accelerated transforms
- **Full coverage** - Extended last image ensures no gaps at bottom

### Glass Morphism UI
- **Backdrop blur** - Semi-transparent components with blur effect
- **Border accents** - Subtle white borders for definition
- **Dark overlay** - 30% black overlay for text readability
- **Hover effects** - Interactive scaling and color transitions

## 📝 Configuration Files

- `vite.config.ts` - Vite configuration with base path `/resume/`
- `tailwind.config.js` - Tailwind customization
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Dependencies and scripts

## 🚢 Deployment

The site automatically deploys to GitHub Pages when you run:
```bash
npm run deploy
```

This command:
1. Runs TypeScript compilation
2. Builds optimized production bundle
3. Publishes to `gh-pages` branch
4. Updates live site at https://pernabrannon.github.io/resume/

## 📄 License

Open source - feel free to fork and customize for your own use!