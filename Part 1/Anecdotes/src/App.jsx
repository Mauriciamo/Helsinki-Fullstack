import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h1>
      <font color='#057591'> Some Wonderful Anecdotes </font>
      </h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdotes = (props) => {
  console.log(props)
  return (
    <div>
      <h2><strong> {props.note} </strong></h2>
      <p><strong> This has {props.votesnum} votes</strong></p>
    </div>
  )
}

const HighVote = (props) => {
  console.log(props)
  return (
    <div>
      <h2><strong> Most Voted Anecdote </strong></h2>
      <p><strong> {props.highest} </strong></p>
      <p><strong> This Anecdote Has: {props.votenum} {props.plurals} </strong></p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const n = anecdotes.length
  const tally = Array(n).fill(0)
  
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(tally)
  const [maxIndex, setMaxIndex] = useState(0)

  const ranGenerator = () => {
    return Math.floor(Math.random(selected) * anecdotes.length)
  }

  const generate = () => {
    setSelected(ranGenerator)
  }

  const voted = () => {
    const copyarr = [...votes]
    copyarr[selected] += 1
    setVote(copyarr)
    setMaxIndex(copyarr.indexOf(Math.max(...copyarr)))
  }

  const plural = (count, text) => {
    if (count >= 2) {
      return text + 's';
    }
    return text
  }

  return (
    <div>
      <Header />
      <Anecdotes note={anecdotes[selected]} votesnum={votes[selected]}/>
      <Button handleClick={generate} text='Generate Anecdote' />
      <Button handleClick={voted} text='Vote' />
      <HighVote highest={anecdotes[maxIndex]} votenum={votes[maxIndex]} plurals={plural(votes[maxIndex], 'vote')}/>
    </div>
  )
}

export default App
