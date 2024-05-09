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

const BugTest = () => {
    
    return (
        <>
            <div className="full-container">
                <TopBar />
                <BugTestStore />
            </div>
        </>
    );
}

export default BugTest;