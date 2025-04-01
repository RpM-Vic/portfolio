// components/Card.tsx
import React from 'react';

interface CardProps {
  image: string;
  link?:string;
  title: string;
  subtitle?: string;
  description?: string;
  listItems?: string[];
  reverse?: boolean;
}

export const Card: React.FC<CardProps> = ({ image,link, title, subtitle, description, listItems, reverse = false }) => {
  return (
    <div className={`flex flex-col carddiv p-4 rounded-2xl ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 mb-10`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="w-48 h-48 md:w-60 md:h-60 object-contain rounded-lg shadow-amber-950" />
      </a>
      <div className="flex-1 p-4
       bg-blue-200 border-2
        hover:bg-gray-100 transition-all
         delay-500 rounded-3xl
         shadow-xl
         ">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-2xl font-bold ">{title}</h3>
        </a>
        {subtitle && <p className="">{subtitle}</p>}
        {description && <p className="mt-2 text-gray-700">{description}</p>}
        {listItems && (
          <ul className="list-disc list-inside mt-2 ">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
