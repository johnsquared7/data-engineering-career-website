import React, { useState, useEffect } from 'react';
import { useChecklist } from '../contexts/ChecklistContext';

const ChecklistContainer = ({ title, children, itemIds }) => {
  const { calculateProgress, resetItems } = useChecklist();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (itemIds && itemIds.length > 0) {
      setProgress(calculateProgress(itemIds));
    }
  }, [calculateProgress, itemIds]);
  
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all items in this checklist?')) {
      resetItems(itemIds);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-500 mr-4">
            {Math.round(progress * 100)}% Complete
          </span>
          <button 
            onClick={handleReset}
            className="text-sm text-red-600 hover:text-red-800"
          >
            Reset
          </button>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${Math.round(progress * 100)}%` }}
        ></div>
      </div>
      
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default ChecklistContainer;
