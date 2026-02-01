import { Mail, Github, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/10 via-transparent to-transparent" />

      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Connect
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-400 mb-12"
        >
          Interested in working together? Get in touch.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <motion.a
            href="mailto:marko.mtp8@gmail.com"
            className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            marko.mtp8@gmail.com
          </motion.a>

          <motion.a
            href="https://github.com/MarkoMTP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all hover:-translate-y-1 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-gray-500"
        >
          <MapPin className="w-4 h-4" />
          <span>Padova, Italy</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
