import './App.css';
import { Pokemons } from './components/Pokemons';
import React, { useState, useEffect } from 'react';
import { getAllPokemon } from './services/pokemon'

function App() {
  const [ pokemonData, setPokemonData ] = useState([]);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/';
  
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon( initialUrl );
      await loadingPokemon(response.results);
    }

    fetchData();
  }, [])
  
  const loadingPokemon = async ( data ) => {
    let allPokemons = await Promise.all( data.map( async pokemon => {
      let animal = await getAllPokemon( pokemon.url );
      return animal;
      
    })) 
    setPokemonData( allPokemons );
  }
  
  return (
    <div className="container">
      <h3>Pokemons</h3>
      <div className="flex-parent">
        {pokemonData.map( ( pokemon, i ) => {
            return <Pokemons key={i} pokemon={pokemon}/>
        })}
      </div>
    </div>
  );
}

export default App;
