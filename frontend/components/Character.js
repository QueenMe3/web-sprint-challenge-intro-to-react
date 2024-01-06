import React, { useState } from 'react';

function textMatcher(text, searchTerm) {
 return text.toLowerCase().includes("Luke Skywalker"); 
} 

function Character(props) {
  const [showHomeworld, setShowHomeworld] =
  useState(false);

  const textMatcher = (text) => {
   return text.toLowerCase().includes("Luke Skywalker"); 
  }

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div>
      {showHomeworld && (
    <div className='homeworld'>
      <h2>{textMatcher(props.text)}</h2>
      <p>This is the homeworld of the character.</p>
    </div>    
      )}
      <button onClick={toggleHomeworld}>toggleHomeworld</button>
    </div>
  );
}

export default Character
