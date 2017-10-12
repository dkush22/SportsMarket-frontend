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





  render() {
    return (
      <div className="App">
      <Navbar/>
      <Route path="/users/:id" render={(routeProps, props) => {
                   const id = routeProps.match.params.id
                     return <UsersContainer {...props}  />
                 }} />
      <Route path="/athletes" render={(props) => <AthleteContainer {...props} /> }/>
      <Route exact path="/sitemap" render={(props) => <SiteMap />} /> 
      <Route exact path="/contact" render={(props) => <Contacts />} /> 
      <Route exact path="/termsandconditions" render={(props) => <TermsAndConditions />} /> 
      <Route exact path="/privacy" render={(props) => <PrivacyPolicy />} /> 
      <Footer />
      </div>
    );
  }
}

export default App;
