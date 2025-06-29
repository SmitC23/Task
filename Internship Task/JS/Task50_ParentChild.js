import React from 'react';

const Child = ({ message }) => <p>{message}</p>;

const Parent = () => {
  const msg = "Message from Parent";
  return <Child message={msg} />;
};

export default Parent;
