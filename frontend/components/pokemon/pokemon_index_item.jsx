import React from 'react'

export default class PokemonIndexItem extends React.Component{
  render(){
    const {poke} = this.props;
    return(
      <li key={`pokemon-list-item${poke.id}`}>{poke.name}<img src={poke.image_url}/></li>
    )
  }
}