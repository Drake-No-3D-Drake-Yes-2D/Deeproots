import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import Edit from './Edit'

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false
    }
  }

  getPassword(event) {
    const password = this.refs.password.value;
    if (password === "password") {
      this.state.auth = true;
      if (this.state.auth) {
        alert("Correct password");
        this.props.history.push('/Edit')
      }
    } else {
      alert("Incorrect password");
    }
  }


  render() {
    return (
        <div>
          <center>
            <h2>Admin</h2>
                  <form onSubmit={this.getPassword.bind(this)}>
                      <label>
                          Password:
                          <input type="password" ref="password" />
                      </label>
                      <input type="submit" value="Submit" />
                  </form>
            </center>
          </div>
      );
    }
}



export default withRouter(Admin);
