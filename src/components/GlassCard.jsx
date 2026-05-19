import React from 'react';

const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`glass-card p-6 relative overflow-hidden ${className}`}>
      {/* Decorative HUD Elements */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-tertiary opacity-50"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-tertiary opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-tertiary opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-tertiary opacity-50"></div>
      
      {children}
    </div>
  );
};

export default GlassCard;
