import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions'
import merge from 'lodash/merge'

const itemsReducer = (state = {}, action) =>{
  Object.freeze(state);
  let items;
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      items = action.pokemon.items;
      return merge({}, state, items);
    default:
      return state;
  }
}

export default itemsReducer;