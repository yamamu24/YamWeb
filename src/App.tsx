import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AppIndex from './components/AppIndex/AppIndex';
import Calc from './components/Calc/Calc';
import UserList from './components/UserList/UserList';
import Login from './components/Login/Login';

function App() {
  const state = false;

  return state ? (
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
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
