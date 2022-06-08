import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from '../../logo.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Register from '../Register/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Header isLogged={false} />
        <main className="site-main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Login Page
              </p>
            </Route>
            <Route path="/register" exact component={Register} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;