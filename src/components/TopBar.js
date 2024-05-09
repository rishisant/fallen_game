/*
    真田理志
    トップバーのJSX
*/

import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

import '../assets/css/TopBar.css';

// All logos/images
import logoSmall from '../assets/img/general-UI/FAVI.png';
import iconTrust from '../assets/img/general-UI/RES_2.png';
import iconWealth from '../assets/img/general-UI/RES_1.png';
import iconMagic from '../assets/img/general-UI/RES_3.png';

const TopBar = () => {
    const { gameState } = useContext(GameContext);

    return (
        <div className="top-bar">
            <div className="top-bar-flex">
                <img src={logoSmall} className="logo-small" alt="Fallen Idols Logo" />
                
                {/* Display Trust, Wealth, Magic */}
                <div className="top-bar-items">
                    <div className="top-bar-item">
                        <img src={iconTrust} className="icon-small" alt="Trust Icon" />
                        <p className="top-bar-text">
                            {gameState.baseVariables.trust}%
                        </p>
                    </div>
                    <div className="top-bar-item">
                        <img src={iconWealth} className="icon-small" alt="Wealth Icon" />
                        <p className="top-bar-text">
                            {gameState.baseVariables.wealth} / {gameState.baseVariables.maxWealth}
                        </p>
                    </div>
                    <div className="top-bar-item">
                        <img src={iconMagic} className="icon-small" alt="Magic Icon" />
                        <p className="top-bar-text">
                            {gameState.baseVariables.magic} / {gameState.baseVariables.maxMagic}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;