import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-4 text-center relative"
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
          Arsh Rai
        </span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-2xl font-medium text-gray-300 mb-6 text-center"
      >
        <Typewriter
          options={{
            strings: [
              "MERN Stack Developer",
              "Backend Engineer",
              "Tech Enthusiast",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-2xl text-gray-400 text-center text-base md:text-lg mb-10"
      >
        I craft sleek, responsive, and high-performance applications that blend
        creativity with cutting-edge technology.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.8, staggerChildren: 0.2 },
          },
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Link
            to="/projects"
            className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium flex items-center justify-center gap-2 transition relative overflow-hidden group shadow-lg shadow-cyan-500/30"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight size={18} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition blur-xl"></div>
          </Link>
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-xl border border-gray-600 hover:border-cyan-500 hover:text-cyan-400 text-gray-300 font-medium flex items-center justify-center transition relative overflow-hidden group shadow-lg shadow-purple-500/20"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition blur-xl"></div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
