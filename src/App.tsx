import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Singapore Parallax Background */}
      <motion.div 
        className="fixed top-0 left-0 w-full z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2652&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          height: '200vh', // Make background much taller than viewport
          minHeight: '100vh'
        }}
        animate={{
          y: scrollY * -0.3, // Reduced parallax speed to prevent running out of image
        }}
        transition={{ type: "tween", ease: "linear" }}
      />
      
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 w-full h-full bg-black/40 dark:bg-black/60 z-10" />
      
      {/* Content */}
      <div className="relative z-20">
        <Header />
        <main className="container mx-auto px-4 py-8 space-y-16">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App