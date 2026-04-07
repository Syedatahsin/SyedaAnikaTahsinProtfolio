"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { 
  Home, 
  Code2, 
  GraduationCap, 
  Mail, 
  MoreHorizontal, 
  User, 
  Cpu,
  Moon,
  Sun,
  Briefcase
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "TechStack", href: "#techstack", icon: Code2 },
  { name: "Qualification", href: "#qualification", icon: GraduationCap },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact Me", href: "#contact", icon: Mail },
  { name: "About", href: "#about", icon: User },
];

const moreItems: any[] = [];

export default function PortfolioNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 p-2 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full shadow-2xl">
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
        
        {/* Theme Toggle */}
        {mounted ? (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 flex items-center justify-center text-sm font-medium transition-colors hover:text-primary rounded-full group"
            aria-label="Toggle theme"
          >
            {hoveredIndex === 6 && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        ) : (
          <div className="w-8 h-8" />
        )}
      </div>
    </nav>
  );
}

function NavLink({ item, index, hoveredIndex, setHoveredIndex }: any) {
  return (
    <a
      href={item.href}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={cn(
        "relative px-4 py-2 flex items-center gap-2 text-sm font-medium transition-colors rounded-full",
        hoveredIndex === index ? "text-primary" : "text-foreground"
      )}
    >
      <item.icon className="w-4 h-4" />
      <motion.span
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "auto" }}
        transition={{ delay: 4, duration: 0.8 }}
        className="hidden md:block overflow-hidden whitespace-nowrap"
      >
        {item.name}
      </motion.span>
      
      {hoveredIndex === index && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 bg-primary/10 rounded-full -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </a>
  );
}
