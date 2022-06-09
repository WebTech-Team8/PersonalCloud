import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import userService from '../../services/user.service';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './App.css';

function App() {
  const isLogged = userService.isAuthenticated(); 

  return (
    <BrowserRouter>
      <div className="site">
        <Header isLogged={isLogged} />
        <main className="site-main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;