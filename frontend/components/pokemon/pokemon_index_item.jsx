import React from 'react'
import {Link} from 'react-router-dom'

export default class PokemonIndexItem extends React.Component{
  render(){
    const {poke} = this.props;
    return(
      <li key={`pokemon-list-item${poke.id}`}><Link to={`/pokemon/${poke.id}`}>{poke.name}<img src={poke.image_url}/></Link></li>
    )
  }
}