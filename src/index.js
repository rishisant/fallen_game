import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/MainMenu.css';
import './assets/css/Base.css';
import './assets/css/WhyHow.css';

import GameContextProvider from './contexts/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GameContextProvider>
        <App />
    </GameContextProvider>
);