import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
          Test UI by add 2 each click <strong>MF-APP2</strong>
      </p>
      <p>Your click number : {count}</p>
      <button onClick={() => setCount((prevState) => prevState + 2)}>
        Click here
      </button>
    </div>
  );
};

export default Counter;
