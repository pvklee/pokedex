import React from 'react'
import PokemonIndexItem from './pokemon_index_item'
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container'
import PokemonFormContainer from './pokemon_form_container'
import LoadingIcon from './loading_icon'

export default class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  } 
  
  render(){
    const { pokemon, loading } = this.props;
    if (loading) { return <LoadingIcon />; }

    const pokemonList = pokemon.map(poke=>(
      <PokemonIndexItem key={poke.id} poke={poke}/>
    ))
    return(
      <div>
        <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
        <Route exact path = '/' component={PokemonFormContainer} />
        <ul>
          {pokemonList}
        </ul>
      </div>
    )
  }
}