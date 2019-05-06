import React from 'react'

export default class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  } 
  
  render(){
    const pokemonList = this.props.pokemon.map(poke=>(
      <li>{poke.name}<img src={poke.image_url}/></li>
    ))
    return(
      <ul>
        {pokemonList}
      </ul>
    )
  }
}