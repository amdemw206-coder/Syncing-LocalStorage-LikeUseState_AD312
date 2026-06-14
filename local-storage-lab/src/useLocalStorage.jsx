import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Step 1: Load initial state
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Step 2: Save state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.log(error);
    }
  }, [key, state]);

  return [state, setState];
}