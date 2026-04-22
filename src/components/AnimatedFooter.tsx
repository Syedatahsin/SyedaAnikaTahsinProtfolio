"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpCircle, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Syedatahsin/", label: "Github", color: "hover:text-white" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/syeda-anika-234376362", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: FaInstagram, href: "https://www.instagram.com/2000__whynot__/", label: "Instagram", color: "hover:text-pink-500" },
  { icon: FaFacebook, href: "https://www.facebook.com/pikachuanika.dd", label: "Facebook", color: "hover:text-blue-600" },
  { icon: Mail, href: "mailto:anikasyeda82@gmail.com", label: "Email", color: "hover:text-purple-400" },
];

export default function AnimatedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 sm:py-16 overflow-hidden flex flex-col items-center justify-center">
      {/* Top border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Animated glows */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-purple-600/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-pink-600/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col items-center space-y-8 sm:space-y-12">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-black tracking-tighter mb-1 sm:mb-2">
              ANIKA<span className="text-purple-500">.</span>TAHSIN
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm font-mono tracking-widest uppercase">
              // Coding with Joy Since 2019
            </p>
          </motion.div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ y: -8, scale: 1.2 }}
                className={`text-muted-foreground transition-colors duration-300 ${social.color} p-3 sm:p-4 rounded-full bg-muted/30 border border-border/50 backdrop-blur-sm`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="w-full pt-6 sm:pt-10 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-muted-foreground text-xs sm:text-sm flex items-center gap-2"
            >
              © {new Date().getFullYear()} Made with <Heart size={12} className="text-pink-500 fill-pink-500 animate-pulse" /> by Anika
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group flex items-center gap-2 text-xs sm:text-sm font-bold text-muted-foreground hover:text-purple-500 transition-colors"
            >
              Back to Top
              <ArrowUpCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
