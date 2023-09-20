import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
import App3 from './App3'
import App4 from './App4';
import App5 from './App5'

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App5 />
    </BrowserRouter>
);


