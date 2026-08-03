import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "EHub – Event Management System",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
      description:
        "A full-stack event management system for creating, managing, and registering for events. Includes user management, event operations, and database integration.",
      tech: ["React.js", "Spring Boot", "MySQL", "JWT"],
    },

    {
      title: "InterviewAI – AI Mock Interview Platform",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
      description:
        "An AI-powered mock interview platform designed to help students practice interviews through different categories, questions, sessions, and secure authentication.",
      tech: ["React.js", "Spring Boot", "MySQL", "JWT", "Groq API"],
    },

    {
      title: "RealMindQuiz – Engineering Placement Quiz",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      description:
        "An interactive engineering placement quiz platform with login/signup, multiple difficulty levels, question management, and a streak-based learning experience.",
      tech: ["React.js", "Firebase", "Firestore"],
    },

    {
      title: "E-Commerce Website",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      description:
        "An online shopping platform with authentication, product browsing, cart management, and order placement. Firebase is used for authentication and database functionality.",
      tech: ["React.js", "Firebase", "Firestore"],
    },

    {
      title: "Plant Disease Detection",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
      description:
        "An AI-based plant disease detection application that analyzes plant images and helps identify possible diseases to support early detection and crop health monitoring.",
      tech: ["Python", "Machine Learning", "OpenCV", "Streamlit"],
    },

    {
      title: "Criminal Identification System",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
      description:
        "A computer vision based hackathon project that analyzes images to detect age and gender attributes. Includes image upload, webcam integration, and a criminal database interface.",
      tech: ["Python", "OpenCV", "Streamlit"],
    },

    {
      title: "RescueVision AI",
      image:
        "https://images.unsplash.com/photo-1581091870622-3c8f1c9a1b2b?auto=format&fit=crop&w=1200&q=80",
      description:
        "An AI-based disaster rescue application that analyzes drone or thermal video footage and detects human posture such as a person lying down to support emergency response.",
      tech: ["Python", "OpenCV", "Machine Learning", "Streamlit"],
    },

    {
      title: "Blockchain Aid Project",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
      description:
        "A blockchain-based aid management concept designed to improve transparency in donation and aid distribution by recording transactions securely and providing traceability.",
      tech: ["Blockchain", "JavaScript", "Web3", "Smart Contracts"],
    },

    {
      title: "AI Resume Analyser",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      description:
        "An AI-powered resume analysis application designed to analyze resumes and provide useful insights for improving job applications and recruitment workflows.",
      tech: ["TypeScript", "AI", "NLP"],
    },

    {
      title: "Ethical Hire AI",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
      description:
        "An AI-focused hiring project exploring ethical and intelligent approaches to recruitment and candidate evaluation.",
      tech: ["TypeScript", "AI", "Machine Learning"],
    },

    {
      title: "PlayStation Analysis",
      image:
        "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1200&q=80",
      description:
        "A data-oriented project for exploring and analyzing PlayStation-related information and trends.",
      tech: ["TypeScript", "Data Analysis"],
    },

    {
      title: "Climate & Weather Application",
      image:
        "https://images.unsplash.com/photo-1561485132-59468cd0b553?auto=format&fit=crop&w=1200&q=80",
      description:
        "A Python-based climate and weather project focused on working with environmental and weather-related information.",
      tech: ["Python", "Data Analysis"],
    },

    {
      title: "Quiz Web Application",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      description:
        "An interactive quiz web application designed to provide users with an engaging way to answer questions and test their knowledge.",
      tech: ["JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-[#0a0f2c] via-[#111936] to-[#0f172a] text-white overflow-hidden"
    >
      <div className="container mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          My Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="bg-[#1d253b]/90 rounded-2xl shadow-lg border border-green-400/30 overflow-hidden flex flex-col"
            >

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />

                <span className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-blue-400 text-xs font-semibold px-3 py-1 rounded-full shadow-md text-black">
                  Featured
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-green-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.08 }}
                      className="bg-[#111936] border border-green-400/30 text-green-300 text-xs px-3 py-1 rounded-full shadow-md"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}