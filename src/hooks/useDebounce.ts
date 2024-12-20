// import { useState, useEffect } from "react";

// function useDebounce(value: any, delay: any) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     // Cleanup the timeout if value or delay changes
//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }

// export default useDebounce;


import { useState, useCallback } from "react";

function useDebounce<T>(callback: (value: T) => void, delay: number) {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback((value: T) => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set new timeout
    const newTimeoutId = setTimeout(() => {
      callback(value);
    }, delay);

    setTimeoutId(newTimeoutId);
  }, [callback, delay]);

  return debouncedFunction;
}

export default useDebounce;