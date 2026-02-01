import { Code2, Database, Palette, TestTube, Cloud, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const capabilities = [
  {
    icon: Code2,
    text: "Engineering mindset & systems thinking: designing scalable architectures from the ground up"
  },
  {
    icon: Database,
    text: "Building reliable backends and database schemas with PostgreSQL, Node.js, and Prisma ORM"
  },
  {
    icon: Palette,
    text: "Shipping polished, responsive UIs with React, TailwindCSS, and modern tooling"
  },
  {
    icon: TestTube,
    text: "Testing culture: writing comprehensive tests (unit, integration, E2E) to prevent production failures"
  },
  {
    icon: Cloud,
    text: "Deploying and maintaining applications in production on Vercel, Railway, and cloud platforms"
  },
  {
    icon: Zap,
    text: "Building AI-powered automations and SaaS-style workflows when they improve systems"
  }
];

export default function WhatIBuild() {
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          What I help teams <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">build</span>
        </h2>

        <motion.div
          ref={ref}
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <capability.icon className="w-6 h-6 text-cyan-400" />
                </motion.div>
                <p className="text-lg text-gray-300 leading-relaxed pt-2">
                  {capability.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
