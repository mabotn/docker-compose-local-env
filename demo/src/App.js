import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    fetch('/api/random-quote')
      .then(res => res.json())
      .then(res => {
        setQuote(res.quote)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {quote}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
