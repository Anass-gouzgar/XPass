import React, { useEffect, useRef } from 'react';
import { Shield, Zap, Eye, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(descRef.current, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(btnRef.current, 
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6 },
      "-=0.6"
    )
    .fromTo(featuresRef.current?.children || [], 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      "-=0.4"
    );

  }, []);

  return (
    <div ref={containerRef} className="md:h-screen pt-44 md:pt-0 pb-20 w-full flex flex-col items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Unified Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.15),transparent_70%)]" />
        
        {/* Animated Orbs blended together */}
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-pulse opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-1000 opacity-60" />
        <div className="absolute top-[40%] left-[40%] w-[60vw] h-[60vw] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-500 opacity-40" />

        {/* Noise Texture for Texture/Union */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center h-full max-h-[900px]">
        <div className="flex-1 flex flex-col items-center justify-center space-y-6 md:space-y-8 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm text-xs font-medium text-muted-foreground animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            v1.0 Now Available
            </div>

            <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40 pb-2 leading-tight">
            Secure Your Digital <br className="hidden md:block" />
            <span className="text-primary">Life with Confidence</span>
            </h1>

            <p ref={descRef} className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            The ultimate security toolkit. Generate unbreakable passwords, analyze vault health, and manage your credentials with military-grade encryption.
            </p>

            <div className="pt-2 md:pt-4">
            <button 
                ref={btnRef}
                onClick={onGetStarted}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] active:scale-95 cursor-pointer "
            >
                Get Started
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </div>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mt-8 md:mt-12 text-left pb-4 md:pb-0">
          <FeatureCard 
            icon={<Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />}
            title="Advanced Security"
            description="Military-grade encryption for your local vault."
          />
          <FeatureCard 
            icon={<Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />}
            title="Lightning Fast"
            description="Instant password generation and strength analysis."
          />
          <FeatureCard 
            icon={<Eye className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />}
            title="AI Advisor"
            description="Smart security recommendations powered by AI."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6 rounded-2xl bg-secondary/20 border border-border/50 backdrop-blur-sm hover:bg-secondary/40 transition-colors">
    <div className="mb-4 p-3 bg-background/50 w-fit rounded-xl border border-border/50">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default LandingPage;
