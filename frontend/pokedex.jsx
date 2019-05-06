import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import {requestAllPokemon} from './actions/pokemon_actions'

document.addEventListener('DOMContentLoaded', (e)=>{
  const root = document.getElementById('root');
  const store = configureStore();

  //--- debugging only
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  //--- debugging only

  ReactDOM.render(<h1>HI</h1>, root)
});