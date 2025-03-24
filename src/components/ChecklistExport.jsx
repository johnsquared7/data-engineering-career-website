import React from 'react';
import { useChecklist } from '../contexts/ChecklistContext';

const ChecklistExport = () => {
  const { isItemChecked } = useChecklist();
  
  const handleExport = () => {
    // Get all checklist data from localStorage
    const checklistData = localStorage.getItem('checklistState');
    
    if (!checklistData) {
      alert('No checklist data available to export.');
      return;
    }
    
    // Create a blob with the data
    const blob = new Blob([checklistData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = `data-engineering-career-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = event.target.result;
          // Validate that it's proper JSON
          JSON.parse(data);
          
          // Store in localStorage
          localStorage.setItem('checklistState', data);
          
          // Reload the page to apply changes
          window.location.reload();
        } catch (error) {
          alert('Invalid file format. Please select a valid JSON file.');
        }
      };
      reader.readAsText(file);
    };
    
    input.click();
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Backup & Restore</h2>
      <p className="text-gray-600 mb-4">
        Export your progress to a file for backup or import from a previously saved file.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleExport}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Export Progress
        </button>
        <button
          onClick={handleImport}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
        >
          Import Progress
        </button>
      </div>
    </div>
  );
};

export default ChecklistExport;
