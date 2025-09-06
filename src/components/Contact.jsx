import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Mail, Send, User } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setFormData({ name: "", email: "", message: "" });
      setSuccess("✅ Message sent successfully!");
    } catch (error) {
      console.error("Error saving message:", error);
      setSuccess("❌ Failed to send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-[#0a0f2c] via-[#111936] to-[#0f172a] text-white"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg">
            I’d love to hear from you! <br />
            Whether it’s a project, a question, or just a friendly hello —
            let’s connect.
          </p>

          <div className="flex items-center gap-3 text-gray-300">
            <Mail className="text-green-400" />
            <a href="mailto:madhumitha0836@gmail.com" className="hover:underline">
              madhumitha0836@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="#" className="hover:text-green-400 transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#1d253b] p-10 rounded-2xl shadow-[0_0_25px_rgba(34,197,94,0.3),0_0_40px_rgba(59,130,246,0.3)] border border-green-400/20"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-green-500 via-blue-500 to-green-500 text-white shadow-lg shadow-green-500/30"
            >
              {loading ? "Sending..." : "Send"}
              <Send className="w-4 h-4" />
            </motion.button>
          </form>

          {success && (
            <p className="text-center mt-4 text-sm text-green-400">{success}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
