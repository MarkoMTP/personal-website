import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "JavaScript (ES6+)",
      "React",
      "React Router",
      "Vite",
      "TailwindCSS",
      "HTML5",
      "CSS3",
      "Axios / Fetch API",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "Prisma ORM",
      "PostgreSQL",
      "JWT Authentication",
      "Passport.js (Sessions)",
      "Middleware & CORS",
      "Error Handling",
      "EJS (Server-Side Rendering)",
    ],
  },
  {
    title: "Testing",
    skills: [
      "Vitest",
      "React Testing Library",
      "Supertest",
      "Playwright (End-to-End)",
    ],
  },
  {
    title: "Deployment & Tooling",
    skills: [
      "Vercel",
      "Railway",
      "Render",
      "Cloudinary",
      "Git & GitHub",
      "Environment Variables (.env)",
      "Postman / Thunder Client",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "n8n",
      "Make.com",
      "OpenAI API (GPT-4 / GPT-4o / Whisper)",
      "Voiceflow",
      "ManyChat",
      "Workflow Automation",
      "AI-Powered SaaS Systems",
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.35 },
    }),
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Tech{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Stack
          </span>
        </h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/50 transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    custom={skillIndex}
                    variants={chipVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(6, 182, 212, 0.1)",
                    }}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
