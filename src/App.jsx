import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

// components
// import Nav from "./assets/Components/Nav.jsx"

import Clock from './assets/Components/Clock'
import Tasks from './assets/Components/Tasks'
import FocusPage from './assets/Components/FocusPage'

function App() {

  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
  const [currTask, setCurrTask] = useState(JSON.parse(localStorage.getItem('currTask')));

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])
  useEffect(() => {
    localStorage.setItem('currTask', currTask);
  }, [currTask])
  return (
    <>
      <Routes>
        <Route
          path="/Focus-StudySpace/"
          element={
            <>
              <Clock />
              <Tasks
                list={list}
                setList={setList}
                currTask={currTask}
                setCurrTask={setCurrTask}
              />
            </>
          }
        />
        <Route
          path="/Focus-StudySpace/taskPage"
          element={
            <FocusPage
              list={list}
              setList={setList}
              currTask={currTask}
              setCurrTask={setCurrTask}
            />}
        />
      </Routes>
    </>
  )
}

export default App

  // {/* <Nav /> */}
  // <Clock />