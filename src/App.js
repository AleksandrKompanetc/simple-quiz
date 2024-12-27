import './App.css';

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
