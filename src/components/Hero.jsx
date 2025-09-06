// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

function Hero() {
  const handleHireMe = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen px-5 md:px-10 overflow-hidden text-center"
    >
      {/* Background with Blur + Gradient Overlay */}
      <div className="absolute inset-0 -z-9">
        <img
          src="background.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c]/90 via-[#111936]/85 to-[#0f172a]/85" />
      </div>

      {/* Text Section */}
      <motion.div
        className="max-w-6xl z-10 mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Subtitle */}
        <p className="uppercase tracking-widest text-green-400 font-semibold mb-4 text-sm md:text-base">
          Frontend Developer | Full Stack Developer | programmer
        </p>

        {/* Enlarged Name (Single Line, No Wrap) */}
       <motion.h1
  className="whitespace-nowrap text-[clamp(2.0rem,7vw,9rem)] 
             font-extrabold mb-6 leading-tight 
             bg-gradient-to-r from-white via-white/80 to-gray-300
             bg-clip-text text-transparent 
             drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.3 }}
>
  MADHUMITHA R.G
</motion.h1>


        {/* Info / Tagline with wave animation */}
        <motion.p
          className="text-lg md:text-xl text-green-400 font-medium mb-8 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          created with passion.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          I’m a{" "}
          <span className="text-green-400 font-medium">Full-Stack Developer</span> skilled in{" "}
          <span className="text-green-400 font-medium">React.js</span>,{" "}
          <span className="text-green-400 font-medium">Tailwind CSS</span>, and{" "}
          <span className="text-green-400 font-medium">JavaScript</span>. Passionate about
          building modern, responsive applications with clean, scalable code and delivering
          seamless user experiences.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Hire Me Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #22c55e" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleHireMe}
            className="flex items-center gap-3 px-8 py-3 bg-[#1d253b] border border-green-400/50 
                       text-green-400 font-semibold rounded-xl shadow-md hover:bg-green-500/20 
                       transition-all text-lg"
          >
            <FaBolt className="text-green-400" /> HIRE ME
          </motion.button>

          {/* Download CV Button */}
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #3b82f6" }}
            whileTap={{ scale: 0.95 }}
            href="/Madhumitha_resume(2) (1).pdf"
            download
            className="flex items-center gap-3 px-8 py-3 bg-[#1d253b] border border-blue-400/50 
                       text-blue-400 font-semibold rounded-xl shadow-md hover:bg-blue-500/20 
                       transition-all text-lg"
          >
            <FaBolt className="text-blue-400" /> DOWNLOAD CV
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
