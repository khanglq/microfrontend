import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Test UI by add 1 each click <strong>MF-APP1</strong>
      </p>
      <p>Your click number : {count} </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
