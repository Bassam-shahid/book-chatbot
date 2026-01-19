import React from 'react';
import Link from '@docusaurus/Link';
import { Card } from './ui/card';

const BookPreview = () => {
  const chapters = [
    {
      id: 'chapter-1',
      title: 'Foundations of AI-Native Development',
      description: 'Understanding the core principles and architecture patterns for AI-native applications'
    },
    {
      id: 'chapter-2',
      title: 'Data Management for AI Systems',
      description: 'Strategies for handling data flows, transformations, and quality in AI-native applications'
    },
    {
      id: 'chapter-3',
      title: 'Model Development & Integration',
      description: 'Best practices for developing, training, and integrating AI models into applications'
    },
    {
      id: 'chapter-4',
      title: 'Performance & Scalability',
      description: 'Optimizing AI-native applications for performance and scaling considerations'
    },
    {
      id: 'chapter-5',
      title: 'Security & Ethics in AI',
      description: 'Addressing security concerns and ethical considerations in AI-native development'
    }
  ];

  return (
    <section className="padding-vert--lg">
      <div className="container">
        <h2 className="text--center margin-bottom--xl">Book Preview</h2>
        <div className="row">
          {chapters.map((chapter, index) => (
            <div className="col col--4 margin-bottom--lg" key={chapter.id}>
              <Card
                title={`${index + 1}. ${chapter.title}`}
                description={chapter.description}
              >
                <Link
                  className="button button--primary button--block"
                  to={index === 0 ? '/book/intro' :
                      index === 1 ? '/book/tutorial-basics/create-a-document' :
                      index === 2 ? '/book/tutorial-basics/create-a-blog-post' :
                      index === 3 ? '/book/tutorial-basics/deploy-your-site' :
                      '/book/tutorial-extras/manage-docs-versions'}
                >
                  Read Chapter
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookPreview;