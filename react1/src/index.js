import React from 'react'; // let React = require("react")
import ReactDOM from 'react-dom/client'; // let ReactDOM = require("reqct-dom/client")
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import WishListSlice from './redux/WishListSlice';

let store = configureStore({
  reducer : WishListSlice
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
  </>
  )
