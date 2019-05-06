import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

// export const fetchAllPokemon = () => (dispatch) => {
//   const getSuccess = pokemon => console.log(pokemon);
//   return(APIUtil.fetchAllPokemon())
//   // APIUtil.fetchAllPokemon().then((pokemon) => dispatch(receiveAllPokemon(pokemon)));
// }