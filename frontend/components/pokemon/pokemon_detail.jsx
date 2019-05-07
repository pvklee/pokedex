import React from 'react'
import {Route} from 'react-router-dom'
import ItemDetailContainer from '../items/item_detail_container'
import Item from '../items/item'


export default class PokemonDetail extends React.Component {
  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  } 

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }
  
  render(){
    const {pokemon, items} = this.props;
    
    if (!pokemon) return null;

    const itemsList = items.map(item=>(
      <li key={`${item.name}`}>
        <Item item={item} />
      </li>
    ))

    return(
      <ul>
        <li>{pokemon.name}</li>
        {itemsList}
        <li><Route path='/pokemon/:pokemonId/items/:itemId' component={ItemDetailContainer} /></li>
      </ul>
    )
  }
}