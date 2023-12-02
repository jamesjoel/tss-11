import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import CartSlice from './redux/CartSlice';
import MenuBarSlice from './redux/MenuBarSlice';
import AdminMenuBarSlice from './redux/AdminMenuBarSlice'

let rootReducer = combineReducers({
  CartSlice,
  MenuBarSlice,
  AdminMenuBarSlice
})


let store = configureStore({
  reducer : rootReducer
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <App />
    
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

