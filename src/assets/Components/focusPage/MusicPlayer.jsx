import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateBeforeNext from '@mui/icons-material/NavigateNext';

import css from '../../css/player.module.css'
const MusicPlayer = () => {
    function handlePlay() {
        console.log('play');
    }
    return (
        <div>
            <audio src="https://audio.jukehost.co.uk/MwWajxacPt9avPGIOkW1qzEof9QfYzVg" controls></audio>
            <div className={css.player}>
                <input type="range" value="0" className={css.progress} />
                <div className={css.controls}>
                    <button onClick={handlePlay}>
                        <NavigateBeforeIcon
                            className={css.backword}
                        />
                    </button>
                    <button onClick={handlePlay}>
                        <PlayArrowIcon className={css.controlPlay} />
                    </button>
                    <button onClick={handlePlay}>
                        <NavigateBeforeNext className={css.forward} />
                    </button>
                    {/* <i className="fa-solid fa-backward" className=backward"></i> */}
                    {/* <i className="fa-solid fa-play" id="controlPlay"></i> */}
                    {/* <i className="fa-solid fa-forward" id="forward"></i> */}
                    <input type="range" value="70" className={css.volume} />
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer;
