import { ExternalLink, Github, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectLink {
  label: string;
  url: string;
  icon?: "github" | "external";
}

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  imageUrl: string; // ✅ added
  year?: string;
  status?: "Live" | "In progress" | "Archived";
  role?: string;
  highlights?: string[];
  features?: string[];
  architecture?: string[];
  challenges?: string[];
  links?: ProjectLink[];
}

const projects: Project[] = [
  {
    title: "Blog Platform",
    tagline:
      "Full-stack blogging system with role-based dashboards and secure auth.",
    description:
      "A complete blog platform with separate experiences for creators and readers. Includes authentication, comments, and a clean admin workflow for publishing content.",
    imageUrl:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Passport.js",
      "TailwindCSS",
      "Vite",
    ],
    year: "2025",
    status: "Live",
    role: "Full-stack — API, DB schema, auth, UI, deployments.",
    highlights: [
      "Role-based access (creator/admin vs. reader)",
      "Secure auth flow with JWT + Passport",
      "Separate admin + user frontends",
    ],
    features: [
      "Authentication + protected routes",
      "Create/edit/publish posts",
      "Comments and moderation-ready structure",
      "Dashboards for different user types",
    ],
    architecture: [
      "REST API (Express) + Prisma ORM",
      "PostgreSQL relational schema",
      "Two React clients consuming the same API",
    ],
    challenges: [
      "Designing a clean RBAC model",
      "Keeping API contracts stable across two frontends",
      "Deployment + environment variable management",
    ],
    links: [
      {
        label: "Backend",
        url: "https://github.com/MarkoMTP/Blog-Digital-Marketing",
        icon: "github",
      },
      {
        label: "Frontend (Admin)",
        url: "https://github.com/MarkoMTP/Digital-Marketing-Blog-front-end-admin",
        icon: "github",
      },
      {
        label: "Frontend (User)",
        url: "https://github.com/MarkoMTP/blog-digital-marketing-frontend-user-",
        icon: "github",
      },
      {
        label: "Live Demo (Admin)",
        url: "https://digital-marketing-blog-front-end-ad.vercel.app/",
        icon: "external",
      },
      {
        label: "Live Demo (User)",
        url: "https://blog-digital-marketing-frontend-use.vercel.app/",
        icon: "external",
      },
    ],
  },
  {
    title: "Where's Waldo",
    tagline: "Image-based game with backend validation + leaderboard.",
    description:
      "Interactive “find the character” game. The backend validates clicks server-side (anti-cheat friendly), tracks time, and stores leaderboard entries.",
    imageUrl:
      "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "TailwindCSS",
      "Vite",
    ],
    year: "2024",
    status: "Live",
    role: "Full-stack — gameplay logic, API validation, leaderboard.",
    highlights: [
      "Server-side click validation",
      "Leaderboard + timer",
      "Fast, responsive UI",
    ],
    features: [
      "Click validation against target coordinates",
      "Timer + completion flow",
      "Leaderboard persistence",
      "Mobile-friendly gameplay layout",
    ],
    architecture: ["React SPA + REST API", "Prisma + PostgreSQL for scores"],
    challenges: [
      "Preventing easy client-side cheating",
      "Balancing UX speed with server validation",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MarkoMTP/Where-Is-Waldo",
        icon: "github",
      },
      {
        label: "Live Demo",
        url: "https://where-is-waldo-gamma.vercel.app/",
        icon: "external",
      },
    ],
  },
  {
    title: "MarsChat",
    tagline: "Telegram-style messaging (no WebSockets, no read receipts).",
    description:
      "A messaging app focused on solid backend logic: inbox management, message history, and group behavior using standard HTTP flows (no WebSockets).",
    imageUrl:
      "https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "TailwindCSS",
      "Vite",
    ],
    year: "2025",
    status: "Live",
    role: "Full-stack — auth, messaging endpoints, UI, integration tests.",
    highlights: ["Group inbox logic", "JWT auth + protected API"],
    features: [
      "Create 1:1 and group inboxes",
      "Send/read/delete messages",
      "HTTP-based updates (no sockets)",
    ],
    architecture: [
      "REST API with JWT auth",
      "Relational data model for inboxes/users/messages",
      "Frontend fetch strategy for updates",
    ],
    challenges: [
      "Designing clean message/inbox relationships",
      "Keeping UI consistent across inbox states",
      "Writing reliable integration tests",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MarkoMTP/MarsChat",
        icon: "github",
      },
      {
        label: "Live Demo",
        url: "https://mars-chat.vercel.app/",
        icon: "external",
      },
    ],
  },
  {
    title: "Uploadify",
    tagline: "Drive-like file manager with folders, uploads, and auth.",
    description:
      "A Google Drive-style experience: create folders, upload files, navigate structure, and manage access via authentication. Uses Cloudinary for uploads and Railway for deployment.",
    imageUrl:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tech: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "JWT",
      "Passport.js",
      "EJS",
      "Railway",
    ],
    year: "2025",
    status: "Live",
    role: "Full-stack — file flow, API, DB, auth, deployment.",
    highlights: [
      "Folder hierarchy",
      "Cloud uploads",
      "Auth-protected resources",
    ],
    features: [
      "Authentication + protected file routes",
      "Folder creation + navigation",
      "Uploads via Cloudinary integration",
      "File listing + management UX",
    ],
    architecture: [
      "Express backend with EJS views",
      "Prisma schema modeling folder tree",
      "Cloudinary storage for uploads",
    ],
    challenges: [
      "Modeling folder relationships cleanly",
      "Handling uploads + metadata safely",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MarkoMTP/MyDrive",
        icon: "github",
      },
      {
        label: "Live Demo",
        url: "https://mydrive-production.up.railway.app/",
        icon: "external",
      },
    ],
  },
  {
    title: "Memory Card Game",
    tagline: "Classic memory game with clean component architecture.",
    description:
      "A polished memory game built with reusable React components and simple, predictable state updates. Focused on clean logic and UI responsiveness.",
    imageUrl:
      "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tech: ["React", "TailwindCSS", "Vite"],
    year: "2023",
    status: "Live",
    role: "Frontend — game logic, UI components, styling.",
    highlights: [
      "Simple and clean state logic",
      "Reusable components",
      "Responsive layout",
    ],
    features: ["Score tracking", "Shuffle logic", "Clear win/lose loop"],
    architecture: ["React components + local state"],
    challenges: [
      "Avoiding state bugs during shuffle",
      "Keeping re-renders predictable",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MarkoMTP/Memory-card-game",
        icon: "github",
      },
      {
        label: "Live Demo",
        url: "https://memory-card-game-khaki.vercel.app/",
        icon: "external",
      },
    ],
  },
];

export default function Projects() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const shineVariants = {
    initial: { x: "-100%" },
    hover: {
      x: "100%",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/10 hover:border-cyan-500/50 transition-all"
            >
              {/* ✅ Image Header */}
              <motion.div
                className="h-52 relative overflow-hidden"
                whileHover="hover"
              >
                <img
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* overlays for readability + futuristic look */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

                {/* shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  variants={shineVariants}
                  initial="initial"
                />

                {/* icon */}
                <motion.div
                  className="absolute bottom-4 right-4"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Code2 className="w-12 h-12 text-cyan-300/70 drop-shadow" />
                </motion.div>
              </motion.div>

              <div className="p-6">
                <motion.h3
                  className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-sm text-gray-300/80 mb-3">
                  {project.tagline}
                </p>

                <p className="text-gray-400 mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {project.status && (
                    <span className="px-2 py-1 text-xs rounded border border-white/10 bg-white/5 text-gray-300">
                      {project.status}
                    </span>
                  )}
                  {project.year && (
                    <span className="px-2 py-1 text-xs rounded border border-white/10 bg-white/5 text-gray-300">
                      {project.year}
                    </span>
                  )}
                  {project.role && (
                    <span className="px-2 py-1 text-xs rounded border border-cyan-500/20 bg-cyan-500/10 text-cyan-200">
                      {project.role}
                    </span>
                  )}
                </div>

                {(project.highlights?.length ||
                  project.features?.length ||
                  project.architecture?.length ||
                  project.challenges?.length) && (
                  <details className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4 open:bg-white/10 transition-all">
                    <summary className="cursor-pointer text-sm text-gray-200 select-none">
                      More details
                      <span className="ml-2 text-gray-400">
                        (features, architecture, challenges)
                      </span>
                    </summary>

                    <div className="mt-4 space-y-4">
                      {project.highlights?.length ? (
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                            Highlights
                          </p>
                          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                            {project.highlights.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {project.features?.length ? (
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                            Key features
                          </p>
                          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                            {project.features.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {project.architecture?.length ? (
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                            Architecture
                          </p>
                          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                            {project.architecture.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {project.challenges?.length ? (
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                            Challenges
                          </p>
                          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                            {project.challenges.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </details>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-gray-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links?.map((link, i) => {
                    const isExternal = link.icon === "external";
                    const Icon = isExternal ? ExternalLink : Github;

                    return (
                      <motion.a
                        key={`${link.label}-${i}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all border ${
                          isExternal
                            ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border-cyan-500/30 hover:from-cyan-500/30 hover:to-violet-500/30"
                            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-violet-500/50"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
