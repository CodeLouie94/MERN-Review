import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {

  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response=>{setPokemonData(response.data)})
    .then(console.log(pokemonData.results.map(p => p.name)))
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
