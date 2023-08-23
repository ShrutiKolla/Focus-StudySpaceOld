import React, { useState, useEffect } from 'react';

// css
import taskCss from "../css/task.module.css";

// components
import FocusPage from "../Components/FocusPage.jsx";
export default function Task({ idx, list, setList }) {

    // console.log(list[idx], list);
    const [showFocusPage, setShow] = useState(false);
    const handleClick = () => {
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setList(prev => {
            const listarr = prev.map((x, i) => {
                if (i === idx) {
                    return { ...prev[idx], [name]: value };
                }
                return x;
            })
            return listarr;
        })
    }
    return (
        <div>
            <div className={taskCss.taskBox}>
                <input
                    className={taskCss.taskInp}
                    type="text"
                    name="text" id=""
                    value={list[idx].text}
                    onChange={handleChange}
                />
                <select name="time" id=""
                    className={taskCss.taskDuration}
                    value={list[idx].time}
                    onChange={handleChange}
                >
                    <option value={25}>25:00</option>
                    <option value={30}>30:00</option>
                    <option value={35}>35:00</option>
                    <option value={40}>40:00</option>
                    <option value={45}>45:00</option>
                    <option value={50}>50:00</option>
                    <option value={60}>60:00</option>
                </select>
                <button
                    className={taskCss.startBtn}
                    onClick={handleClick}
                >Start</button>
            </div>
        </div>
    );
}