import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'


import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/shop'
import Header from './components/header/header';


function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>

    </div>
  );
}

export default App;
