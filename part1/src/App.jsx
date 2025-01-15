const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Course: {props.parts[0]} / Exercises: {props.exercises[0]}</p>
      <p>Course: {props.parts[1]} / Exercises: {props.exercises[1]}</p>
      <p>Course: {props.parts[2]} / Exercises: {props.exercises[2]}</p>
    </div>

  )
}

const Total = (props) => {
  return (
    <p>Number of exercises: {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React','Using props to pass data' ,'State of a component' ]
  const exercises = [10,7,14]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App