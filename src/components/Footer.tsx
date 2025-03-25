import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DE</span>
              </div>
              <span className="text-xl font-bold text-neutral-900">Data Engineering Career</span>
            </div>
            <p className="text-neutral-600">
              Your comprehensive guide to transitioning from Data Analyst to Data Engineer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/learning-roadmap" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Learning Roadmap
                </a>
              </li>
              <li>
                <a href="/skills-assessment" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Skills Assessment
                </a>
              </li>
              <li>
                <a href="/project-plan" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Project Plan
                </a>
              </li>
              <li>
                <a href="/career-progression" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Career Progression
                </a>
              </li>
              <li>
                <a href="/resources" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-center text-neutral-600 text-sm">
            © {new Date().getFullYear()} Data Engineering Career Transition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 