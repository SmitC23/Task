import React, { useState } from 'react';

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <div>
      <input type="number" onChange={(e) => setA(+e.target.value)} placeholder="A" />
      <input type="number" onChange={(e) => setB(+e.target.value)} placeholder="B" />
      <p>Sum: {a + b}</p>
    </div>
  );
};

export default Calculator;
