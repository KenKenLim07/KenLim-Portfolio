import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function BorderedSection({ title, children, className = "" }: Props) {
  const { isDarkMode } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`relative border border-gray-300 dark:border-neutral-700 rounded-md p-4 mt-6 backdrop-blur-md bg-opacity-30 ${
        isDarkMode ? 'bg-neutral-900/40 text-gray-200' : 'bg-white/40 text-neutral-900'
      } ${className}`}
    >
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`absolute -top-3 left-4 px-2 text-sm font-semibold tracking-wide rounded ${
          isDarkMode ? 'bg-neutral-900 text-gray-100' : 'bg-white text-neutral-700'
        } shadow-md`}
      >
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}
