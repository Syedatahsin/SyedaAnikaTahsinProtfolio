"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, User, MessageSquare, Sparkles, X, Phone } from "lucide-react";

type ContactState = "invite" | "form" | "sending" | "success" | "error";

export default function QuantumContact() {
  const [state, setState] = useState<ContactState>("invite");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");

    const formData = new FormData(e.currentTarget);
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
    } catch {
      setErrorMessage("Could not establish connection to the transmission matrix.");
      setState("error");
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden min-h-screen flex flex-col items-center">
      {/* Background effects */}

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)", filter: "blur(80px)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.07), transparent 70%)", filter: "blur(60px)" }}
        animate={{ scale: [1, 1.3, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 flex flex-col items-center">
        {/* Floating ring decorations */}
        <motion.div
          className="absolute top-10 left-6 sm:left-20 w-16 sm:w-24 h-16 sm:h-24 rounded-full border border-purple-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-6 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 rounded-full border border-pink-500/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <div className="w-full max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">

            {/* STATE 1: INVITATION */}
            {state === "invite" && (
              <motion.div
                key="invite"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)", transition: { duration: 0.4 } }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="flex flex-col items-center gap-10 sm:gap-14"
              >
                <div className="space-y-4 sm:space-y-6">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-purple-500 font-mono tracking-[0.5em] text-[10px] sm:text-xs uppercase font-black"
                  >
                    Available for New Opportunities
                  </motion.span>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-foreground tracking-tighter leading-none">
                    Let&apos;s Build the <br /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
                      Future
                    </span> Together
                  </h2>
                </div>

                <motion.button
                  onClick={() => setState("form")}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(168,85,247,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-1.5 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-500"
                >
                  <div className="px-12 sm:px-20 py-5 sm:py-7 bg-card rounded-[22px] flex items-center gap-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:rotate-12 transition-transform" />
                    <span className="text-lg sm:text-2xl font-black text-foreground tracking-tight">Initiate Transmission</span>
                  </div>
                </motion.button>

                <div className="flex flex-col items-center gap-6">
                  <p className="text-muted-foreground font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] opacity-60">Human Interface Nodes</p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10">
                    <motion.a 
                      whileHover={{ y: -5 }}
                      href="mailto:anikasyeda82@gmail.com" 
                      className="flex items-center gap-4 text-foreground/70 hover:text-purple-400 transition-all group bg-white/5 dark:bg-white/5 px-6 py-3 rounded-2xl border border-white/10"
                    >
                      <Mail className="w-5 h-5 text-purple-500" />
                      <span className="text-sm sm:text-base font-bold">anikasyeda82@gmail.com</span>
                    </motion.a>
                    <motion.a 
                      whileHover={{ y: -5 }}
                      href="tel:01738980541" 
                      className="flex items-center gap-4 text-foreground/70 hover:text-pink-400 transition-all group bg-white/5 dark:bg-white/5 px-6 py-3 rounded-2xl border border-white/10"
                    >
                      <Phone className="w-5 h-5 text-pink-500" />
                      <span className="text-sm sm:text-base font-bold">01738980541</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STATE 2: FORM */}
            {state === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="relative w-full max-w-3xl mx-auto p-8 sm:p-14 bg-card/40 rounded-[40px] border border-white/10 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] text-left"
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setState("invite")}
                  className="absolute top-6 right-6 sm:top-10 sm:right-10 p-3 rounded-2xl bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white transition-all"
                  type="button"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>

                <div className="mb-10 sm:mb-16">
                  <h3 className="text-3xl sm:text-4xl font-black text-foreground mb-4 flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400">
                      <Sparkles size={24} />
                    </div>
                    Secure Link
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Enter your payload data below to establish a direct connection path.</p>
                </div>

                <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black font-mono text-purple-500 tracking-[0.3em] uppercase ml-1">Identity</label>
                      <div className="relative group">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground/40 group-focus-within:text-purple-500 transition-colors" size={20} />
                        <input name="name" type="text" placeholder="Full Name" required className="w-full bg-background/50 border-2 border-white/5 rounded-2xl px-14 py-4 text-base text-foreground focus:border-purple-500 focus:bg-background transition-all outline-none shadow-inner" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black font-mono text-pink-500 tracking-[0.3em] uppercase ml-1">Node Address</label>
                      <div className="relative group">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground/40 group-focus-within:text-pink-500 transition-colors" size={20} />
                        <input name="email" type="email" placeholder="Email Address" required className="w-full bg-background/50 border-2 border-white/5 rounded-2xl px-14 py-4 text-base text-foreground focus:border-pink-500 focus:bg-background transition-all outline-none shadow-inner" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black font-mono text-rose-500 tracking-[0.3em] uppercase ml-1">Payload Content</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-5 top-6 text-muted-foreground/40 group-focus-within:text-rose-500 transition-colors" size={20} />
                      <textarea name="message" placeholder="What's your vision?..." required rows={5} className="w-full bg-background/50 border-2 border-white/5 rounded-2xl px-14 py-5 text-base text-foreground focus:border-rose-500 focus:bg-background transition-all outline-none shadow-inner resize-none" />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white font-black rounded-2xl flex items-center gap-4 justify-center group hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all text-lg tracking-tight"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /> 
                    Transmit Data
                  </motion.button>
                </form>
              </motion.div>
            )}

            {/* STATE 3: SENDING */}
            {state === "sending" && (
              <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-10 text-center">
                <div className="relative w-32 h-32">
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-purple-500 shadow-[0_0_50px_#A855F7]/30"
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ rotate: { duration: 2, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
                  />
                  <div className="absolute inset-4 rounded-full border-4 border-pink-500/30 border-t-pink-500 animate-spin" />
                </div>
                <div className="space-y-3">
                  <p className="text-3xl font-black text-foreground tracking-tight">Encrypting Tunnel...</p>
                  <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.3em] animate-pulse">Establishing handshake</p>
                </div>
              </motion.div>
            )}

            {/* STATE 4: SUCCESS */}
            {state === "success" && (
              <motion.div 
                key="success" 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="flex flex-col items-center gap-8 text-center bg-card/40 p-12 sm:p-20 rounded-[40px] border border-purple-500/20 backdrop-blur-3xl shadow-[0_40px_100px_rgba(168,85,247,0.1)]"
              >
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_15px_40px_rgba(168,85,247,0.4)] rotate-12">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl sm:text-5xl font-black text-foreground">Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Accomplished</span></h3>
                  <p className="text-muted-foreground text-lg sm:text-xl max-w-lg leading-relaxed">The link is verified. Your message has reached the secure destination. I will respond via return transmission shortly.</p>
                </div>
                <button 
                  onClick={() => setState("invite")} 
                  className="mt-6 px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-foreground font-black hover:bg-white/10 transition-all text-base uppercase tracking-widest shadow-xl" 
                  type="button"
                >
                  Back to Hub
                </button>
              </motion.div>
            )}


            {/* STATE 5: ERROR */}
            {state === "error" && (
              <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-6 sm:gap-8 text-center bg-red-500/10 p-8 sm:p-16 rounded-2xl sm:rounded-3xl border border-red-500/50 shadow-2xl shadow-red-500/10">
                <h3 className="text-3xl sm:text-4xl font-bold text-red-500 tracking-tight">Vortex Unstable</h3>
                <p className="text-muted-foreground text-base sm:text-lg max-w-md">{errorMessage}</p>
                <button onClick={() => setState("form")} className="mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-red-500 text-white font-bold rounded-full transition-colors text-sm" type="button">
                  Try Re-Transmission
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
