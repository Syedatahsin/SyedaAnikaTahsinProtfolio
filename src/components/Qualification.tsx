"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, School, BookOpen, Terminal, Sparkles } from "lucide-react";

const education = [
  {
    title: "Master in Information Technology (MIT)",
    institution: "Shahjalal University of Science and Technology (SUST)",
    period: "2025 — Present",
    description: "Advanced study in Information Systems, focusing on scalable architecture and data-driven technologies.",
    icon: <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
    status: "Currently Pursuing",
    color: "from-purple-600 to-indigo-600",
    active: true,
  },
  {
    title: "BSc in Computer Science & Engineering",
    institution: "Leading University",
    period: "2019 — 2023",
    description: "Core engineering background with a focus on Full-stack Web Development and Database Management Systems.",
    icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />,
    status: "Completed",
    color: "from-blue-500 to-cyan-500",
    active: false,
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Moulvibazar Govt. College",
    period: "2016 — 2018",
    description: "Science Group. Concentrated on Physics, Mathematics, and ICT fundamentals.",
    icon: <School className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />,
    status: "Completed",
    color: "from-pink-500 to-rose-500",
    active: false,
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Ali Amzad Govt. Girls' High School",
    period: "2014 — 2016",
    description: "Science Group. Early foundation in logical reasoning and basic computing.",
    icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />,
    status: "Completed",
    color: "from-emerald-500 to-teal-500",
    active: false,
  },
];

export default function Qualification() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section
      id="qualification"
      ref={containerRef}
      className="relative py-16 sm:py-24 overflow-hidden min-h-screen flex flex-col items-center"
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 dark:opacity-20 brightness-50 pointer-events-none" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)", filter: "blur(60px)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.07), transparent 70%)", filter: "blur(50px)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Educational <span className="text-purple-500">Path</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto italic text-sm sm:text-base">
            "The journey of a thousand lines of code begins with a single degree."
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line — left on mobile, center on md+ */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-purple-500 via-pink-500 to-transparent origin-top blur-[1px] opacity-50"
          />
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-white dark:bg-purple-200 origin-top z-10"
          />

          {education.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 sm:mb-24 md:mb-32 flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 sm:left-2 md:left-1/2 top-0 md:-translate-x-1/2 z-20">
                <motion.div
                  initial={{ scale: 0, rotate: -270 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border-4 flex items-center justify-center ${
                    item.active ? "border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.6)]" : "border-muted/50"
                  }`}
                >
                  {item.active ? (
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 animate-pulse" />
                  ) : (
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-muted/50" />
                  )}
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                className="w-full md:w-[45%] pl-16 sm:pl-24 md:pl-0"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative p-[1px] rounded-[32px] bg-gradient-to-br transition-all duration-500 ${
                    item.active
                      ? "from-purple-500 via-pink-500 to-blue-500 shadow-2xl shadow-purple-500/20"
                      : "from-border/50 to-transparent hover:from-purple-500/50 hover:to-pink-500/50"
                  }`}
                >
                  <div className="bg-card/90 rounded-[31px] p-6 sm:p-10 backdrop-blur-2xl h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Floating Orb inside card */}
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[40px] ${item.active ? 'bg-purple-500' : 'bg-gray-500'} pointer-events-none`}
                    />

                    <div className="flex justify-between items-start mb-6 sm:mb-8 gap-4 relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg text-white`}
                      >
                        {item.icon}
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className={`text-[10px] sm:text-xs px-4 py-1.5 rounded-full border-2 font-black uppercase tracking-[0.2em] ${
                          item.active
                            ? "border-purple-500/50 text-purple-600 dark:text-purple-400 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                            : "border-border text-muted-foreground/60"
                        }`}
                      >
                        {item.status}
                      </motion.span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-bold text-sm sm:text-base mt-2 mb-4 tracking-tight">
                      {item.institution}
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed border-l-4 border-purple-500/10 pl-5 mb-6">
                      {item.description}
                    </p>

                    <div className="text-[10px] sm:text-xs font-black tracking-widest text-foreground/70 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 inline-flex items-center gap-2 px-4 py-2 rounded-xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {item.period}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[10%]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
