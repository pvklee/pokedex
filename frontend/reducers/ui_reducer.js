import errorsReducer from './errors_reducer'
import {combineReducers} from 'redux'

const uiReducer = combineReducers({
  errors: errorsReducer
})

export default uiReducer;