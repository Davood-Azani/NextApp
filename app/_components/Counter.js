'use client';
import { useState } from 'react';

function Counter({ users }) {
  const [counter, setCounter] = useState(0);
  console.log(users);

  return (
    <div>
      <p>{counter}</p>
      <p>There are {users.length} users.</p>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
      <button onClick={() => setCounter((c) => c - 1)}>-</button>
    </div>
  );
}

export default Counter;
