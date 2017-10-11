import React, { Component } from 'react';
import logo from './logo.svg';
import AthleteContainer from './components/AthleteContainer.js'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from'./components/Footer.js'
import Navbar from './components/Navbar.js'

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
      <Route path="/athletes" render={(props) => <AthleteContainer {...props} /> }/>
      <Footer />
      </div>
    );
  }
}

export default App;
