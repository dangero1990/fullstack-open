const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [ 
    {
    name: 'Fundamentals of React',
    excercises: 10,
    },
    {
    name: 'Using props to pass data',
    excercises: 7,
    },
    {
    name: 'State of a component',
    excercises: 14,
    }
  ]
}

  function Header (props) {
    console.log(props)
    return (
      <h1>{props.course}</h1>
    )
  }

  function Part ({ name, excercises }) {
    return (
        <p>{name} {excercises}</p>
    )
  }

  function Content ({ parts }) {
    return (
      <div>
        <Part name={parts[0].name} excercises={parts[0].excercises} />
        <Part name={parts[1].name} excercises={parts[1].excercises} />
        <Part name={parts[2].name} excercises={parts[2].excercises} />
      </div>  
    )
  }

  function Total ({ parts }) {
    const excercisesList = parts.map(({excercises}) => excercises)

    return (
        <p>Number of excercises {excercisesList.reduce((prev, curr) => prev + curr, 0)}</p>
    )
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App