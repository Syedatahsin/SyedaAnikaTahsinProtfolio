"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: number;
  size: number;
  x: string;
  duration: number;
  delay: number;
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate more prominent bubbles
    const newBubbles = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 90 + 30, // 30px to 120px
      x: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 20, // 20s to 40s (slower is smoother)
      delay: Math.random() * 15, 
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 0.6, 0.6, 0], // Increased opacity from 0.4 to 0.6
              x: ["0%", "8%", "-8%", "0%"] // More prominent swaying
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear",
            }}
            style={{
              left: bubble.x,
              width: bubble.size,
              height: bubble.size,
            }}
            className="absolute rounded-full 
                       border-2 border-purple-500/10 bg-purple-500/5 
                       dark:bg-white/5 dark:border dark:border-white/10 
                       backdrop-blur-[2px]"
          />
        ))}
      </AnimatePresence>
      
      {/* Optional: Subtle Vignette / Matrix Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(168,85,247,0.02)_100%)] pointer-events-none" />
    </div>
  );
}
