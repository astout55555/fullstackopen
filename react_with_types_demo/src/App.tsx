const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

interface HeaderProps {
  courseName: string,
}

const Header = (props: HeaderProps) => {
  return (
    <h1>{props.courseName}</h1>
  );
}

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDescribed extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends CoursePartDescribed {
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackground extends CoursePartDescribed {
  backgroundMaterial: string;
  kind: "background"
}

interface CoursePartSpecial extends CoursePartDescribed {
  requirements: string[],
  kind: 'special',
}

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;

interface PartProps {
  coursePart: CoursePart,
}

const Part = (props: PartProps) => {
  switch (props.coursePart.kind) {
    case 'basic':
      return (
        <p>
          <strong>{props.coursePart.name} {props.coursePart.exerciseCount}</strong>
          <br/>
          <em>{props.coursePart.description}</em>
        </p>
      );
      break;
    case 'group':
      return (
        <p>
          <strong>{props.coursePart.name} {props.coursePart.exerciseCount}</strong>
          <br/>
          project exercises {props.coursePart.groupProjectCount}
        </p>
      );
      break;
    case 'background':
      return (
        <p>
          <strong>{props.coursePart.name} {props.coursePart.exerciseCount}</strong>
          <br/>
          <em>{props.coursePart.description}</em>
          <br/>
          submit to {props.coursePart.backgroundMaterial}
        </p>
      );
      break;
    case 'special':
      return (
        <p>
          <strong>{props.coursePart.name} {props.coursePart.exerciseCount}</strong>
          <br/>
          <em>{props.coursePart.description}</em>
          <br/>
          required skills: {props.coursePart.requirements}
        </p>
      )
    default:
      return assertNever(props.coursePart);
  }
}

interface ContentProps {
  courseParts: CoursePart[],
}

const Content = (props: ContentProps) => {
  return (
    <>
      {props.courseParts.map(coursePart => {
        return (
          <Part coursePart={coursePart} />
        );
      })}
    </>
  );
}

interface TotalProps {
  totalExercises: number,
}

const Total = (props: TotalProps) => {
  return (
    <p>
      Number of exercises {props.totalExercises}
    </p>
  );
}

const App = () => {
  const courseName = "Half Stack application development";
  
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special"
    },
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total totalExercises={totalExercises} />
    </div>
  );
};

export default App;