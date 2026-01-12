import { useState } from 'react'

function Button ({ onClick, text }) {
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

function AnecdoteGenerator ({ selected, anecdotes }) {

  return (
    <div>
      <p>{anecdotes[selected].anecdote}</p>
      <p>has {anecdotes[selected].votes} votes</p>
    </div>
  )
}

function StatLine ({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function Stats ({ good, neutral, bad, all, averageArray, positive }) {

  function getAverage(arr) {
    return arr.reduce((sum, i) => sum + i, 0) / arr.length
  }

  return(
    <div>
      {all === 0 ? <p>No feedback given</p> :
      <table>
        <tbody>
          <StatLine text="good" value={good} />
          <StatLine text="neutral" value={neutral} />
          <StatLine text="bad" value={bad} />
          <StatLine text="all" value={all} />
          <StatLine text="average" value={getAverage(averageArray)} />
          <StatLine text="positive" value={positive * 100} />
        </tbody>
        </table>}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [averageArray, setAverageArray] = useState([])
  const [positive, setPositive] = useState(0)
  const [anecdotes, setAnecdotes] = useState([
    {anecdote: 'If it hurts, do it more often.', votes: 0},
    {anecdote: 'Adding manpower to a late software project makes it later!', votes: 0},
    {anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
    {anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
    {anecdote: 'Premature optimization is the root of all evil.', votes: 0},
    {anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0},
    {anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0},
    {anecdote: 'The only way to go fast, is to go well.', votes: 0}
  ])
  const [selected, setSelected] = useState(0)

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

  function voteAnecdote() {
    const newAnecdotes = [...anecdotes]
    newAnecdotes[selected].votes += 1
    setAnecdotes(newAnecdotes)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodFeedback} text="good"/>
      <Button onClick={neutralFeedback} text="neutral"/>
      <Button onClick={badFeedback} text="bad"/>
      <h1>statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} all={all} averageArray={averageArray} positive={positive} />
      <h1>Anecdote of the day</h1>
      <AnecdoteGenerator selected={selected} anecdotes={anecdotes} />
      <Button onClick={voteAnecdote} text="vote" />
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <AnecdoteGenerator selected={anecdotes.indexOf(anecdotes.reduce((max, anecdote) => anecdote.votes > max.votes ? anecdote : max, anecdotes[0]))} anecdotes={anecdotes} />
    </div>
  )
}

export default App
