import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider }  from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import TeacherSlice from './redux/TeacherSlice';
import StudentSlice from './redux/StudentSlice';

let rootReducer = combineReducers({ TeacherSlice, StudentSlice });
let store = configureStore({
  reducer : rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    </Provider>


  </React.StrictMode>
);
