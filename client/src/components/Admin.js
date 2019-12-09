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
import DefaultPage from './generic/DefaultPage';

class Admin extends React.Component {

  // check password
  getPassword(event) {

    const hash = md5(this.refs.password.value);
    if (hash === "513a201b12ca39a64d7e23425f96c6b1") {
      this.props.setAuth(true);
      alert("Correct password");
      // redirect
      this.props.history.push('/Edit')
    } else {
      alert("Incorrect password");
    }
  }


  render() {
    return (
      <DefaultPage>
      <div className="contentHolder">
        <div className="chInnerBorder">
          <center>
            <h2 style={{color:"#654321"}}>Admin</h2>
                  <form onSubmit={this.getPassword.bind(this)}>
                      <label>
                          Password:
                          <input style={{padding:"3px 8px", border:"2px solid #00000069", fontSize:"15px", borderradius:"5px"}} type="password" placeholder="Enter password here" ref="password" />
                      </label>
                      <input style={{margin:"2em", padding:"3px 8px", border:"2px solid #00000069", borderradius:"5px"}} type="submit" value="Submit" />
                  </form>
            </center>
          </div>
        </div>
      </DefaultPage>
      );
    }
}



export default withRouter(Admin);
