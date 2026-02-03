import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Ventures } from './components/Ventures';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Connect } from './components/Connect';
import { Clients } from './components/Clients';

export type Tab = 'services' | 'tech-stack' | 'connect';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab> ('tech-stack');

  const renderContent = () => {
    switch (activeTab) {
      // case 'ventures':
      //   return <Ventures />;
      case 'services':
        return <Services />;
      case 'tech-stack':
        return <TechStack />;
      // case 'clients':
      //   return <Clients />;
      case 'connect':
        return <Connect />;
      default:
        return <TechStack />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-gray-200 dark:selection:bg-gray-800">
      <div className="w-full max-w-3xl space-y-12">
        
        {/* Header Section */}
        <Header />

        {/* Navigation Tabs */}
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content Area */}
        <main className="animate-fade-in">
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="pt-12 pb-6 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Akshay Shinde. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};
export default App;