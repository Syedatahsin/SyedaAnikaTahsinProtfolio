"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  // Create motion values for X and Y positions
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smoothing for the outer ring
  const springConfig = { stiffness: 400, damping: 35 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, textarea, [role='button']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
          .custom-cursor-container {
            display: none !important;
          }
        }
      `}</style>

      <div className="custom-cursor-container fixed inset-0 z-[9999] pointer-events-none">
        {/* Main Central Dot */}
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full z-50 dark:bg-white"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            opacity: isHidden ? 0 : 1,
          }}
        />

        {/* Outer Lagging Ring */}
        <motion.div
          className="fixed top-0 left-0 border-2 border-purple-500/50 rounded-full z-40 dark:border-white/40"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
            width: isHovering ? 60 : 32,
            height: isHovering ? 60 : 32,
            opacity: isHidden ? 0 : 1,
          }}
          transition={{
            width: { type: "spring", stiffness: 300, damping: 20 },
            height: { type: "spring", stiffness: 300, damping: 20 },
          }}
        />

        {/* Interaction Ripple (Flash on click) */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovering ? { scale: 1.2, opacity: 0.1 } : { scale: 0.8, opacity: 0 }}
            className="fixed top-0 left-0 bg-purple-500 rounded-full dark:bg-white"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        />
      </div>
    </>
  );
}
