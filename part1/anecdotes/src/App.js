import { useState } from 'react'
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function Maximum(props) {
  let maxi = props[0]
  let j=0
  for (let i=0;i<props.length;i++){
    if ((props[i]) > maxi){
      maxi = props[i]
      j=i
    }
  }
  let score = [maxi,j]
  return score
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, increment] = useState(Array(anecdotes.length).fill(0))
  const [max, setmax] = useState(Array(2).fill(0))
  const Vote = () => {
    const copy  = [...points]
    copy[selected] += 1
    increment(copy)
    const maxi = Maximum(copy)
    setmax(maxi)
  } 
  const Newquote = () => {
    const selected = getRandomInt(anecdotes.length)
    setSelected(selected)
  }
  console.log(selected)
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>
      <button onClick={Vote}>
       Vote
      </button>
      <button onClick={Newquote} >
        New Quote
      </button>
      <h1>Anecdote with the Maximum Votes</h1>
      <p>{anecdotes[max[1]]}</p>
      <p>Has {max[0]} votes</p>
    </div>
  )
}

export default App