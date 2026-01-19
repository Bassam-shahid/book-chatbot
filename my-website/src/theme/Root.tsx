'use client';

import React from 'react';
import { ThemeProvider } from '../contexts/theme-provider';

// This Root component wraps the entire app with the ThemeProvider
const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default Root;