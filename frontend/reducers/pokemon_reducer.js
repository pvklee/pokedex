import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMON} from '../actions/pokemon_actions'
import merge from 'lodash/merge'

const pokemonReducer = (state = {}, action) =>{
  if(action.type === RECEIVE_POKEMON) console.log(action.pokemon.pokemon);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON:
      let nextState = Object.assign({}, action.pokemon);
      delete nextState.items;
      return nextState;
    default:
      return state;
  }
}

export default pokemonReducer;