import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count updated: ${count}`);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Click ({count})</button>
  );
};

export default UseEffectExample;

