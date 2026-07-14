"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { MessageCircle, Code2, Cpu } from "lucide-react";
import { FiInstagram, FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";

const roles = ["Web Developer", "Web Designer", "Creative Thinker", "UI Specialist"];
const rotatingQualities = ["Highly Enthusiastic", "Tech Driven", "Innovative", "Detail Oriented"];

const SocialButton = ({ icon: Icon, color, href }: { icon: any; color: string; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.1 }}
    className={`p-2.5 sm:p-3 rounded-2xl border ${color} bg-background/50 backdrop-blur-sm shadow-lg flex items-center justify-center`}
  >
    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
  </motion.a>
);

export default function PortfolioHero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    controls.start({
      rotate: 360,
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });

    return () => clearInterval(roleInterval);
  }, [controls]);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-0 dark:opacity-40 transition-opacity duration-1000">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/40 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-fuchsia-500/40 rounded-full blur-[100px]"
          />
        </div>
      </div>


      <div className="container max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center w-full">

          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, x: -80, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-6 sm:space-y-8 text-center md:text-left order-2 md:order-1"
          >
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-primary font-mono tracking-widest text-sm font-bold uppercase"
              >
                Welcome to my digital space
              </motion.span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight group cursor-default leading-[0.9]">
                Hey, I am{" "}
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 transition-all duration-700 group-hover:tracking-wider">
                  ANIKA
                </span>
              </h1>
            </div>

            <div className="h-10 text-xl sm:text-2xl md:text-3xl font-bold text-foreground/80 flex items-center gap-3 justify-center md:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="bg-black/5 dark:bg-white/5 px-4 py-1 rounded-xl border border-black/5 dark:border-white/5"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
              Crafting immersive digital experiences through <span className="text-primary font-bold italic">logic</span> and <span className="text-fuchsia-500 font-bold italic">creativity</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-purple-500/50 transition-all"
              >
                Download CV
              </motion.button>

              <div className="flex gap-3">
                <SocialButton icon={FiInstagram} color="border-fuchsia-500/30 text-fuchsia-500 hover:bg-fuchsia-500/10" href="https://www.instagram.com/2000__whynot__/" />
                <SocialButton icon={FiGithub} color="border-foreground/20 text-foreground hover:bg-foreground/5" href="https://github.com/Syedatahsin/" />
                <SocialButton icon={FiLinkedin} color="border-blue-500/30 text-blue-500 hover:bg-blue-500/10" href="https://www.linkedin.com/in/syeda-anika-234376362" />
              </div>
            </div>
          </motion.div>

          {/* Right Column — Animated Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center order-1 md:order-2"
          >
            <div className="relative w-[280px] sm:w-[320px] md:w-full max-w-[380px] mx-auto flex items-center justify-center">
              {/* Spinning decorative ring behind */}
              <motion.div
                animate={controls}
                className="absolute inset-[-20px] sm:inset-[-30px] rounded-3xl border-2 border-dashed border-primary/20 pointer-events-none"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
                  className="absolute inset-0"
                >
                  {rotatingQualities.map((quality, index) => (
                    <div
                      key={quality}
                      className="absolute inset-0 flex justify-center pointer-events-none"
                      style={{ transform: `rotate(${index * 90}deg)` }}
                    >
                      <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold text-primary/60 whitespace-nowrap mt-1">
                        {quality}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Floaties */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute -top-4 -right-4 text-primary/60"><Cpu size={20} /></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute -bottom-6 left-1/4 text-primary/40"><Code2 size={24} /></motion.div>
              </motion.div>

              {/* Glow background behind the picture */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-6 bg-purple-500/20 dark:bg-purple-500/30 blur-[60px] sm:blur-[80px] rounded-3xl -z-10 pointer-events-none" 
              />

              {/* Portrait Picture — Rounded Rectangle */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                animate={{ y: [0, -12, 0] }}
                transition={{ 
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  scale: { type: "spring", stiffness: 300 }
                }}
                className="relative z-10 w-full aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer border-2 border-purple-500/30 dark:border-purple-400/40 shadow-[0_20px_60px_rgba(168,85,247,0.3)] dark:shadow-[0_20px_60px_rgba(168,85,247,0.5)] bg-gradient-to-b from-purple-500/10 to-fuchsia-500/10"
              >
                {/* Gradient overlay on edges */}
                <div className="absolute inset-0 z-20 rounded-3xl pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <Image
                  src="/profile.png"
                  alt="Syeda Anika Tahsin"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                  className="object-cover object-[center_15%] transition-all duration-700 group-hover:scale-105"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>



        </div>
      </div>
    </section>
  );
}
