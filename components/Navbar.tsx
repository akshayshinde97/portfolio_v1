import React from 'react';
import type { Tab } from '../App';

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: Tab; label: string }[] = [
    // { id: 'ventures', label: 'Ventures' },
    { id: 'services', label: 'Services' },
    // { id: 'clients', label: 'Clients' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'connect', label: 'Connect' },
  ];

  return (
    <nav className="flex justify-center w-full">
      <div className="inline-flex flex-wrap justify-center items-center p-1.5 bg-gray-100 dark:bg-surface-dark border border-gray-200 dark:border-gray-800/50 rounded-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-4 py-2 mx-0.5 rounded-full text-sm font-medium transition-all duration-200
              ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-black shadow-md'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-800'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};