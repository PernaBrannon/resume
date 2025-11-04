import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
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

  return (
    <motion.section 
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
    </motion.section>
  )
}

export default About