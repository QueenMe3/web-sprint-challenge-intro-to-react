import React, { useState } from 'react';

function Character() {
  const [showHomeworld, setShowHomeworld] =
  useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div>
      {showHomeworld && (
    <div className='homeworld'>
      <h2>Homeworld</h2>
      <p>This is the homeworld of the character.</p>
    </div>    
      )}
      <button onClick={toggleHomeworld}>toggleHomeworld</button>
    </div>
  );
}

export default Character
