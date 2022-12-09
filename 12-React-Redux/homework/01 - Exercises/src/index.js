import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/index.js';

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <Home />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);
