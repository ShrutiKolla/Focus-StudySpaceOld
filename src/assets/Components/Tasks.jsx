import React, { useState, useEffect } from 'react';

// css
import tasksCss from "../css/tasks.module.css";

// components
import Task from "./Task.jsx"
export default function Tasks() {

    const [list, setList] = useState([]);
    // console.log(list)

    const addTask = () => {
        setList(prev => {
            const arr = [...prev];
            arr.push({});
            return arr;
        })
    }
    const tasksDiv = list.map(x => {
        return <Task key={x}/>
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