import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AppIndex from './components/AppIndex/AppIndex';
import Calc from './components/Calc/Calc';
import UserList from './components/UserList/UserList';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

type user = {
  userid: number
  name: string
  email: string
  password: string
  picture: string
}

function App() {
  const [user, setUser] = useState<user>();

  const handleLogin = (userData: user) => {
    setUser(userData);
  }

  return user ? (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={AppIndex} />
          <Route path="/calc" component={Calc} />
          <Route path="/userlist" component={UserList} />
        </Switch>
      </BrowserRouter>
    </div>
  ) : (
    <div className="App">
      <BrowserRouter>
        <Redirect to={"/login"} />

        <Switch>
          <Route path="/login" render={props => (<Login { ...props } handleLogin={handleLogin} />)} />
          <Route path="/signup" render={props => (<SignUp { ...props } handleLogin={handleLogin} />)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;