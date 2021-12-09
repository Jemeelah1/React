import './App.css';
import { useState } from 'react';
import TestComponent from './TestComponent';
import Test from './Test';
import MyComponent from './Component';

function App() {
  const[count, setCount] = useState(1);

  return (
    <div>
        <MyComponent/>
        <Test/>
        <TestComponent/>
        <p>{count}</p>
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  );
}

export default App;
