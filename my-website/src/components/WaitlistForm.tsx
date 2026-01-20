'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { saveToWaitlist } from '../lib/utils';

interface WaitlistFormProps {
  onSubmit?: (email: string) => void;
  title?: string;
  description?: string;
  buttonLabel?: string;
}

const WaitlistForm = ({
  onSubmit,
  title = 'Join Our Waitlist',
  description = 'Be the first to know when new content is available',
  buttonLabel = 'Join Waitlist'
}: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Call the utility function to save to waitlist
    const success = saveToWaitlist(email);

    if (success) {
      setSubmitStatus({ type: 'success', message: 'Thank you! You\'ve been added to our waitlist.' });
      setEmail('');
      if (onSubmit) {
        onSubmit(email);
      }
    } else {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address or check if you\'re already on our waitlist.' });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="waitlist-form">
      <div className="text--center padding-bottom--lg">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="card">
        <div className="card__body">
          <div className="padding-bottom--md">
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              label="Email Address"
              error={submitStatus?.type === 'error' ? submitStatus.message : undefined}
            />
          </div>

          <div className="text--center padding-bottom--md">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              fullWidth
            >
              {isSubmitting ? 'Submitting...' : buttonLabel}
            </Button>
          </div>

          {submitStatus && submitStatus.type === 'success' && (
            <div className="alert alert--success">
              {submitStatus.message}
            </div>
          )}

          <div className="padding-top--md">
            <p className="text--center text--small">
              We respect your privacy. Your email will only be used to notify you about book updates.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;