import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { auth } from './firebase/firebase.util'

import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/shop'
import Header from './components/header/header';
import Auth from './pages/auth/signin-signup'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }

  //Open subscription
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    //Close subscription
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/auth' component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
