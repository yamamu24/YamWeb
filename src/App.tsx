import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AppIndex from './components/AppIndex/AppIndex';
import Calc from './components/Calc/Calc';
import UserList from './components/UserList/UserList';

function App() {
  return (
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
  );
}
export default App;
