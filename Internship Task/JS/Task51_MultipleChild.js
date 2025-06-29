import React from 'react';

const Child = ({ name }) => <li>{name}</li>;

const Parent = () => {
  const names = ["React", "Node", "MongoDB"];
  return (
    <ul>
      {names.map((n, i) => <Child key={i} name={n} />)}
    </ul>
  );
};

export default Parent;

