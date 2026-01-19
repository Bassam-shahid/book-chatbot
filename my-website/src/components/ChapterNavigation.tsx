'use client';

import React from 'react';
import Link from '@docusaurus/Link';
import { useTheme } from '../contexts/theme-provider';

interface ChapterNavigationProps {
  currentChapter: number;
  currentTopic: number;
  totalChapters: number;
  totalTopics: number;
  onChapterChange?: (chapter: number) => void;
  onTopicChange?: (topic: number) => void;
}

const ChapterNavigation = ({
  currentChapter,
  currentTopic,
  totalChapters,
  totalTopics,
  onChapterChange,
  onTopicChange
}: ChapterNavigationProps) => {
  const { theme } = useTheme();

  // Generate chapter list for navigation
  const chapters = Array.from({ length: totalChapters }, (_, i) => i + 1);
  const topics = Array.from({ length: totalTopics }, (_, i) => i + 1);

  return (
    <div className={`book-navigation ${theme}`}>
      <div className="chapter-list">
        <h3>Chapters</h3>
        <ul className="chapter-items">
          {/* Introduction */}
          <li key="intro" className="chapter-item">
            <Link
              to="/book/intro"
              className={`chapter-title ${currentChapter === 1 ? 'active' : ''}`}
              onClick={(e) => {
                if (onChapterChange) {
                  e.preventDefault();
                  onChapterChange(1);
                }
              }}
            >
              Introduction
            </Link>
          </li>

          {/* Tutorial Basics */}
          <li key="tutorial-basics" className="chapter-item">
            <Link
              to="/book/tutorial-basics/create-a-document"
              className={`chapter-title ${currentChapter === 2 ? 'active' : ''}`}
              onClick={(e) => {
                if (onChapterChange) {
                  e.preventDefault();
                  onChapterChange(2);
                }
              }}
            >
              Foundations of AI-Native Development
            </Link>
            {currentChapter === 2 && (
              <ul className="topic-list">
                <li key="create-a-document" className="topic-item">
                  <Link
                    to="/book/tutorial-basics/create-a-document"
                    className={`topic-title ${currentTopic === 1 ? 'active' : ''}`}
                    onClick={(e) => {
                      if (onTopicChange) {
                        e.preventDefault();
                        onTopicChange(1);
                      }
                    }}
                  >
                    Creating a Document
                  </Link>
                </li>
                <li key="create-a-page" className="topic-item">
                  <Link
                    to="/book/tutorial-basics/create-a-page"
                    className={`topic-title ${currentTopic === 2 ? 'active' : ''}`}
                    onClick={(e) => {
                      if (onTopicChange) {
                        e.preventDefault();
                        onTopicChange(2);
                      }
                    }}
                  >
                    Creating a Page
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Data Management */}
          <li key="data-management" className="chapter-item">
            <Link
              to="/book/tutorial-basics/create-a-blog-post"
              className={`chapter-title ${currentChapter === 3 ? 'active' : ''}`}
              onClick={(e) => {
                if (onChapterChange) {
                  e.preventDefault();
                  onChapterChange(3);
                }
              }}
            >
              Data Management in AI-Native Systems
            </Link>
            {currentChapter === 3 && (
              <ul className="topic-list">
                <li key="create-a-blog-post" className="topic-item">
                  <Link
                    to="/book/tutorial-basics/create-a-blog-post"
                    className={`topic-title ${currentTopic === 1 ? 'active' : ''}`}
                    onClick={(e) => {
                      if (onTopicChange) {
                        e.preventDefault();
                        onTopicChange(1);
                      }
                    }}
                  >
                    Creating a Blog Post
                  </Link>
                </li>
                <li key="markdown-features" className="topic-item">
                  <Link
                    to="/book/tutorial-basics/markdown-features"
                    className={`topic-title ${currentTopic === 2 ? 'active' : ''}`}
                    onClick={(e) => {
                      if (onTopicChange) {
                        e.preventDefault();
                        onTopicChange(2);
                      }
                    }}
                  >
                    Markdown Features
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Model Development */}
          <li key="model-dev" className="chapter-item">
            <Link
              to="/book/tutorial-basics/deploy-your-site"
              className={`chapter-title ${currentChapter === 4 ? 'active' : ''}`}
              onClick={(e) => {
                if (onChapterChange) {
                  e.preventDefault();
                  onChapterChange(4);
                }
              }}
            >
              Model Development and Deployment
            </Link>
          </li>

          {/* Advanced Topics */}
          <li key="advanced" className="chapter-item">
            <Link
              to="/book/tutorial-extras/manage-docs-versions"
              className={`chapter-title ${currentChapter === 5 ? 'active' : ''}`}
              onClick={(e) => {
                if (onChapterChange) {
                  e.preventDefault();
                  onChapterChange(5);
                }
              }}
            >
              Advanced Topics
            </Link>
            {currentChapter === 5 && (
              <ul className="topic-list">
                <li key="manage-docs-versions" className="topic-item">
                  <Link
                    to="/book/tutorial-extras/manage-docs-versions"
                    className={`topic-title ${currentTopic === 1 ? 'active' : ''}`}
                    onClick={(e) => {
                      if (onTopicChange) {
                        e.preventDefault();
                        onTopicChange(1);
                      }
                    }}
                  >
                    Managing Docs Versions
                  </Link>
                </li>
                <li key="translate-your-site" className="topic-item">
                  <Link
                    to="/book/tutorial-extras/translate-your-site"
                    className={`topic-title ${currentTopic === 2 ? 'active' : ''}`}
                    onClick={(e) => {
                      if (onTopicChange) {
                        e.preventDefault();
                        onTopicChange(2);
                      }
                    }}
                  >
                    Translating Your Site
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChapterNavigation;