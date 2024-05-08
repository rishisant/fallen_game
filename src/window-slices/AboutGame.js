/*
    真田理志
    THIS IS THE ABOUT GAME COMPONENT.
*/

import React from "react";
import ParallaxBackground from "../components/ParallaxBackground";

import { useNavigate } from "react-router-dom";

const AboutGame = () => {
    const navigate = useNavigate();

    return (
        <>
            <ParallaxBackground />
            <div className='parallax-menu-root'>
                <div className='parallax-menu-content'>
                    <div className='game-title'>
                        <h1 className='game-title-text'>ABOUT GAME...</h1>
                        <h3 className='game-title-subtext'>WHAT ARE WE TALKING ABOUT?</h3>
                    </div>

                    <div className='menu-options'>
                        <div className='menu-content'>
                            <p className='menu-content-text'>
                                Ever since the beginning of recorded human history,
                                people have worshipped idols. The world we live in
                                seems to have a deeply spiritual aspect to it, and
                                people have always felt the need to connect with
                                something "greater than themselves".

                                <br></br><br></br>

                                This game delves into the world of idol worship,
                                and communications with unfamiliar entities. The
                                player will choose a "god" to worship, and will
                                be tasked with the responsibility of conquering
                                the world in the name of that god.

                                <br></br><br></br>

                                Simple enough, right? Well, not quite. You're fighting
                                against the Creator, and the Creator is not happy
                                with the idol worship. How will you fare in this
                                battle of wills? Only time will tell...
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

export default AboutGame;