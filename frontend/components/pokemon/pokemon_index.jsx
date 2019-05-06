import React from 'react'
import PokemonIndexItem from './pokemon_index_item'

export default class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  } 
  
  render(){
    const pokemonList = this.props.pokemon.map(poke=>(
      <PokemonIndexItem poke={poke}/>
    ))
    return(
      <ul>
        {pokemonList}
      </ul>
    )
  }
}