// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', errMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errMsg: data.error_msg})
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="field-container">
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder="Username"
          onChange={this.onChangeUsername}
          value={username}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div className="field-container">
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
      </div>
    )
  }

  render() {
    const {errMsg} = this.state
    return (
      <div className="login-route-container">
        <div className="login-container">
          <img
            className="login-image"
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          />
          <form className="login-form" onSubmit={this.onSubmit}>
            <img
              className="website-logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            />
            <img
              className="login-image2"
              alt="website login"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            />
            <div className="login-details-container">
              {this.renderUsernameField()}
              {this.renderPasswordField()}
              <button type="submit" className="login-btn">
                Login
              </button>
              <p className="err-msg">{errMsg}</p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
