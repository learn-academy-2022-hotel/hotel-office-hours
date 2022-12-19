const Dice = (props) => {
  console.log('Dice props', props)
  return (
    <>
      {/* This div is just separating the dice img and the restart button */}
      <div>
        {/* functional props */}
        {!props.diceRoll && (
          // the button to start the dice rolling for the first time hence the bang operator above
          <button onClick={props.rollThatDice} className='bttn1'>
            Click here to roll the dice
          </button>
        )}
        {/* For when there is a dice already rolled */}
        {props.diceRoll && (
          <img
            // passing the img the prop of diceRoll as it's source to use the imported pictures of dice
            src={props.diceRoll}
            alt={'a dice face showing'}
            // triggering our rollThatDice method
            onClick={props.rollThatDice}
            className='dice-face'
          />
        )}
        <br />
        <br />
        {/* button to restart the game */}
        <button onClick={props.restartGame} className='bttn2'>
          Restart
        </button>
      </div>
    </>
  )
}

export default Dice
