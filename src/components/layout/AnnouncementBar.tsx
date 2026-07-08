import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-brand-beige text-brand-charcoal py-2.5 text-center font-accent text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-brand-charcoal/5">
      Free Shipping on orders above ₹4,999
    </div>
  );
};

export default AnnouncementBar;
