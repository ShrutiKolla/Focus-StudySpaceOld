import React from 'react';

export default function FocusPage({ list, setList, currTask, setCurrTask }) {
    // console.log(list[currTask].text)
    console.log(list[currTask])
    console.log(list)
    return (
        <>
            <p>
                start ur work!! {currTask}
            </p>
            <p>{list[currTask].text}</p>
        </>
    );
}