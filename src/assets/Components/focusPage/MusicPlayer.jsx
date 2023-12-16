// toggle icons play pause
import React, { useState, useRef, useEffect } from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateBeforeNext from '@mui/icons-material/NavigateNext';
import songsDb from './MusicDb.json';

import css from '../../css/player.module.css'

const MusicPlayer = () => {

    const [currSong, setCurrSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [lastBack, setLastBack] = useState('');
    const audioRef = useRef('');
    const progressBar = useRef('');
    const volume = useRef('');

    console.log(currSong);
    
    useEffect(() => {
        audioRef.current.src = songsDb[currSong].url;
    }, [currSong])
    function initialize() {
        progressBar.current.max = audioRef.current.duration;
        progressBar.current.value = audioRef.current.currentTime;
        audioRef.current.volume = volume.current.value / 100;
        volume.current.style.backgroundSize = `${volume.current.value}% 100%`
    }

    function handlePlay() {
        setIsPlaying(prev => {
            prev ? audioRef.current.pause() : audioRef.current.play();
            return !prev;
        })
    }

    // Progress Bar

    function handleProgress(e) {
        audioRef.current.currentTime = e.target.value;
    }
    function handleTime() {
        progressBar.current.value = audioRef.current.currentTime;
    }

    // Volume Bar
    function handleVol(e) {
        audioRef.current.volume = e.target.value / 100;
        volume.current.style.backgroundSize = `${e.target.value}% 100%`
    }
    function volKeyStroke() {
        volume.current.value = audioRef.current.volume * 100;
        volume.current.style.backgroundSize = `${volume.current.value}% 100%`
    }

    // Back and Next

    function handleBefore() {
        const currTime = (new Date).getSeconds();
        if (audioRef.current.currentTime < 10) {
            if (currTime - lastBack < 2) {
                changeSong(-1);
            } else {
                audioRef.current.currentTime = 0;
            }
        }
        setLastBack(currTime);
        audioRef.current.currentTime -= 10;
        // console.log('10 sec back', audioRef.current.currentTime);
    }

    function handleNext() {
        if (audioRef.current.currentTime > audioRef.current.duration - 10) {
            console.log("next song");
            changeSong(1);
            return;
        }
        audioRef.current.currentTime += 10;
        // console.log('10 sec fw', audioRef.current.currentTime);
    }

    // prev next song

    function changeSong(dir) {
        const n = songsDb.length;
        dir == 1 ? setCurrSong(curr => (curr + 1) % n) : setCurrSong(curr => (curr - 1 + n) % n)
    }

    // keyStrokes

    // document.onkeydown = (e) => {
    //     // console.log(e.code)
    //     switch (e.code) {
    //         case "ArrowLeft":
    //             handleBefore();
    //             break;
    //         case "ArrowRight":
    //             handleNext();
    //             break;
    //         case "ArrowUp":
    //             audioRef.current.volume <= 0.8 ? audioRef.current.volume += 0.2 : audioRef.current.volume = 1;
    //             volKeyStroke();
    //             break;
    //         case "ArrowDown":
    //             audioRef.current.volume >= 0.2 ? audioRef.current.volume -= 0.2 : audioRef.current.volume = 0;
    //             volKeyStroke();
    //             break;
    //         case "Space":
    //             handlePlay();
    //             break;
    //     }
    // }
    return (
        <div>

            <audio ref={audioRef}
                controls autoPlay
                onTimeUpdate={handleTime}
                onLoadedMetadata={initialize}
                onEnded={() => changeSong(1)}
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
