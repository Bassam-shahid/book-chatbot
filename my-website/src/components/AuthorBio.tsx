import React from 'react';
import { Card } from './ui/card';

interface AuthorBioProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  credentials?: string[];
}

const AuthorBio = ({
  name = 'Dr. Alex Johnson',
  title = 'Senior AI Researcher & Software Architect',
  description = 'Dr. Alex Johnson is a leading expert in AI-Native development with over 15 years of experience in machine learning, software architecture, and scalable systems.',
  imageUrl = '/img/docusaurus.png',
  credentials = [
    'PhD in Computer Science from Stanford University',
    'Published 50+ papers on machine learning and AI systems',
    'Frequent speaker at major AI and software engineering conferences'
  ]
}: AuthorBioProps) => {
  return (
    <Card className="author-bio">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
            src={imageUrl}
            alt={name}
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{title}</p>
          <p className="mb-4">{description}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Credentials:</h3>
            <ul className="list-disc list-inside space-y-1">
              {credentials.map((cred, index) => (
                <li key={index}>{cred}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AuthorBio;