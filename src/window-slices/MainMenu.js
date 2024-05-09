/*
    真田理志
    マインメニュー画面
*/

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import logoMain from '../assets/img/general-UI/FIDOLS_logo.png';

const MainMenu = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="full-container">
                <div className="top-container">
                    <img src={logoMain} className="logo-main" alt="Fallen Idols Logo" />
                </div>

                <div className="buttons-container">
                    <div className="button special" onClick={() => navigate('/Start')}>
                        START GAME...
                    </div>
                    <div className="button special" onClick={() => navigate('/How')}>
                        HOW TO PLAY?
                    </div>
                    <div className="button special" onClick={() => navigate('/Why')}>
                        WHY PLAY?
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainMenu;