import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col mb-12 ${alignmentClass[align]} ${className}`}>
      {subtitle && (
        <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-brand-burgundy mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-headline-lg text-brand-charcoal font-semibold tracking-tight">
        {title}
      </h2>
      {align === 'center' && (
        <div className="w-16 h-[2px] bg-brand-burgundy mt-4" />
      )}
    </div>
  );
};

export default SectionHeading;
