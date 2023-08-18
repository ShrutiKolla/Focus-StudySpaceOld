import React from "react";

export default function Nav() {
    const timeObj = new Date();
    let hours = timeObj.getHours();
    let mins = timeObj.getMinutes();
    let secs = timeObj.getSeconds();
    hours = hours <= 9 ? '0' + hours : hours;
    mins = mins <= 9 ? '0' + mins : mins;
    secs = secs <= 9 ? '0' + secs : secs;
    return(
        <>
            <div className="currTime">{hours} : {mins} : {secs}</div>
        </>
    );
}