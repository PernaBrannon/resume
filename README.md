# React Resume Website

A modern, responsive resume website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Clean, professional design with dark/light mode support
- 📱 Fully responsive layout
- ⚡ Fast build and development with Vite
- 🔧 TypeScript for type safety
- 🎯 Tailwind CSS for styling
- 📄 Multiple resume sections: About, Experience, Education, Skills, Projects, Contact

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm or yarn package manager

## Installation

1. Install Node.js from [nodejs.org](https://nodejs.org/) if you haven't already
2. Open a terminal in the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm run dev
```

This will start the application at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

## Customization

To customize the resume with your information:

1. **Personal Information**: Edit the `Header` component in `src/components/Header.tsx`
2. **About Section**: Update `src/components/About.tsx` with your bio
3. **Experience**: Modify the experience array in `src/components/Experience.tsx`
4. **Education**: Update the education array in `src/components/Education.tsx`
5. **Skills**: Customize skill categories in `src/components/Skills.tsx`
6. **Projects**: Add your projects in `src/components/Projects.tsx`
7. **Contact**: Update contact information in `src/components/Contact.tsx`

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Header with name and contact info
│   ├── About.tsx       # About me section
│   ├── Experience.tsx  # Work experience
│   ├── Education.tsx   # Education background
│   ├── Skills.tsx      # Technical skills
│   ├── Projects.tsx    # Portfolio projects
│   └── Contact.tsx     # Contact form and info
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## Contributing

Feel free to fork this project and customize it for your own resume!

## License

This project is open source and available under the [MIT License](LICENSE).