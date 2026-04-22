"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Layout,
  Server,
  Palette,
  ChevronRight
} from "lucide-react";

const techData = {
  frontend: {
    title: "Frontend",
    icon: <Layout className="w-4 h-4" />,
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind", "JavaScript", "Bootstrap"],
    color: "#A855F7",
    branchPath: "M100 120 C 80 100, 40 110, 20 60",
  },
  backend: {
    title: "Backend",
    icon: <Server className="w-4 h-4" />,
    skills: ["Node.js", "Express", "Prisma"],
    color: "#EC4899",
    branchPath: "M100 120 C 100 80, 100 60, 100 30",
  },
  database: {
    title: "Database",
    icon: <Database className="w-4 h-4" />,
    skills: ["PostgreSQL", "MongoDB", "SQL"],
    color: "#3B82F6",
    branchPath: "M100 120 C 110 100, 130 90, 140 50",
  },
  design: {
    title: "Design",
    icon: <Palette className="w-4 h-4" />,
    skills: ["Canva", "Figma"],
    color: "#F59E0B",
    branchPath: "M100 120 C 140 120, 180 100, 190 60",
  },
};

export default function InteractiveTechTree() {
  const [active, setActive] = useState<keyof typeof techData>("frontend");

  return (
    <section id="techstack" className="py-16 sm:py-24 overflow-hidden min-h-screen flex flex-col items-center">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 flex flex-col items-center">

        {/* Animated bg orb behind tree */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)", filter: "blur(60px)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500 text-center"
        >
          My Tech Garden
        </motion.h2>
        <p className="text-muted-foreground mb-4 text-sm sm:text-base md:text-lg text-center">Select a branch to see my expertise bloom</p>

        <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[500px]">
          <svg viewBox="0 0 200 200" className="w-full h-auto drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] dark:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] mb-[-2rem]">
            {/* Main Trunk */}
            <motion.path
              d="M100 200 L100 120"
              stroke="url(#trunkGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <defs>
              <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#3B0764" />
              </linearGradient>
            </defs>

            {Object.entries(techData).map(([key, data]) => {
              const isActive = active === key;
              return (
                <g key={key}>
                  <motion.path
                    d={data.branchPath}
                    fill="none"
                    stroke={isActive ? data.color : "currentColor"}
                    className="opacity-20 dark:opacity-30"
                    strokeWidth={isActive ? "4" : "2"}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, strokeWidth: isActive ? 4 : 2 }}
                    transition={{ duration: 1 }}
                  />

                  <AnimatePresence>
                    {isActive && data.skills.map((skill, index) => (
                      <motion.g
                        key={skill}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                      >
                        <motion.circle
                          cx={getLeafPos(data.branchPath, index, data.skills.length).x}
                          cy={getLeafPos(data.branchPath, index, data.skills.length).y}
                          r="18"
                          fill={data.color}
                          className="opacity-80"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <text
                          x={getLeafPos(data.branchPath, index, data.skills.length).x}
                          y={getLeafPos(data.branchPath, index, data.skills.length).y}
                          fontSize="6"
                          fontWeight="bold"
                          fill="white"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          className="pointer-events-none select-none"
                        >
                          {skill}
                        </text>
                      </motion.g>
                    ))}
                  </AnimatePresence>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-4 z-10 relative mt-0 sm:mt-[-2rem] md:mt-[-4rem]">
          {(Object.keys(techData) as Array<keyof typeof techData>).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full border transition-all duration-300 ${
                active === key
                ? "bg-gradient-to-r from-purple-600 to-fuchsia-500 border-transparent text-white shadow-lg shadow-purple-500/30 scale-105"
                : "bg-muted/50 border-border text-foreground hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              {techData[key].icon}
              <span className="capitalize font-bold">{techData[key].title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function getLeafPos(path: string, index: number, total: number) {
  const isLeft = path.includes("20 60");
  const isFarRight = path.includes("190 60");
  const isMidRight = path.includes("140 50");

  const startY = 100;
  const spacing = 16;
  const spreadOffset = index % 2 === 0 ? -5 : 5;

  if (isLeft) return { x: 30 + (index * 7) + spreadOffset, y: startY - (index * spacing) };
  if (isFarRight) return { x: 185 - (index * 4) + spreadOffset, y: startY - (index * spacing) };
  if (isMidRight) return { x: 140 - (index * 3) + spreadOffset, y: startY - (index * spacing) };
  return { x: 100 + spreadOffset, y: startY - (index * spacing) };
}
