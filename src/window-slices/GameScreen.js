/*
    真田理志
    ACTUAL GAME INTERFACE.
*/

import React, { useState } from 'react';

import ParallaxBackground from '../components/ParallaxBackground';

/* All Components for Game Screen */
import TopGameBar from '../components/TopGameBar';
import BottomGameBar from '../components/BottomGameBar';

import { useNavigate } from 'react-router-dom';

const GameScreen = () => {

    const [selectedMenu, setSelectedMenu] = useState(null); // Can be 'society', 'divine', 'economic', 'health', 'infrastructure', 'military'

    return (
        <>
            <TopGameBar />

            <BottomGameBar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

            { selectedMenu === null &&
                <h1>helo world</h1>
            }

            { selectedMenu === 'society' &&
                <h1>HELLO SOCIETY</h1>
            }
        </>
    )
};

export default GameScreen;