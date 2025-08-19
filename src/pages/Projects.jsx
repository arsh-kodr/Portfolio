import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Job Tracker Dashboard",
    desc: "A job application tracking dashboard with modern UI, built using React and TailwindCSS.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/arsh-kodr",
    live: "https://job-application-tracker-dashboard.vercel.app/",
  },
  {
    title: "Madhyam - Blog UI",
    desc: "A sleek and responsive blogging platform UI created with React.",
    tech: ["React", "TailwindCSS"],
    github: "https://github.com/arsh-kodr",
    live: "https://blog-ui-two-rust.vercel.app/",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio showcasing my journey, skills, and projects with premium animations.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/arsh-kodr",
    live: "https://portfolio-rho-ochre-fcjx8bmtw7.vercel.app/",
  },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section className="relative min-h-screen px-6 py-20 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-gray-200">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        My <span className="text-gray-100">Projects</span>
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="group relative p-6 rounded-2xl border border-white/10 
                       bg-white/5 backdrop-blur-xl shadow-lg 
                       hover:shadow-xl hover:border-white/20 transition-all duration-500"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-white group-hover:text-gray-100 transition">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full 
                             bg-neutral-800 border border-white/10 text-gray-300 
                             transition"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 border border-white/10 rounded-full 
                           hover:bg-neutral-700 transition"
              >
                <Github size={18} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 border border-white/10 rounded-full 
                           hover:bg-neutral-700 transition"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
