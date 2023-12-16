import ReactDOM from 'react-dom/client';
import App from './App';


import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import DemoSlice from './redux/DemoSlice';
import ResultSlice from './redux/ResultSlice';

// let rootReducer = combineReducers({
//     DemoSlice, 
//     ResultSlice

// })

let store = configureStore({
    reducer : ResultSlice
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={store}>
            <App />

    </Provider>

    </BrowserRouter>
);


