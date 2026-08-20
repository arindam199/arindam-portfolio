
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
            LinkedIn
          </a>
          <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
            LeetCode
          </a>
          <a href={personalInfo.socials.email} className="text-sm text-gray-500 hover:text-red-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
