import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/Main.css';
import App from './App';

import GameContextProvider from './contexts/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GameContextProvider>
        <App />
    </GameContextProvider>
);