import './App.css';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faPlay, faUndo } from '@fortawesome/free-solid-svg-icons'


const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [clockCount, setClockCount] = useState(25*60);

const convertToTime = (count) => {
  const minutes = Math.floor(count / 60);
  let seconds = count % 60;
  return `${minutes}:${seconds}`
}

  return (
    <div className="App">
      <div className="flex">
      <div id='break-label' className='timer-container'>
            <h1>Break Length</h1>
            <div className='action-wrapper'>
                <button id='break-decrement' onClick={() => setBreakLength(breakLength-1)}>
                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </button>
                <span id="break-length">{breakLength}</span>
                <button id='break-increment' onClick={() => setBreakLength(breakLength+1)}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
            </div>
        </div>
        
        <div id='session-label' className='timer-container'>
            <h1>Session Length</h1>
            <div className='action-wrapper'>
                <button id='session-decrement' onClick={() => setSessionLength(sessionLength-1)}>
                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </button>
                <span id="session-length">{sessionLength}</span>
                <button id='session-increment' onClick={() => setSessionLength(sessionLength+1)}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
            </div>
        </div>
      </div>
      <div id="timer-label">
      <div className="clock-container">
        <h1>Session</h1>
        <span id="time-left">25:00</span>
        <div className='flex'>
          <button id="start_stop">
          <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>

          </button>
          <button id="reset">
          <FontAwesomeIcon icon={faUndo}></FontAwesomeIcon>

          </button>

        </div>
        </div>
      </div>
    </div>
  )
}

export default App


