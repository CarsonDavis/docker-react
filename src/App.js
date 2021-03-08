import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sup fuckers</p>
        <a
          className="App-link"
          href="https://github.com/CarsonDavis/docker-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          read the code
        </a>
      </header>
    </div>
  );
}

export default App;
