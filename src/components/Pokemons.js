import React from 'react'

export const Pokemons = ( { pokemon } ) => {
 
  return (
        <div className="flex-child">
            <div className='card'>
                <strong className='upper-case'>{pokemon.name}</strong>
                <img className='profile' src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <p className='level'>
                    <span className='types upper-case' >Type</span> -
                    {pokemon.types.map( ( item, key )  => {
                        return ( 
                            <span className='types' key ={key}>{item.type.name}</span>
                        )
                    })}
                </p>
                <p className='level'>
                    <span className='weight upper-case'>Weight</span> -
                    <span className='weight'>{pokemon.weight}</span>
                </p>
                <p className='level'>
                    <span className='ability upper-case' >Abilities</span> -
                    {pokemon.abilities.map( ( item, key )  => {
                    return ( 
                        <span className='ability' key ={key}>{item.ability.name}</span>
                    )
                })}
                </p>
            </div>
        </div>
  )
}