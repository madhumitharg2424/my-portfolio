// src/components/Projects.jsx
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Criminal Identification System",
      image: "criminal.jpg",
      description:
        "Detects age and gender of criminals from images using computer vision. Includes webcam support and a searchable criminal database.",
      tech: ["Python", "OpenCV", "Streamlit"],
      link: "https://your-criminal-system-link.com",
    },
    {
      title: "Engineering Placement Quiz Website",
      image: "quiz.jpg",
      description:
        "Real-time quiz platform with login/signup, streak system, and difficulty levels. Designed for placement preparation.",
      tech: ["React.js", "Node.js"],
      link: "https://realmind-quiz-web.netlify.app/login",
    },
    {
      title: "E-Commerce Website",
      image: "ecommerce.jpg",
      description:
        "Shopping platform with authentication, cart, and order placement. Built using Firebase for backend and hosting.",
      tech: ["React.js", "Firebase"],
      link: "https://your-ecommerce-website.com",
    },
    {
      title: "RescueVision AI",
      image: "rescue.jpg",
      description:
        "AI-based video detection app for disaster rescue. Detects lying posture from drone footage and triggers alerts.",
      tech: ["OpenCV", "Streamlit", "Machine Learning"],
      link: "https://your-rescuevision-link.com",
    },
    {
      title: "Climate Prediction System",
      image: "climate.jpg",
      description:
        "Predicts climate for 5 days and generates a regression model using dataset.",
      tech: ["Python", "Machine Learning", "Streamlit"],
      link: "https://your-climate-link.com",
    },
    {
      title: "Portfolio Website",
      image: "portfolio.jpg",
      description:
        "Personal portfolio showcasing projects, resume, and animations with dark theme UI.",
      tech: ["React.js", "TailwindCSS", "Framer Motion"],
      link: "https://your-portfolio-link.com",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-[#0a0f2c] via-[#111936] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Accent Effects */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
          My Projects
        </h2>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
              }}
              transition={{ duration: 0.5 }}
              className="bg-[#1d253b] rounded-2xl shadow-lg border border-green-400/20 overflow-hidden flex flex-col relative"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-green-400 hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#111936] border border-green-400/30 text-green-300 text-xs px-3 py-1 rounded-full shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Demo Button (Always Visible + Animated Fade In/Out) */}
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-2 bg-[#1d253b] border border-green-400/50 
                             text-green-400 font-semibold rounded-xl shadow-md hover:bg-green-500/20 
                             transition-all text-sm md:text-base"
                >
                  <Eye size={18} />
                  View Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
