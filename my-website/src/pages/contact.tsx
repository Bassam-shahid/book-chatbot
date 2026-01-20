import React from 'react';
import Layout from '@theme/Layout';
import type {ReactNode} from 'react';
import WaitlistForm from '../components/WaitlistForm';

export default function Contact(): ReactNode {
  return (
    <Layout title="Contact - AI-Native Driven Development" description="Join our waitlist for updates on the AI-Native Driven Development book">
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <WaitlistForm
              title="Stay Updated"
              description="Join our waitlist to receive updates when the book is available"
              buttonLabel="Join Waitlist"
            />

            <div className="padding-vert--lg">
              <h2>About This Book</h2>
              <p>
                "AI-Native Driven Development" is a comprehensive guide to building AI-Native applications and systems.
                The book covers everything from foundational concepts to advanced implementation strategies, providing
                practical techniques for building scalable, maintainable AI systems.
              </p>

              <p>
                By joining our waitlist, you'll be among the first to know when new chapters are available,
                when the complete book is published, and when special offers or additional resources become available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}