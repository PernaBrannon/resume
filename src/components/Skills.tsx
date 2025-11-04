import React from 'react'
import { motion } from 'framer-motion'

interface SkillCategory {
  category: string
  skills: string[]
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Programming & Data Analysis",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Java", "C", "ML/AI Concepts"]
    },
    {
      category: "Cloud & Database",
      skills: ["AWS", "RDS", "S3", "MySQL", "Database Design"]
    },
    {
      category: "Tools & Systems",
      skills: ["Git", "Version Control", "Linux", "Shell Commands", "Data Structures", "Algorithms"]
    },
    {
      category: "Web Development",
      skills: ["JavaScript", "HTML", "CSS", "PHP", "Full-Stack Development"]
    }
  ]

  return (
    <motion.section 
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">💼 Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (index * 0.1) + (skillIndex * 0.05),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#3B82F6",
                    color: "#FFFFFF"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills