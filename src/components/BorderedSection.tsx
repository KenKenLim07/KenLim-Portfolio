// src/components/BorderedSection.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string; // optional extra class if needed
};

export default function BorderedSection({ title, children, className = "" }: Props) {
  const { isDarkMode } = useTheme();
  
  return (
    <section className={`relative border border-gray-300 dark:border-neutral-700 rounded-md p-4 mt-6 ${
      isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
    } ${className}`}>
      <h2 className={`absolute -top-3 left-4 px-2 text-sm font-semibold ${
        isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-700'
      }`}>
        {title}
      </h2>
      {children}
    </section>
  );
} 