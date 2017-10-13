import React, { Component } from 'react';
import logo from './logo.svg';
import AthleteContainer from './components/AthleteContainer.js'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from'./components/Footer.js'
import Navbar from './components/Navbar.js'
import UsersContainer from './components/UsersContainer.js'
import SiteMap from './components/SiteMap.js'
import Contacts from './components/Contacts.js'
import TermsAndConditions from './components/TermsAndConditions.js'
import PrivacyPolicy from './components/PrivacyPolicy.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import { loginUser, logoutUser, signUpUser } from './services/user.js'
import { Redirect } from 'react-router-dom'

class App extends Component {

  // state = {
  //   users: [],
  //   nflAthletes: [],
  //   isLogginIn: false,
  //   currentUser: {}
  // }

  //  componentDidMount(){
  //   this.fetchUsers()
  //   this.fetchNFLAthletes()
  // }

  //  fetchUsers = () => {
  //   fetch("http://localhost:3000/users")
  //   .then(res => res.json())
  //   .then(users => this.setState({users}))
  // }

  //   fetchNFLAthletes = () => {
  //   fetch("http://localhost:3000/nfl_athletes")
  //   .then(res => res.json())
  //   .then(nflAthletes => this.setState({nflAthletes}))
  // }

  login = (loginParams) => {
    loginUser(loginParams)
      .then((user) => {
        if (user.message !== "Invalid User") {
        localStorage.setItem("jwtToken", user.jwt)
        localStorage.setItem("user_id", user.user.id)
      }})
  }

  signup = (signUpParams) => {
    signUpUser(signUpParams)
    .then((data)=> loginUser(data))
      .then((user) => {
        if (user.message !== "Invalid User") {
        localStorage.setItem("jwtToken", user.jwt)
        localStorage.setItem("user_id", user.user.id)
      }})
  }

  logout = () => {
    console.log("hello")
     logoutUser()
  }




  render() {
    if (localStorage.getItem('jwtToken')) {
    return (
      <div className="App">
      <Route path='/' render={(props) => <Navbar onClick={this.logout}/> } />
      <Route path="/users/:id" render={(routeProps, props) => {
                   const id = routeProps.match.params.id
                     return <UsersContainer {...props}  />
                 }} />
      <Route path="/athletes" render={(props) => <AthleteContainer {...props} /> }/>
      <Route path="/login" render={() => <Redirect to='/home'/>} />
      <Route exact path='/signup' render={() => <Redirect to='/home'/>} />
      <Route exact path="/sitemap" render={(props) => <SiteMap />} /> 
      <Route exact path="/contact" render={(props) => <Contacts />} /> 
      <Route exact path="/termsandconditions" render={(props) => <TermsAndConditions />} /> 
      <Route exact path="/privacy" render={(props) => <PrivacyPolicy />} /> 
      <Footer />
      </div>
    )} else {
      return (
      <div className="App">
      <Route path='/' render={(props) => <Navbar onClick={this.logout}/> } />
      <Route path="/users/" render={() =><Redirect to='/login'/>}/>
      <Route path="/athletes" render={(props) => <AthleteContainer {...props} /> }/>
      <Route path="/login" render={(props) => <Login onLogin={this.login} {...props} /> }/>
      <Route exact path='/signup' render={(props) => {return <Signup onSignUp={this.signup} {...props}/>}} />
      <Route exact path="/sitemap" render={(props) => <SiteMap />} /> 
      <Route exact path="/contact" render={(props) => <Contacts />} /> 
      <Route exact path="/termsandconditions" render={(props) => <TermsAndConditions />} /> 
      <Route exact path="/privacy" render={(props) => <PrivacyPolicy />} /> 
      <Footer />
      </div>
    )
    }
  }
}

export default App;
