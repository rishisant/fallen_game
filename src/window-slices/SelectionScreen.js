/*
    真田理志
    THIS IS THE SELECTION SCREEN COMPONENT.
    YOU WILL CHOOSE A GOD TO WORSHIP HERE.
*/

import React, {useState} from "react";
import ParallaxBackground from "../components/ParallaxBackground";

import { useNavigate } from "react-router-dom";

// Import STATUE_1, 2, 3 as GOD1
import GOD1 from '../assets/img/STATUE_1.png';
import GOD2 from '../assets/img/STATUE_2.png';
import GOD3 from '../assets/img/STATUE_3.png';

import '../assets/css/Selection.css';

const SelectionScreen = () => {
    const navigate = useNavigate();

    const [selectedGod, setSelectedGod] = useState(null); // Set this to 1, 2, or 3 depending on the god you choose.

    return (
        <>
            <ParallaxBackground />
            <div className='parallax-menu-root'>
                <div className='parallax-menu-content'>
                    <div className='game-title'>
                        <h1 className='game-title-text'>SELECT IDOL...</h1>
                        <h3 className='game-title-subtext'>THE SON OF RAPHAT.</h3>
                    </div>

                    <div className='false-gods-container'>
                        { selectedGod === null && 
                        (
                        <>
                            <div className="false-god">
                                <img src={GOD1} alt="GOD1" className="false-god-image" onClick={() => setSelectedGod(1)} />
                            </div>
                            <div className="false-god">
                                <img src={GOD2} alt="GOD2" className="false-god-image" onClick={() => setSelectedGod(2)} />
                            </div>
                            <div className="false-god">
                                <img src={GOD3} alt="GOD3" className="false-god-image" onClick={() => setSelectedGod(3)} />
                            </div>
                        </>
                        )
                        }

                        { selectedGod === 1 &&
                            <>
                                <div className='false-god'>
                                    <img src={GOD1} alt='GOD1' className='false-god-image' />
                                </div>

                                <div className="false-god-information">
                                    <h1 className="false-god-title">
                                        RAPHAT 
                                        <div className='akhaar' style={{fontSize: '0.8em', marginTop: '.5rem'}}>
                                        RAPHAT
                                        </div>
                                    </h1>
                                    <p className="false-god-description">
                                        Raphat is your father, a powerful and wise warrior who had led your people
                                        to victory in many battles. He is known for his strength and courage, and
                                        his ability to inspire and gain trust.
                                        <br></br>
                                        <br></br>
                                        Elevate your father to a god, and you will gain his strength and wisdom.
                                        You may use his wise words to inspire your people, and his strength to
                                        conquer the world.
                                    </p>
                                </div>

                                <div className='button-background' onClick={() => navigate('/game')}>
                                    START GAME!
                                </div>

                                <div className='button-background' onClick={() => setSelectedGod(null)}>
                                    CHANGE GOD...
                                </div>
                            </>
                        }

                        { selectedGod === 2 &&
                            <>
                                <div className='false-god'>
                                    <img src={GOD2} alt='GOD2' className='false-god-image' />
                                </div>
                                

                                <div className="false-god-information">
                                    <h1 className="false-god-title">
                                        ISAHRA
                                        <div className='akhaar' style={{fontSize: '0.8em', marginTop: '.5rem'}}>
                                        ISAHRA
                                        </div>
                                    </h1>
                                    <p className="false-god-description">
                                        Isahra was the false god your peoples worshipped, a goddess of fertility
                                        and prosperity. She was known for bearing many children, and for bringing
                                        fertility to the land. Your peoples had blossomed before they were struck
                                        down by the Creator.
                                        <br></br>
                                        <br></br>
                                        Worship Isahra, and you will gain her fertility and prosperity. You will
                                        acquire wealth easier, as well as increase the population of your people.
                                        But be wary, your father Raphat will not be pleased with your choice.
                                    </p>
                                </div>

                                <div className='button-background' onClick={() => navigate('/game')}>
                                    START GAME!
                                </div>

                                <div className='button-background' onClick={() => setSelectedGod(null)}>
                                    CHANGE GOD...
                                </div>
                            </>
                        }

                        { selectedGod === 3 &&
                            <>
                                <div className='false-god'>
                                    <img src={GOD3} alt='GOD3' className='false-god-image' />
                                </div>

                                <div className="false-god-information">
                                    <h1 className="false-god-title">
                                        MIL'AAB
                                        <div className='akhaar' style={{fontSize: '0.8em', marginTop: '.5rem'}}>
                                        MILA+B
                                        </div>
                                    </h1>
                                    <p className="false-god-description">
                                        The peoples of a strange land worshipped Mil'aab, a god of magic and
                                        mystery. Mil'aab was a manipulator of spirit, and was known for his
                                        ability to perform miracles. The ones who conquered your peoples were
                                        followers of Mil'aab, and they sacrificed your people to him for
                                        spiritual power.
                                        <br></br>
                                        <br></br>
                                        Worship Mil'aab, and you will not be rivaled in magical ability.
                                        You will gain increased spiritual manipulation and power, and will
                                        gain the knowledge of spiritual things. But you betray your father,
                                        and your people will not trust you.
                                    </p>
                                </div>

                                <div className='button-background' onClick={() => navigate('/game')}>
                                    START GAME!
                                </div>

                                <div className='button-background' onClick={() => setSelectedGod(null)}>
                                    CHANGE GOD...
                                </div>
                            </>
                        }

                    </div>
                </div>

            </div>
        </>
    );

};

export default SelectionScreen;