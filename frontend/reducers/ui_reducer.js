import errorsReducer from './errors_reducer'
import loadingReducer from './loading_reducer'

import {combineReducers} from 'redux'

const uiReducer = combineReducers({
  loading: loadingReducer,
  errors: errorsReducer
})

export default uiReducer;