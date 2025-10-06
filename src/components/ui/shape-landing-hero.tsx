"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, Sparkles, ArrowRight, Users, CheckCircle, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlitchText from "@/components/ui/glitch-text";
import { Liquid } from "@/components/ui/button-1";
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]"
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return <motion.div initial={{
    opacity: 0,
    y: -150,
    rotate: rotate - 15
  }} animate={{
    opacity: 1,
    y: 0,
    rotate: rotate
  }} transition={{
    duration: 2.4,
    delay,
    ease: [0.23, 0.86, 0.39, 0.96],
    opacity: {
      duration: 1.2
    }
  }} className={cn("absolute", className)}>
            <motion.div animate={{
      y: [0, 15, 0]
    }} transition={{
      duration: 12,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }} style={{
      width,
      height
    }} className="relative">
                <div className={cn("absolute inset-0 rounded-full", "bg-gradient-to-r to-transparent", gradient, "backdrop-blur-[2px] border-2 border-white/[0.15]", "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]", "after:absolute after:inset-0 after:rounded-full", "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]")} />
            </motion.div>
        </motion.div>;
}
const COLORS = {
  color1: '#FFFFFF',
  color2: '#1E10C5',
  color3: '#9089E2',
  color4: '#FCFCFE',
  color5: '#F9F9FD',
  color6: '#B2B8E7',
  color7: '#0E2DCB',
  color8: '#0017E9',
  color9: '#4743EF',
  color10: '#7D7BF4',
  color11: '#0B06FC',
  color12: '#C5C1EA',
  color13: '#1403DE',
  color14: '#B6BAF6',
  color15: '#C1BEEB',
  color16: '#290ECB',
  color17: '#3F4CC0',
};

function CelesteHero() {
  const [isHovered, setIsHovered] = useState(false);
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    })
  };
  return <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />

                <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />

                <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.15]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />

                <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-amber-500/[0.15]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />

                <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-cyan-500/[0.15]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-center max-w-7xl mx-auto">
                    {/* Left Content */}
                    <div className="text-center max-w-4xl">
                        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12">
                            <Sparkles className="h-4 w-4 text-indigo-400" />
                            <span className="text-sm text-white/60 tracking-wide">
                                AI-Powered Presentation Builder
                            </span>
                        </motion.div>

                        <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
                                <span className="text-white">
                                    Meet Celeste:
                                </span>
                                <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-celeste-primary to-celeste-secondary">
                                    Your AI Presentation Partner
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                            <p className="text-xl sm:text-2xl mb-10 leading-relaxed font-light max-w-2xl mx-auto text-slate-50">Celeste is an AI-powered presentation builder that understands your intent- writing, designing, and refining every frame with effortless precision. It's not just faster. It's thoughtful. It's not just beautiful. It's yours..</p>
                        </motion.div>

                        {/* Email Input */}
                        <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="mb-6">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                                <div className="relative min-w-[300px]">
                                    <Input className="pe-9 bg-white/5 border-white/10 text-white placeholder:text-white/50" placeholder="Enter your email" type="email" />
                                    <button
                                        className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-white/60 outline-offset-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                        aria-label="Subscribe"
                                    >
                                        <Send size={16} strokeWidth={2} aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="px-3 py-1 bg-celeste-primary/20 border border-celeste-primary/30 rounded-full">
                                    <span className="text-xs text-celeste-primary font-medium">✨ Beta opens November 2025</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div custom={4} variants={fadeUpVariants} initial="hidden" animate="visible" className="mb-8">
                            <div className="flex justify-center">
                                <div className="relative inline-block w-64 h-[3.5em] mx-auto group bg-white dark:bg-black border-black dark:border-white border-2 rounded-lg">
                                    <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
                                        <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]"></span>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg">
                                            <Liquid isHovered={isHovered} colors={COLORS} />
                                        </div>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px]"></div>
                                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                                        <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]"></span>
                                        <span className="absolute inset-0 rounded-lg bg-black"></span>
                                        <Liquid isHovered={isHovered} colors={COLORS} />
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <span
                                                key={i}
                                                className={`absolute inset-0 rounded-lg border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-[4px]'}`}></span>
                                        ))}
                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-[#006]"></span>
                                    </div>
                                    <button
                                        className="absolute inset-0 rounded-lg bg-transparent cursor-pointer"
                                        aria-label="Join Waitlist"
                                        type="button"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}>
                                        <span className="flex items-center justify-center gap-2 rounded-lg group-hover:text-yellow-400 text-white text-xl font-semibold tracking-wide whitespace-nowrap">
                                            Join Waitlist!
                                            <ArrowRight className="w-6 h-6 flex-shrink-0" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Microcopy */}
                        <motion.div custom={5} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-12 max-w-md mx-auto">
                            <p className="text-center leading-relaxed text-base text-slate-50">
                                Early access for visionaries.<br />
                                Simple. Intelligent. Celeste.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>;
}
export { CelesteHero };