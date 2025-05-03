export const useLocalStorage = () => {
  const setItem = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      console.log(`Saved to localStorage: ${key} = ${value}`);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  };

  const getItem = (key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return undefined;
    }
  };

  const getAllLocalStorageKeys = () => {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      keys.push(key);
    }
    return keys;
  };

  return { setItem, getItem, getAllLocalStorageKeys };
};
