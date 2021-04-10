import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AppIndex from './components/AppIndex/AppIndex';
import Calc from './components/Calc/Calc';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={AppIndex} />
          <Route path="/calc" component={Calc} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
