import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section 
      id="about"
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p className="text-lg leading-relaxed">
          Computer Science graduate from Rutgers University–Newark with a Mathematics minor and hands-on experience building web applications, database systems, API integrations, and cloud-hosted infrastructure. Strong foundation in Python, SQL, Linux, PostgreSQL, and web technologies.
        </p>
        <p className="text-lg leading-relaxed">
          Experienced in translating business requirements into technical solutions and using AI-assisted development tools to build and iterate on applications. Seeking an entry-level role in systems, software, data, or technical operations.
        </p>
      </div>
    </motion.section>
  )
}

export default About