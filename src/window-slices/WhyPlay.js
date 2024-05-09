/*
    真田理志
    なぜプレイするのか
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoMain from '../assets/img/general-UI/FIDOLS_logo.png';

const WhyPlay = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0); // Max 2

    const slideProgress = () => {
        if (currentSlide < 2) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    }

    return (
        <>
            <div className="full-container">
                <div className="top-container">
                    <img src={logoMain} className="logo-main" alt="Fallen Idols Logo" />
                </div>

                <div className="text-container">
                    <div className="text-container-row">
                        <h3 className="text-container-title">
                            <p>WHY WAS THIS GAME DESIGNED?</p>
                        </h3>
                        {
                            currentSlide === 0 && (
                                <>
                                    <p className="text-container-text">
                                        Ever since the beginning of recorded human history, there have been stories and myths of
                                        great heroes and gods who have performed incredible feats and deeds. These stories have
                                        been passed down from generation to generation, and have been told and retold in many
                                        different ways.
                                        <br></br> <br></br>
                                        There is a fascination with the spiritual aspect of creation and human existence, and
                                        the stories of false gods and idols have been a part of human culture for thousands of years.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 1 && (
                                <>
                                    <p className="text-container-text">
                                        This game seeks to mirror and reflect that, through a story that is both familiar and
                                        yet foreign. You, the player, seek to praise false idols in order to preserve your own
                                        peoples. 
                                        <br></br> <br></br>
                                        The game is a reflection of the human condition, and the lengths that religious leaders
                                        and followers will go to in order to preserve their own way of life. This game seeks to
                                        mimic the stories and tales of old, with a hint of realism and a touch of the fantastic.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 2 && (
                                <>
                                    <p className="text-container-text">
                                        So, I wish you good luck in your journey, and I hope that the game will provide you with
                                        not only a fun and engaging experience, but also a deeper understanding of the human
                                        condition and the desires and motivations that drive the quest for power and control.
                                        <br></br> <br></br>
                                        <span style={{ textAlign: 'right', display: 'block', margin: '.25rem .25rem', color: '#858585', fontStyle: 'italic' }}>
                                            - R. Sanada
                                        </span>
                                    </p>
                                </>
                            )
                        }
                    </div>

                    <div className="buttons-container-row">
                        {
                            currentSlide !== 2 && (
                                <div className="small-button" onClick={slideProgress}>
                                    NEXT...
                                </div>
                            )
                        }

                        <div className="small-button" onClick={() => navigate('/')}>
                            BACK...
                        </div>
                    </div>

                </div>

                
            </div>
        </>
    );
}

export default WhyPlay;