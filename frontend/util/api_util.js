export const fetchAllPokemon = () => (
  $.ajax({
    url: 'api/pokemon',
    method: 'GET'
  })
)

export const fetchSinglePokemon = (id) => (
  $.ajax({
    url: `api/pokemon/${id}`,
    method: 'GET'
  })
)

export const createPokemon = (pokemon) => {
  pokemon.moves = Object.keys(pokemon.moves).map(k => pokemon.moves[k]);

  return $.ajax({
    url: `api/pokemon`,
    method: 'POST',
    data: { pokemon }
  })
}