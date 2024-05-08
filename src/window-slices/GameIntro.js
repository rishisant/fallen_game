/*
    真田理志
    THIS IS THE GAME INTRO COMPONENT.
    ALL THE CUTSCENES WILL BE DISPLAYED HERE, BEFORE THE GAME STARTS.
*/

import React from "react";
import ParallaxBackground from "../components/ParallaxBackground";

import { useNavigate } from "react-router-dom";

const GameIntro = () => {
    const navigate = useNavigate();

    const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

    const forwardText = () => {
        if (currentTextIndex === 12) {
            navigate('/selection-screen');
            return;
        }
        setCurrentTextIndex(currentTextIndex + 1);
    }

    const allText = [
        'I heard a voice, calling out to me. I was perched on the edge of a mountain, looking down at the world below.\n\nI was a man of great wisdom, and I had lived for many years. I had thought deeply, pondering the mysteries of the spiritual world.',
        'Years ago, I had been a great warrior, fighting for my people. The world was more dangerous then, and I had been forced to fight for my survival.\n\nBut now, I was old, and my fighting days were behind me.',
        'My people used to follow the Creator ((YAHUAH)), but they had turned away from Him. And so, their nations were scattered. They had forgotten the ways of their ancestors, and had turned to idol worship.\n\nI had seen the idols they worshipped, and I knew that they were false gods.',
        'A part of me wanted to leave this world, to escape the pain and suffering that I saw all around me. But another part of me wanted to stay, to fight for my people, and to bring them back to the Creator.\n\nI was torn between these two desires, and I did not know what to do.',
        'When I heard this voice on the mountain, I felt a strange sense of peace. It was as if the voice was calling out to me, telling me that there was still hope for my people.\n\nI listened to the voice, and it told me to write various things down.\n\nI wrote down these words on a tablet before me.\n\n((AKAAS SEMAYAMIM KEBATAHT RAQIYA))\n(AKAHS SEMAYAMĪM KEBĀTAHT RAQĪYA)\n\n',
        'The voice told me these words were key to the future of my people. To be able to bring them into prosperity - a vision that I had longed for.\n\nThere\'\s a beautiful world in my language, ((SEHFA)) (SĒFA), which is the feeling that describes spiritual enlightenment.\n\nThe voice had promised me such peace if I heeded its words.\n\nI was intrigued, yet I was torn.',
        'Days later, I awoke from my bed, and ran outside. The moon covered the sun, and the world was plunged into darkness.\n\nPrior to my awakening, I had saw a vision of a great war, peoples of diverse tongues gathered together, and a great battle that would ensue.\n\nI knew that the time was near, and that I had to make a choice.\n\nWould I choose the people I had grown up with and fought for, or would I choose the Creator?',
        'I went to the same mountain, and then the voice came to me again, saying:\n\n((CAHFOTAH ETIY YASUFH KATOSH AKASHIMILI))\n(CAHFÒTÁ AITÍ YAHSOUF KAHTOSH AKĀSHIMĪLI)\n"Heed my command and live holy."\n\nThese words pierced my heart, and I felt my spirit at war.\n\nWas this really the spirit of the Creator, or was it a false god trying to deceive me?',
        'I ran back to my village, and I saw that the people were in great distress. Bodies lay lifeless on the wet dirt, rain pouring down from the heavens.\n\nOnce again, the words of the voice came to me:\n\n((NEHYIR, CAHFOTA ETIY IRIBIK)) ?\n(NEHĪR, CAHFÒTÁ AITÍ IRIBIK)\n"Will you heed my command?"\n\nI went to the temple of my people, as the voice commanded me to do.',
        'As I entered the temple, bodies lay on the floor, blood staining the floors of opilent marble. The voice spoke to me again:\n\n((NEHYIR ET DEAVUS KINSAHYA))\n(NEHĪR ET DEAVUS KINSAHYA)\n"Your gods have failed you."\n\nI felt a great sense of sorrow, fell down to my knees, and wept.',
        'But as tears streamed down my face, I heard the voice one last time, and it revealed itself to me:\n\n((NEHYIR WATAH CAHFOTAH ETIY))\n(NEHĪR WĀTÁH CAHFÒTÁ AITÍ)\n"You will follow me."\n\nAnd so, I followed the instructions of the spirit. Every day my people were slaughtered, but I was heeding the demands of the voice that spoke to me.',
        'I constructed an altar, and I offered sacrifices to the spirit that spoke to me for more knowledge. But before I knew it, darkness enveloped me, and I was no more.\n\nI stopped hearing the voice speak, and I was led into misery and weakness. I fasted for weeks on end, trying to reclaim the gift that I had envisioned.\n\nA decade later, I was advanced in years, and had attained great spiritual knowledge. I was a beacon of light to my people, but they had noticed my deterioration.',
        'I had a son who looked after me in my last days, and he promised me to honor my existence. But as I lay on my deathbed, I heard the voice speak to me after many years of silence:\n\n((NEHYIR, DEAVUS METOYAH))\n(NEHĪR, DEAVUS METOYAH)\n"You will become as a god."\n\nMy eyes slowly shut, and I passed away, leaving my son to carry on my legacy.',
    ];

    const formatText = (text) => {
        const regex = /(\(\((.*?)\)\))|\n/g;
    
        let lastIndex = 0;
        const result = [];
    
        text.replace(regex, (match, p1, p2, index) => {
            if (lastIndex !== index) {
                result.push(text.slice(lastIndex, index));
            }
    
            if (match === '\n') {
                result.push(<br key={index} />);
            } else if (p1) {
                result.push(<span className="akhaar" key={index}>{p2}</span>);
            }
    
            lastIndex = index + match.length;
        });
    
        if (lastIndex < text.length) {
            result.push(text.slice(lastIndex));
        }
    
        return result;
    }


    return (
        <>
            <ParallaxBackground />
            <div className='parallax-menu-root'>
                <div className='parallax-menu-content'>
                    <div className='game-title'>
                        <h1 className='game-title-text'>INTRODUCTION...</h1>
                        <h3 className='game-title-subtext'>THE STORY BEGINS.</h3>
                    </div>

                    <div className='menu-options'>
                        <div className='menu-content'>
                            <p className='menu-content-text'>
                                {formatText(allText[currentTextIndex])}
                            </p>
                        </div>
                        <div className='button-background' onClick={() => forwardText()}>
                            NEXT...
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default GameIntro;