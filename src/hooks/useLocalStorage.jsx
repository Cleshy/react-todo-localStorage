import { useCallback } from "react";

export default function useLocalStorage(key) {
  const setItem = useCallback(
    (value) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.log("Error setting item: ", e);
      }
    },
    [key]
  );

  const getItem = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (e) {
      console.log("Error getting item: ", e);
      return [];
    }
  }, [key]);

  return { setItem, getItem };
}
