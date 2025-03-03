import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({onClick, label}) => <button onClick={onClick}>{label}</button>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  
  return (<>
  <p>good {good}</p>
  <p>neutral {neutral}</p>
  <p>bad {bad}</p>
  <p>total {total}</p>
  <p>average {(good - bad) / total || 0}</p>
  <p>positive {good / total * 100 || 0}%</p>
  </>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={handleGoodClick} label="good" />
      <Button onClick={handleNeutralClick} label="neutral" />
      <Button onClick={handleBadClick} label="bad" />
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App