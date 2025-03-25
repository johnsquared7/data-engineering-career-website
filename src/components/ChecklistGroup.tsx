import React from 'react';

interface ChecklistGroupProps {
  title: string;
  children: React.ReactNode;
  progress?: number;
}

const ChecklistGroup: React.FC<ChecklistGroupProps> = ({ title, children, progress }) => {
  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {progress !== undefined && (
          <span className="text-sm font-medium text-gray-500">
            {Math.round(progress * 100)}% Complete
          </span>
        )}
      </div>
      
      {progress !== undefined && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${Math.round(progress * 100)}%` }}
          ></div>
        </div>
      )}
      
      <div className="mt-3">
        {children}
      </div>
    </div>
  );
};

export default ChecklistGroup; 