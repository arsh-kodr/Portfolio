import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    const moveGlow = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <>
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-32 h-32 rounded-full bg-cyan-400/20 blur-3xl -translate-x-1/2 -translate-y-1/2 z-50"
      ></div>

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
