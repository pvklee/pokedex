import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON"
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS'

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receiveSinglePokemon = (pokemon) => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
})

export const receivePokemonErrors = (errors) => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
})

//async

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon().then((pokemon) => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchSinglePokemon(id).then((pokemon) => {
    dispatch(receiveSinglePokemon(pokemon));
    return pokemon;
  })
)

export const createPokemon = (data) => dispatch => (
  APIUtil.createPokemon(data).then((pokemon => {
    dispatch(receiveSinglePokemon(pokemon));
    return pokemon;
  })).fail(err => dispatch(receivePokemonErrors(err.responseJSON)))
)