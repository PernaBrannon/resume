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
      title: "ESL Teacher",
      company: "QianCheng Kindergarten",
      period: "2024 - Present",
      description: [
        "Plan and manage daily instructional programs while independently managing competing priorities and deadlines.",
        "Design and execute multi-week projects requiring structured planning, problem-solving, and adaptation.",
        "Communicate complex information clearly to students, parents, and international colleagues.",
        "Maintain detailed records, documentation, schedules, and progress reports in a fast-paced environment."
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