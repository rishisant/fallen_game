/*
    真田理志
    どうやって遊ぶのか
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoMain from '../assets/img/general-UI/FIDOLS_logo.png';

const HowPlay = () => {
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
                            <p>HOW TO PLAY?</p>
                        </h3>
                        {
                            currentSlide === 0 && (
                                <>
                                    <p className="text-container-text">
                                        You initially start off with a sample population of 100 people, and you must choose
                                        one of three idols to worship, each one granting you different bonuses and abilities.
                                        <br></br> <br></br>
                                        There are three main resources that you must manage, those being: <i>gold</i>, <i>trust</i>,
                                        and <i>magic power</i>. Each one of these resources is vital to your expansion and growth,
                                        and you must manage them wisely in order to succeed.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 1 && (
                                <>
                                    <p className="text-container-text">
                                        You must also manage your relationship with the false idol, as they will constantly
                                        demand sacrifices and offerings from you. If you fail to meet their demands, they will
                                        become angry and your luck will diminish, making it harder for you to succeed.
                                        <br></br> <br></br>
                                        However, keeping the false idol happy may come at the cost of your own people, as they
                                        will demand more and more from you as time goes on. You must balance the needs of your
                                        people with the demands of the false idol in order to truly conquer the world.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 2 && (
                                <>
                                    <p className="text-container-text">
                                        Each idol grants a special ability that is unique to them, which can be used to help
                                        you in your quest for power and control. These unique abilities can be used to in tough
                                        situations in order to turn the tide of battle in your favor.
                                        <br></br> <br></br>
                                        The game is won by conquering all of the other nations and tribes in the world, and
                                        establishing your own empire that will last for generations to come. Do you have what
                                        it takes to destroy all idols but that of your own?
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

export default HowPlay;