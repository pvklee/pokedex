import {connect} from 'react-redux'
import {requestSinglePokemon} from '../../actions/pokemon_actions'
import PokemonDetail from './pokemon_detail'
import {selectPokeItems} from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];
  return {
    pokemon,
    items: selectPokeItems(state, pokemon),
  };
}

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail)