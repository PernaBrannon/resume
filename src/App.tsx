import { useEffect, useState } from 'react'
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
          backgroundImage: `linear-gradient(135deg, #667eea 0%, #764ba2 100%), url('/resume/images/singapore-skyline.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          height: '200vh',
          minHeight: '100vh'
        }}
        animate={{
          y: scrollY * -0.3,
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