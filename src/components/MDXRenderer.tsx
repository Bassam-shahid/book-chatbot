'use client';

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '@theme/init';
import { useTheme } from '../contexts/theme-provider';

interface MDXRendererProps {
  content: string;
}

const MDXRenderer = ({ content }: MDXRendererProps) => {
  const { theme } = useTheme();
  const mdxComponents = useMDXComponents();

  // For Docusaurus, we'll use the standard MDX components
  return (
    <div className={`mdx-content ${theme}`}>
      <MDXProvider components={mdxComponents}>
        {content}
      </MDXProvider>
    </div>
  );
};

export default MDXRenderer;