import App from './App';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
