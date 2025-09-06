import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Loading({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // 2.5s
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-[#0a0f2c] via-[#111936] to-[#0f172a]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Loader using Tailwind only */}
      <div className="relative w-16 h-16 animate-spin">
        <span className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
        <span className="absolute bottom-0 left-0 w-4 h-4 bg-blue-500 rounded shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
        <span className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
      </div>

      {/* Text */}
      <motion.p
        className="mt-8 text-lg font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-green-400 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        PORTFOLIO LOADING
      </motion.p>
    </motion.div>
  );
}
