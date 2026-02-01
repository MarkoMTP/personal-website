import { Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const arrowVariants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent animate-pulse-slow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_78%)]" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 text-sm font-medium">
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent leading-tight tracking-tight"
        >
          Marko Matković
        </motion.h1>

        {/* Positioning */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-200/90 mb-6 font-medium"
        >
          Building and shipping end-to-end web systems with a backend-first
          mindset.
        </motion.p>

        {/* Intro paragraph (unchanged) */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          I’ve spent over three years building full-stack systems and learning
          through hands-on work. I enjoy programming deeply — from designing
          clean architectures to testing and shipping reliable products
          end-to-end. Always learning, always improving, and excited to grow
          while solving real problems with a strong team.
        </motion.p>

        {/* Contact */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-gray-300"
        >
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-cyan-400" />
            <a
              href="mailto:marko.mtp8@gmail.com"
              className="text-lg hover:text-cyan-300 transition-colors"
            >
              marko.mtp8@gmail.com
            </a>
          </div>

          <div className="hidden sm:block h-5 w-px bg-white/10" />

          <a
            href="https://github.com/MarkoMTP"
            target="_blank"
            rel="noreferrer"
            className="text-lg hover:text-cyan-300 transition-colors"
          >
            github.com/MarkoMTP
          </a>

          <div className="hidden sm:block h-5 w-px bg-white/10" />

          <span className="text-lg text-gray-400">Padova, Italy</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={itemVariants} className="mt-16">
          <motion.div animate="animate" variants={arrowVariants}>
            <ArrowDown className="w-6 h-6 text-gray-600 mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
