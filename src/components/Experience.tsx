import { motion } from 'framer-motion'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Computer Science Student & Project Developer",
      company: "Rutgers University",
      period: "2020 - 2023",
      description: [
        "Developed multiple full-stack applications demonstrating proficiency in database design, web development, and algorithmic problem-solving",
        "Engineered a MySQL-based e-commerce platform with PHP backend, focusing on transaction flow and data integrity",
        "Built data management systems with optimized search algorithms and indexing for improved performance",
        "Implemented complex rule-based systems using JavaScript, HTML, and CSS for interactive web applications"
      ]
    },
    {
      title: "Data Analysis & Machine Learning Focus",
      company: "Academic Coursework & Projects",
      period: "2021 - 2023",
      description: [
        "Gained expertise in Python data analysis libraries (Pandas, NumPy, Scikit-learn) through coursework and projects",
        "Applied machine learning concepts and AI principles to solve complex data problems",
        "Worked with cloud computing platforms (AWS) including RDS and S3 for data storage and processing",
        "Utilized Git version control for collaborative software development projects"
      ]
    },
    {
      title: "Database & Software Engineering",
      company: "Project-Based Learning",
      period: "2020 - 2023",
      description: [
        "Designed and implemented relational database schemas for complex business logic",
        "Collaborated in team environments using professional software engineering practices",
        "Optimized SQL queries and database indices for high-volume data operations",
        "Demonstrated proficiency in multiple programming languages including Java, C, and Python"
      ]
    }
  ]

  return (
    <motion.section 
      id="experience"
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {exp.title}
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
              {exp.company}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              {exp.period}
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience