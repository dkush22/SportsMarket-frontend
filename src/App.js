import React, { Component } from 'react';
import AthleteContainer from './components/AthleteContainer.js'
import './App.css';
import {Route} from 'react-router-dom'
import Footer from'./components/Footer.js'
import Navbar from './components/Navbar.js'
import UsersContainer from './components/UsersContainer.js'
import CompareAthlete from './components/CompareAthlete.js'
import SiteMap from './components/SiteMap.js'
import Contacts from './components/Contacts.js'
import TermsAndConditions from './components/TermsAndConditions.js'
import PrivacyPolicy from './components/PrivacyPolicy.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import { loginUser, logoutUser, signUpUser } from './services/user.js'
import { Redirect } from 'react-router-dom'
import Welcome from './components/Welcome.js'
import { withRouter } from 'react-router'

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
          this.props.history.push('athletes')
      } else {window.alert('Login Failed')}})
  }

  signup = (signUpParams) => {
    signUpUser(signUpParams)
    .then((data)=> loginUser(data))
      .then((user) => {
        if (user.message !== "Invalid User") {
        localStorage.setItem("jwtToken", user.jwt)
        localStorage.setItem("user_id", user.user.id)
        this.props.history.push('athletes')
      } else {window.alert('Signup Failed! Username already exists!')}})
  }

  logout = () => {
     logoutUser()
  }




  render() {
    if (localStorage.getItem('jwtToken')) {
    return (
      <div className="App">
      <Route path='/' render={(props) => <Navbar onClick={this.logout}/> } />
      <Route exact path='/' render={() => <Welcome />}/>
      <Route path="/users/:id" render={(routeProps, props) => {
                   // const id = routeProps.match.params.id
                     return <UsersContainer {...props}  />
                 }} />
      <Route path="/athletes" render={(props) => <AthleteContainer {...props} /> }/>

      <Route path="/login" render={() => <Redirect to='/athletes'/>} />
      <Route exact path='/signup' render={() => <Redirect to='/athletes'/>} />
      <Route exact path="/compare" render={(props) => <CompareAthlete />} /> 
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
      <Route exact path='/' render={() => <Welcome />}/>
      <Route path="/users/" render={() =><Redirect to='/login'/>}/>
      <Route path="/athletes" render={(props) => <AthleteContainer {...props} /> }/>
      <Route path="/login" render={(props) => <Login onLogin={this.login} {...props} /> }/>
      <Route exact path='/signup' render={(props) => {return <Signup onSignUp={this.signup} {...props}/>}} />
      <Route exact path="/compare" render={(props) => <CompareAthlete />} /> 
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

export default withRouter(App)
