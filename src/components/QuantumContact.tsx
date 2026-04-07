"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, User, MessageSquare, Rocket, Sparkles, X, Phone } from "lucide-react";

// The states of our contact form
type ContactState = "invite" | "form" | "sending" | "success" | "error";

export default function QuantumContact() {
  const [state, setState] = useState<ContactState>("invite");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");

    const formData = new FormData(e.currentTarget);
    
    // IMPORTANT: Get your access key from https://web3forms.com/ and paste it below
    formData.append("access_key", "ca3d7a7e-5cc5-428a-846b-be789d6b717d"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setState("success");
      } else {
        setErrorMessage(data.message || "Transmission failed. Matrix unstable.");
        setState("error");
      }
    } catch (error) {
      setErrorMessage("Could not establish connection to the transmission matrix.");
      setState("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-background overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Background Dynamic Glow (Matches high-end theme) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 dark:opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        
        <AnimatePresence mode="wait">
          
          {/* --- STATE 1: THE INVITATION --- */}
          {state === "invite" && (
            <motion.div
              key="invite"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col items-center gap-10"
            >
              <h2 className="text-5xl md:text-6xl font-black text-foreground tracking-tighter leading-tight">
                Let's Build the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Future</span> Together
              </h2>
              
              <motion.button 
                onClick={() => setState("form")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-1 rounded-full bg-gradient-to-br from-purple-500/50 to-pink-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-purple-500/50 transition-all duration-300"
              >
                <div className="px-12 py-5 bg-card rounded-full flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform"/>
                  <span className="text-lg font-bold text-foreground">Contact Me</span>
                </div>
              </motion.button>
              
              <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.3em]">
                Click to initiate link
              </p>

              {/* Direct Channels */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-8 mt-4"
              >
                <a href="mailto:anikasyeda82@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-purple-400 transition-colors group">
                  <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">anikasyeda82@gmail.com</span>
                </a>
                <a href="tel:01738980541" className="flex items-center gap-3 text-muted-foreground hover:text-pink-400 transition-colors group">
                  <div className="p-2 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">01738980541</span>
                </a>
              </motion.div>
            </motion.div>
          )}

          {/* --- STATE 2: THE FORM PORTAL (Blooms Open) --- */}
          {state === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              className="relative p-10 bg-card/50 rounded-3xl border border-border backdrop-blur-2xl shadow-2xl shadow-black/50"
            >
              {/* Close Button */}
              <button 
                onClick={() => setState("invite")}
                className="absolute top-6 right-6 p-2 rounded-full text-muted-foreground hover:bg-white/5 hover:text-white transition-colors"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-4 justify-center">
                <Sparkles className="text-purple-400 w-6 h-6" /> Initiate Connection
              </h3>

              <form className="space-y-6 text-left max-w-2xl mx-auto" onSubmit={handleSubmit}>
                {/* Input Fields with staggerChildren entry */}
                <div>
                  <label className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-2 block">Your Identity</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"><User className="w-5 h-5" /></div>
                    <input name="name" type="text" placeholder="Researcher / Developer / Visionary" required className="w-full bg-background border border-border rounded-xl px-14 py-4 text-foreground placeholder:text-muted-foreground/30 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all outline-none" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-2 block">Connection Node (Email)</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"><Mail className="w-5 h-5" /></div>
                    <input name="email" type="email" placeholder="e.g., your@domain.com" required className="w-full bg-background border border-border rounded-xl px-14 py-4 text-foreground placeholder:text-muted-foreground/30 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all outline-none" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-2 block">Message Transmission</label>
                  <div className="relative">
                    <div className="absolute left-4 top-5 text-muted-foreground/50"><MessageSquare className="w-5 h-5" /></div>
                    <textarea name="message" placeholder="Describe your vision or inquiry..." required rows={5} className="w-full bg-background border border-border rounded-xl px-14 py-4 text-foreground placeholder:text-muted-foreground/30 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all outline-none" />
                  </div>
                </div>

                <motion.button 
                  type="submit"
                  className="w-full mt-6 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-extrabold rounded-full flex items-center gap-3 justify-center group hover:from-purple-500 hover:to-pink-500 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Transmit Inquiry
                </motion.button>

                {/* Secondary Contact Info */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                  <a href="mailto:anikasyeda82@gmail.com" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-purple-400 transition-colors">
                    <Mail className="w-3.5 h-3.5" /> anikasyeda82@gmail.com
                  </a>
                  <a href="tel:01738980541" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-pink-400 transition-colors">
                    <Phone className="w-3.5 h-3.5" /> 01738980541
                  </a>
                </div>
              </form>
            </motion.div>
          )}

          {/* --- STATE 3: SENDING (Teleportation Vortex) --- */}
          {state === "sending" && (
            <motion.div
              key="sending"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-8 text-center"
            >
              <motion.div 
                className="w-24 h-24 rounded-full border-t-2 border-purple-500 shadow-[0_0_30px_#A855F7] relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-2xl font-bold text-foreground tracking-tight animate-pulse">Establishing quantum link...</p>
            </motion.div>
          )}

          {/* --- STATE 4: SUCCESS (Teleported Message) --- */}
          {state === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-8 text-center bg-card/50 p-16 rounded-3xl border border-purple-900/50 shadow-2xl shadow-purple-500/10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_30px_#A855F7]"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-4xl font-bold text-foreground">Transmission <span className="text-purple-400">Success</span></h3>
              <p className="text-muted-foreground text-lg max-w-md">Quantum handshake complete. Your message has been teleported to my secure matrix. Expect a reply within one standard Earth cycle (24-48 hours).</p>
              <button 
                onClick={() => setState("invite")} 
                className="mt-6 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-muted-foreground hover:bg-white/10 hover:text-white transition-colors"
                type="button"
              >
                Link Another Inquiry
              </button>
            </motion.div>
          )}

          {/* --- STATE 5: ERROR --- */}
          {state === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-8 text-center bg-red-500/10 p-16 rounded-3xl border border-red-500/50 shadow-2xl shadow-red-500/10"
            >
              <h3 className="text-4xl font-bold text-red-500 tracking-tight">Vortex Unstable</h3>
              <p className="text-muted-foreground text-lg max-w-md">{errorMessage}</p>
              <button 
                onClick={() => setState("form")} 
                className="mt-6 px-8 py-3 bg-red-500 text-white font-bold rounded-full transition-colors"
                type="button"
              >
                Try Re-Transmission
              </button>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
