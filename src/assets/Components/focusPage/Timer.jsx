import React from "react";
import { useState, useEffect } from "react";
const Timer = ({ time }) => {

    const [timerVal, setTimerVal] = useState({
        minutes: time,
        seconds: '00'
    })

    useEffect(() => {
        const dateobj = new Date();
        const deadline = new Date()
        deadline.setTime(dateobj.getTime() + time * 60 * 1000 + 1000);
        const intervalId = setInterval(() => {
            const currTime = new Date();
            const timeDiff = deadline - currTime;

            if (timeDiff <= 0) {
                clearInterval(intervalId);
                setTimerVal({ minutes: 0, seconds: 0 });
            } else {
                const minutes = Math.floor(timeDiff / 60000);
                const seconds = Math.floor((timeDiff % 60000) / 1000);

                setTimerVal({ minutes, seconds });
            }
        }, 1000)
        return () => { clearInterval(intervalId) }
    }, [time])
    return (
        <div>
            {timerVal.minutes < 10 ?
                '0' + timerVal.minutes :
                timerVal.minutes
            } : {timerVal.seconds < 10 ?
                '0' + timerVal.seconds :
                timerVal.seconds
            }
        </div>
    )
}

export default Timer;