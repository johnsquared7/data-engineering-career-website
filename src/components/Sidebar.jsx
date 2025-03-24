import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaRoad, FaClipboardCheck, FaProjectDiagram, FaUserTie, FaBook, FaBars, FaTimes } from 'react-icons/fa';

const MobileNav = ({ isOpen, setIsOpen, navItems, location }) => {
  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-blue-600">DE Career Plan</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
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
                  className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const navItems = [
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
      <aside className="w-64 bg-white shadow-md hidden md:block overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-blue-600">DE Career Plan</h2>
        </div>
        <nav className="p-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Nav Toggle Button */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsMobileNavOpen(true)}
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
