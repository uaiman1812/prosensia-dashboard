'use client';

import { CardProps } from '@/types';

const Card = ({ title, description, children, className, onClick }: CardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Card;