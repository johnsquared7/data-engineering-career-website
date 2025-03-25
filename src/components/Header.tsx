import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DE</span>
                </div>
                <span className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  Data Engineering Career
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <nav className="flex items-center space-x-6">
              <Link 
                to="/learning-roadmap" 
                className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Learning Roadmap
              </Link>
              <Link 
                to="/skills-assessment" 
                className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Skills Assessment
              </Link>
              <Link 
                to="/project-plan" 
                className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Project Plan
              </Link>
              <Link 
                to="/career-progression" 
                className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Career Progression
              </Link>
              <Link 
                to="/resources" 
                className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Resources
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              className="p-2 rounded-lg text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-neutral-200">
          <Link 
            to="/learning-roadmap" 
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Learning Roadmap
          </Link>
          <Link 
            to="/skills-assessment" 
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills Assessment
          </Link>
          <Link 
            to="/project-plan" 
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Project Plan
          </Link>
          <Link 
            to="/career-progression" 
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Career Progression
          </Link>
          <Link 
            to="/resources" 
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resources
          </Link>
          <div className="flex items-center space-x-4 px-3 py-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-primary-600 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-primary-600 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 