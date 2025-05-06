import React from 'react';

interface StatsCardProps {
  number: string;
  description: string;
  color: string;
  textColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ number, description, color, textColor }) => {
  return (
    <div className={`${color} p-8 rounded-lg transition-transform hover:-translate-y-1`}>
      <h3 className={`text-4xl font-bold mb-3 ${textColor}`}>{number}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default StatsCard;