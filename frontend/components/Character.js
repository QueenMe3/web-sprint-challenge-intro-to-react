import React, { useState } from 'react';

function Character({ showHomeworld }) {
  const [setShowHomeworld] =
  useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);

  return (
    <div>
      {showHomeworld && (
    <div className="homeworld">
      <h2>Homeworld</h2>
      <p>This is the homeworld of the character.</p>
    </div>    
      )}
      <button onClick={toggleHomeworld}>ToggleHomeworld</button>
    </div>
  );
}}

export default Character
