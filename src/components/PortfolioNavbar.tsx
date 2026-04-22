"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Home, Code2, GraduationCap, Mail, User, Moon, Sun, Briefcase, Menu, X
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "TechStack", href: "#techstack", icon: Code2 },
  { name: "Qualification", href: "#qualification", icon: GraduationCap },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
  { name: "About", href: "#about", icon: User },
];

export default function PortfolioNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <nav className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="hidden md:flex items-center gap-1 p-2 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full shadow-2xl pointer-events-auto"
        >
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              item={item}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}

          <div className="w-px h-6 bg-white/20 dark:bg-white/10 mx-1" />

          {mounted ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2 flex items-center justify-center text-sm font-medium transition-colors hover:text-primary rounded-full group"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
          ) : (
            <div className="w-8 h-8" />
          )}
        </motion.div>

        {/* ===== MOBILE TOP BAR ===== */}
        <div className="flex md:hidden items-center justify-between w-full px-2 pointer-events-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="p-2 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full shadow-xl flex items-center gap-2"
          >
            {mounted ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-1.5 rounded-full hover:text-primary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            ) : <div className="w-8 h-8" />}
          </motion.div>

          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2.5 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full shadow-xl"
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* ===== MOBILE DRAWER ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-20 inset-x-4 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-6 flex flex-col gap-2 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-all active:bg-primary/20"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="w-5 h-5" />
                </div>
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ item, index, hoveredIndex, setHoveredIndex }: any) {
  return (
    <motion.a
      href={item.href}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.2 }}
      className={cn(
        "relative px-4 py-2 flex items-center gap-2 text-sm font-semibold transition-colors rounded-full",
        hoveredIndex === index ? "text-primary" : "text-foreground/70 hover:text-foreground"
      )}
    >
      <item.icon className="w-4 h-4" />
      <span className="hidden lg:block">{item.name}</span>

      {hoveredIndex === index && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 bg-primary/15 rounded-full -z-10 shadow-[0_0_15px_rgba(var(--primary),0.1)]"
          transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
        />
      )}
    </motion.a>
  );
}

