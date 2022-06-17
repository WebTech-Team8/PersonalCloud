import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import userService from '../../services/user.service';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Logout from '../Logout/Logout';
import FolderDetails from "../FolderDetails/FolderDetails";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Notifications from '../Notifications/Notifications';
import CreateFolderModal from '../CreateFolderModal/CreateFolderModal';

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
          <Notifications />
          <CreateFolderModal />
          <Switch>
            <Route path="/" exact render={(props) => <Dashboard {...props} prerender={prerender} />} />
            <ProtectedRoute isLogged={!isLogged} redirectTo="/" path="/login" exact component={Login} />
            <ProtectedRoute isLogged={!isLogged} redirectTo="/" path="/register" exact component={Register} />
            <ProtectedRoute isLogged={isLogged} redirectTo="/login" path="/logout" exact component={Logout} />
            <ProtectedRoute isLogged={isLogged} redirectTo="/login" path="/folders/:id" exact component={FolderDetails} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;