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
          Seeking full-time, sponsored Data Analyst or Junior Software Engineer role in Singapore. Recent Computer Science graduate with proven capacity to leverage advanced Python (NumPy, Pandas, Scikit-learn) and SQL to transform complex, raw data into actionable financial/business intelligence. Possesses practical experience with AWS cloud databases and Git version control, ready to contribute immediately to an MNC environment.
        </p>
        <p className="text-lg leading-relaxed">
          Currently based in Shenzhen, China, I'm actively seeking opportunities to relocate to Singapore for my next career chapter. My academic foundation in Computer Science combined with hands-on experience in data analysis and software development makes me well-suited for dynamic, international business environments.
        </p>
      </div>
    </motion.section>
  )
}

export default About