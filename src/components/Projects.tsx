"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, Layers, Sparkles, CodeXml,
  ShieldCheck, ExternalLink, AlertTriangle,
  Milestone, RefreshCw, X
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
      { name: "Typescript", icon: <SiTypescript size={18} className="text-[#3178C6]" /> },
      { name: "Next.js", icon: <SiNextdotjs size={18} className="text-foreground" /> },
      { name: "Express", icon: <SiExpress size={18} className="text-foreground" /> },
      { name: "Prisma", icon: <SiPrisma size={18} className="text-foreground" /> },
      { name: "Tailwind", icon: <SiTailwindcss size={18} className="text-[#06B6D4]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={18} className="text-[#4169E1]" /> },
      { name: "Stripe", icon: <SiStripe size={18} className="text-[#635BFF]" /> },
      { name: "Better Auth", icon: <ShieldCheck size={18} className="text-emerald-500" /> },
    ]
  }
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isBloomed, setIsBloomed] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // New state for the detail panel
  const visualizerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const project = projects[index];

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!visualizerRef.current) return;
    const rect = visualizerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setMousePos({ x, y });
  };

  const getBloomCoords = (i: number) => {
    const angle = (360 / 7) * i - 90;
    const radius = 240;
    const radian = (angle * Math.PI) / 180;
    return { x: Math.cos(radian) * radius, y: Math.sin(radian) * radius, rotate: angle + 90 };
  };

  return (
    <section id="projects" className="pt-24 pb-32 bg-background text-foreground overflow-hidden min-h-screen flex flex-col items-center relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="w-full text-center relative z-20 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Project</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto italic">&quot;Where logic meets creativity and code comes to life.&quot;</p>
      </motion.div>

      <div className="container max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr,1.2fr] gap-12 items-center relative z-10">

        {/* --- LEFT: INFO & LINKS --- */}
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <span className="font-mono text-pink-500 text-xs tracking-widest uppercase font-bold">{project.tagline}</span>
            <h2 className="text-6xl font-black tracking-tighter">{project.title}</h2>
            <p className="text-muted-foreground text-lg border-l-2 border-pink-500/30 pl-6">{project.description}</p>
          </motion.div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-4">
            <a href={project.liveLink} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-all">
              <ExternalLink size={18} /> Live Demo
            </a>
            <a href={project.githubLink} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted transition-all">
              <FaGithub size={18} /> Repository
            </a>
          </div>

          {/* Tech Architecture Stack */}
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2 text-sm uppercase tracking-widest"><CodeXml className="text-pink-500 w-4 h-4" /> Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-bold group hover:border-pink-500/50 transition-colors">
                  {t.icon} {t.name}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => { setIsBloomed(!isBloomed); setShowDetails(!showDetails); }}
              className="flex items-center gap-3 text-pink-500 font-black uppercase tracking-tighter hover:gap-5 transition-all"
            >
              {showDetails ? "Close Details" : "View Project Deep Dive"} <ChevronRight />
            </button>
          </div>
        </div>

        {/* --- RIGHT: BLOOM VISUALIZER --- */}
        <div ref={visualizerRef} onMouseMove={handleMouseMove} onMouseLeave={() => setMousePos({ x: 0, y: 0 })} className="relative h-[600px] flex items-center justify-center">
          {/* Main Mockup */}
          <motion.div layout className="relative z-30 w-[440px] aspect-video rounded-2xl border-4 border-border shadow-2xl overflow-hidden bg-card">
            <img src={project.mockups[0]} alt="main" className="object-cover w-full h-full" />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
          </motion.div>

          {/* Petals */}
          {project.mockups.slice(1).map((m, i) => {
            const bloom = getBloomCoords(i);
            return (
              <motion.div
                key={i}
                animate={isBloomed ? { scale: 1, x: bloom.x, y: bloom.y, rotate: bloom.rotate, opacity: 1 } : { scale: 0, x: 0, y: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.05 }}
                className="absolute z-20 w-40 h-28 bg-card rounded-xl border border-border shadow-2xl overflow-hidden"
              >
                <img src={m} alt="petal" className="object-cover w-full h-full" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- FLOATING DETAIL OVERLAY (Challenges & Plans) --- */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 bg-card/80 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] grid md:grid-cols-2 gap-10"
          >
            <button onClick={() => setShowDetails(false)} className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full"><X /></button>

            {/* Challenges Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-rose-500 font-black uppercase text-sm tracking-[0.2em]">
                <AlertTriangle size={20} /> Challenges Overcome
              </div>
              <ul className="space-y-4">
                {project.challenges.map((c, i) => (
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} key={i} className="flex gap-4 text-muted-foreground bg-muted/30 p-4 rounded-2xl border border-border/50">
                    <span className="text-rose-500 font-mono">0{i + 1}</span>
                    <p className="text-sm italic">{c}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Future Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-emerald-500 font-black uppercase text-sm tracking-[0.2em]">
                <RefreshCw size={20} className="animate-spin-slow" /> Future Roadmap
              </div>
              <ul className="space-y-4">
                {project.futurePlans.map((p, i) => (
                  <motion.li initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} key={i} className="flex gap-4 text-muted-foreground bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10">
                    <Milestone className="text-emerald-500 shrink-0" size={18} />
                    <p className="text-sm font-medium">{p}</p>
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