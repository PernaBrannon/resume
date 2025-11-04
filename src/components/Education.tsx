import { motion } from 'framer-motion'

interface EducationItem {
  degree: string
  school: string
  location: string
  period: string
  details?: string[]
}

const Education = () => {
  const education: EducationItem[] = [
    {
      degree: "Bachelor's Degree: Computer Science - Math Minor",
      school: "Rutgers University",
      location: "Newark, NJ",
      period: "Spring 2023",
      details: [
        "Advanced Data Structures",
        "Programming Language Concepts", 
        "Intro to Machine Learning & AI",
        "Cloud Computing",
        "Software Engineering"
      ]
    },
    {
      degree: "Associates Degree: Computer Science",
      school: "Salem Community College",
      location: "Carneys Point, NJ",
      period: "Spring 2020"
    }
  ]

  return (
    <motion.section 
      id="education"
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {edu.degree}
            </h3>
            <p className="text-lg text-green-600 dark:text-green-400 font-medium">
              {edu.school}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {edu.location} | {edu.period}
            </p>
            {edu.details && (
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Relevant Coursework:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {edu.details.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education