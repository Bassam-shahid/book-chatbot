// Content loading utilities for the AI-Native Book Website

// Function to get all available chapters
export const getAllChapters = (): Array<{id: string, title: string, chapterNumber: number, topicNumber: number, slug: string}> => {
  // In a real implementation, this would load from the content directory
  // For now, we'll return a static list of chapters
  const chapters = [];

  for (let chapter = 1; chapter <= 5; chapter++) {
    for (let topic = 1; topic <= 2; topic++) {
      chapters.push({
        id: `chapter-${chapter}-topic-${topic}`,
        title: `Chapter ${chapter}, Topic ${topic}`,
        chapterNumber: chapter,
        topicNumber: topic,
        slug: `chapter-${chapter}-topic-${topic}`
      });
    }
  }

  return chapters;
};

// Function to get content for a specific chapter
export const getChapterContent = async (chapterId: string): Promise<string | null> => {
  try {
    // In a real implementation, this would dynamically import MDX content
    // For now, we'll return placeholder content
    const chapters = getAllChapters();
    const chapter = chapters.find(c => c.id === chapterId);

    if (!chapter) {
      return null;
    }

    // This would normally load the actual MDX content
    return `# ${chapter.title}\n\nContent for ${chapter.title} would be loaded here.`;
  } catch (error) {
    console.error(`Error loading chapter ${chapterId}:`, error);
    return null;
  }
};

// Function to get next chapter
export const getNextChapter = (currentChapter: number, currentTopic: number): {chapter: number, topic: number} | null => {
  const allChapters = getAllChapters();
  const currentIndex = allChapters.findIndex(c =>
    c.chapterNumber === currentChapter && c.topicNumber === currentTopic
  );

  if (currentIndex === -1 || currentIndex >= allChapters.length - 1) {
    return null; // No next chapter
  }

  const nextChapter = allChapters[currentIndex + 1];
  return {
    chapter: nextChapter.chapterNumber,
    topic: nextChapter.topicNumber
  };
};

// Function to get previous chapter
export const getPreviousChapter = (currentChapter: number, currentTopic: number): {chapter: number, topic: number} | null => {
  const allChapters = getAllChapters();
  const currentIndex = allChapters.findIndex(c =>
    c.chapterNumber === currentChapter && c.topicNumber === currentTopic
  );

  if (currentIndex <= 0) {
    return null; // No previous chapter
  }

  const prevChapter = allChapters[currentIndex - 1];
  return {
    chapter: prevChapter.chapterNumber,
    topic: prevChapter.topicNumber
  };
};

// Function to calculate reading progress
export const calculateProgress = (currentChapter: number, currentTopic: number): number => {
  const totalChapters = 5; // Total number of chapters
  const totalTopics = 2;   // Total topics per chapter
  const totalContent = totalChapters * totalTopics; // Total number of topics

  const currentContentIndex = ((currentChapter - 1) * totalTopics) + currentTopic;
  const progress = (currentContentIndex / totalContent) * 100;

  return Math.min(Math.max(progress, 0), 100); // Ensure between 0 and 100
};

// Function to get chapter navigation data
export const getChapterNavigation = (currentChapter: number, currentTopic: number) => {
  return {
    currentChapter,
    currentTopic,
    totalChapters: 5,
    totalTopics: 2,
    next: getNextChapter(currentChapter, currentTopic),
    previous: getPreviousChapter(currentChapter, currentTopic),
    progress: calculateProgress(currentChapter, currentTopic)
  };
};