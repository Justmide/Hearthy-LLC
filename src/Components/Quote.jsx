import React from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 w-full text-center bg-[#1877F3] text-white text-sm md:text-base py-2 px-4 z-[60] shadow-md"
    >
      <p className="font-medium">Train. Transition. Travel. Celebrate.</p>
      <p className="font-light">We Grow Educators. We Celebrate People.</p>
    </motion.div>
  );
};

export default Quote;
