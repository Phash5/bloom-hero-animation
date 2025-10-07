import React from 'react';
import { cn } from '@/lib/utils';

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const RainbowButton = ({ children, className, ...props }: RainbowButtonProps) => {
  return (
    <div className="relative inline-block">
      <div className="rainbow-border-before absolute -inset-[2px] rounded-full opacity-100 animate-rainbow" />
      <div className="rainbow-border-after absolute -inset-[2px] rounded-full opacity-100 blur-[50px] animate-rainbow" />
      <button
        className={cn(
          "relative z-10 h-12 px-8 bg-white/90 hover:bg-white text-black font-semibold rounded-full whitespace-nowrap transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </button>
      
      <style>{`
        .rainbow-border-before,
        .rainbow-border-after {
          background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
          background-size: 400%;
        }
        
        @keyframes rainbow {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }
        
        .animate-rainbow {
          animation: rainbow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
