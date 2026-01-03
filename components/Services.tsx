import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const servicesData = [
  {
    id: '01',
    title: 'Framer landing page Design + Dev',
    price: 'Starts from $1,500',
  },
  {
    id: '02',
    title: 'Multi-page website in Framer',
    price: 'Starts from $3,000',
  },
  {
    id: '03',
    title: 'Framer Migration',
    price: 'DM for quote',
  },
  {
    id: '04',
    title: 'Framer Website Maintenance',
    price: 'DM for quote',
  },
];

export const Services: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col space-y-4 bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${
              index !== servicesData.length - 1
                ? 'border-b border-gray-200 dark:border-gray-800'
                : ''
            }`}
          >
            <div className="flex items-center space-x-4 sm:space-x-6 mb-2 sm:mb-0">
              <span className="text-sm font-mono text-gray-400 dark:text-gray-600">
                {service.id}.
              </span>
              <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                {service.title}
              </h3>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-10 sm:pl-0">
              {service.price}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="#"
          className="w-full sm:w-auto px-8 py-3 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black rounded-full font-medium transition-colors text-center"
        >
          Book a call
        </a>
        <a
          href="#"
          className="w-full sm:w-auto px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full font-medium transition-colors flex items-center justify-center space-x-2"
        >
          <span>Send email</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};