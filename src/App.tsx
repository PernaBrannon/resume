import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ImagePreloader from './components/ImagePreloader'

// Import background images
import singapore1 from './assets/images/singapore-1.jpg'
import singapore2 from './assets/images/singapore-2.jpg'
import singapore3 from './assets/images/singapore-3.jpg'
import singapore4 from './assets/images/singapore-4.jpg'
import singapore5 from './assets/images/singapore-5.jpg'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.pageYOffset)
      })
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const checkImagesLoaded = () => {
      if (window.__imagesLoaded) {
        setImagesLoaded(true)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    const loadingCheck = setInterval(checkImagesLoaded, 100)
    handleResize() // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      clearInterval(loadingCheck)
    }
  }, [])

  // Desktop: 3 images, Mobile: 5 images - with imported images
  const desktopImages = [
    singapore1, // Marina Bay skyline (evening)
    singapore2, // Marina Bay Sands (blue hour)
    singapore3  // Singapore skyline (dusk)
  ]

  const mobileImages = [
    singapore1, // Marina Bay skyline (evening)
    singapore2, // Marina Bay Sands (blue hour)
    singapore3, // Singapore skyline (dusk)
    singapore4, // Singapore night view
    singapore5  // Additional Singapore view
  ]

  const singaporeImages = isMobile ? mobileImages : desktopImages

  return (
    <div className="relative min-h-screen">
      <ImagePreloader images={singaporeImages} />
      
      {/* Loading state and background */}
      <div 
        className={`fixed inset-0 bg-gray-900 z-0 transition-opacity duration-1000 ${
          imagesLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Fallback background extending to document bottom */}
      <div className="absolute inset-0 bg-gray-900 z-0" style={{ minHeight: '100vh', height: '100%' }} />

      {singaporeImages.map((imageUrl, index) => {
        // Calculate the document height for proper coverage
        const documentHeight = document.documentElement.scrollHeight
        const viewportHeight = window.innerHeight
        const totalSections = singaporeImages.length
        
        // Distribute images evenly across document length with overlap
        const sectionHeight = documentHeight / (totalSections - 0.5) // Slight overlap to prevent gaps
        const layerOffset = index * sectionHeight
        
        // Adjusted parallax speed (slower for better visibility)
        const parallaxSpeed = 0.15 + (index * 0.05)
        
        // For the last image, extend it significantly to ensure full coverage
        const isLastImage = index === singaporeImages.length - 1
        const imageHeight = isLastImage 
          ? Math.max(viewportHeight * 2, sectionHeight * 1.8)
          : Math.max(viewportHeight * 1.5, sectionHeight * 1.3)
        
        return (
          <div 
            key={index}
            className="fixed top-0 left-0 w-full z-0 overflow-hidden"
            style={{
              height: `${imageHeight}px`,
              transform: `translateY(${(scrollY - layerOffset) * parallaxSpeed}px)`,
              opacity: 1,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
                willChange: 'transform',
                imageRendering: 'auto',
              }}
            />
          </div>
        )
      })}
      
      {/* Consistent overlay for text readability */}
      <div className="fixed inset-0 bg-black/30 z-10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-20 bg-transparent">
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