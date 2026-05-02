import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "E-commerce Web-Site",
      category: "React",
      description: "An e-commerce website is an online platform that allows users to browse, buy, and sell products or services digitally.",
      image: "/project1.png",
      tech: ["React",  ],
      live: "https://mart-app-rho.vercel.app/",
      github: "https://github.com/KRSNA045/mart-app.git"
    },
    {
      title: "Book-store websitw",
      category: "React",
      description: "An online bookstore website is a digital platform where users can explore, purchase, and read books across various genres from anywhere.",
      image: "/project2.png",
      tech: ["React",  "Tailwind"],
      live: "https://luxe-e63n.vercel.app/",
      github: "https://github.com/KRSNA045/BOOKSTORE.git"
    },
    {
      title: "Cloth-website",
      category: "React",
      description: "A clothing website is an online platform where users can browse, shop, and purchase fashion items like apparel, accessories, and footwear from various brands.",
      image: "/project3.png",
      tech: ["React","Tailwind" ],
      live: "https://luxe-e-commerce1.vercel.app/",
      github: "https://github.com/KRSNA045/luxe-e-commerce-.git"
    },
    {
      title: "Coming-soon",
      category: "Full Stack",
      description: "Modern e-commerce platform with shopping cart, payment integration, and admin panel.",
      image: "/project4.jpg",
      tech: ["React", "Stripe", "PostgreSQL"],
      live: "#",
      github: "#"
    },
    {
      title: "Coming-Soon",
      category: "JavaScript",
      description: "Real-time weather application with location-based forecasts and beautiful animations.",
      image: "/project5.jpg",
      tech: ["JavaScript", "API", "CSS"],
      live: "#",
      github: "#"
    },
    {
      title: "Coming-Soon",
      category: "React",
      description: "Productivity app with drag-and-drop tasks, categories, and progress tracking.",
      image: "/project6.jpg",
      tech: ["React", "Firebase", "Material-UI"],
      live: "#",
      github: "#"
    }
  ];

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-navy-dark relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="glass p-6 rounded-2xl h-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
