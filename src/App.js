import './App.css';

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
    <div className='result'>
      <h2>You guessed three answers out of ten</h2>
      <button>Try again</button>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Game />
      {/* <Result /> */}
    </div>
  );
}

export default App;
