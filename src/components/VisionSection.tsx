import React from 'react';
import { Card } from './ui/card';

interface VisionSectionProps {
  title?: string;
  description?: string;
  keyPoints?: string[];
}

const VisionSection = ({
  title = 'Vision for AI-Native Development',
  description = 'The vision behind this book is to bridge the gap between theoretical AI research and practical implementation in production systems. AI-Native development represents a fundamental shift in how we approach software engineering, where artificial intelligence is not an afterthought but a core component of system architecture from the ground up.',
  keyPoints = [
    'Build scalable and reliable AI-Native systems',
    'Make AI-Native development accessible and practical',
    'Combine cutting-edge research with real-world implementation',
    'Provide practical guidance for engineers and architects'
  ]
}: VisionSectionProps) => {
  return (
    <Card title={title}>
      <p className="mb-4">{description}</p>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Our Approach:</h3>
        <ul className="list-disc list-inside space-y-2">
          {keyPoints.map((point, index) => (
            <li key={index} className="pl-2">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default VisionSection;