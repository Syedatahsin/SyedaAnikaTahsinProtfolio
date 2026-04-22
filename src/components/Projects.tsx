"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, CodeXml, ShieldCheck, ExternalLink,
  AlertTriangle, Milestone, RefreshCw, X
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SiPrisma, SiTailwindcss, SiNextdotjs, SiExpress, SiPostgresql, SiTypescript, SiStripe } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "SkillBridge",
    tagline: "E-LEARNING REVOLUTION",
    description: "Connect with top-tier tutors, browse verified ratings, and book personalized 1-on-1 sessions. Your journey to mastery starts with the right teacher.",
    liveLink: "https://addtionalfeaturesskillbridgefronten.vercel.app/",
    githubLink: "https://github.com/Syedatahsin/SkillBridge-Frontend",
    challenges: [
      "Integrating Stripe for complex marketplace payments was a major learning curve.",
      "Cookie-based authentication handling differed significantly between local and Vercel environments.",
      "First time deploying a full-stack integrated application on a production scale."
    ],
    futurePlans: [
      "Direct-to-teacher payments via Stripe Connect (removing admin bottleneck).",
      "Automated refund system and session cancellation workflows.",
      "Real-time video conferencing integration for sessions."
    ],
    color: "from-pink-600 to-rose-600",
    glow: "rgba(236, 72, 153, 0.4)",
    mockups: ["/project1.png", "/projectpic2.png", "/project3.png", "/project4.png", "/project5.png", "/project6.png", "/project7.png", "/project8.png"],
    tech: [
      { name: "Typescript", icon: <SiTypescript size={16} className="text-[#3178C6]" /> },
      { name: "Next.js", icon: <SiNextdotjs size={16} className="text-foreground" /> },
      { name: "Express", icon: <SiExpress size={16} className="text-foreground" /> },
      { name: "Prisma", icon: <SiPrisma size={16} className="text-foreground" /> },
      { name: "Tailwind", icon: <SiTailwindcss size={16} className="text-[#06B6D4]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} className="text-[#4169E1]" /> },
      { name: "Stripe", icon: <SiStripe size={16} className="text-[#635BFF]" /> },
      { name: "Better Auth", icon: <ShieldCheck size={16} className="text-emerald-500" /> },
    ]
  }
];

export default function Projects() {
  const [index] = useState<number>(0);
  const [isBloomed, setIsBloomed] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const visualizerRef = useRef<HTMLDivElement>(null);

  const project = projects[index];

  const getBloomCoords = (i: number) => {
    const angle = (360 / 7) * i - 90;
    const radius = 160;
    const radian = (angle * Math.PI) / 180;
    return { x: Math.cos(radian) * radius, y: Math.sin(radian) * radius, rotate: angle + 90 };
  };

  return (
    <section id="projects" className="py-16 sm:py-24 overflow-hidden min-h-screen flex flex-col items-center relative">
      

      {/* Animated background glows */}
      <motion.div
        className="absolute top-10 right-[-100px] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.1), transparent 70%)", filter: "blur(80px)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-[-80px] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)", filter: "blur(70px)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="w-full text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto italic text-sm sm:text-base">&quot;Where logic meets creativity and code comes to life.&quot;</p>
        </motion.div>

        {/* Content grid — stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.2fr] gap-8 sm:gap-12 items-start">

          {/* LEFT: INFO */}
          <div className="space-y-8 sm:space-y-12 order-2 md:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="space-y-4 sm:space-y-6"
            >
              <motion.span
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="font-mono text-pink-500 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-black px-3 py-1 bg-pink-500/10 rounded-full border border-pink-500/20"
              >
                {project.tagline}
              </motion.span>
              <motion.h2
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
              >
                {project.title}
              </motion.h2>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-muted-foreground text-base sm:text-lg md:text-xl border-l-[6px] border-pink-500/50 pl-6 sm:pl-8 py-2 max-w-xl"
              >
                {project.description}
              </motion.p>

              {/* Links */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveLink}
                  target="_blank"
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-black text-sm sm:text-base shadow-xl shadow-pink-500/20 transition-all"
                >
                  <ExternalLink size={20} /> Live Experience
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-muted/50 border border-border hover:bg-muted font-bold text-sm sm:text-base transition-all"
                >
                  <FaGithub size={20} /> Source Code
                </motion.a>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="space-y-4 pt-6"
              >
                <h4 className="font-black flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-foreground/60">
                  <CodeXml className="text-pink-500" size={16} /> Technical Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.1, borderColor: "rgba(236, 72, 153, 0.5)" }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-card/50 backdrop-blur-md border border-border text-xs sm:text-sm font-black transition-all cursor-default shadow-sm"
                    >
                      {t.icon} {t.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="pt-8"
              >
                <button
                  onClick={() => { setIsBloomed(!isBloomed); setShowDetails(!showDetails); }}
                  className="group flex items-center gap-3 text-pink-500 font-black uppercase tracking-widest text-sm sm:text-base"
                >
                  <span className="relative">
                    {showDetails ? "Collapse Analysis" : "Explore Project Architecture"}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-500 transition-all group-hover:w-full" />
                  </span>
                  <motion.div
                    animate={showDetails ? { rotate: 90 } : { rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: BLOOM VISUALIZER */}
          <div
            ref={visualizerRef}
            className="relative h-[350px] sm:h-[450px] md:h-[600px] flex items-center justify-center order-1 md:order-2"
          >
            {/* Ambient Background Glow for visualizer */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-[120px] rounded-full pointer-events-none"
            />

            {/* Main Mockup */}
            <motion.div 
              layout 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
              className="relative z-30 w-[95%] sm:w-[420px] md:w-[480px] aspect-video rounded-3xl border-[6px] border-background shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden bg-card transition-all duration-700"
            >
              <img src={project.mockups[0]} alt="main" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000" />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 hover:opacity-10 transition-opacity`} />
            </motion.div>


            {/* Petals (bloom) */}
            {project.mockups.slice(1).map((m, i) => {
              const bloom = getBloomCoords(i);
              return (
                <motion.div
                  key={i}
                  animate={isBloomed ? { scale: 1, x: bloom.x, y: bloom.y, rotate: bloom.rotate, opacity: 1 } : { scale: 0, x: 0, y: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.05 }}
                  className="absolute z-20 w-24 h-16 sm:w-32 sm:h-24 md:w-40 md:h-28 bg-card rounded-lg sm:rounded-xl border border-border shadow-2xl overflow-hidden"
                >
                  <img src={m} alt="petal" className="object-cover w-full h-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FLOATING DETAIL OVERLAY */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-5xl z-50 bg-card/90 backdrop-blur-2xl border border-white/10 rounded-[24px] sm:rounded-[40px] p-5 sm:p-8 md:p-12 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-h-[80vh] overflow-y-auto"
          >
            <button onClick={() => setShowDetails(false)} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-muted rounded-full"><X size={18} /></button>

            {/* Challenges */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 text-rose-500 font-black uppercase text-xs sm:text-sm tracking-[0.2em]">
                <AlertTriangle size={18} /> Challenges Overcome
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {project.challenges.map((c, i) => (
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} key={i} className="flex gap-3 sm:gap-4 text-muted-foreground bg-muted/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-border/50">
                    <span className="text-rose-500 font-mono text-sm">0{i + 1}</span>
                    <p className="text-xs sm:text-sm italic">{c}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Future */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 text-emerald-500 font-black uppercase text-xs sm:text-sm tracking-[0.2em]">
                <RefreshCw size={18} /> Future Roadmap
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {project.futurePlans.map((p, i) => (
                  <motion.li initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} key={i} className="flex gap-3 sm:gap-4 text-muted-foreground bg-emerald-500/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-emerald-500/10">
                    <Milestone className="text-emerald-500 shrink-0" size={16} />
                    <p className="text-xs sm:text-sm font-medium">{p}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}