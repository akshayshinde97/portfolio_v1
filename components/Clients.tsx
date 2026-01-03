import React from 'react';

export const Clients: React.FC = () => {
  return (
    <div className="text-center py-20 bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Clients</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        I've had the pleasure of working with some amazing companies and individuals.
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 px-8 opacity-50 grayscale">
         {/* Placeholders for client logos */}
         <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
         <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
         <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
         <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
};