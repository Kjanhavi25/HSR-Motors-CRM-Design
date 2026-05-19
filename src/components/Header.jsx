import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-panel mt-4 mx-4 md:mx-16 px-6 py-4 flex items-center justify-between border-b-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-glow">
          <span className="text-white font-heading font-bold text-lg leading-none">A</span>
        </div>
        <span className="font-heading font-bold text-xl tracking-wider text-white">AETHER DYNAMICS</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#platform" className="text-on-surface hover:text-white transition-colors text-sm uppercase tracking-widest font-heading font-semibold">Platform</a>
        <a href="#solutions" className="text-on-surface hover:text-white transition-colors text-sm uppercase tracking-widest font-heading font-semibold">Solutions</a>
        <a href="#docs" className="text-on-surface hover:text-white transition-colors text-sm uppercase tracking-widest font-heading font-semibold">Docs</a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="#login" className="hidden md:block text-on-surface hover:text-white transition-colors text-sm uppercase tracking-widest font-heading font-semibold">Log In</a>
        <Button className="py-2 px-4 text-sm">Launch Console</Button>
      </div>
    </header>
  );
};

export default Header;
