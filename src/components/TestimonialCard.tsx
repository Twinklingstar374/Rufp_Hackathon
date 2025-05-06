import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  city: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, city }) => {
  return (
    <div className="bg-purple-800 p-8 rounded-lg relative">
      <Quote className="text-purple-600 h-8 w-8 mb-4 absolute -top-2 -left-2" />
      <p className="text-purple-100 mb-6">{quote}</p>
      <div className="text-purple-300">
        <p className="font-semibold text-white">{name}</p>
        <p>{city}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;