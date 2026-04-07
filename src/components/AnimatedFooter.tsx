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
    <footer className="relative bg-background pt-20 pb-10 overflow-hidden">
      {/* Background Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-12">
          
          {/* --- TOP SECTION: LOGO/NAME --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-black tracking-tighter mb-2">
              ANIKA<span className="text-purple-500">.</span>TAHSIN
            </h3>
            <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase">
              // Coding with Joy Since 2019
            </p>
          </motion.div>

          {/* --- MIDDLE SECTION: SOCIAL NODES --- */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
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
                className={`text-muted-foreground transition-colors duration-300 ${social.color} p-4 rounded-full bg-muted/30 border border-border/50 backdrop-blur-sm`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* --- BOTTOM SECTION: COPYRIGHT & BACK TO TOP --- */}
          <div className="w-full pt-10 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-muted-foreground text-sm flex items-center gap-2"
            >
              © {new Date().getFullYear()} Made with <Heart size={14} className="text-pink-500 fill-pink-500 animate-pulse" /> by Anika
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-purple-500 transition-colors"
            >
              Back to Top
              <ArrowUpCircle className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            
          </div>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
