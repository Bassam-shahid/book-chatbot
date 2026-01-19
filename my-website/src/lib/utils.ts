// Utility functions for the AI-Native Book Website

// Waitlist storage utilities
export const saveToWaitlist = (email: string): boolean => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    // Get existing waitlist from localStorage
    const existingWaitlist = getWaitlistFromStorage();

    // Check if email already exists
    if (existingWaitlist.some(entry => entry.email === email)) {
      return false; // Email already exists
    }

    // Create new entry
    const newEntry = {
      id: `waitlist_${Date.now()}`,
      email,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Add to existing list and save
    const updatedWaitlist = [...existingWaitlist, newEntry];
    localStorage.setItem('waitlistEntries', JSON.stringify(updatedWaitlist));

    return true;
  } catch (error) {
    console.error('Error saving to waitlist:', error);
    return false;
  }
};

export const getWaitlistFromStorage = (): Array<{id: string, email: string, timestamp: string, status: string}> => {
  try {
    const stored = localStorage.getItem('waitlistEntries');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading waitlist from storage:', error);
    return [];
  }
};

// Theme utilities
export const getCurrentTheme = (): 'light' | 'dark' => {
  try {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      return storedTheme;
    }

    // Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  } catch (error) {
    console.error('Error getting theme:', error);
    return 'light';
  }
};

export const setTheme = (theme: 'light' | 'dark'): void => {
  try {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  } catch (error) {
    console.error('Error setting theme:', error);
  }
};

// Reading progress utilities
export const saveReadingProgress = (progress: {
  currentChapter: number;
  currentTopic: number;
  progressPercentage: number;
}): void => {
  try {
    const progressData = {
      ...progress,
      lastReadDate: new Date().toISOString()
    };
    localStorage.setItem('readingProgress', JSON.stringify(progressData));
  } catch (error) {
    console.error('Error saving reading progress:', error);
  }
};

export const getReadingProgress = (): {
  currentChapter: number;
  currentTopic: number;
  progressPercentage: number;
  lastReadDate: string;
} | null => {
  try {
    const stored = localStorage.getItem('readingProgress');
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error getting reading progress:', error);
    return null;
  }
};

// Content loading utilities
export const loadChapterContent = async (chapterId: string): Promise<string | null> => {
  try {
    // This would normally fetch from an API or file system
    // For now, we'll return null to indicate it needs to be implemented
    // In a real implementation, this would load MDX content
    return null;
  } catch (error) {
    console.error(`Error loading chapter ${chapterId}:`, error);
    return null;
  }
};

// Navigation utilities
export const getChapterUrl = (chapterNumber: number, topicNumber?: number): string => {
  if (topicNumber !== undefined) {
    return `/book/chapter-${chapterNumber}-topic-${topicNumber}`;
  }
  return `/book/chapter-${chapterNumber}`;
};

export const getChapterTitle = (chapterNumber: number, topicNumber?: number): string => {
  if (topicNumber !== undefined) {
    return `Chapter ${chapterNumber}, Topic ${topicNumber}`;
  }
  return `Chapter ${chapterNumber}`;
};

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Format utilities
export const formatChapterNumber = (num: number): string => {
  return num.toString().padStart(2, '0');
};

export const formatTopicNumber = (num: number): string => {
  return num.toString().padStart(2, '0');
};

// Accessibility utilities
export const focusElement = (selector: string): void => {
  const element = document.querySelector(selector);
  if (element && (element as HTMLElement).focus) {
    (element as HTMLElement).focus();
  }
};

// Animation utilities
export const animateScrollTo = (element: HTMLElement, offset = 0): void => {
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};