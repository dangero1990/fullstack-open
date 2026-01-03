const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  function Header (props) {
    return (
      <h1>{props.course}</h1>
    )
  }

  function Part (props) {
    return (
      <>
        <p>{props.name}</p>
        <p>{props.excercise}</p>
        <p>{props.partNum}</p>
      </>
    )
  }

  function Content () {
    return (
      <>
        <Part name={part1} excercise={exercises1} partNum="Part 1" />
        <Part name={part2} excercise={exercises2} partNum="Part 2" />
        <Part name={part3} excercise={exercises3} partNum="Part 3" />
      </>  
    )
  }

  function Total (props) {
    return (
        <p>Number of excercises {props.excercise.reduce((prev, curr) => prev + curr, 0)}</p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total excercise={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App