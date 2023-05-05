const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Total = ({parts}) =>{
  const sum = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return(
    <div>
      <p>Total No. Of Excerises : {sum}</p>
    </div>
  ) 
}
const Content = ({text}) => {
  return (
    <div>
      <Part part = {text[0]}/>
      <Part part = {text[1]}/>
      <Part part = {text[2]}/>
    </div>
  )
}
const Part = ({part}) =>{
  return(
    <div>
      <p>{part.name}</p>
      <p>{part.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

    // const-definitions
  return (
      <div>
        <Header course={course.name} />
        <Content text={course.parts} />
        <Total parts = {course.parts}/>
      </div>
    )
  
}

export default App
