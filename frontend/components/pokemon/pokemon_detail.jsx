import React from 'react'

export default class PokemonDetail extends React.Component {
  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  } 

  componentDidUpdate(prevProps) {
    console.log(this.props.match.params.pokemonId);
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }
  
  render(){
    const {pokemon} = this.props;

    if (!pokemon) return null;

    return(
      <ul>
        {pokemon.name}
      </ul>
    )
  }
}