import React, {useState} from "react"
import './App.css'
import Dice from "./components/Dice"
import Roll from "./components/Roll"

const App = () => {

  const [diceRoll, setDiceRoll] = useState("")
  const dice = [1, 2, 3, 4, 5, 6]
  const [rollLog, setRollLog] = useState([])

  const rollThatDice = () => {
    const rolling = Math.floor(Math.random() * dice.length)
    setDiceRoll(dice[rolling])
    setRollLog([...rollLog, diceRoll])
  }

  return (
    <>
      <h1>Dice Roller</h1>
      <div className="rectangle-container">

        <div className="rectangle-item">
            <Dice diceRoll={diceRoll} rollThatDice={rollThatDice}/>
        </div>

        <div className="rectangle-item">
            <Roll rollLog={rollLog}/>
        </div>

      </div>
    </>
  )
}

export default App
