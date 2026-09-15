import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Munin Global — Business Technology Platform",
      description: "Designed and developed a web platform for an international recruitment and education business using PostgreSQL and Supabase. Built customer-facing workflows, an internal employee portal, third-party API integrations, authentication, access control, cloud deployment, DNS, and production environment configuration.",
      technologies: ["PostgreSQL", "Supabase", "REST APIs", "Authentication", "Vercel", "Cloudflare"]
    },
    {
      title: "Lab Meal Prep — Delivery App MVP",
      description: "Developed a full-stack Android delivery app for a New York City startup, including RESTful backend endpoints for authentication and product management, SQL-based data storage, and PayPal API payment integration. Led a three-person development team that built approximately 70% of the MVP in two months.",
      technologies: ["Android", "REST APIs", "SQL", "PayPal API", "Authentication", "Team Leadership"]
    }
  ]

  return (
    <motion.section 
      id="projects"
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">🚀 Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline text-sm"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects