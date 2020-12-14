import React, { useState } from 'react';

export default function TestHook(props) {
  const [state, setState] = useState('Initial State');

  function changeState() {
    setState('Initial State Changed');
  }

  function changeNameToSteve() {
    props.changeName();
  }

  return (
    <div>
      <button onClick={changeState}>State Change Button</button>
      <p>{state}</p>
      <button onClick={changeNameToSteve}>Change Name</button>
      <p>{props.name}</p>
    </div>
  );
}
