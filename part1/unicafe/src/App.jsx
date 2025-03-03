import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({onClick, label}) => <button onClick={onClick}>{label}</button>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  
  if (total > 0) {
    return (<>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>total {total}</p>
    <p>average {(good - bad) / total || 0}</p>
    <p>positive {good / total * 100 || 0}%</p>
    </>)
  }

  return <p>No feedback given</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
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