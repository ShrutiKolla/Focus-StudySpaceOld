import React, { useState, useEffect } from 'react';

// css
import tasksCss from "../css/tasks.module.css";
import { useNavigate } from "react-router-dom";

// components
import Task from "./Task.jsx"
export default function Tasks({ list, setList, currTask, setCurrTask }) {
    const addTask = () => {
        setList(prev => {
            const arr = [...prev];
            arr.push({ text: "type your task here", time: 25 });
            return arr;
        })
    }

    const handleDelete = (idx) => {
        setList(prev => {
            let arr = [...prev];
            arr.splice(idx, 1);
            return arr;
        })
    }
    const tasksDiv = list.map((x, idx) => {
        return <Task
            key={idx}
            idx={idx}
            list={list}
            setList={setList}
            currTask={currTask}
            setCurrTask={setCurrTask}
            handleDelete={() => { handleDelete(idx) }}
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