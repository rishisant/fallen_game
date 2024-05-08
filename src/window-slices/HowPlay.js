/*
    真田理志
    THIS IS THE HOW TO PLAY COMPONENT.
*/

import React from "react";
import ParallaxBackground from "../components/ParallaxBackground";

import { useNavigate } from "react-router-dom";

const HowPlay = () => {
    const navigate = useNavigate();

    return (
        <>
            <ParallaxBackground />
            <div className='parallax-menu-root'>
                <div className='parallax-menu-content'>
                    <div className='game-title'>
                        <h1 className='game-title-text'>HOW TO PLAY...</h1>
                        <h3 className='game-title-subtext'>INSTRUCTIONS.</h3>
                    </div>

                    <div className='menu-options'>
                        <div className='menu-content'>
                            <p className='menu-content-text'>
                                You start the game by choosing a god to worship.
                                Each one of these gods has a different set of
                                abilities, and will influence the way you play
                                the game.

                                <br></br><br></br>

                                There are a slew of actions you can take, as well
                                as resources to manage, such as <i>trust</i>, <i>wealth</i>
                                , and <i>magic power</i>. You will
                                need to manage these resources carefully, as
                                they will determine your success in the game.

                                <br></br><br></br>

                                The game is ultimately won through conquest, and
                                you will need to conquer the world in the name of
                                your god. The world is divided into territories,
                                and you will need to conquer each territory to
                                win the game.

                                <br></br><br></br>

                                Granted, winning the game ends in a "bad" ending,
                                since the Creator will destroy the world. But
                                that's the point of the game. You're fighting
                                to take as many souls as you can with you to
                                the underworld.
                            </p>
                        </div>
                        <div className='button-background' onClick={() => navigate('/')}>
                            RETURN BACK...
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default HowPlay;