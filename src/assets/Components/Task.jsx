import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// css
import taskCss from "../css/task.module.css";

export default function Task({ idx, list, setList, currTask, setCurrTask }) {

    const redirect = useNavigate();
    const handleClick = () => {
        setCurrTask(idx);
        redirect('/Focus-StudySpace/taskPage');
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
                <svg className={taskCss.delIcon} viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#FFFFFF"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    </path> <path d="M14 12V17" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path> <path d="M4 7H20" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </div>
        </div>
    );
}