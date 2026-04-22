"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";

interface Bubble {
  id: number;
  size: number;
  x: string;
  duration: number;
  delay: number;
  hue: number;
}

function BubbleItem({ b, springX, springY }: { b: Bubble; springX: MotionValue<number>; springY: MotionValue<number> }) {
  // Derive parallax movement based on bubble size
  const translateX = useTransform(springX, (v) => v * (b.size / 60));
  const translateY = useTransform(springY, (v) => v * (b.size / 60));

  return (
    <motion.div
      initial={{ y: "115vh", opacity: 0 }}
      animate={{
        y: "-15vh",
        opacity: [0, 0.4, 0.4, 0],
        x: ["-2%", "2%", "-2%"],
      }}
      transition={{
        y: { duration: b.duration, repeat: Infinity, delay: b.delay, ease: "linear" },
        opacity: { duration: b.duration, repeat: Infinity, delay: b.delay, ease: "linear" },
        x: { duration: 6 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{
        left: b.x,
        width: b.size,
        height: b.size,
        position: "absolute",
        borderRadius: "50%",
        background: `radial-gradient(circle at 30% 30%, hsla(0, 0%, 100%, 0.7), hsla(0, 0%, 60%, 0.2))`,
        boxShadow: `inset 0 0 ${b.size * 0.2}px rgba(255,255,255,0.4), 0 0 ${b.size * 0.3}px rgba(200,200,200,0.1)`,
        border: `1px solid rgba(255,255,255,0.2)`,
        backdropFilter: "blur(1px)",
      }}
    >
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{ x: translateX, y: translateY }}
      >
        <div className="absolute top-[15%] left-[15%] w-[25%] h-[25%] rounded-full bg-white opacity-40 blur-[0.5px]" />
      </motion.div>
    </motion.div>
  );
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = React.useState<Bubble[]>([]);

  // Smooth mouse tracking using Framer Motion primitives
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 50);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 50);
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const newBubbles: Bubble[] = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 50 + 10,
      x: `${Math.random() * 100}%`,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 20,
      hue: 0,
    }));
    setBubbles(newBubbles);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]" aria-hidden="true">

      {/* ── INTERACTIVE SILVER BUBBLES ── */}
      {bubbles.map((b) => (
        <BubbleItem key={b.id} b={b} springX={springX} springY={springY} />
      ))}

      {/* ── AMBIENT SILVER ORBS ── */}
      {[
        { x: "10%", y: "20%", size: 600, color: "rgba(200,200,200,0.06)" },
        { x: "80%", y: "70%", size: 450, color: "rgba(180,180,180,0.04)" },
      ].map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
