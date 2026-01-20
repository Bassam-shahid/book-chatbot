'use client';

import React from 'react';
import { useTheme } from '../contexts/theme-provider';

interface ProgressBarProps {
  progress: number;
  showPercentage?: boolean;
}

const ProgressBar = ({ progress, showPercentage = true }: ProgressBarProps) => {
  const { theme } = useTheme();

  return (
    <div className={`progress-container ${theme}`}>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {showPercentage && (
        <div className="progress-text">
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;