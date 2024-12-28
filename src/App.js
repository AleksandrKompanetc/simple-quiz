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

function Game() {
  return (
    <div className='game-container'>
      <div className='progress'>
        <div style={{ width: '50%' }} className='progress-bar'></div>
      </div>
      <h1 className='game-header'>What is useState?</h1>
      <ul className='game-list'>
        <li>This is a function for storing data</li>
        <li>This is a global state</li>
        <li>This is something from React</li>
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
  return (
    <div className="app">
      {/* <Game /> */}
      <Result />
    </div>
  );
}

export default App;
