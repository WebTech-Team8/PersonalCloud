import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from '../../logo.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Header isLogged={false} />
        <Switch>
          <Route path="/" exact>
            <main className="site-main">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
            </main>
          </Route>
          <Route path="/login" exact>
            <main className='site-main'>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Login Page
              </p>
            </main>
          </Route>
          <Route path="/register" exact>
            <main className='site-main'>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Register Page
              </p>
            </main>
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;