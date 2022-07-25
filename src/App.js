import './App.css'
import { useState, useEffect } from 'react';


const App = () => {
  // Three parameters for the hook
  // Name of the state
  // Setter Function, call second variable with Set in front
  const [counter, setCounter ] = useState(0);

  // Never Modify state manually

  useEffect(() =>{
    setCounter(100);
  }, [])

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>

      <h1>{counter}</h1>

      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>  );
}

export default App;
