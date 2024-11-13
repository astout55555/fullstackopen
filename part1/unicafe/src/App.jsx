import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  );
}

const Statistics = ({good, neutral, bad}) => {
  const getTotal = () => {
    return good + neutral + bad;
  }

  const getAverage = () => {
    return (good - bad) / getTotal();
  }

  const getPositivePercentage = () => {
    const percentage = good / getTotal() * 100;
    return `${percentage}%`;
  }

  if (getTotal() === 0) {
    return (
      <div>Statistics will be displayed once feedback is given.</div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text='good' value={good}/>
            <StatisticsLine text='neutral' value={neutral}/>
            <StatisticsLine text='bad' value={bad}/>
            <StatisticsLine text='all' value={getTotal()}/>
            <StatisticsLine text='average' value={getAverage()}/>
            <StatisticsLine text='positive' value={getPositivePercentage()}/>
          </tbody>
        </table>
      </div>
    );  
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (feedback) => {
    console.log(feedback);
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
    }
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button text='good' handleClick={() => handleClick('good')}/>
        <Button text='neutral' handleClick={() => handleClick('neutral')}/>
        <Button text='bad' handleClick={() => handleClick('bad')}/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App