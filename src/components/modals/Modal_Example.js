/*
    真田理志
    MODAL EXAMPLE
*/

import React, { useContext, useState } from 'react';
import { GameContext } from '../../contexts/GameContext';

import '../../assets/css/Modal.css';

const Modal_Example = () => {
    const [isModalShowing, setIsModalShowing] = useState(false);
    const { gameState, setGameState } = useContext(GameContext);

    return (
        <>
            { isModalShowing ? (
                <div className="game-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            OISDJHS
                        </div>
                        <div className="modal-body">
                            SDUIHUHSD
                        </div>

                        <div className="modal-footer">
                        <div onClick={() => setIsModalShowing(!isModalShowing)}>
                            CLOSE MODAL
                        </div>
                    </div>
                    </div>

                    
                </div>
            ) : null }

            <div className="button special" onClick={() => setIsModalShowing(!isModalShowing)}>
                TOGGLE MODAL
            </div>
        </>
    );
}

export default Modal_Example;


/*
 <div className="game-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Modal Header</h2>
                </div>
                <div className="modal-body">
                    <p>Modal Body</p>
                </div>
            </div>
        </div>
        */