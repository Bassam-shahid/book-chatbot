'use client';

import React from 'react';
import { useTheme } from '../contexts/theme-provider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <span className="text-gray-800">🌙</span> // Moon icon for dark mode
      ) : (
        <span className="text-yellow-400">☀️</span> // Sun icon for light mode
      )}
    </button>
  );
};

export default ThemeToggle;