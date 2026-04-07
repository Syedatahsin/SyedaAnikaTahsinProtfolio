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
    icon: <Terminal className="w-5 h-5 text-purple-400" />,
    status: "Currently Pursuing",
    color: "from-purple-600 to-indigo-600",
    active: true,
  },
  {
    title: "BSc in Computer Science & Engineering",
    institution: "Leading University",
    period: "2019 — 2023",
    description: "Core engineering background with a focus on Full-stack Web Development and Database Management Systems.",
    icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
    status: "Completed",
    color: "from-blue-500 to-cyan-500",
    active: false,
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Moulvibazar Govt. College",
    period: "2016 — 2018",
    description: "Science Group. Concentrated on Physics, Mathematics, and ICT fundamentals.",
    icon: <School className="w-5 h-5 text-pink-400" />,
    status: "Completed",
    color: "from-pink-500 to-rose-500",
    active: false,
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Ali Amzad Govt. Girls' High School",
    period: "2014 — 2016",
    description: "Science Group. Early foundation in logical reasoning and basic computing.",
    icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
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

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="qualification" ref={containerRef} className="relative py-24 bg-background overflow-hidden">
      {/* Dynamic Background Noise/Glow (Hidden in Light Mode to keep it clean) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 dark:opacity-20 brightness-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Educational <span className="text-purple-500">Path</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto italic">
            "The journey of a thousand lines of code begins with a single degree."
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Animated Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-transparent origin-top"
          />

          {education.map((item, index) => (
            <div key={index} className={`relative mb-24 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 z-20">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={`w-10 h-10 rounded-full bg-background border-2 flex items-center justify-center ${item.active ? "border-purple-400 shadow-[0_0_20px_#A855F7]" : "border-muted-foreground"
                    }`}
                >
                  {item.active ? <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" /> : <div className="w-3 h-3 rounded-full bg-muted-foreground" />}
                </motion.div>
              </div>

              {/* Qualification Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                className="w-full md:w-[45%] pl-20 md:pl-0"
              >
                <div className={`group relative p-[2px] rounded-3xl bg-gradient-to-br ${item.active ? 'from-purple-500 to-pink-500 shadow-xl shadow-purple-500/20' : 'from-border to-transparent'} hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 ease-out z-10 hover:z-30 hover:shadow-2xl hover:shadow-purple-500/40`}>
                  <div className="bg-card rounded-[22px] p-8 backdrop-blur-3xl h-full shadow-inner relative overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-colors duration-500 rounded-[22px]" />

                    <div className="flex justify-relative z-10 justify-between items-start mb-6 gap-2">
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 } }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 shrink-0 shadow-lg`}
                      >
                        {item.icon}
                      </motion.div>
                      <span className={`text-[10px] px-3 py-1 rounded-full border font-mono uppercase tracking-widest text-center ${item.active ? "border-purple-500 text-purple-600 dark:text-purple-400 animate-pulse bg-purple-500/10" : "border-border text-muted-foreground"
                        }`}>
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground group-hover:text-purple-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-300/80 text-sm font-semibold mt-1 mb-4">
                      {item.institution}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-purple-500/20 pl-4">
                      {item.description}
                    </p>

                    <div className="mt-6 text-xs font-mono font-bold text-muted-foreground bg-muted inline-block px-3 py-1 rounded-lg">
                      {item.period}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-[10%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
