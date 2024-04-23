import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h1>
      <font color='#057591'> Unicafe Feedback Form </font>
      </h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = (props) => {
  console.log(props)
  if (props.All === 0) {
    return (
      <div>
        <h2><font color='#057591'> <strong> Results of The Feedback </strong> </font></h2>
        <p> No Feedback Available </p>
      </div>
    )
  }

  return (
    <div>
      <h2><font color='#057591'> <strong> Results of The Feedback </strong> </font></h2>
      <p> <font color='#12C9C6'>  Good: {props.Good} </font></p>
      <p><font color='#12C9C6'>  Neutral: {props.Neutral} </font></p>
      <p><font color='#12C9C6'>  Bad: {props.Bad} </font></p>
      <p><font color='#12C9C6'>  Total: {props.All} </font></p>
      <p><font color='#12C9C6'>  Average: {props.Aver} </font></p>
      <p><font color='#12C9C6'>  Positive: {props.Pos}% </font></p>
    </div>
    
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allclicks, setAll] = useState (0)
  const [average, setPoints] = useState (0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allclicks + 1)
    setPoints(average +1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allclicks + 1)
    setPoints(average + 0)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allclicks + 1)
    setPoints(average - 1)
  }

  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Stats Good={good} Neutral={neutral} Bad={bad} All={allclicks} Aver={average/allclicks} Pos={good/allclicks*100}/>
    </div>
  )
}

export default App
