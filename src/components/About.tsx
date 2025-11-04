import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
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
          I am a dedicated and analytical Computer Science graduate from Rutgers University with a strong foundation in 
          data analysis, software engineering, and problem-solving. Currently based in Shenzhen, China, I am actively 
          seeking full-time opportunities in Singapore where I can contribute my technical expertise and passion for 
          data-driven solutions.
        </p>
        <p className="text-lg leading-relaxed">
          My academic journey has equipped me with comprehensive knowledge in database management, machine learning, 
          and full-stack development. I have hands-on experience with Python data analysis libraries, cloud computing 
          platforms like AWS, and various programming languages including Java, C, and JavaScript. My project portfolio 
          demonstrates my ability to design efficient algorithms, implement complex database schemas, and create 
          user-friendly web applications.
        </p>
        <p className="text-lg leading-relaxed">
          What sets me apart is my analytical mindset combined with practical implementation skills. I excel at 
          transforming raw data into actionable insights and building scalable solutions that address real-world 
          business challenges. I am particularly interested in leveraging my technical skills in Singapore's dynamic 
          tech ecosystem, where innovation and data science drive business growth.
        </p>
        <p className="text-lg leading-relaxed">
          As a U.S. citizen with international experience, I bring a global perspective to local challenges. I am 
          committed to continuous learning and staying current with emerging technologies in the rapidly evolving 
          fields of data science and software engineering.
        </p>
      </div>
    </motion.section>
  )
}

export default About