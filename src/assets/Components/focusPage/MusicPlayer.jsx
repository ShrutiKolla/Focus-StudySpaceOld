// toggle icons play pause
import React, { useState, useRef, useEffect } from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateBeforeNext from '@mui/icons-material/NavigateNext';

import css from '../../css/player.module.css'

const MusicPlayer = () => {

    const audioRef = useRef('');
    const progressBar = useRef('');
    const volume = useRef('');
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        progressBar.current.max = audioRef.current.duration;
        progressBar.current.value = audioRef.current.currentTime;
        audioRef.current.volume = volume.current.value / 100;
        volume.current.style.backgroundSize = `${volume.current.value}% 100%`
    }, [])

    function handlePlay() {
        setIsPlaying(prev => {
            if (prev == false) {
                audioRef.current.play();
                return true;
            } else {
                audioRef.current.pause();
                return false;
            }
        })
    }

    // Progress Bar

    function handleProgress(e) {
        audioRef.current.currentTime = e.target.value;
    }
    function handleTime(){
        console.log(progressBar.current);
        progressBar.current.value = audioRef.current.currentTime;
    }

    // Volume Bar
    function handleVol(e) {
        audioRef.current.volume = e.target.value / 100;
        volume.current.style.backgroundSize = `${e.target.value}% 100%`
    }

    // Back and Next

    function handleBefore() {

    }

    function handleNext() {

    }
    return (
        <div>

            <audio ref={audioRef} 
            src="https://audio.jukehost.co.uk/MwWajxacPt9avPGIOkW1qzEof9QfYzVg" 
            controls
            onTimeUpdate={handleTime}
            ></audio>

            <div className={css.player}>

                <input onInput={(e) => handleProgress(e)} ref={progressBar} type="range" className={css.progress} />

                <div className={css.controls}>
                    <button onClick={handleBefore}>
                        <NavigateBeforeIcon
                            className={css.backward}
                        />
                    </button>

                    {isPlaying ?
                        <button onClick={handlePlay}>
                            <PauseIcon className={css.controlPlay} />
                        </button> :
                        <button onClick={handlePlay}>
                            <PlayArrowIcon className={css.controlPlay} />
                        </button>
                    }

                    <button onClick={handleNext}>
                        <NavigateBeforeNext className={css.forward} />
                    </button>

                    <input onInput={(e) => handleVol(e)} ref={volume} type="range" className={css.volume} />
                </div>
            </div>

        </div>
    )
}

export default MusicPlayer;
