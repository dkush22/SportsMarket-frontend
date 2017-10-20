import React from 'react'


class Signup extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      username: '',
      password: '',
      confirmedPassword: ''
    }
  }


  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

   handlePassword = (event) => {
     this.setState({
      password: event.target.value
    })
  }

   handleConfirmPassword = (event) => {
     this.setState({
      confirmedPassword: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.password === this.state.confirmedPassword) {
    const signUpParams = {username: this.state.username, password: this.state.password}
    this.props.onSignUp(signUpParams)
    this.setState({
      username: '',
      password: '',
      confirmedPassword: ''
    }) 
  } else {alert("Invalid Signup. Passwords Don't Match")
      this.setState({
        password: '',
        confirmedPassword: ''
      })}
  }

  render() {
  return(
    <div className="ui container">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui green image header">
            <div className="content">
              Create a New Account
            </div>
          </h2>
          <form onSubmit={this.handleSubmit} className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <input onChange={this.handleUsername} type="text" name="username" placeholder="Username" value={this.state.username}/>
              </div>
              <div className="field">
                <input onChange={this.handlePassword} type="password" name="password" placeholder="Password" value={this.state.password}/>
              </div>
              <div className="field">
                <input onChange={this.handleConfirmPassword} type="password" name="confirm password" placeholder="Confirm Password" value={this.state.confirmedPassword}/>
              </div>
              <input className="ui fluid large green submit button" type="submit" value="Sign Up"/>
            </div>
          </form>
          <div className="ui message">Existing User?
            <a href="/login"> Log In</a>
          </div>
        </div>
      </div>
    </div>
    )
    }
  }
export default Signup