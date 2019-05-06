import {RECEIVE_POKEMON} from '../actions/pokemon_actions'
import merge from 'lodash/merge'

const itemsReducer = (state = {}, action) =>{
  switch (action.type) {
    case RECEIVE_POKEMON:
      let nextState = Object.assign({}, action.pokemon);
      delete nextState.pokemon;
      return nextState;
    default:
      return state;
  }
}

export default itemsReducer;