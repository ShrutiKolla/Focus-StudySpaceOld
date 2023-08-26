import React, { useState, useEffect } from 'react';

// css
import tasksCss from "../css/tasks.module.css";
import { useNavigate } from "react-router-dom";

// components
import Task from "./Task.jsx"
export default function Tasks() {
    const [list, setList] = useState([]);
    const addTask = () => {
        setList(prev => {
            const arr = [...prev];
            arr.push({text : "type your task here", time : 25});
            return arr;
        })
    }
    const tasksDiv = list.map((x, idx) => {
        return <Task
            key={idx}
            idx={idx}
            list = {list}
            setList = {setList}
        />
    });
    return (
        <div className={tasksCss.tasksDiv}>
            <div className={tasksCss.head}>
                <p>Tasks</p>
                <button onClick={addTask}>+</button>
            </div>
            {list.length == 0 ? <p>u dont have any tasks</p> : tasksDiv}
        </div>
    );
}