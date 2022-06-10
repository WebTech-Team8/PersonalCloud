import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import userService from '../../services/user.service';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Logout from '../Logout/Logout';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(userService.isAuthenticated());

  const prerender = () => {
    setIsLogged(userService.isAuthenticated());
  }

  return (
    <BrowserRouter>
      <div className="site">
        <Header isLogged={isLogged} />
        <main className="site-main">
          <Switch>
            <Route path="/" exact render={(props) => <Dashboard {...props} prerender={prerender} />} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/logout" exact component={Logout} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;