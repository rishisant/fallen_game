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

/*

game Context
const initialState = {
    baseVariables: {
        timePassed: 0,
        godChosen: null, // Will become either raphat, isahra, or mil'aab
        trust: 25, // multipliers (so 25%) (if it reaches 0, you lose)
        wealth: 100, // currency
        maxWealth: 1000, // max currency
        magic: 0, // magic power
        maxmagic: 100, // max magic power
        percentageConquered: 0, // percentage to 100 (if the population reaches integer of 1,000,000 you win, so your population is 20,000, you have 5% of the world)
    },
    secondaryVariables: {
        */