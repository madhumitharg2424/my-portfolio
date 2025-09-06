import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaTrophy,
  FaLaptopCode,
} from "react-icons/fa";

export default function Achievements() {
  const [modalImg, setModalImg] = useState(null);

  const certifications = [
    {
      title: "MongoDB Certification",
      issuer: "MongoDB University",
      date: "2024",
      desc: "Learned schema design, aggregation, and queries.",
      skills: ["MongoDB", "NoSQL", "Database"],
      link: "mongo.jpg",
    },
    {
      title: "JavaScript Certification",
      issuer: "SoloLearn",
      date: "2024",
      desc: "Built a strong foundation in modern JavaScript.",
      skills: ["JavaScript", "ES6+", "Frontend"],
      link: "sololearn.jpg",
    },
    {
      title: "JAVA developer environment ",
      issuer: "Infosys Springboard",
      date: "2024",
      desc: "Completed structured corporate training modules.",
      skills: ["JDK", "Problem Solving", "Industry Standards"],
      link: "javai.jpg",
    },
    {
      title: "GIT AND GITHUB Certification",
      issuer: "Udemy",
      date: "2025",
      desc: "Completed structured corporate training modules.",
      skills: ["Version control", "Industry Standards"],
      link: "udemy.jpg",
    },
  ];

  const hackathons = [
    {
      title: "Special Mention – 8-Hour Hackathon",
      event: "Meenakshi Sundararajan College of Engineering",
      date: "2023",
      desc: "Team Lead • Developed a full-stack project in under 8 hours.",
      link: "hack8.jpg",
      skills: ["React", "Node.js", "Teamwork"],
    },
    {
      title: "24-Hour Hackathon",
      event: "SVC College",
      date: "2022",
      desc: "Participant • Built a scalable app within 24 hours.",
      link: "/certificates/hackathon2.png",
      skills: ["Full-Stack", "Agile", "Problem Solving"],
    },
  ];

  const stats = [
    { icon: <FaGraduationCap />, label: "CGPA", value: 9.0,color: "text-green-400" },
    { icon: <FaCertificate />, label: "Certifications", value: 4, color: "text-blue-400" },
    { icon: <FaTrophy />, label: "Hackathons", value: 2, color: "text-green-400" },
    { icon: <FaLaptopCode />, label: "Projects", value: 4, color: "text-blue-400" },
  ];

  return (
    <section
      id="achievements"
      className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-[#0a0f2c] via-[#111936] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-blue-400/10 to-transparent blur-2xl opacity-30 animate-pulse" />
      </div>

      {/* Modal Overlay */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setModalImg(null)}
        >
          <motion.img
            src={modalImg}
            alt="Certificate"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="max-w-3xl w-full rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-[#1d253b] p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-xl transition hover:scale-105"
          >
            <div className={`text-4xl ${stat.color} mb-2 animate-pulse`}>
              {stat.icon}
            </div>
            <motion.div
              initial={{ textContent: 0 }}
              whileInView={{ textContent: stat.value }}
              transition={{ duration: 1 }}
              className="text-2xl font-bold"
            >
              {stat.value}
            </motion.div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Section Heading */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
        >
          Certifications & Hackathon 
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          A glimpse into the milestones that shaped my journey as a developer.
        </motion.p>
      </div>

      {/* Certifications */}
      <div className="flex flex-wrap gap-8 justify-center mb-20 relative z-10">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1d253b] p-6 rounded-2xl shadow-lg border border-green-400/40 hover:shadow-green-400/40 hover:border-green-400/70 transition w-full md:w-[45%]"
          >
            <h3 className="text-xl font-bold text-green-400">{cert.title}</h3>
            <p className="text-sm text-gray-400">
              {cert.issuer} • {cert.date}
            </p>
            <p className="mt-2 text-gray-300">{cert.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-green-400/10 text-green-400 border border-green-400/30"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={() => setModalImg(cert.link)}
              className="mt-4 px-4 py-2 text-sm font-semibold rounded-full bg-green-400/10 text-green-400 border border-green-400/30 hover:bg-green-400/20 hover:scale-105 transition-all hover:shadow-lg"
            >
              View Certificate
            </button>
          </motion.div>
        ))}
      </div>

      {/* Hackathons */}
      <div className="text-center mb-10 text-3xl font-bold text-blue-400">
        Hackathons
      </div>
      <div className="flex flex-wrap gap-8 justify-center relative z-10">
        {hackathons.map((hack, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1d253b] p-6 rounded-2xl shadow-lg border border-blue-400/40 hover:shadow-blue-400/40 hover:border-blue-400/70 transition w-full md:w-[45%]"
          >
            <h3 className="text-xl font-bold text-blue-400">{hack.title}</h3>
            <p className="text-sm text-gray-400">
              {hack.event} • {hack.date}
            </p>
            <p className="mt-2 text-gray-300">{hack.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {hack.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/30"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={() => setModalImg(hack.link)}
              className="mt-4 px-4 py-2 text-sm font-semibold rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/30 hover:bg-blue-400/20 hover:scale-105 transition-all hover:shadow-lg"
            >
              View Certificate
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
