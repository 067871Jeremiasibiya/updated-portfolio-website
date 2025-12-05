import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  live?: string;
  featured: boolean;
  status?: 'completed' | 'in-development';
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = ['all', 'ai', 'web', 'fullstack'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio showcasing my work and skills.',
      longDescription: 'A beautifully designed personal portfolio website built from scratch with React, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, dark mode support, responsive design, and a contact form.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'web',
      github: 'https://github.com/067871Jeremiasibiya/personal-website',
      featured: true,
      status: 'completed',
    },
    {
      id: 2,
      title: 'QR Code Component',
      description: 'Frontend Mentor challenge - Responsive QR code card.',
      longDescription: 'A clean and responsive QR code component built as part of the Frontend Mentor challenges. This project helped me practice HTML, CSS fundamentals, and responsive design principles.',
      image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=800&h=500&fit=crop',
      tags: ['HTML', 'CSS', 'Responsive Design'],
      category: 'web',
      github: 'https://github.com/067871Jeremiasibiya/qr-code-component',
      featured: true,
      status: 'completed',
    },
    {
      id: 3,
      title: 'AI Chat Assistant',
      description: 'Conversational AI interface with GPT integration.',
      longDescription: 'A modern chat interface built with React and TypeScript. Features real-time messaging, markdown support, typing indicators, and smooth animations. Ready for OpenAI API integration.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'ai',
      github: 'https://github.com/067871Jeremiasibiya/ai-chat-assistant',
      featured: true,
      status: 'in-development',
    },
    {
      id: 4,
      title: 'Task Manager - Kanban Board',
      description: 'Interactive task management with drag-and-drop.',
      longDescription: 'A Kanban-style task management app with three columns (To Do, In Progress, Done), priority levels, task statistics, and smooth animations. Built with React and TypeScript.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'web',
      github: 'https://github.com/067871Jeremiasibiya/task-manager',
      featured: true,
      status: 'in-development',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A collection of projects showcasing my expertise in AI and web development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center text-gray-500 dark:text-gray-400 mr-4">
              <FiFilter className="mr-2" />
              <span>Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-end space-x-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            aria-label="View on GitHub"
                          >
                            <FiGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            aria-label="View live demo"
                          >
                            <FiExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    {project.status && (
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          project.status === 'completed' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-yellow-500 text-white'
                        }`}>
                          {project.status === 'completed' ? '✓ Completed' : '🚧 In Development'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Interested in Working Together?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
