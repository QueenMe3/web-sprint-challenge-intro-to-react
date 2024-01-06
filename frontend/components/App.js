import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
//import { response } from 'express'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [showHomeworld, setShowHomeworld] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);

  useState(() => {

  axios.get(urlPlanets).then(response => {
    setPlanets(response.data);
  });  

  axios.get(urlPeople).then(response => {
    setPeople(response.data);
  });
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {planets.map(planet => (
        <Character key={planet.id} planet={planet} showHomeworld={showHomeworld} planet={planet}/>
      ))}
      {people.map(person => (
        <Character key={person.id} person={person} showHomeworld={showHomeworld} person={person}/>
      ))}
    </div>
  );
  }

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
