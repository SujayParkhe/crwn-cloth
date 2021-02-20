import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage.jsx';
import ShopPage from './pages/ShopPage/ShopPage.jsx';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.jsx';
import Header from './components/Header/Header.jsx';
import { auth } from './Firebase/FirebaseUtils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
