import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
import App3 from './App3'
import App4 from './App4';
import App5 from './App5'
import App6 from './App6';
import App8 from './App8';
import App10 from './App10';

import { BrowserRouter } from 'react-router-dom'
import App11 from './App11';
import Home from './Home';

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
let user = {
    name : "rohit",
    age : 25,
    city : "indore"
}

let store = configureStore({
    preloadedState : user,
    reducer : (state)=>{
        return state;
    }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);


