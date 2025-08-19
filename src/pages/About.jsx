import { motion } from "framer-motion";
import { GraduationCap, Code2 } from "lucide-react";

const timeline = [
  {
    year: "2023 - Present",
    title: "MERN Stack Developer",
    desc: "Currently learning MERN stack with focus on building scalable, user-friendly, and performance-driven web applications. Hands-on with React, TailwindCSS, Git, and GitHub.",
    icon: <Code2 className="text-blue-400" size={22} />,
  },
  {
    year: "2022 - 2025",
    title: "Bachelor of Computer Applications (BCA)",
    desc: "Pursuing BCA at Babu Banarasi Das University, Lucknow with a CGPA of 8.5. Focused on software development, programming, and problem-solving.",
    icon: <GraduationCap className="text-purple-400" size={22} />,
  },
  {
    year: "2019 - 2022",
    title: "Schooling",
    desc: "Completed 10th with 78% (2020) and 12th with 80% (2022) from Amrit Public School (CBSE Board).",
    icon: <GraduationCap className="text-gray-400" size={22} />,
  },
];

const skills = [
  { name: "React.js", color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", color: "from-yellow-500 to-yellow-600" },
  { name: "HTML & CSS", color: "from-orange-400 to-orange-500" },
  { name: "Node.js", color: "from-green-600 to-green-700" },
  { name: "Express.js", color: "from-gray-700 to-gray-900" },
  { name: "MongoDB", color: "from-emerald-600 to-emerald-700" },
  { name: "TailwindCSS", color: "from-sky-500 to-sky-600" },
  { name: "Git & GitHub", color: "from-orange-500 to-orange-600" },
];

export default function About() {
  return (
    <section className="relative min-h-screen px-6 py-20 bg-neutral-950 text-gray-200 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#2a2a2a15_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
      >
        About <span className="text-blue-400">Me</span>
      </motion.h2>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-16"
      >
        I'm <span className="text-gray-100 font-medium">Arsh Rai</span>, a BCA
        student and aspiring <span className="text-gray-100 font-medium">MERN Stack Developer</span>.  
        I love building modern web applications with clean UI, scalable backend, and smooth user experience.  
        Skilled in HTML, CSS, JavaScript, React, TailwindCSS, Git & GitHub – and expanding into Node.js, Express.js, and MongoDB.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 relative z-10">
        {/* Journey */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Journey</h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-400/40 transition">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold group-hover:text-blue-300 transition">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400">{item.year}</p>
                  <p className="mt-2 text-gray-300 text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white font-semibold shadow-md text-center`}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
