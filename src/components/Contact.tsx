import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:expressbusinessbran@icloud.com?subject=${subject}&body=${body}`
    
    // Open user's email client
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }
  return (
        <motion.section 
      id="contact"
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">📞 Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm actively seeking full-time, sponsored opportunities in Singapore as a Data Analyst or Junior Software Engineer. Currently based in Shenzhen, China, I'm ready to relocate and contribute to an international MNC environment. Feel free to reach out to discuss potential opportunities!
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-blue-400">📧</span>
              <a 
                href="mailto:expressbusinessbran@icloud.com" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                expressbusinessbran@icloud.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-blue-400">💼</span>
              <a 
                href="https://www.linkedin.com/in/pernabrannon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-blue-400">🐙</span>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub Profile
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-blue-400">📱</span>
              <span className="text-gray-700 dark:text-gray-300">
                (+86) 198-6771-2076
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Message
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact