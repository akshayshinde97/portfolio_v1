import React from 'react';
import { Mail, Calendar, MapPin } from 'lucide-react';
import SlotBooking from './Sechduler/SlotBooking';

export const Connect: React.FC = () => {
  return (
    <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
      {/* <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's work together</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Have a project in mind? I'm currently available for new opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <a href="mailto:hello@example.com" className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
            <Mail size={24} />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Me</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">kameshshinde27@gmail.com</p>
        </a>

        <a href="#" className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group">
          <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
            <Calendar size={24} />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Schedule a Call</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">30 min consultation</p>
        </a>
      </div> */}
      <SlotBooking />
    </div>
  );
};