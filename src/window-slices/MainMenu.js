/*
    真田理志
    THIS IS THE MAIN MENU COMPONENT.
*/

import React from "react";
import ParallaxBackground from "../components/ParallaxBackground";

import { useNavigate } from "react-router-dom";

const MainMenu = () => {
    const navigate = useNavigate();

    return (
        <>
            <ParallaxBackground />
            <div className='parallax-menu-root'>
                <div className='parallax-menu-content'>
                    <div className='game-title'>
                        <h1 className='game-title-text'>FALLEN IDOLS</h1>
                        <h3 className='game-title-subtext'>A SANADA GAME...</h3>
                    </div>

                    <div className='menu-options'>
                        <div className='button-background' onClick={() => navigate('/game-intro')}>
                            START GAME!
                        </div>

                        <div className='button-background' onClick={() => navigate('/how-to-play')}>
                            HOW TO PLAY!
                        </div>

                        <div className='button-background' onClick={() => navigate('/about')}>
                            WHY PLAY?
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default MainMenu;