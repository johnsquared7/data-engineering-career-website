import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context
const ChecklistContext = createContext();

// Provider component
export const ChecklistProvider = ({ children }) => {
  const [checklistState, setChecklistState] = useState({});

  // Load saved state from localStorage on initial render
  useEffect(() => {
    const savedState = localStorage.getItem('checklistState');
    if (savedState) {
      try {
        setChecklistState(JSON.parse(savedState));
      } catch (error) {
        console.error('Error parsing saved checklist state:', error);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(checklistState).length > 0) {
      localStorage.setItem('checklistState', JSON.stringify(checklistState));
    }
  }, [checklistState]);

  // Toggle item checked state
  const toggleItem = (id) => {
    setChecklistState(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  // Check if an item is checked
  const isItemChecked = (id) => {
    return !!checklistState[id];
  };

  // Calculate progress for a group of items
  const calculateProgress = (itemIds) => {
    if (!itemIds || itemIds.length === 0) return 0;
    
    const checkedCount = itemIds.filter(id => isItemChecked(id)).length;
    return checkedCount / itemIds.length;
  };

  // Reset all items or a specific group
  const resetItems = (itemIds = null) => {
    if (itemIds) {
      const newState = { ...checklistState };
      itemIds.forEach(id => {
        newState[id] = false;
      });
      setChecklistState(newState);
    } else {
      setChecklistState({});
    }
  };

  return (
    <ChecklistContext.Provider value={{
      isItemChecked,
      toggleItem,
      calculateProgress,
      resetItems
    }}>
      {children}
    </ChecklistContext.Provider>
  );
};

// Custom hook to use the checklist context
export const useChecklist = () => {
  const context = useContext(ChecklistContext);
  if (!context) {
    throw new Error('useChecklist must be used within a ChecklistProvider');
  }
  return context;
};
