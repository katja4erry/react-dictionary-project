import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />{" "}
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Ekateryna Myhalchenko and is{" "}
            <a
              href="https://github.com/katja4erry/react-dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
