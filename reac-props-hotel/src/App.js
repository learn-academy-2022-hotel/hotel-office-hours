import React from "react"
import './App.css'
import Dice from "./components/Dice"
import Roll from "./components/Roll"

const App = () => {
  return (
    <>
      <h1>Dice Roller</h1>
      <div className="rectangle-container">

        <div className="rectangle-item">
            <Dice />
        </div>

        <div className="rectangle-item">
            <Roll />
        </div>

      </div>
    </>
  )
}

export default App
