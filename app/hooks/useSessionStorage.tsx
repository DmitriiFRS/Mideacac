import { Dispatch, SetStateAction, useState, useEffect } from "react";

export default function useSessionStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
   const [storedValue, setStoredValue] = useState<T>(() => {
      if (typeof window === "undefined") {
         return initialValue;
      }
      try {
         const item = window.sessionStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         console.error(error);
         return initialValue;
      }
   });
   useEffect(() => {
      if (typeof window !== "undefined") {
         try {
            window.sessionStorage.setItem(key, JSON.stringify(storedValue));
         } catch (error) {
            console.error(error);
         }
      }
   }, [key, storedValue]);

   return [storedValue, setStoredValue];
}
