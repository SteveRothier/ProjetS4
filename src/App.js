import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './page/HomePage';

import Navbar from './component/Navbar';
import Ressource from './page/Ressource';
import Sae from './page/Sae';
import Ue from './page/Ue';
import Validation from './page/Validation';
import LoginPage from './page/LoginPage';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          
          <Switch>
            <Route path="/" exact component={LoginPage}/>
            <Route path="/ressource" component={Ressource}/>
            <Route path="/sae" component={Sae}/>
            <Route path="/Ue" component={Ue}/>
            <Route path="/validation" component={Validation}/>
            <Route path="/index" component={Home}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
