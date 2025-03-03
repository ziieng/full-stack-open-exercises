import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({onClick, label}) => <button onClick={onClick}>{label}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [stats, setStats] = useState({
    total: 0,
    average: 0,
    positive: 0
  })

  const handleGoodClick = () => {
    const newGood = good + 1
    const newTotal = newGood + neutral + bad
    setGood(newGood)
    setStats({
      total: newTotal,
      average: (newGood - bad) / newTotal,
      positive: newGood / newTotal * 100
    })
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    const newTotal = good + newNeutral + bad
    setNeutral(newNeutral)
    setStats({
      total: newTotal,
      average: (good - bad) / newTotal,
      positive: good / newTotal * 100
    })
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    const newTotal = newBad + good + neutral
    setBad(newBad)
    setStats({
      total: newTotal,
      average: (good - newBad) / newTotal,
      positive: good / newTotal * 100
    })
  }

  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={handleGoodClick} label="good" />
      <Button onClick={handleNeutralClick} label="neutral" />
      <Button onClick={handleBadClick} label="bad" />
      <Title text="statistics" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {stats.total}</p>
      <p>average {stats.average}</p>
      <p>positive {stats.positive}%</p>
    </div>
  )
}

export default App