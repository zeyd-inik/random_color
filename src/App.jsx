import { useState } from 'react';
import './app.css';

function App() {
  const [color, setColor] = useState('#70d179');
  const [colorType, setColorType] = useState('HEX');

  const randomChar = (length) => {
    return Math.floor(Math.random() * length);
  };
  const randomNum = () => {
    return Math.floor(Math.random() * 256);
  };

  const handleRandomHexColor = () => {
    setColorType('HEX');

    setColor('#70d179');
    let hex = '#';
    const hexChars = [0, 1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
      hex += hexChars[randomChar(hexChars.length)];
    }
    setColor(hex);
  };
  const handleRandomRgbColor = () => {
    setColorType('RGB');
    setColor('rgb(113, 209, 120)');
    const r = randomNum();
    const g = randomNum();
    const b = randomNum();
    let rgb = `rgb(${r},${g},${b})`;
    setColor(rgb);
  };

  const handleRandomColor = () => {
    colorType === 'HEX' ? handleRandomHexColor() : handleRandomRgbColor();
  };
  /* useEffect(() => {
    handleRandomColor();
  }, [colorType]); */

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="app"
    >
      <div className="button-container">
        <button onClick={handleRandomHexColor}>Create Hex Color</button>
        <button
          onClick={() => {
            handleRandomRgbColor();
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
