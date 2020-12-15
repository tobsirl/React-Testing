import React, { useState } from 'react';

import './App.css';

function App() {
  const [search, setSearch] = useState('');

  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
    </div>
  );
}

function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default App;
