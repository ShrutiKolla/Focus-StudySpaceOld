import React from 'react';
import Timer from './focusPage/Timer.jsx'
import MusicPlayer from './focusPage/MusicPlayer.jsx'
import fpCss from '../css/focus.module.css' 
export default function FocusPage({ list, setList, currTask, setCurrTask }) {
    return (
        <div className={fpCss.wallpaper}>
            {/* <Timer time={list[currTask].time}/> */}
            <p>
                start ur work!! {currTask}
            </p>
            <p>{list[currTask].text}
            </p>
            <MusicPlayer/>
        </div>
    );
}