import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [

    {
      year: "2022-2025",
      title: "B.Sc.inforamtion-teachnology",
      company: "Shree Swaminarayan College of Computer Science from Bhavnagar .",
      description: "I completed my graduation from SSCCSS College Bhavnagar.",
      technologies: []
    },
    {
      year: "2025-2026",
      title: "Front-end developer ",
      company: "tops technology ahmedabad.",
      description: "I am a Front-End Developer trained at TOPS Technologies.",
      technologies: ["React", "Html", "Css", "Java-Script","tailwind css", "bootstrap", "Fire-base"]
    },
  
  ];

  return (
    <section id="experience" className="py-20 bg-navy relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey in web development, showcasing growth and expertise in creating exceptional digital solutions.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full rounded-full"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-navy z-10"></div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`glass p-6 rounded-2xl max-w-md w-full ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  } hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-400 font-semibold text-sm bg-blue-500/20 px-3 py-1 rounded-full">
                      {exp.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-blue-400 font-semibold mb-4">{exp.company}</h4>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;