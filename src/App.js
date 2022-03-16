import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './page/HomePage';

import Navbar from './component/Navbar';
import Ressource from './page/Ressource';
import Sae from './page/Sae';
import Ue from './page/Ue';
import Mcc from './page/Mcc';
import LoginPage from './page/LoginPage';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/ressource" component={Ressource}/>
            <Route path="/sae" component={Sae}/>
            <Route path="/Ue" component={Ue}/>
            <Route path="/Mcc" component={Mcc}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
