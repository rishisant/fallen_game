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

const BugTest = () => {
    
    return (
        <>
            <div className="full-container">
            <TopBar />
            </div>
        </>
    );
}

export default BugTest;