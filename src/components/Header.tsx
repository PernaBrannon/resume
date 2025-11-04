import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close menu after clicking
    }
  }

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]
  return (
    <motion.header 
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg border-b border-white/20 relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Mobile Menu Button */}
        <div className="md:hidden absolute top-4 right-4">
          <button
            onClick={toggleMenu}
            className="text-gray-900 dark:text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                className="w-6 h-0.5 bg-current block mb-1.5 origin-center"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-6 h-0.5 bg-current block mb-1.5"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                className="w-6 h-0.5 bg-current block origin-center"
              />
            </motion.div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center mb-6">
          <nav className="flex space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>
        {/* Main Header Content */}
        <div className="text-center">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Brannon J. Perna
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Data Analyst | Junior Software Engineer
          </motion.p>
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Currently in Shenzhen, China | Seeking full-time, sponsored role in Singapore | U.S. Citizen
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-2 md:space-y-0 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.span 
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-sm md:text-base"
            >
              📧 expressbusinessbran@icloud.com
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-sm md:text-base"
            >
              📱 (+86) 198-6771-2076
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-sm md:text-base"
            >
              📍 Shenzhen, China
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-t border-white/20"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header