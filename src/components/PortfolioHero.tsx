"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { 
  MessageCircle, 
  Code2, Cpu 
} from "lucide-react";
import { FiInstagram, FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";

const roles = ["Web Developer", "Web Designer", "Creative Thinker", "UI Specialist"];
const rotatingQualities = ["Highly Enthusiastic", "Tech Driven", "Innovative", "Detail Oriented"];

const SocialButton = ({ icon: Icon, color, href }: { icon: any; color: string; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.1 }}
    className={`p-3 rounded-2xl border ${color} bg-background/50 backdrop-blur-sm shadow-lg flex items-center justify-center`}
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

export default function PortfolioHero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    // Role text rotation
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    // Continuous spin for the main frame
    controls.start({
      rotate: 360,
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });

    return () => clearInterval(roleInterval);
  }, [controls]);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradients (Dark Mode Only) */}
      <div className="absolute inset-0 -z-10 opacity-0 dark:opacity-20 pointer-events-none transition-opacity duration-500">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight group cursor-default">
              Hey, I am{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500 transition-colors duration-500 group-hover:text-foreground">
                ANIKA
              </span>
            </h1>
            
            <div className="h-8 text-xl md:text-2xl font-semibold text-muted-foreground flex items-center gap-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Turning ideas into stunning websites. Available for project collaboration and teamwork.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              Download CV
            </motion.button>

            <div className="flex flex-wrap gap-4 pt-4">
              <SocialButton icon={FiInstagram} color="border-fuchsia-500/50 text-fuchsia-500" href="https://www.instagram.com/2000__whynot__/" />
              <SocialButton icon={FiFacebook} color="border-blue-600/50 text-blue-600" href="https://www.facebook.com/pikachuanika.dd" />
              <SocialButton icon={FiLinkedin} color="border-blue-500/50 text-blue-500" href="https://www.linkedin.com/in/syeda-anika-234376362" />
              <SocialButton icon={MessageCircle} color="border-emerald-500/50 text-emerald-500" href="mailto:anikasyeda82@gmail.com" />
              <SocialButton icon={FiGithub} color="border-foreground/50 text-foreground" href="https://github.com/Syedatahsin/" />
            </div>
          </motion.div>

          {/* Right Column - Spinning Frame & Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center items-center aspect-square"
          >
            {/* The Spinning UI Frame */}
            <motion.div
              animate={controls}
              className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 p-4"
            >
              {/* Rotating Qualities Text (Inner Spin) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                className="absolute inset-0"
              >
                {rotatingQualities.map((quality, index) => (
                  <div
                    key={quality}
                    className="absolute inset-0 flex justify-center pointer-events-none"
                    style={{ transform: `rotate(${index * 90}deg)` }}
                  >
                    <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary/80 whitespace-nowrap mt-3 sm:mt-5 md:mt-6">
                      {quality}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Decorative Tech Gears */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute -top-5 -right-5 text-primary/60"><Cpu/></motion.div>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute -bottom-8 left-1/4 text-primary/40"><Code2 size={32}/></motion.div>

            </motion.div>

            {/* Fixed Portrait Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="relative z-10 w-[70%] h-[70%] rounded-full overflow-hidden border-[6px] border-background shadow-2xl shadow-primary/20 dark:shadow-primary/40 group cursor-pointer"
            >
              {/* Subtle Lighting Overlay */}
              <div className="absolute inset-0 z-20 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-80 mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />
              
              <Image
                src="/1000044430.png"
                alt="Anika's Portrait"
                fill
                sizes="(max-width: 768px) 70vw, 35vw"
                className="object-cover object-[center_20%] transition-all duration-700 ease-out group-hover:scale-[1.03] drop-shadow-md"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
