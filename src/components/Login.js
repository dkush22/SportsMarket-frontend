import React from 'react'
// import { loginUser } from '../services/user.js'
// import { Redirect } from 'react-router-dom'


class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

handleSubmit = (event) => {

    event.preventDefault()

    const loginParams = { username: this.state.username, password: this.state.password}
    this.props.onLogin(loginParams)
    this.setState({
      username: "",
      password: ""
    })
}

handleUsernameChange = (event) => {
  this.setState({
    username: event.target.value
  })

}

handlePasswordChange = (event) => {
  this.setState({
    password: event.target.value
  })
}

  render() {
      return(
    <div className="ui container">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui light green image header">
            <div className="content">
              Log Into Your Account
            </div>
          </h2>
          <form onSubmit={this.handleSubmit} className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <input type="text" name="username" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username}/>
              </div>
              <div className="field">
                <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
              </div>
              <input className="ui fluid large light green submit button" type="submit" value="Log In"/>
            </div>
          </form>
          <div className="ui message">New User?
            <a href="/signup"> Sign up</a>
          </div>
        </div>
      </div>
    </div>
    )
  
  }
  }
export default Login
