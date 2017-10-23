import React from 'react'
import '../App.css';
import {NavLink} from 'react-router-dom'
// import footballMoney from '../footballmoney.jpg'
import rodgersDollar from '../rodgersDollar.jpg'
import Whitebackground from '../Dark_background.jpg'

const Navbar = (props) => {
      
if (localStorage.getItem('jwtToken')) {
  return(
    <div className="ui menu inverted blue">
      <div className="ui container">
      	<img src={rodgersDollar} className="App-logo" alt="logo" />
      	<img src={Whitebackground} className="App-logo" alt="logo" />
      	<img src={rodgersDollar} className="App-logo" alt="logo" />
        <NavLink className="item right" to={`/users/${localStorage.getItem('user_id')}`} exact activeStyle={{background: 'hotpink'}}>Profile</NavLink>
        <NavLink className="item" to="/athletes" exact activeStyle={{background: 'hotpink'}}>Athletes</NavLink>
        <NavLink onClick={props.onClick} className="item" to="/login" exact activeStyle={{background: 'hotpink'}}>Logout</NavLink>
      </div>
    </div>
  ) } else {
        return (
    <div className="ui menu inverted blue">
      <div className="ui container">
        <img src={rodgersDollar} className="App-logo" alt="logo" />
        <img src={Whitebackground} className="App-logo" alt="logo" />
        <img src={rodgersDollar} className="App-logo" alt="logo" />
        <NavLink className="item right" to={`/users/${localStorage.getItem('user_id')}`} exact activeStyle={{background: 'hotpink'}}>Profile</NavLink>
        <NavLink className="item" to="/athletes" exact activeStyle={{background: 'hotpink'}}>Athletes</NavLink>
        <NavLink className="item" to="/login" exact activeStyle={{background: 'hotpink'}}>Login</NavLink>
        <NavLink className="item" to="/signup" exact activeStyle={{background: 'hotpink'}}>Sign up</NavLink>
      </div>
    </div>
      )
      }
    
}

export default Navbar