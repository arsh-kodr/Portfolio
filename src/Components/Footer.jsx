export default function Footer() {
  return (
    <footer className="border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Arsh Rai · MERN Stack Developer
      </div>
    </footer>
  );
}
