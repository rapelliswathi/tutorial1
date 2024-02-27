import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordManagerList: [],
  }

  deletePassword = passwordId => {
    const {passwordManagerList} = this.state
    this.setState({
      passwordManagerList: passwordManagerList.filter(
        password => password.id !== passwordId,
      ),
    })
  }

  renderPasswordManagerList = () => {
    const {passwordManagerList} = this.state

    return passwordManagerList.map(eachPassword => (
      <PasswordItem
        key={eachPassword.id}
        passwordDetails={eachPassword}
        deletePassword={this.deletePassword}
      />
    ))
  }

  onAdd = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newPassword = {
      id: uuidv4,
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      passwordManagerList: [...prevState.passwordManagerList, newPassword],
      websiteInput: '',
      usernameInput: '',
      searchInput: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onChangeUsernameInput = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangeWebsiteInput = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  render() {
    const {websiteInput, usernameInput, passwordInput} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="passwordManager-container">
          <div className="password-container">
            <form className="form" onSubmit={this.onAdd}>
              <h1 className="heading">Add New Password</h1>
              <img
                className="website-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                className="website-input"
                placeholder="Enter Website"
                value={websiteInput}
                onChange={this.onChangeWebsiteInput}
              />
              <img
                className="username-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                className="username-input"
                placeholder="Enter Username"
                value={usernameInput}
                onChange={this.onChangeUsernameInput}
              />
              <img
                className="password-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="text"
                className="password-input"
                placeholder="Enter Password"
                value={passwordInput}
                onChange={this.onChangePasswordInput}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="list-container">
          <h1 className="password">
            Your Password{' '}
            <span className="count">
              {this.renderPasswordManagerList.length}
            </span>
          </h1>
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <hr className="line" />
          <ul className="password-list">{this.renderPasswordManagerList()}</ul>
        </div>
      </div>
    )
  }
}
export default PasswordManager
