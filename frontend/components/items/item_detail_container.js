import {connect} from 'react-redux'
import ItemDetail from './item_detail'
import {selectPokeItems, selectPokeItem} from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    item: selectPokeItem(state, ownProps.match.params.itemId)
  };
}

export default connect(
  mapStateToProps,
  null
)(ItemDetail)