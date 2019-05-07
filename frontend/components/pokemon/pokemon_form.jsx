import React from 'react'

import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      attack: '',
      defense: '',
      poke_type: 'bug',
      image_url: '',
      moves: {}
    }
    this.update = this.update.bind(this);
    this.updateMoves = this.updateMoves.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  updateMoves(e){
    this.setState({
      moves: Object.assign(
        {},
        this.state.moves,
        { [e.target.id]: e.target.value }
      )
    });
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createPokemon(this.state)
      .then(data => this.props.history.push(`/pokemon/${data.pokemon.id}`));
    this.setState({
      name: '',
      attack: '',
      defense: '',
      poke_type: 'bug',
      image_url: '',
      moves: {}
    })
  }

  render(){

    const errorsList = this.props.errors.map(error=>{
      return <li>{error}</li>
    })
    return(
      <div>
        <ul>
          {errorsList}
        </ul>
        <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={this.state.name}
              onChange={this.update('name')}
              placeholder='name'
              >
            </input>
            <input
              type="text"
              value={this.state.image_url}
              placeholder="Image Url"
              onChange={this.update('image_url')}
              
            />
            <select
              value={this.state.type}
              onChange={this.update('poke_type')}
              defaultValue="Select Pokemon Type"
            >
              {POKEMON_TYPES.map((type, i) => {
                return <option value={type} key={i}>{type}</option>;
              })}
            </select>
            <input
              type='number'
              value={this.state.attack}
              onChange={this.update('attack')}
              placeholder='attack'
              >
            </input>
            <input
              type='number'
              value={this.state.defense}
              onChange={this.update('defense')}
              placeholder='defense'
              >
            </input>
            <input
              type="text"
              id="move_1"
              value={this.state.moves.move_1 || ''}
              placeholder="Move 1"
              onChange={this.updateMoves}
            />
            <input
              type="text"
              id="move_2"
              value={this.state.moves.move_2 || ''}
              placeholder="Move 2"
              onChange={this.updateMoves}
            />
          <button>Create Pokemon</button>
        </form>
      </div>
    )
  }
}

export default withRouter(PokemonForm);
