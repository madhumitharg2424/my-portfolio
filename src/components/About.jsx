// src/components/About.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaBolt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiPython,
  SiCplusplus,
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Python", icon: <SiPython /> },
    
  ];

  const quickFacts = [
    "B.Tech Information Technology",
    "Full-Stack Developer (MERN + MySQL)",
    "Experience with Hackathons & Projects",
    "Open to Collaboration & Learning",
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-20 bg-gradient-to-br from-[#0a0f2c] via-[#111936] to-[#0f172a] text-white"
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          About 
        </motion.h2>

        {/* Intro + Quick Facts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            I’m{" "}
            <span className="text-green-400 font-semibold">Madhumitha</span>, a{" "}
            <span className="text-blue-400">Full-Stack Developer</span> with a strong
            foundation in the{" "}
            <span className="text-green-400">MERN stack</span> and{" "}
            <span className="text-blue-400">Java/MySQL backends</span>. Passionate
            about building{" "}
            <span className="text-green-400">scalable apps</span> with clean design and
            seamless user experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-base">
            {quickFacts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-[#1d253b]/70 px-6 py-4 rounded-xl border border-green-400/40 shadow-md hover:shadow-green-400/40 hover:border-green-400 transition"
              >
                {fact}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-10 text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text"
        >
          Skills & Tools
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 25px rgba(34,197,94,0.7)",
              }}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-[#1d253b]/60 border border-green-400/40 text-green-400 shadow-md cursor-pointer transition"
            >
              <span className="text-4xl">{skill.icon}</span>
              <p className="font-medium text-sm">{skill.name}</p>
            </motion.div>
          ))}
        </div>

       

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex gap-10 mt-14"
        >
          <a
            href="https://github.com/madhumitharg2424"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-400 transition transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/madhu-mitha-2b9b132a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/9025917205"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-400 transition transform hover:scale-125"
          >
            <FaWhatsapp />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
