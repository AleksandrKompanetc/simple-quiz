import React, {useState} from 'react';
import './App.css';

const questions = [
  {
    title: 'React - it is ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'Component - it is ... ?',
    variants: ['application', 'path of the application', 'function'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: ['programming language', 'function', 'language extension'],
    correct: 2,
  },
  {
    title: 'What is JavaScript?',
    variants: ['tag', 'framework', 'programming language'],
    correct: 2,
  }
]

function Game({step, question, onClickVariant}) {
  const percentage = Math.round((step/questions.length) * 100)
  return (
    <div className='game-container'>
      <div className='progress'>
        <div style={{ width: `${percentage}%` }} className='progress-bar'></div>
      </div>
      <h1 className='game-header'>{question.title}</h1>
      <ul className='game-list'>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
        ) )}
      </ul>
    </div>
  )
}

function Result() {
  return (
    <div className='result-container'>
      <img src="./congrat.png" alt="" />
      <h2 className='result-header'>You guessed three answers out of ten</h2>
      <button className='result-button'>Try again</button>
    </div>
  )
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1)
  }

  return (
    <div className="app">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result />
      )} 
      {/* <Game step={step} question={question} onClickVariant={onClickVariant} /> */}
      {/* <Result /> */}
    </div>
  );
}

export default App;
