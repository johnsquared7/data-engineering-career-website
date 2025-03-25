import React, { useState } from 'react';
import { Link, useLocation, Location } from 'react-router-dom';
import { FaHome, FaRoad, FaClipboardCheck, FaProjectDiagram, FaUserTie, FaBook, FaBars, FaTimes } from 'react-icons/fa';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
  location: Location;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen, navItems, location }) => {
  return (
    <div className={`fixed inset-0 bg-neutral-900 bg-opacity-25 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-soft flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DE</span>
            </div>
            <h2 className="text-xl font-semibold text-neutral-900">Navigation</h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 transition-colors"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={`mr-3 ${location.pathname === item.path ? 'text-primary-500' : 'text-neutral-400'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  
  const navItems: NavItem[] = [
    { path: '/', label: 'Dashboard', icon: <FaHome className="h-5 w-5" /> },
    { path: '/learning-roadmap', label: 'Learning Roadmap', icon: <FaRoad className="h-5 w-5" /> },
    { path: '/skills-assessment', label: 'Skills Assessment', icon: <FaClipboardCheck className="h-5 w-5" /> },
    { path: '/project-plan', label: 'Project Plan', icon: <FaProjectDiagram className="h-5 w-5" /> },
    { path: '/career-progression', label: 'Career Progression', icon: <FaUserTie className="h-5 w-5" /> },
    { path: '/resources', label: 'Resources', icon: <FaBook className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white border-r border-neutral-200 hidden md:block overflow-y-auto">
        <div className="p-4 border-b border-neutral-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DE</span>
            </div>
            <h2 className="text-xl font-semibold text-neutral-900">Navigation</h2>
          </div>
        </div>
        <nav className="p-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <span className={`mr-3 ${location.pathname === item.path ? 'text-primary-500' : 'text-neutral-400'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Nav Toggle Button */}
      <button
        onClick={() => setIsMobileNavOpen(true)}
        className="fixed bottom-4 right-4 md:hidden bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors z-40 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <FaBars className="h-6 w-6" />
      </button>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        setIsOpen={setIsMobileNavOpen}
        navItems={navItems}
        location={location}
      />
    </>
  );
};

export default Sidebar; 