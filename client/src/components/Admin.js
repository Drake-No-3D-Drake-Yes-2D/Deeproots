import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import Edit from './Edit'

import {md5} from '../static/md5.js'

class Admin extends React.Component {

  getPassword(event) {

    const hash = md5(this.refs.password.value);
    if (hash === "513a201b12ca39a64d7e23425f96c6b1") {
      this.props.setAuth(true);
      alert("Correct password");
      this.props.history.push('/Edit')
    } else {
      alert("Incorrect password");
    }
  }


  render() {
    return (
        <div className ="background-Unscaled">
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
