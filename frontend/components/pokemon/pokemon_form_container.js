import {connect} from 'react-redux'
import {createPokemon} from '../../actions/pokemon_actions'
import {selectAllErrors} from '../../reducers/selectors'
import PokemonForm from './pokemon_form'

const mapStateToProps = state => ({
  errors: selectAllErrors(state)
})

const mapDispatchToProps = dispatch => ({
  createPokemon: (poke) => dispatch(createPokemon(poke))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm)