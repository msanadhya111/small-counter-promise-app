import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    if (count > 50) {
      const timeoutId = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000); // Increment count after 1000ms (1 second)

      // Cleanup function to clear timeout when component unmounts or rerenders
      return () => clearTimeout(timeoutId);
    }
  }, [count]); // useEffect depends on count, so it runs whenever count changes

  return (
    <div>
      <h2>Auto-Increment Counter with setTimeout</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
