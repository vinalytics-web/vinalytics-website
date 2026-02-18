import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Wine, BarChart3, TrendingUp, Mail } from "lucide-react";
import DataParticles from "@/components/DataParticles";
import heroBg from "@/assets/hero-bg.jpg";
import vinalyticsLogo from "@/assets/vinalytics-logo.png";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvnbpdp";
const Index = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "error">("idle");

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!email || !company) return;

  setSubmitStatus("sending");

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
		company,
        source: "Vinalytics landing page interest form",
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      setEmail("");
	  setCompany("");
      setSubmitStatus("idle");
    } else {
      setSubmitStatus("error");
    }
  } catch {
    setSubmitStatus("error");
  }
};

  return (
    <div className="relative bg-gradient-dark overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center m-h-screen lg:h-screen px-6 pt-10 overflow-visible lg:overflow-hidden">
        {/* Logo / Brand Icons */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={vinalyticsLogo}
            alt="Vinalytics - Food, Drink & Hospitality Analytics"
            className="w-40 h-40 md:w-52 md:h-52 object-contain 
opacity-60
    drop-shadow-[0_0_40px_rgba(0,0,0,0.35)]
  "

          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground text-center leading-tight mb-4"
          initial={{ opacity: 0, y: 16 }}
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
          className="font-body text-lg md:text-xl text-foreground text-center max-w-2xl mb-4 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Uncorking Insights
		  <br />
          Specialist analytics designed for the food, drink and hospitality sector
        </motion.p>

        {/* Feature pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {[
            { icon: Wine, label: "Data & AI Strategy" },
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
  className="w-full max-w-4xl"
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.2 }}
>
  {!submitted ? (
    <div className="flex flex-col md:flex-row md:items-center gap-3">
      
      {/* Inline label */}
      <span className="font-body text-sm md:text-base text-foreground md:whitespace-nowrap md:w-54 shrink-0">
        Interested? Enter your details:
      </span>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 flex-1 items-stretch"
      >
        {/* Business name */}
        <div className="relative flex-[2]">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            name="company"
            placeholder="Business Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-input border border-border text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
          />
        </div>

        {/* Email */}
        <div className="relative flex-[2]">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-input border border-border text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={submitStatus === "sending"}
          className="
            px-7 py-3 rounded-lg
            bg-gradient-wine text-white
            font-body font-semibold text-sm
            shadow-lg shadow-black/20
			border border-white
            hover:opacity-95 hover:shadow-xl
            active:scale-[0.99]
            focus:outline-none focus:ring-2 focus:ring-ring/60
            transition-all
            disabled:opacity-60 disabled:cursor-not-allowed
            whitespace-nowrap shrink-0
          "
        >
          {submitStatus === "sending" ? "Sending..." : "Notify Me"}
        </button>

        {/* Bot trap */}
        <input
          type="text"
          name="_gotcha"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
      </form>
    </div>
  ) : (
    <motion.div className="text-center py-3">
      <p className="text-accent font-body font-medium text-foreground">
        ✓ Thank you. We'll be in touch soon.
      </p>
    </motion.div>
 
  )}

  {submitStatus === "error" && !submitted && (
    <p className="mt-3 text-sm text-red-200 font-body text-center">
      Sorry — something went wrong. Please try again.
    </p>
  )}
</motion.div>

{/* Survey link */}
<motion.p
  className="mt-4 text-center"
  initial={{ opacity: 0, y: 6 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>

<a
    href="https://forms.office.com/r/pKvCXfpbMs"
    target="_blank"
    rel="noopener noreferrer"
    className="
underline underline-offset-4
  decoration-2
  decoration-gold
  hover:opacity-90
  transition-opacity
  text-foreground
"
  >
    Click here to take our industry survey
  </a>
</motion.p>




        {/* Decorative bottom line */}
        <motion.div
          className="mt-6 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-12 h-px bg-accent/30" />
          <span className="font-body text-xs text-foreground tracking-[0.2em] uppercase">
            Coming Soon
          </span>
          <div className="w-12 h-px bg-accent/30" />
        </motion.div>
      </div>
    </div> 
  );
};


export default Index;
 




