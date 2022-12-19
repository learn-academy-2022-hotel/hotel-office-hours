import { useState } from 'react'
import Dice from './components/Dice'
import Roll from './components/Roll'
import './App.css'
import diceOne from './assets/diceOne.png' // This is importing photos from the assets folder
import diceTwo from './assets/diceTwo.png'
import diceThree from './assets/diceThree.png'
import diceFour from './assets/diceFour.png'
import diceFive from './assets/diceFive.png'
import diceSix from './assets/diceSix.png'

const App = () => {
  // State
  const [diceRoll, setDiceRoll] = useState('')
  const [rollLog, setRollLog] = useState([])
  // declaring dice numbers or images
  const dice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

  // handles execution of the dice being rolled and state updating
  const rollThatDice = () => {
    const rolling = Math.floor(Math.random() * dice.length)
    setDiceRoll(dice[rolling])
    setRollLog([...rollLog, diceRoll])
  }

  // handles restarting the roll tracker
  const restartGame = () => {
    setRollLog([])
  }

  return (
    // fragments
    <>
      {/* div holding the border around the page */}
      <div
        style={{
          border: 'solid black 5px',
          height: '850px',
          backgroundColor: '#F2FFE6',
        }}
      >
        <h1> Rolling with Hotel </h1>
        <br />
        {/* div container for both dice and tracker */}
        <div className='dice-n-tracker'>
          {/* div for each dice and tracker */}
          <div className='dice-roll'>
            <Dice
              rollThatDice={rollThatDice}
              diceRoll={diceRoll}
              restartGame={restartGame}
            />
          </div>
          {/* div for each dice and tracker */}
          <div className='dice-roll'>
            <Roll rollLog={rollLog} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
