const Course = ({course}) => {
  return (
    <>
      <Header name={course.name}/>
      <Content course={course}/>
      <Total parts={course.parts}/>
    </>
  );
}

const Header = ({name}) => {
  return (
    <h2>{name}</h2>
  );
}

const Content = ({course}) => {
  let parts = course.parts;
  return (
    <ul>
      {parts.map(part => {
        return (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        );
      })}
    </ul>
  );
}

const Total = ({parts}) => {
  let totalExercises = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return (
    <p><strong>
      total of {totalExercises} exercises
    </strong></p>
  );
}

export default Course;