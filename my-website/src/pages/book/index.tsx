import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import type {ReactNode} from 'react';
import styles from './styles.module.css';
import ChapterNavigation from '../../components/ChapterNavigation';
import ProgressBar from '../../components/ProgressBar';
import { saveReadingProgress, getReadingProgress } from '../../lib/progress-tracker';
import { getAllChapters } from '../../lib/content-loader';

// Mock data for chapters and topics
const CHAPTERS = [
  {
    id: 1,
    title: 'Foundations of AI-Native Development',
    topics: [
      { id: 1, title: 'Introduction to AI-Native Systems' },
      { id: 2, title: 'Architecture Patterns for AI Integration' }
    ]
  },
  {
    id: 2,
    title: 'Data Management in AI-Native Systems',
    topics: [
      { id: 1, title: 'Data Pipelines and Processing' },
      { id: 2, title: 'Feature Stores and Management' }
    ]
  },
  {
    id: 3,
    title: 'Model Development and Deployment',
    topics: [
      { id: 1, title: 'Training and Evaluation Workflows' },
      { id: 2, title: 'Model Serving and Inference' }
    ]
  },
  {
    id: 4,
    title: 'User Experience in AI Applications',
    topics: [
      { id: 1, title: 'Designing for AI Interactions' },
      { id: 2, title: 'Explainability and Trust' }
    ]
  },
  {
    id: 5,
    title: 'Scaling and Optimization',
    topics: [
      { id: 1, title: 'Performance Optimization' },
      { id: 2, title: 'Monitoring and Observability' }
    ]
  }
];

// Dynamic import of MDX content
import Chapter1Topic1 from '@site/content/chapters/chapter-1-topic-1.mdx';
import Chapter1Topic2 from '@site/content/chapters/chapter-1-topic-2.mdx';
import Chapter2Topic1 from '@site/content/chapters/chapter-2-topic-1.mdx';
import Chapter2Topic2 from '@site/content/chapters/chapter-2-topic-2.mdx';
import Chapter3Topic1 from '@site/content/chapters/chapter-3-topic-1.mdx';
import Chapter3Topic2 from '@site/content/chapters/chapter-3-topic-2.mdx';
import Chapter4Topic1 from '@site/content/chapters/chapter-4-topic-1.mdx';
import Chapter4Topic2 from '@site/content/chapters/chapter-4-topic-2.mdx';
import Chapter5Topic1 from '@site/content/chapters/chapter-5-topic-1.mdx';
import Chapter5Topic2 from '@site/content/chapters/chapter-5-topic-2.mdx';

// Mapping of content components
const CONTENT_COMPONENTS = {
  1: Chapter1Topic1,
  2: Chapter1Topic2,
  3: Chapter2Topic1,
  4: Chapter2Topic2,
  5: Chapter3Topic1,
  6: Chapter3Topic2,
  7: Chapter4Topic1,
  8: Chapter4Topic2,
  9: Chapter5Topic1,
  10: Chapter5Topic2
};

function BookLayout({ children, currentChapter, currentTopic }: { children: ReactNode; currentChapter: number; currentTopic: number; }) {
  const [progress, setProgress] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState(currentChapter);
  const [selectedTopic, setSelectedTopic] = useState(currentTopic);

  // Load saved progress on component mount
  useEffect(() => {
    const savedProgress = getReadingProgress();
    if (savedProgress) {
      setSelectedChapter(savedProgress.currentChapter);
      setSelectedTopic(savedProgress.currentTopic);
      setProgress(savedProgress.progressPercentage);
    }
  }, []);

  // Simulate progress based on scroll and save progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const newProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(newProgress);

      // Save progress to localStorage
      saveReadingProgress(selectedChapter, selectedTopic);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedChapter, selectedTopic]);

  const handleChapterChange = (chapterId: number) => {
    setSelectedChapter(chapterId);
    setSelectedTopic(1); // Default to first topic
    saveReadingProgress(chapterId, 1); // Save progress when changing chapter
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTopicChange = (topicId: number) => {
    setSelectedTopic(topicId);
    saveReadingProgress(selectedChapter, topicId); // Save progress when changing topic
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout title="AI-Native Driven Development - Book" description="Complete book on AI-Native development">
      <div className="container padding-vert--lg">
        <div className="row">
          {/* Table of Contents */}
          <div className="col col--3">
            <div className={styles.bookToc}>
              <ChapterNavigation
                currentChapter={selectedChapter}
                currentTopic={selectedTopic}
                totalChapters={5}
                totalTopics={2}
                onChapterChange={handleChapterChange}
                onTopicChange={handleTopicChange}
              />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="col col--9">
            <ProgressBar progress={progress} showPercentage={true} />

            {/* Book Content */}
            <div className={styles.bookContent}>
              <div className={styles.topicHeader}>
                <h1>{CHAPTERS[selectedChapter - 1]?.topics[selectedTopic - 1]?.title || 'Loading...'}</h1>
              </div>

              <div className={styles.topicContent}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function Book(): ReactNode {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [currentTopic, setCurrentTopic] = useState(1);

  // Calculate the content ID based on chapter and topic
  const contentId = currentChapter * 2 - (2 - currentTopic);
  const ContentComponent = CONTENT_COMPONENTS[contentId];

  if (!ContentComponent) {
    return (
      <Layout title="Book - Not Found" description="Chapter or topic not found">
        <div className="container padding-vert--lg">
          <div className="row">
            <div className="col col--12">
              <h1>Chapter or Topic Not Found</h1>
              <p>The requested chapter or topic does not exist.</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <BookLayout currentChapter={currentChapter} currentTopic={currentTopic}>
      <ContentComponent />
    </BookLayout>
  );
}