/*
    真田理志
    ゲームをバランス調整するときに、バグが発生することがあります。
    そのバグを再現するためのテストコードを書いてみましょう。
    以下のコードは、バグが発生するときに、エラーが発生するコードです。
    このコードを修正して、エラーが発生しないようにしてください。
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* IMPORT TOP BAR */
import TopBar from '../components/TopBar';
/* IMPORT BUG TEST SCORE TO TRACK ALL VARIABLES */
import BugTestStore from '../components/BugTestStore';

// Import Modal to Test
import Modal_Example from '../components/modals/Modal_Example';

const BugTest = () => {
    
    return (
        <>
            <div className="full-container">
            <Modal_Example />
            
                <TopBar />
                
                <BugTestStore />
            </div>
        </>
    );
}

export default BugTest;