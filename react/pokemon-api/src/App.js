import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from "./components/Button";
import Pokemon from './components/Pokemon';

function App() {

  const [pokemonList, setPokemonList] = useState(null)
  const [showList, setShowList] = useState(false)

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response=>{setPokemonList(response.data.results.map(p => p.name))})
  },[]);

  const buttonPress = () => {
    setShowList(true)
  }


  return (
    <div className="App">
      <Button buttonPress = {buttonPress}/>
      {
        showList === true?
        pokemonList.map((p, i) => (
          <Pokemon
            p = {p}
            key = {i}
          />
        )) :
        <p></p>
      }
    </div>
  );
}

export default App;
