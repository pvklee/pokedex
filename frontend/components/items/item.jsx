import React from 'react'
import {Link} from 'react-router-dom'

export default class Item extends React.Component {
  render(){
    const {item} = this.props;
    return(
      <Link to={`/pokemon/${item.pokemon_id}/items/${item.id}`}>
        {item.name};
      </Link>
    )
  }
}

