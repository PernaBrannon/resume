import React from 'react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  return (
    <motion.header 
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg border-b border-white/20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-8">
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
            className="flex justify-center space-x-4 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.span 
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              📧 expressbusinessbran@icloud.com
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              📱 (+86) 198-6771-2076
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              📍 Shenzhen, China
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header