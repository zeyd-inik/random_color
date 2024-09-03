import { useState } from 'react';
import './app.css';

function App() {
  const [color, setColor] = useState('#000000');

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="app"
    >
      <button>Create Hex Color</button>
      <button>Create RGB Color</button>
      <button>Generate Random Color</button>
    </div>
  );
}

export default App;
