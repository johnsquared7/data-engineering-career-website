import React from 'react';

const ChecklistItem = ({ id, label, isChecked, onChange, children }) => {
  return (
    <div className="mb-2">
      <div className="flex items-start">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={onChange}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
        />
        <label htmlFor={id} className="ml-2 text-gray-700 cursor-pointer">
          {label}
        </label>
      </div>
      {children && <div className="ml-7 mt-1 text-sm text-gray-600">{children}</div>}
    </div>
  );
};

export default ChecklistItem;
