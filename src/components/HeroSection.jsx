import React from 'react';
import Button from './Button';
import Badge from './Badge';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 px-4 flex flex-col items-center text-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <Badge active={true}>v2.4 Orbital Release is Live</Badge>
        
        <h1 className="mt-8 text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter leading-tight">
          Propulsion, Precision, and <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Infinite Exploration.</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl font-body">
          The ultimate command center for aerospace engineers and satellite logistics operators. 
          Monitor telemetry, manage orbital assets, and orchestrate complex maneuvers with unparalleled accuracy.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button className="px-8 py-4 text-lg">Initialize Sequence</Button>
          <button className="px-8 py-4 text-lg font-heading font-semibold text-white bg-secondary/40 border border-outline/50 rounded-lg hover:bg-secondary/60 transition-colors backdrop-blur-sm">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
