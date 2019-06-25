import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  const store = configureStore();
  window.store = store;

  ReactDOM.render(<h2>WASUP WORLD</h2>, root);
})


// import configureStore from ''