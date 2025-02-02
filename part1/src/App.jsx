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
      <Part part={props.part1.name} exercise={props.part1.exercises} />
      <Part part={props.part2.name} exercise={props.part2.exercises} />
      <Part part={props.part3.name} exercise={props.part3.exercises} />

    </div>

  )
}

const Part = (props) => {
  return (
    <p>Course: {props.part} / Exercises: {props.exercise} </p>
  )
}
  
const Total = (props) => {
  return (
    <p>Number of execises: {props.totalExercises}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const totalExercises = part1.exercises + part2.exercises + part3.exercises
  return (
    <div>
      <Header course={course} />
      <Content part1={part1}  part2={part2}  part3={part3} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App