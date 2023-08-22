import React, { useState, useEffect } from 'react';

// css
import taskCss from "../css/task.module.css";
export default function Task() {

    return (
        <div className={taskCss.taskInp}>
            <input type="text" name="" id="" value = "type your task here" />
            {/* <p>hello</p> */}
        </div>
    );
}