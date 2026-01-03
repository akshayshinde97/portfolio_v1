import React from 'react';
import { Youtube, Linkedin, Globe, Send, Twitter, Github } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center text-center space-y-6">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <img
          alt="Portrait of Akshay Shinde"
          className="relative w-24 h-24 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-lg"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUWY3szQwobpge9beHIaP4a7ry5RbxKeXEkaI8MgMRrD8C4soF6yLLmTU0VRuLhCToVepgfjx9Rc_lme0QgYfh1Bw3J9Zxz5zD1wjE81MvdacQTRVF8c8plviKWCVQcpJEP-_3WhHX3Yzk0VPm-q7sNGZ5n1hejJmLHi_j49T9kgQ-kZRNeVXXLSWPcBiYBPTBjBasdmmTCwoKbd8YWIHab5DZEfPl-WgrDsYGjXKxwJr6I-B4mM_esk7pAN1cPxRGxLlbX7tNG_sG"
        />
      </div>

      <div className="space-y-3 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          Hey, I'm Akshay Shinde.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          I'm a Software Engineer. I spend most of time over thinking tech and business.
        </p>
      </div>

      <div className="flex items-center space-x-6">
        <SocialLink href="https://x.com/Akshay19976684" icon={<Twitter size={20} />} label="X (Twitter)" />
        <SocialLink href="https://github.com/akshayshinde97" icon={<Github size={20} />} label="GITHUB" />
        <SocialLink href="www.linkedin.com/in/akshayshinde5997" icon={<Linkedin size={20} />} label="LinkedIn" />
      </div>
    </header>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
    aria-label={label}
  >
    {icon}
  </a>
);