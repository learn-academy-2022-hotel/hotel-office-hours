const Roll = (props) => {
  console.log('Roll props', props)
  return (
    <>
      <h2> Roll Tracker</h2>
      {/* container for the tracked rolls */}
      <div className='tracker'>
        {/* mapping the props so they return an array of the last roll */}
        {props.rollLog.map((roll, index) => {
          return (
            // how we return the image of the dice in the tracker
            <img
              key={index}
              src={roll}
              alt={'a rolled dice here'}
              style={{ height: '50px', width: '50px' }}
            />
          )
        })}
      </div>
    </>
  )
}

export default Roll
