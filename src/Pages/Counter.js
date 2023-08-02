import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>Total counter is: {counter}</p>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
}

export default Counter;
