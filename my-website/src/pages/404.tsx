import React from 'react';
import Layout from '@theme/Layout';
import type {ReactNode} from 'react';

export default function NotFound(): ReactNode {
  return (
    <Layout title="Page Not Found" description="The page you're looking for does not exist">
      <div className="container margin-vert--xl text--center">
        <h1 className="hero__title">Page Not Found</h1>
        <p className="hero__subtitle">We couldn't find the page you were looking for.</p>
        <a href="/" className="button button--primary">Go to Homepage</a>
      </div>
    </Layout>
  );
}