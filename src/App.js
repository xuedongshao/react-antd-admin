import React, { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [state, toggle] = useState(0)

  useEffect(() => {
    // setInterval(() => {
    //   console.log(`state ${state}`)
    // }, 1000)
  }, [state])

  return (
    <div className="App">
      <header className="App-header">
        <h2>{`${state}`}</h2>
        <button onClick={() => toggle(state + 1)}>Increase</button>
      </header>
    </div>
  )
}

export default App
