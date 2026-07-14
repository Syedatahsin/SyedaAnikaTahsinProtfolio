"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Code2, Users, Rocket, History, Cpu,
  Plane, Utensils, Sparkles, Coffee, MessageCircle
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
    <section id="about" className="relative min-h-screen flex flex-col items-center py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.08),transparent)] pointer-events-none" />

      {/* Animated bg orbs */}
      <motion.div
        className="absolute top-10 right-[-60px] sm:right-[-100px] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.09), transparent 70%)", filter: "blur(70px)" }}
        animate={{ scale: [1, 1.25, 1], y: [0, -30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-[-60px] sm:left-[-100px] w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.07), transparent 70%)", filter: "blur(60px)" }}
        animate={{ scale: [1, 1.2, 1], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Animated floating rings */}
      <motion.div
        className="absolute top-1/3 right-8 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 rounded-full border border-purple-500/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-8 sm:left-16 w-12 sm:w-20 h-12 sm:h-20 rounded-full border border-pink-500/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-20">

        {/* MAIN HERO — centered single column */}
        <div className="relative max-w-4xl mx-auto mb-12 sm:mb-20 group">
          {/* Watermark Letter A */}
          <span className="absolute -top-16 sm:-top-28 left-1/2 -translate-x-1/2 text-[15rem] sm:text-[24rem] lg:text-[32rem] font-black text-purple-500/5 select-none pointer-events-none leading-none group-hover:text-purple-500/10 transition-colors duration-1000 -z-10">
            A
          </span>

          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6 sm:space-y-8 text-center"
          >
            <motion.div variants={slideUp} className="space-y-4 sm:space-y-6">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tighter mb-4">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 underline decoration-purple-500/20 underline-offset-8">Me</span>
              </h3>
              <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8 mx-auto shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
              <div className="space-y-2">
                <h4 className="font-mono text-purple-400 tracking-[0.5em] uppercase text-xs sm:text-sm font-black opacity-80 decoration-fuchsia-500">Syeda Anika Tahsin</h4>
                <div className="w-40 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto" />
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] text-foreground">
                Turning Logic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-600 animate-gradient-x">
                  Into Joy.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={slideUp} className="space-y-4 sm:space-y-6 max-w-3xl mx-auto text-left px-4 sm:px-0">
              <div className="flex items-center gap-2 sm:gap-3 text-purple-400 font-bold uppercase tracking-widest text-xs sm:text-sm justify-center sm:justify-start">
                <History className="w-4 h-4 sm:w-5 sm:h-5" /> The 2019 Awakening
              </div>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed first-letter:text-5xl sm:first-letter:text-7xl first-letter:font-black first-letter:text-purple-500 first-letter:mr-2 sm:first-letter:mr-3 first-letter:float-left first-letter:leading-[1]">
                My journey into the digital world began in 2019. Stepping into the world of Computer Science was initially daunting—honestly, it felt like a foreign language I couldn&apos;t speak. But as I persisted, something clicked.
              </p>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                The moment I decoded the underlying logic, programming transformed from a struggle into an immense source of enjoyment. Today, I am deeply in love with the process of building; there is a unique thrill in seeing abstract thoughts materialize into functional applications.
              </p>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                As my journey continued, I discovered that I enjoy every stage of the development process. From designing clean, engaging user interfaces to building reliable backend systems, I love creating applications that combine aesthetics with functionality. Solving complex problems while crafting meaningful user experiences is what inspires me to keep learning, improving, and building every day.
              </p>
            </motion.div>

            <motion.div variants={slideUp} className="flex items-center gap-3 sm:gap-4 text-purple-500 font-mono text-xs sm:text-sm justify-center">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>// Driven by Curiosity. Sustained by Logic.</span>
            </motion.div>
          </motion.div>
        </div>

        {/* PERSONALITY CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 group-hover:scale-110 transition-transform" />, title: "Ambivert Identity", desc: "I love talking with people and collaborating, but I also cherish my own quiet space to dive deep into my work.", border: "hover:border-purple-500/50", spark: "text-purple-500/30" },
            { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 group-hover:scale-110 transition-transform" />, title: "Easy-Going Synergy", desc: "Collaborating in groups makes the tech world better. I thrive in teams where communication is easy and open.", border: "hover:border-pink-500/50", spark: "text-pink-500/30" },
            { icon: <Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 group-hover:scale-110 transition-transform" />, title: "Baking Hobby", desc: "When I'm not coding, I'm baking. It's the perfect blend of precision and creative sweetness.", border: "hover:border-yellow-500/50", spark: "text-yellow-500/30" },
            { icon: <Plane className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 group-hover:scale-110 transition-transform" />, title: "Travel Interests", desc: "Traveling helps me refresh my mind and see the world from different perspectives, fueling my creativity.", border: "hover:border-blue-500/50", spark: "text-blue-500/30" },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={slideUp}
              whileHover={{ y: -6 }}
              className={`p-5 sm:p-8 rounded-2xl sm:rounded-[32px] bg-card/40 border border-border backdrop-blur-sm ${card.border} transition-all group cursor-default`}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                {card.icon}
                <Sparkles className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${card.spark}`} />
              </div>
              <h3 className="text-base sm:text-xl font-bold mb-1.5 sm:mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}