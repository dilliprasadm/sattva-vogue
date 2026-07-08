import React from 'react';

interface BadgeProps {
  label: string;
  type?: 'primary' | 'secondary' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  type = 'primary',
  className = '',
}) => {
  const styles = {
    primary: 'bg-brand-burgundy text-brand-ivory',
    secondary: 'bg-brand-rust text-brand-ivory',
    neutral: 'bg-brand-beige text-brand-charcoal border border-brand-charcoal/10',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full font-accent text-[10px] font-bold uppercase tracking-[0.1em] ${styles[type]} ${className}`}
    >
      {label}
    </span>
  );
};

export default Badge;
