import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Home,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  Phone,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") !== "light"
  );
  const location = useLocation();

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    gsap.from(".nav-item", {
      y: -12,
      opacity: 0,
      stagger: 0.07,
      duration: 0.7,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const nav = [
    { to: "/", label: "Home", icon: <Home size={16} /> },
    { to: "/about", label: "About", icon: <User size={16} /> },
    { to: "/projects", label: "Projects", icon: <Briefcase size={16} /> },
    { to: "/contact", label: "Contact", icon: <Phone size={16} /> },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-neutral-900/50 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-xl font-bold text-indigo-400 animate-text-shimmer"
          >
            Arsh Rai
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="nav-item relative flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                {n.icon}
                {n.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Socials + Dark Toggle */}
          <div className="hidden md:flex items-center gap-3">
            
            <a
              href="mailto:arshrai2364@gmail.com"
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/arsh-rai-9a3119249/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/arsh-kodr"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <Github size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="md:hidden border-t border-white/10 bg-white/10 dark:bg-neutral-900/80 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="flex items-center gap-3 py-2 text-gray-300 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  {n.icon}
                  {n.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <button
                  onClick={() => setDark((s) => !s)}
                  className="p-2 rounded-lg hover:bg-white/10 transition"
                >
                  {dark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <a
                  href="mailto:arshrai2364@gmail.com"
                  className="p-2 rounded-lg hover:bg-white/10 transition"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/arsh-rai-9a3119249/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:bg-white/10 transition"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://github.com/arsh-kodr"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:bg-white/10 transition"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
