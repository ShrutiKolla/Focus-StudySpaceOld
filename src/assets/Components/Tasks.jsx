import React, { useState, useEffect } from 'react';

// css
import tasksCss from "../css/tasks.module.css";

// components
import Task from "./Task.jsx"
export default function Tasks() {

    const [list, setList] = useState([]);

    const addTask = () => {
        setList(prev => {
            const arr = [...prev];
            arr.push({val : "type your task here"});
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
            {tasksDiv}
        </div>
    );
}