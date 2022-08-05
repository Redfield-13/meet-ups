import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {FavoritesContextProvider} from './store/favorite-context'


ReactDOM.render(
  // <FavoritesContextProvider>
<BrowserRouter>

  <App />
</BrowserRouter>
// </FavoritesContextProvider>
  ,document.getElementById('root')
);

