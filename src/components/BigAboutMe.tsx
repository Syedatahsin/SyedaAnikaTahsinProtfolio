"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Code2,
  Users,
  Rocket,
  History,
  Cpu,
  Plane,
  Utensils,
  Sparkles,
  Coffee,
  MessageCircle
} from "lucide-react";

export default function BigAboutMe() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Matrix-style background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-20">
        {/* --- MAIN SECTION: THE PROGRAMMING HEART --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">

          {/* Animated Cartoon Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Giant Background Letter */}
            <span className="absolute -top-12 -left-12 text-[20rem] font-black text-purple-500/5 select-none pointer-events-none">A</span>
            
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full animate-pulse" />
            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="/aboutme.png"
              alt="Anika Tahsin"
              className="w-full max-w-[450px] mx-auto h-auto relative z-10 drop-shadow-[0_0_40px_rgba(168,85,247,0.2)]"
            />
          </motion.div>

          {/* Programming Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={slideUp} className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter mb-2">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Me</span>
              </h3>
              <div className="h-1 w-12 bg-purple-500 rounded-full mb-6" />
              <h4 className="font-mono text-purple-400 tracking-[0.4em] uppercase text-xs italic">Syeda Anika Tahsin</h4>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-foreground">
                Turning Logic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Into Joy.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={slideUp} className="space-y-6">
              <div className="flex items-center gap-3 text-purple-400 font-bold uppercase tracking-widest text-sm">
                <History className="w-5 h-5" /> The 2019 Awakening
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed first-letter:text-7xl first-letter:font-black first-letter:text-purple-500 first-letter:mr-3 first-letter:float-left first-letter:leading-[1]">
                My journey into the digital world began in 2019. Stepping into the world of Computer Science was initially daunting—honestly, it felt like a foreign language I couldn&apos;t speak. But as I persisted, something clicked.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The moment I decoded the underlying logic, programming transformed from a struggle into an immense source of enjoyment. Today, I am deeply in love with the process of building; there is a unique thrill in seeing abstract thoughts materialize into functional applications. I don&apos;t just write code; I craft digital experiences.
              </p>
            </motion.div>

            <motion.div variants={slideUp} className="flex items-center gap-4 text-purple-500 font-mono text-sm">
              <Code2 className="w-5 h-5" />
              <span>// Driven by Curiosity. Sustained by Logic.</span>
            </motion.div>
          </motion.div>
        </div>

        {/* --- SECONDARY SECTION: PERSONALITY & HOBBIES SLIDING BOXES --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Ambivert Card */}
          <motion.div variants={slideUp} className="p-8 rounded-[32px] bg-card/40 border border-border backdrop-blur-sm hover:border-purple-500/50 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <MessageCircle className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform" />
              <Sparkles className="w-4 h-4 text-purple-500/30" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ambivert Identity</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I love talking with people and collaborating, but I also cherish my own quiet space to dive deep into my work.
            </p>
          </motion.div>

          {/* Groupwork Card */}
          <motion.div variants={slideUp} className="p-8 rounded-[32px] bg-card/40 border border-border backdrop-blur-sm hover:border-pink-500/50 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform" />
              <Sparkles className="w-4 h-4 text-pink-500/30" />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy-Going Synergy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Collaborating in groups makes the tech world better. I thrive in teams where communication is easy and open.
            </p>
          </motion.div>

          {/* Baking Card */}
          <motion.div variants={slideUp} className="p-8 rounded-[32px] bg-card/40 border border-border backdrop-blur-sm hover:border-yellow-500/50 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <Utensils className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform" />
              <Sparkles className="w-4 h-4 text-yellow-500/30" />
            </div>
            <h3 className="text-xl font-bold mb-2">Baking Hobby</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When I'm not coding, I'm baking. It’s the perfect blend of precision and creative sweetness.
            </p>
          </motion.div>

          {/* Travel Card */}
          <motion.div variants={slideUp} className="p-8 rounded-[32px] bg-card/40 border border-border backdrop-blur-sm hover:border-blue-500/50 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <Plane className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
              <Sparkles className="w-4 h-4 text-blue-500/30" />
            </div>
            <h3 className="text-xl font-bold mb-2">Travel Interests</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Traveling helps me refresh my mind and see the world from different perspectives, fueling my creativity.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}