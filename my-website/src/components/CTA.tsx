import React from 'react';
import Link from '@docusaurus/Link';

interface CTAProps {
  text?: string;
  link?: string;
  linkText?: string;
  variant?: 'primary' | 'secondary';
}

const CTA = ({
  text = 'Ready to start your AI-native journey?',
  link = '/contact',
  linkText = 'Join Waitlist',
  variant = 'primary'
}: CTAProps) => {
  return (
    <section className="padding-vert--xl">
      <div className="container text--center">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2 className="text--center margin-bottom--lg">{text}</h2>
            <Link
              className={`button button--${variant === 'primary' ? 'primary' : 'secondary'} button--lg`}
              to={link}
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;