/*
    真田理志
    始まりのカットシーン
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoMain from '../assets/img/general-UI/FIDOLS_logo.png';

const StartCutscene = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0); // Max 10

    const slideProgress = () => {
        if (currentSlide < 10) {
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
                            {
                                currentSlide < 5 && (
                                    <>
                                    <p style={{marginBottom: '0px'}}>RAPHAAT</p>
                                    <p className='akh st'>RAPHAT</p>
                                    </>
                                )
                            }
                            {
                                currentSlide >= 5 && currentSlide < 10 && (
                                    <>
                                    <p style={{marginBottom: '0px'}}>YOEL</p>
                                    <p className='akh st'>Y'EL</p>
                                    </>
                                )
                            }
                            {
                                currentSlide >= 10 && (
                                    <>
                                    <p style={{marginBottom: '0px'}}>AK'HĀNU</p>
                                    <p className='akh st'>AKHAANU</p>
                                    </>
                                )
                            }
                        </h3>
                        {
                            currentSlide === 0 && (
                                <>
                                    <p className="text-container-text">
                                        I was a man of great power and influence. I was the king of my people, and they
                                        relied on me to protect and lead them. Trained from a young age in the arts of
                                        warfare and diplomacy, I had been given the keys to the kingdom and the power to
                                        rule over all that I saw.
                                        <br></br> <br></br>
                                        The Creator had given me a great gift, and I had used it to build a mighty empire
                                        that stretched from the mountains to the sea. My people were happy and prosperous,
                                        and they worshipped the Creator, in truth and in spirit.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 1 && (
                                <>
                                    <p className="text-container-text">
                                        Under my command, the armies of my people had conquered all of the lands around us,
                                        and we had brought peace and prosperity to all who lived within our borders. The
                                        Creator had blessed us with great wealth and power, and we had used it to build
                                        great cities and monuments to our glory.
                                        <br></br> <br></br>
                                        A decade of peace and prosperity followed, yet my people grew fat and lazy, and they
                                        began to forget the Creator who had given us all that we had. They began to worship
                                        false idols and to turn away from the truth that had made us great.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 2 && (
                                <>
                                    <p className="text-container-text">
                                        Peace is often a fragile veneer. Beneath the surface, the people of my kingdom were
                                        divided and discontent, and they began to turn on one another in their greed and
                                        covetousness. They started to drift away from the Creator, and to worship the false
                                        idols that had taken root in our land.
                                        <br></br> <br></br>
                                        Seduced by the allure of Ishatār, the goddess of fertility and pleasure, they began to
                                        offer sacrifices and offerings to her, in the hope that she would grant them their
                                        deepest desires. I watched with a heavy heart as my people, once unified under the
                                        truth of the Creator, became fragmented and divided.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 3 && (
                                <>
                                    <p className="text-container-text">
                                        My father had given me rule over such a peculiiar and unfamiliar people. They
                                        were not like the people of my homeland, who worshipped the Creator and followed
                                        his laws and commandments. They were a people of many gods and many idols, and
                                        they worshipped them with a fervor and zeal that I had never seen before.
                                        <br></br> <br></br>
                                        My own brother, seduced by the falsitudes of unfamiliar spirits, had turned away
                                        from the Most High, worshiping Ishataar and the other gods of the land. I watched
                                        as he led people astray, yet I begged and pleaded with him to return to the truth
                                        of the Creator.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 4 && (
                                <>
                                    <p className="text-container-text">
                                        Yet he would not listen, and he had rose an army up against me. He had gathered
                                        the people of the land to his cause, and they had marched against me in battle.
                                        <br></br> <br></br>
                                        My younger brother, the one who had once been my closest friend and ally, now stood
                                        against me, his eyes filled with hatred and malice. I watched as he raised his
                                        sword against me, and I knew that the time had come for me to make a choice.
                                        <br></br> <br></br>
                                        Did I have the strength to stand against him? Would I raise my sword against my own
                                        flesh and blood, or would I lay down my arms and surrender in peace?
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 5 && (
                                <>
                                    <p className="text-container-text">
                                        This is the story of Yoel, the son of Raphaat, the king of the land of Y'Isaman.
                                        <br></br> <br></br>
                                        At the age of eighteen and a half years, I saw my father fall in battle against his
                                        brother, who had turned against him in his greed and ambition. My mother took me out
                                        of the palace, and we fled into the wilderness, where we lived for many years in
                                        hiding.
                                        <br></br> <br></br>
                                        I grew up around an unfamiliar people, who worshipped the god of Mil'aab. They were
                                        a people of little wisdom and understanding, yet they had a great love for the land
                                        and the spirits that dwelt within it.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 6 && (
                                <>
                                    <p className="text-container-text">
                                        My mother grieved daily for my father, but she was led astray, with no leader, no
                                        guide, surrounded by a people who did not know the Creator. Having nobody to turn to,
                                        she learnt from the peoples the traditions of honoring Mil'aab, and she taught me
                                        various prayers and rituals to honor him.
                                        <br></br> <br></br>
                                        Our peoples grew very strong, and we had subdued many of the tribes around us. The
                                        conflict between the tribes was fierce, and the people of the land were divided and
                                        scattered. The land was in chaos, and the people were in turmoil.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 7 && (
                                <>
                                    <p className="text-container-text">
                                        My father's brother had taken the life of my father, and he had taken the throne of
                                        the land of Y'Isaman. He had declared himself king, and he had demanded that all the
                                        people of the land bow down and worship him as their god.
                                        <br></br> <br></br>
                                        The peoples of the land were divided, and they did not know who to follow. Some
                                        stuck to the tradition of Ishatār, while others followed the instruction of the king.
                                        This upset the king, and he ordered the peoples to be executed.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 8 && (
                                <>
                                    <p className="text-container-text">
                                        The people rebelled against the king, and they rose up in arms against him. The
                                        kingdom was fragmented, and the king was killed by his own people. Once a beautiful
                                        and thriving land, Y'Isaman was now a wasteland, filled with the bones of the dead
                                        and the ruins of the past.
                                        <br></br> <br></br>
                                        I came back to the land of my birth, and I saw the destruction that had been wrought
                                        by the king. But not a single tear eclipsed my eye, as I knew that it was all
                                        inevitable.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 9 && (
                                <>
                                    <p className="text-container-text">
                                        I, Yoel, the son of Raphaat, came of age and became a man of great power and
                                        influence. I had the strength of my father and the wisdom of my mother, and I had
                                        love for the once unfamiliar people of the wilderness.
                                        <br></br> <br></br>
                                        But Y'Isaman was scattered, and it was all but a memory. Now, old and advanced in
                                        years, I handed over the throne to my servant Ak'Hānu, and I made a final sacrifice to the
                                        god of Mil'aab.
                                        <br></br> <br></br>
                                        For I never so as much bore a son, and I had no hope for the people of the land.
                                    </p>
                                </>
                            )
                        }
                        {
                            currentSlide === 10 && (
                                <>
                                    <p className="text-container-text">
                                        You are Ak'Hānu, the servant of Yoel, the son of Raphaat, the king of the land of
                                        Y'Isaman. You have been given the keys to the kingdom, and you have been charged
                                        with the task of rebuilding the land and restoring it to its former glory.
                                        <br></br> <br></br>
                                        The people of the land are scattered and divided, and they do not know who to follow.
                                        You must choose one of three idols to worship, and bring all people under your rule.
                                        <br></br> <br></br>
                                        Press the button below to begin your journey...
                                    </p>
                                </>
                            )
                        }
                    </div>

                    <div className="buttons-container-row">
                        {
                            currentSlide !== 10 && (
                                <div className="small-button" onClick={slideProgress}>
                                    NEXT...
                                </div>
                            )
                        }
                            
                            {
                                currentSlide === 10 && (
                                    <div className="small-button" onClick={() => navigate('/GInt')}>
                                        BEGIN...
                                    </div>
                                )
                            }
                    </div>

                </div>

                
            </div>
        </>
    );
}

export default StartCutscene;