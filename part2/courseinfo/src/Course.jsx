const Course = ({course}) => {
  const Header = ({name}) => {
    return <h1>{name}</h1>
  }

  const Part = ({ part }) => {
    return <p>{part.name} {part.exercises}</p>
  }

  const Content = ({ parts }) => {
    return parts.map((part) => {
    return <Part part={part} key={part.id} />
    })
  }

  const Total = ({ parts }) => {
    const sum = parts.reduce((acc, part) => acc + part.exercises, 0)
    return <strong>total of {sum} exercises</strong>
  }

  return (
    <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

export default Course;