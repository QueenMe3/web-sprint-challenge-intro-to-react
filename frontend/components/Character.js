import React, { useState } from 'react';

function Character() {
  const [showHomeworld, setShowHomeworld] =
  useState(false);

  const handleToggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div>
      <div className='character'>
       <h2>{Character.name}</h2> 
       <p>{Character.description}</p>
       <button onClick={handleToggleHomeworld}>
      {showHomeworld ? 'Hide Homeworld' : 'Show Homeworld'}</button>
      {showHomeworld && (
       <div className='homeworld'>
      <h3>{showHomeworld.name}</h3>
      <p>{showHomeworld.description}</p>
       </div> 
      )}
      </div>
    </div>
  );
}

export default Character
