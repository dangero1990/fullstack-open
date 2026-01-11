import { useState } from 'react'

function Button ({ onClick, text }) {
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

function Stats ({ good, neutral, bad, all, averageArray, positive }) {
  function getAverage(arr) {
    return arr.reduce((sum, i) => sum + i, 0) / arr.length
  }

  return(
    <div>
      {all === 0 ? <p>No feedback given</p> :
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {getAverage(averageArray)}</p>
        <p>positive {positive * 100} %</p>
        </div>}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [averageArray, setAverageArray] = useState([])
  const [positive, setPositive] = useState(0)

  function goodFeedback() {
    setGood(prev => prev + 1) 
    setAll(prev => prev + 1)
    setAverageArray(prev => [...prev, 1])
    setPositive(() => (good + 1) / (all + 1))
  }

  function neutralFeedback() {
    setNeutral(prev => prev + 1) 
    setAll(prev => prev + 1)
    setAverageArray(prev => [...prev, 0])
    setPositive(() => (good) / (all + 1))
  }

  function badFeedback() {
    setBad(prev => prev + 1) 
    setAll(prev => prev + 1)
    setAverageArray(prev => [...prev, -1])
    setPositive(() => (good) / (all + 1))
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodFeedback} text="good"/>
      <Button onClick={neutralFeedback} text="neutral"/>
      <Button onClick={badFeedback} text="bad"/>
      <h1>statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} all={all} averageArray={averageArray} positive={positive} />
    </div>
  )
}

export default App
