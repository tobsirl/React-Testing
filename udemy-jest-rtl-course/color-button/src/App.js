import { useState } from 'react';

import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  function handleButtonClick() {
    setButtonColor(newButtonColor);
  }

  return (
    <div>
      <button
        style={{
          backgroundColor: disabled ? 'gray' : buttonColor,
          padding: '20px',
          fontSize: '24px',
        }}
        onClick={handleButtonClick}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
