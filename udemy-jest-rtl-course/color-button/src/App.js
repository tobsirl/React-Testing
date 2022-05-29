import { useState } from 'react';

import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
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
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
