import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Wine, BarChart3, TrendingUp, Mail } from "lucide-react";
import DataParticles from "@/components/DataParticles";
import heroBg from "@/assets/hero-bg.jpg";
import vinalyticsLogo from "@/assets/vinalytics-logo.png";

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-dark overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Wine and data analytics visualisation"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
      </div>

      <DataParticles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Logo / Brand Icons */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={vinalyticsLogo}
            alt="Vinalytics - Drinks & Hospitality Analytics"
            className="w-48 h-48 md:w-64 md:h-64 object-contain 
opacity-60
    drop-shadow-[0_0_40px_rgba(0,0,0,0.35)]
  "

          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground text-center leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Something{" "}
          <span className="text-gold italic">Exceptional</span>
          <br />
          is Brewing
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-4 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Where the art of wine & drinks meets the science of data.
          We're crafting powerful analytics for the drinks and hospitality industry.
        </motion.p>

        {/* Feature pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {[
            { icon: Wine, label: "Food & Drink Intelligence" },
            { icon: TrendingUp, label: "Market Insights" },
            { icon: BarChart3, label: "Data Analytics" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm"
            >
              <Icon className="w-4 h-4 text-gold" />
              <span className="font-body text-sm text-foreground/80">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Email Signup */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-input border border-border text-foreground font-body text-sm placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gradient-wine text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity shadow-wine-glow"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <motion.div
              className="text-center py-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-accent font-body font-medium">
                ✓ You're on the list. We'll be in touch soon.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          className="mt-16 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-12 h-px bg-accent/30" />
          <span className="font-body text-xs text-muted-foreground tracking-[0.2em] uppercase">
            Coming Soon
          </span>
          <div className="w-12 h-px bg-accent/30" />
        </motion.div>
      </div>
    </div> 
  );
};


export default Index;
 




