import { useState } from 'react';

import './App.css';

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
          backgroundColor: buttonColor,
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
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
