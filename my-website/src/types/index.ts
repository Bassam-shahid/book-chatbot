// Book content types
export interface BookChapter {
  id: string;
  title: string;
  content: string;
  chapterNumber: number;
  topicNumber: number;
  slug: string;
}

export interface BookContent {
  id: string;
  title: string;
  content: string;
  chapterNumber: number;
  topicNumber: number;
  slug: string;
}

// User types
export interface UserEmail {
  email: string;
  timestamp: Date;
  id: string;
}

// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeSettings {
  theme: Theme;
  timestamp: Date;
}

// Reading progress types
export interface ReadingProgress {
  currentChapter: number;
  currentTopic: number;
  progressPercentage: number;
  lastReadDate: Date;
}

// Waitlist types
export interface WaitlistEntry {
  email: string;
  timestamp: Date;
  id: string;
}

// Navigation types
export interface ChapterNavigation {
  currentChapter: number;
  currentTopic: number;
  totalChapters: number;
  totalTopics: number;
}

// Component props types
export interface HeaderProps {
  title?: string;
}

export interface FooterProps {
  showNavigation?: boolean;
}

export interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg';
}

export interface BookPreviewProps {
  chapters: BookChapter[];
}

export interface CTAProps {
  text?: string;
  variant?: 'primary' | 'secondary';
}

export interface WaitlistFormProps {
  onSubmit?: (email: string) => void;
}

export interface ProgressBarProps {
  progress: number;
  showPercentage?: boolean;
}

export interface ChapterNavigationProps {
  currentChapter: number;
  currentTopic: number;
  totalChapters: number;
  totalTopics: number;
  onChapterChange?: (chapter: number) => void;
  onTopicChange?: (topic: number) => void;
}