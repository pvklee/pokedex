import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import {requestAllPokemon} from './actions/pokemon_actions'
import {selectAllPokemon} from './reducers/selectors'
import {fetchPokemon} from './util/api_util'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', (e)=>{
  const root = document.getElementById('root');
  const store = configureStore();

  //--- debugging only
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchPokemon = fetchPokemon;
  //--- debugging only

  ReactDOM.render(<Root store={store}/>, root)
});