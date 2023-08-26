import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// components
// import Nav from "./assets/Components/Nav.jsx"

import Clock from './assets/Components/Clock'
import Tasks from './assets/Components/Tasks'
import FocusPage from './assets/Components/FocusPage'

function App() {

  const [list, setList] = useState([]);
  const [currTask, setCurrTask] = useState();
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