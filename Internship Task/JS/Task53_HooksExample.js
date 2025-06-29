import React, { useState } from 'react';

const HooksExample = () => {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};

export default HooksExample;
