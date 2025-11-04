import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    }
  }

  const contentVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  }

  return (
    <motion.section 
      id="about"
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Desktop/Tablet View - Always visible on md+ screens */}
      <div className="hidden md:block">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <div className="prose prose-lg dark:prose-invert">
          <motion.p 
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            Seeking full-time, sponsored Data Analyst or Junior Software Engineer role in Singapore. Recent Computer Science graduate with proven capacity to leverage advanced Python (NumPy, Pandas, Scikit-learn) and SQL to transform complex, raw data into actionable financial/business intelligence. Possesses practical experience with AWS cloud databases and Git version control, ready to contribute immediately to an MNC environment.
          </motion.p>
          <motion.p 
            className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
            variants={itemVariants}
          >
            Currently based in Shenzhen, China, I'm actively seeking opportunities to relocate to Singapore for my next career chapter. My academic foundation in Computer Science combined with hands-on experience in data analysis and software development makes me well-suited for dynamic, international business environments.
          </motion.p>
        </div>
      </div>

      {/* Mobile View - Collapsible menu on small screens */}
      <div className="md:hidden">
        <motion.div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 dark:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={contentVariants}
          className="overflow-hidden"
        >
          <div className="prose prose-lg dark:prose-invert pt-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              Seeking full-time, sponsored Data Analyst or Junior Software Engineer role in Singapore. Recent Computer Science graduate with proven capacity to leverage advanced Python (NumPy, Pandas, Scikit-learn) and SQL to transform complex, raw data into actionable financial/business intelligence.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3 text-sm">
              Currently based in Shenzhen, China, I'm actively seeking opportunities to relocate to Singapore for my next career chapter. My academic foundation in Computer Science combined with hands-on experience in data analysis and software development makes me well-suited for dynamic, international business environments.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About