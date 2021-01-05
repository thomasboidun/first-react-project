import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/home';
import SignInHook from './pages/sign-in/sign-in';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="App-navList">
              <li className="App-navItem">
                <img src={logo} className="App-logo" alt="logo" />
              </li>
              <li className="App-navItem">
                <Link to="/sign-in" className="App-link">Sign In</Link>
              </li>
              <li className="App-navItem">
                <Link to="/" className="App-link">Home</Link>
              </li>
              <li className="App-navItem">
                <Link to="/cart" className="App-link">Cart</Link>
              </li>
              <li className="App-navItem">
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  Learn React
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home"  render={props => (<HomePage {...props} />)} />
            <Route path="/sign-in" render={props => (<SignInHook {...props} />)} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
