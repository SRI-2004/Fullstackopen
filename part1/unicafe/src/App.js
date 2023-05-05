import { useState } from 'react'
const Statistics = (props) => {
  const all = props.bad + props.neutral + props.good
  const average = (props.good - props.bad)/all
  const positive = (props.good/all)*100
  if (all > 0) {
    return (
    <table>
      <StatisticLine text ="Good    " value = {props.good} />
      <StatisticLine text ="Neutral " value = {props.neutral} />
      <StatisticLine text ="Bad     " value = {props.bad} />
      <StatisticLine text ="All     " value = {all} />
      <StatisticLine text ="Average " value = {average} />
      <StatisticLine text ="Positive" value = {positive} />
    </table> 
    )
  }  
  else{
    return(
      <div>
        <p>No Feedback Given</p>
      </div>
    )
  }  
}
const StatisticLine = (props) => {
  return(
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const OnclickGood = () => {
      setGood(good+1)
    }
  const OnclickNeutral = () => {
    setNeutral(neutral+1)
  }
  const OnclickBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <p>
      <button onClick={OnclickGood}>
        Good
      </button>
      <button onClick={OnclickNeutral} >
        Neutral
      </button>
      <button onClick={OnclickBad} >
        Bad
      </button>
      </p>
      <h1>statistics</h1>
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

export default App