export const selectAllPokemon = (state) => (
  Object.values(state.entities.pokemon)
)

export const selectPokeItems = (state, pokemon) => {
  return pokemon ? pokemon.item_ids.map(id => state.entities.items[id]) : []
}

export const selectPokeItem = (state, id) => {
  return state.entities.items[id];
}

export const selectAllErrors = state => (
  Object.values(state.ui.errors)
)