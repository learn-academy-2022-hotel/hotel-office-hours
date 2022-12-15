import React from "react"
import '../App.css'

const Dice = (props) => {
  return (
    <>

      <div className="roll" onClick={props.rollThatDice}>
        {props.diceRoll}
      </div>
      <h1>Click Dice to Roll</h1>

    </>
  )
}

export default Dice
