import { useState } from 'react';
import './app.css';

function App() {
  const [color, setColor] = useState('#70d179');
  const [colorType, setColorType] = useState('HEX');

  const randomChar = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleRandomHexColor = () => {
    let hex = '#';
    const hexChars = [0, 1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
      hex += hexChars[randomChar(hexChars.length)];
    }
    setColor(hex);
  };
  const handleRandomRgbColor = () => {};

  const handleRandomColor = () => {
    colorType === 'HEX' ? handleRandomHexColor() : handleRandomRgbColor();
  };

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="app"
    >
      <div className="button-container">
        <button
          onClick={() => {
            setColorType('HEX');
          }}
        >
          Create Hex Color
        </button>
        <button
          onClick={() => {
            setColorType('RGB');
          }}
        >
          Create RGB Color
        </button>
        <button onClick={handleRandomColor}>Generate Random Color</button>
      </div>

      <div className="type-text">{`${colorType} Color`}</div>
      <div className="text">{color}</div>
    </div>
  );
}

export default App;
