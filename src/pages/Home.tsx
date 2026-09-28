import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin, FiCode, FiCpu, FiLayers } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuredRef, featuredInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      description: 'Building responsive, accessible web UIs with modern React tooling.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'],
    },
    {
      icon: FiLayers,
      title: 'Full-Stack Apps',
      description: 'Shipping end-to-end features — auth, data, APIs, and deployment.',
      technologies: ['Node.js', 'Express', 'Firebase', 'Socket.io', 'Vercel'],
    },
    {
      icon: FiCpu,
      title: 'Practical Problem Solving',
      description: 'Real projects for associations, client sites, and real-time tools.',
      technologies: ['Git', 'REST APIs', 'Firestore', 'PDF/Excel reports', 'Maps'],
    },
  ];

  const featuredProjects = [
    {
      title: 'BEST AMS',
      description: 'Association management — members, payments, compliance, and reports.',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      image: '/projects/project-best-ams.jpg',
      status: 'completed',
    },
    {
      title: 'SafeTrack',
      description: 'Consent-based live location sharing with real-time maps.',
      tags: ['React', 'Socket.io', 'Express', 'TypeScript'],
      image: '/projects/project-safetrack.jpg',
      status: 'completed',
    },
    {
      title: 'Mendlovu Website',
      description: 'Client marketing site built with Next.js and deployed on Vercel.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/projects/project-mendlovu.jpg',
      status: 'completed',
    },
  ];

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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                Open to junior developer roles
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                Jeremia Sibiya
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Junior Web & Software Developer building practical apps with React,
              TypeScript, and modern tooling.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-all shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5"
              >
                View My Work
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center space-x-6">
              {[
                { icon: FiGithub, href: 'https://github.com/067871Jeremiasibiya', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jeremia-ostin-sibiya-278ba6359/', label: 'LinkedIn' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={skillsInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What I Do
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Combining frontend skills with full-stack tooling to ship useful web applications.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={skillsInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-750 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={featuredRef} className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={featuredInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Selected projects that show how I build and ship real software.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={featuredInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {project.status === 'completed' ? '✓ Completed' : '🚧 In Dev'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={featuredInView ? 'visible' : 'hidden'}
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              View All Projects
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Let's Build Something Amazing</h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-medium rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Start a Conversation
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
