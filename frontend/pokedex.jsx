import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import {receiveAllPokemon} from './actions/pokemon_actions'
import {fetchAllPokemon} from './util/api_util'

document.addEventListener('DOMContentLoaded', (e)=>{
  const root = document.getElementById('root');
  const store = configureStore();

  //--- debugging only
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  //--- debugging only

  ReactDOM.render(<h1>HI</h1>, root)
});