import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { gsap } from "gsap";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Contact() {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.querySelectorAll("input, textarea, button"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative min-h-screen px-6 py-20 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-gray-200 overflow-hidden flex items-center">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            color: { value: "#22d3ee" },
            opacity: { value: 0.4 },
            move: { enable: true, speed: 0.6 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="w-full max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Whether you have a project idea, collaboration opportunity, or just want to say hi —
          I’d love to hear from you.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10">
          {/* Contact Form */}
          <form
            ref={formRef}
            className="space-y-6 backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10"
          >
            <div className="relative">
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-gray-200 focus:outline-none focus:border-cyan-400 peer"
                placeholder=" "
              />
              <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-gray-200 focus:outline-none focus:border-cyan-400 peer"
                placeholder=" "
              />
              <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400">
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                required
                rows="4"
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-gray-200 focus:outline-none focus:border-cyan-400 peer resize-none"
                placeholder=" "
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400">
                Message
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(34,211,238,0.7)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition"
            >
              Send Message
            </motion.button>
          </form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6 backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10"
          >
            <p className="text-lg text-gray-300">Or reach me directly:</p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:arshrai2364@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
              >
                <Mail size={20} /> arshrai2364@gmail.com
              </a>
              <a
                href="tel:+917651815040"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
              >
                <Phone size={20} /> +91 7651815040
              </a>
              <a
                href="https://github.com/arsh-kodr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
              >
                <Github size={20} /> github.com/arsh-kodr
              </a>
              <a
                href="https://www.linkedin.com/in/arsh-rai-9a3119249/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
              >
                <Linkedin size={20} /> linkedin.com/in/arsh-rai-9a3119249/
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glow Cursor */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-32 h-32 rounded-full bg-cyan-400/20 blur-3xl -translate-x-1/2 -translate-y-1/2 z-50"
      ></div>
    </section>
  );
}
