import React from 'react';
import Layout from '@theme/Layout';
import type {ReactNode} from 'react';
import AuthorBio from '../components/AuthorBio';
import VisionSection from '../components/VisionSection';

export default function About(): ReactNode {
  return (
    <Layout title="About - AI-Native Driven Development" description="Learn about the author and vision behind the AI-Native Driven Development book">
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className="text--center padding-bottom--lg">
              <h1>About the Author</h1>
              <p className="hero__subtitle">Expert in AI-Native Development and Machine Learning Systems</p>
            </div>

            <div className="padding-vert--lg">
              <AuthorBio />
            </div>

            <div className="padding-vert--lg">
              <VisionSection />
            </div>

            <div className="padding-vert--lg">
              <div className="card">
                <div className="card__header">
                  <h2 className="text-xl font-semibold">Technical Approach</h2>
                </div>
                <div className="card__body">
                  <p className="mb-4">
                    The book emphasizes practical implementation patterns and architectural decisions that enable
                    effective AI-Native systems. Key focus areas include:
                  </p>
                  <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li>Data pipeline design and management</li>
                    <li>Feature store architecture and implementation</li>
                    <li>Model serving and inference optimization</li>
                    <li>User experience design for AI interactions</li>
                    <li>Monitoring and observability for AI systems</li>
                    <li>Performance optimization and scalability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}