import Hero from "./components/Hero";
import WhatIBuild from "./components/WhatIBuild";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Marko Matković. Built with React,
            TypeScript, and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
