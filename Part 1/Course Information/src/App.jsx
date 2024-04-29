const Header = (props) => {
  console.log(props)
  return (
  <div>
    <h1>
    <font color='#057591'>{props.course}</font>
    </h1>
  </div>
  )
}

const Body = (props) => {
  console.log(props)
  return (
    <div>
      <h2><font color='#057591'> <strong> Parts of the Course </strong> </font></h2>
      <p><font color='#12C9C6'>{props.name1}, Number of Exercises: {props.ex1} </font></p>
      <p><font color='#12C9C6'>{props.name2}, Number of Exercises: {props.ex2}</font></p>
      <p><font color='#12C9C6'>{props.name3}, Number of Exercises: {props.ex3}</font></p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <h2><font color='#057591'> <strong> Total Number of Exercises: {props.sum} </strong> </font></h2>
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
  
  const Fieldname = course.parts

  const Sum = (ex1, ex2, ex3) => {
    console.log(ex1)
    console.log(ex2)
    console.log(ex3)
    return ex1 + ex2 + ex3
  }

  return (
    <div>
      <Header course={course.name} />
      <Body name1={Fieldname[0].name} ex1={Fieldname[0].exercises} name2={Fieldname[1].name} ex2={Fieldname[1].exercises} name3={Fieldname[2].name} ex3={Fieldname[2].exercises}/>
      <Total sum={Sum(Fieldname[0].exercises, Fieldname[1].exercises, Fieldname[2].exercises)}/>
    </div>
  )
}

export default App
