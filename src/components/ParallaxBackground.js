/*
    真田理志
    THIS IS THE PARALLAX BACKGROUND FOR THE MAIN MENU.
*/

import React, { useState } from 'react';
import '../assets/css/Parallax.css';

// Import ALL GAME CONTEXTS
// import { GameContext } from '../contexts/GameContext';

const ParallaxBackground = () => {
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = (clientX * -1 / 33);
        const moveY = (clientY * -1 / 33);

        setStyle({
            transform: `translateX(${moveX}px) translateY(${moveY}px)`
        });

    }

    return (
        <>
            <div className='parallax-container'
            onMouseMove={handleMouseMove}>
                <div className='parallax-background'
                style={style}></div>
            </div>

            <div className="invisible-spacer">
                HELLO.
            </div>
        </>
    );

}

export default ParallaxBackground;