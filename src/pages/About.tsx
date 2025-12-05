import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiCode, FiTarget, FiZap } from 'react-icons/fi';
import profileImage from '../assets/jay.png';
import cvFile from '../assets/Cv_modern.pdf';

const About = () => {
  const [bioRef, bioInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expRef, expInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const journey = [
    {
      title: 'Discovered Programming',
      period: '2023',
      description: 'Started my self-taught journey into web development, learning HTML, CSS, and JavaScript through online resources and hands-on practice.',
      icon: FiZap,
    },
    {
      title: 'Mastered React & TypeScript',
      period: '2024',
      description: 'Dove deep into React ecosystem, TypeScript, and modern frontend development. Built multiple projects to solidify my skills.',
      icon: FiCode,
    },
    {
      title: 'Explored AI & Machine Learning',
      period: '2024 - Present',
      description: 'Expanded into AI engineering, learning Python, TensorFlow, and working with LLMs and AI-powered applications.',
      icon: FiTarget,
    },
  ];

  const technicalSkills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Python', level: 92 },
    { name: 'Machine Learning', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'PostgreSQL/MongoDB', level: 82 },
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
            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Passionate about building intelligent solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section ref={bioRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={bioInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10">
                <img
                  src={profileImage}
                  alt="Jeremia Sibiya"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary-200 dark:bg-primary-900/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-200 dark:bg-blue-900/30 rounded-2xl -z-10" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Hello! I'm Jeremia Sibiya
              </h2>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 rounded-full mb-6">
                <span className="text-primary-700 dark:text-primary-300 font-medium">100% Self-Taught Developer</span>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a self-taught AI Engineer and React Developer with an unwavering passion for 
                  technology and problem-solving. Without formal IT education, I've built my skills 
                  from the ground up through dedication, curiosity, and countless hours of practice.
                </p>
                <p>
                  My journey proves that with determination and the right mindset, anyone can break 
                  into tech. I've learned everything from online courses, documentation, YouTube tutorials, 
                  and most importantly—by building real projects and learning from my mistakes.
                </p>
                <p>
                  Today, I combine my expertise in React, TypeScript, and AI technologies to create 
                  modern web applications. I'm constantly learning and pushing myself to master new 
                  technologies and build innovative solutions.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={cvFile}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  <FiDownload className="mr-2" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* My Journey Section */}
      <section ref={expRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={expInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Self-Taught Journey</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                No formal IT education. No bootcamps. Just pure dedication, curiosity, and a love for building things.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Learning Resources */}
            <motion.div variants={itemVariants} className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How I Learned</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'YouTube Tutorials',
                  'Official Documentation',
                  'Online Courses',
                  'Building Projects',
                  'Stack Overflow',
                  'GitHub Open Source',
                  'AI Assistants',
                  'Trial & Error',
                ].map((resource, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {resource}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={skillsInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A comprehensive overview of my technical expertise and proficiency levels.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
