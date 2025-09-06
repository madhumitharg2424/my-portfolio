import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu after click
    } else {
      console.warn(`Section with id="${id}" not found!`);
    }
  };

  const menuItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "PROJECTS", id: "projects" },
    { name: "ACHIEVEMENTS", id: "achievements" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-6 py-4 fixed w-full top-0 z-50
                 bg-gradient-to-r from-[rgb(32,64,96)] to-[rgb(10,25,47)]
                 shadow-md border-b border-cyan-400/20"
    >
      {/* Left Side - Name */}
      <motion.h1
        whileHover={{ scale: 1.05, textShadow: "0px 0px 12px #38bdf8" }}
        className="text-2xl md:text-3xl font-extrabold tracking-wide text-white cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        MADHU
      </motion.h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-16 text-lg font-semibold">
        {menuItems.map((item) => (
          <motion.li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{
              scale: 1.1,
              color: "#38bdf8",
              textShadow: "0px 0px 8px #38bdf8",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer text-gray-300"
          >
            {item.name}
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        className="md:hidden text-cyan-400 text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </motion.button>

      {/* Mobile Dropdown */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full 
                     bg-gradient-to-b from-[rgb(32,64,96)] to-[rgb(10,25,47)]
                     flex flex-col items-center gap-6 py-6 
                     shadow-lg border-t border-cyan-400/20 md:hidden"
        >
          {menuItems.map((item) => (
            <motion.li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{
                scale: 1.1,
                color: "#38bdf8",
                textShadow: "0px 0px 8px #38bdf8",
              }}
              className="cursor-pointer text-gray-300 transition duration-300"
            >
              {item.name}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default Navbar;
