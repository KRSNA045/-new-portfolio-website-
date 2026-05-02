import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiVercel
} from "react-icons/si";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34c26", level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4", level: 90 },
        { name: "JavaScript", icon: <FaJs />, color: "#f0db4f", level: 85 },
        { name: "React", icon: <FaReact />, color: "#61dbfb", level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", level: 95 }
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#68a063", level: 75 },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248", level: 70 },
        { name: "Firebase", icon: <SiFirebase />, color: "#ffca28", level: 80 },
        { name: "Git", icon: <FaGitAlt />, color: "#f05032", level: 85 },
        { name: "Figma", icon: <FaFigma />, color: "#f24e1e", level: 80 },
        { name: "Vercel", icon: <SiVercel />, color: "#000000", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-navy-dark relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The technologies and tools I use to bring ideas to life and create exceptional digital experiences.
            </p>
          </div>

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-semibold text-center mb-8 text-blue-400">
                {category.title}
                {category.title === "Backend & Tools" && (
                  <p className="text-sm text-yellow-400 mt-2">Currently Learning 🚀</p>
                )}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <div className="glass p-6 rounded-2xl text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl mb-4 flex justify-center"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </motion.div>

                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h4>

                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.3 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        ></motion.div>
                      </div>

                      <span className="text-xs text-gray-400">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
