function textMatcher(text, matchFunction){
  return text.toLowerCase().includes(matchFunction);
}

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
//import { response } from 'express'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {

  axios.get('http://localhost:9009/api/planets').then(response => {
    setPlanets(response.data);
  });  

  axios.get('http://localhost:9009/api/people').then(response => {
    setPeople(response.data);
  });
  }, []);

  const matchLukeSkywalker = (element) => {
    return element.textContext.includes('Luke Skywalker');
  };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {planets.map(planet => (
        <Character key={planet.id} planet={planet}
        textMatcher={textMatcher(matchLukeSkywalker)}/>
      ))}
      {people.map(person => (
        <Character key={person.id} person={person}
        textMatcher={textMatcher(matchLukeSkywalker)}/>
      ))}
    </div>
  );
  }

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
