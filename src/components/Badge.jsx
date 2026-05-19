import React from 'react';

const Badge = ({ children, active = true }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-heading tracking-widest uppercase border ${
        active
          ? 'bg-tertiary/20 text-tertiary border-tertiary/50'
          : 'bg-surface-bright text-outline border-outline/30'
      }`}
    >
      {active && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-tertiary animate-pulse" />}
      {children}
    </span>
  );
};

export default Badge;
