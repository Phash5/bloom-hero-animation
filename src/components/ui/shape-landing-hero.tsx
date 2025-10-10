"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, Sparkles, ArrowRight, Users, CheckCircle, Send, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlitchText from "@/components/ui/glitch-text";
import { Liquid } from "@/components/ui/button-1";
import { RainbowButton } from "@/components/ui/rainbow-borders-button";
import { InteractiveBadge } from "@/components/ui/award-badge";
import { submitWaitlistEmail } from "@/lib/waitlist";
import { useToast } from "@/hooks/use-toast";
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
  color17: '#3F4CC0'
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
  return <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] py-12">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />

                <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />

                <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.15]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />

                <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-amber-500/[0.15]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />

                <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-cyan-500/[0.15]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 w-full">
                <div className="flex items-center justify-center w-full">
                    {/* Left Content */}
                    <div className="text-center max-w-4xl w-full">
                        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="mb-8 md:mb-12">
                            <InteractiveBadge>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
                                    <Sparkles className="h-4 w-4 text-indigo-400" />
                                    <span className="text-sm text-white/60 tracking-wide">
                                        AI-Powered Presentation Builder
                                    </span>
                                </div>
                            </InteractiveBadge>
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
                            <p className="text-lg sm:text-xl mb-8 leading-relaxed font-light max-w-2xl mx-auto text-slate-50">Celeste is an AI-powered presentation builder that understands your intent—writing, designing, and refining every frame with effortless precision. It's not just faster, it's thoughtful, intuitive and just what you need.</p>
                        </motion.div>

                        {/* Email Input */}
                        <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="mb-8">
                            <EmailCapture />
                        </motion.div>

                        {/* Microcopy */}
                        <motion.div custom={5} variants={fadeUpVariants} initial="hidden" animate="visible" className="max-w-md mx-auto">
                            <p className="text-center leading-relaxed text-sm text-slate-50">
                                Early access for visionaries.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>;
}
export { CelesteHero };

function EmailCapture() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const handleSubmit = async () => {
        if (!isValidEmail(email)) {
            toast({
                title: "Please enter a valid email",
                description: "Example: name@company.com",
                variant: "destructive",
            });
            return;
        }

        setLoading(true);
        try {
            await submitWaitlistEmail(email);
            toast({
                title: "You're on the list!",
                description: "We'll email you when the beta opens.",
            });
            setEmail("");
        } catch (err: any) {
            toast({
                title: "Submission failed",
                description: err?.message || "Please try again in a moment.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative w-full max-w-xl">
                <div className="relative flex items-center gap-2 p-1.5 bg-white/5 border-2 border-white/10 rounded-full backdrop-blur-sm">
                    <Input
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-transparent border-0 text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 px-6 rounded-full"
                    />
                    <RainbowButton onClick={handleSubmit} disabled={loading || !email}>
                        {loading ? (
                            <span className="inline-flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Submitting...
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-2">
                                JOIN WAITLIST <Send className="h-4 w-4" />
                            </span>
                        )}
                    </RainbowButton>
                </div>
            </div>
            <div className="px-3 py-1 bg-celeste-primary/20 border border-celeste-primary/30 rounded-full">
                <span className="text-xs text-celeste-primary font-medium">✨ Beta opens November 2025</span>
            </div>
        </div>
    );
}