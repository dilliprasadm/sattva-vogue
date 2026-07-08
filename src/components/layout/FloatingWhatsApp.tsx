'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-brand-ivory rounded-full flex items-center justify-center shadow-2xl z-40 hover:bg-[#20ba5a] transition-colors cursor-pointer outline-none"
    >
      <MessageCircle className="w-7 h-7 fill-brand-ivory text-transparent" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
