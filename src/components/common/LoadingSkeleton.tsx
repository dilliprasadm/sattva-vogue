import React from 'react';

interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'banner';
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  type = 'card',
  className = '',
}) => {
  if (type === 'text') {
    return (
      <div className={`animate-pulse flex flex-col gap-3 ${className}`}>
        <div className="h-4 bg-brand-charcoal/10 rounded-sm w-1/4" />
        <div className="h-8 bg-brand-charcoal/10 rounded-sm w-3/4" />
        <div className="h-4 bg-brand-charcoal/10 rounded-sm w-1/2" />
      </div>
    );
  }

  if (type === 'banner') {
    return (
      <div
        className={`animate-pulse bg-brand-beige w-full h-[400px] rounded-md flex items-center justify-center ${className}`}
      >
        <div className="w-16 h-16 rounded-full border-4 border-brand-burgundy/10 border-t-brand-burgundy animate-spin" />
      </div>
    );
  }

  return (
    <div className={`animate-pulse flex flex-col w-full ${className}`}>
      <div className="bg-brand-beige aspect-[4/5] w-full rounded-sm mb-5" />
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-3 bg-brand-charcoal/10 rounded-sm w-1/3" />
          <div className="h-5 bg-brand-charcoal/10 rounded-sm w-3/4" />
        </div>
        <div className="h-5 bg-brand-charcoal/10 rounded-sm w-12" />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
