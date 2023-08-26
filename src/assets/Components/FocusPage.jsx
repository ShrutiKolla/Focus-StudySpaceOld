import React from 'react';

export default function FocusPage({ list, setList, currTask, setCurrTask }) {
    console.log(list[currTask].text)
    return (
        <>
            <p>
                start ur work!! {currTask}
            </p>
            <p>{list[currTask].text}</p>
        </>
    );
}