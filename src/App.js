import './App.css';

function Game() {
  return (
    <>
    <div className='progress'></div>
    <h1>What is useState?</h1>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    </>
  )
}

function Result() {
  return (
    <div className='result'>
      <h2>You guessed three answers out of ten</h2>
      <button>Try again</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Game />
      <Result />
    </div>
  );
}

export default App;
