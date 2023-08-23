import React, { useState, useEffect } from 'react';

// css
import taskCss from "../css/task.module.css";
export default function Task({ idx, list, setList }) {
    
    // console.log(list[idx].val, list);
    const handleChange = (e) => {
        const { value } = e.target;
        setList(prev => {
            const listarr = prev.map((x, i) => {
                if (i === idx) {
                    return { val: value };
                }
                return x;
            })
            return listarr;
        })
    }
    return (
        <div className={taskCss.taskInp}>
            <input
                type="text"
                name="" id=""
                value={list[idx].val}
                onChange={handleChange}
            />
            <input type="text" value="25:00"/>
            {/* <p>hello</p> */}
        </div>
    );
}