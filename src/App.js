import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.util'

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
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, ()=> console.log(this.state.currentUser))
        })
      }else{
        this.setState({currentUser: userAuth})
      }



    })
  }

  componentWillUnmount() {
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
