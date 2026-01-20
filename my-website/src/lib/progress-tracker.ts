// Progress tracking utilities for the AI-Native Book Website

// Interface for progress data
interface ProgressData {
  currentChapter: number;
  currentTopic: number;
  progressPercentage: number;
  lastReadDate: string;
}

// Save reading progress to localStorage
export const saveReadingProgress = (chapter: number, topic: number): void => {
  try {
    const progressPercentage = calculateProgress(chapter, topic);
    const progressData: ProgressData = {
      currentChapter: chapter,
      currentTopic: topic,
      progressPercentage,
      lastReadDate: new Date().toISOString()
    };

    localStorage.setItem('readingProgress', JSON.stringify(progressData));
  } catch (error) {
    console.error('Error saving reading progress:', error);
  }
};

// Get reading progress from localStorage
export const getReadingProgress = (): ProgressData | null => {
  try {
    const stored = localStorage.getItem('readingProgress');
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error getting reading progress:', error);
    return null;
  }
};

// Calculate progress percentage based on current chapter/topic
export const calculateProgress = (currentChapter: number, currentTopic: number): number => {
  const totalChapters = 5; // Total number of chapters
  const totalTopics = 2;   // Total topics per chapter
  const totalContent = totalChapters * totalTopics; // Total number of topics

  const currentContentIndex = ((currentChapter - 1) * totalTopics) + currentTopic;
  const progress = (currentContentIndex / totalContent) * 100;

  return Math.min(Math.max(progress, 0), 100); // Ensure between 0 and 100
};

// Get the next content position
export const getNextContentPosition = (currentChapter: number, currentTopic: number): { chapter: number; topic: number } | null => {
  const totalChapters = 5;
  const totalTopics = 2;

  // If we're at the last topic of the last chapter, return null
  if (currentChapter === totalChapters && currentTopic === totalTopics) {
    return null;
  }

  let nextChapter = currentChapter;
  let nextTopic = currentTopic + 1;

  // If we've reached the end of topics in this chapter, go to next chapter
  if (nextTopic > totalTopics) {
    nextChapter = currentChapter + 1;
    nextTopic = 1;
  }

  return { chapter: nextChapter, topic: nextTopic };
};

// Get the previous content position
export const getPreviousContentPosition = (currentChapter: number, currentTopic: number): { chapter: number; topic: number } | null => {
  // If we're at the first topic of the first chapter, return null
  if (currentChapter === 1 && currentTopic === 1) {
    return null;
  }

  let prevChapter = currentChapter;
  let prevTopic = currentTopic - 1;

  // If we're at the first topic of a chapter, go to the last topic of the previous chapter
  if (prevTopic < 1) {
    prevChapter = currentChapter - 1;
    prevTopic = 2; // Assuming 2 topics per chapter
  }

  return { chapter: prevChapter, topic: prevTopic };
};

// Reset progress (for testing purposes)
export const resetReadingProgress = (): void => {
  try {
    localStorage.removeItem('readingProgress');
  } catch (error) {
    console.error('Error resetting reading progress:', error);
  }
};

// Get all completed chapters
export const getCompletedChapters = (): number[] => {
  const progress = getReadingProgress();
  if (!progress) return [];

  const completed: number[] = [];
  for (let i = 1; i <= progress.currentChapter; i++) {
    completed.push(i);
  }

  return completed;
};

// Get all completed topics for a chapter
export const getCompletedTopicsForChapter = (chapterNumber: number): number[] => {
  const progress = getReadingProgress();
  if (!progress) return [];

  const completed: number[] = [];
  if (progress.currentChapter > chapterNumber) {
    // If we've moved beyond this chapter, all topics are completed
    for (let i = 1; i <= 2; i++) {
      completed.push(i);
    }
  } else if (progress.currentChapter === chapterNumber) {
    // If we're in this chapter, only topics up to current are completed
    for (let i = 1; i <= progress.currentTopic; i++) {
      completed.push(i);
    }
  }

  return completed;
};