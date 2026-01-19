import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const HeroSection = () => {
  return (
    <section className="hero hero--primary text--center">
      <div className="container">
        <div className="padding-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h1 className="hero__title">
                Master AI-Native Development
              </h1>
              <p className="hero__subtitle">
                The definitive guide to building AI-native applications and systems
              </p>
              <div className="margin-vert--lg">
                <Link
                  className="button button--primary button--lg"
                  to="/book"
                >
                  Start Reading
                </Link>
                <Link
                  className="button button--secondary button--lg margin-left--md"
                  to="/about"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;