import {RECEIVE_POKEMON_ERRORS} from '../actions/pokemon_actions'
import merge from 'lodash/merge'

const errorsReducer = (state = {}, action) =>{
  Object.freeze(state);
  console.log('IN ERRORS REDUCER')
  console.log(action.type)
  console.log(action.errors)
  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default errorsReducer;