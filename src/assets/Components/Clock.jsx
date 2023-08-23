import React, { useState, useEffect } from 'react';

// css
import clockCss from "../css/clock.module.css";
export default function Clock() {
    const dateobj = new Date();
    const [time, setTime] = useState({ hours: dateobj.getHours(), minutes: dateobj.getMinutes(), seconds: dateobj.getSeconds() })

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setTime({
                minutes: date.getMinutes(),
                hours: date.getHours(),
                seconds: date.getSeconds()
            })
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])
    return (
        <div className={clockCss.clock}>
            <div>{time.hours} : {time.minutes}</div>
        </div>
    );
}