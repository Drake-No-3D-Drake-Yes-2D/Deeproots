import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import NavBar from './NavBar'

import Home from './Home'
import About from './About'
import Workshops from './Workshops'
import CLC from './CLC'
import Ocourses from './Ocourses'
import Gallery from './Gallery'
import GalleryDisplay from './GalleryDisplay'
import Demos from './Demos'
import Publications from './Publications'
import Contacts from './Contacts'
import Collabs from './Collabs'

import Admin from './Admin'
import Edit from './Edit'

class RouteManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: this.getAuth()
    }

  }

  setAuth(val) {
    this.setState({
      auth: val
    })
    sessionStorage.setItem("auth", val);
  }

  getAuth() {
    return sessionStorage.getItem("auth")
  }


  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/Workshops">
              <Workshops />
            </Route>

            <Route path="/CLC">
              <CLC />
            </Route>

            <Route path="/OnlineCourses">
              <Ocourses />
            </Route>

            <Route path="/Gallery/:category">
              <GalleryDisplay />
            </Route>

            <Route path="/Gallery">
              <Gallery />
            </Route>

            <Route path="/Demos">
              <Demos />
            </Route>

            <Route path="/Publications">
              <Publications />
            </Route>

            <Route path="/Contacts">
              <Contacts />
            </Route>

            <Route path="/Collabs">
              <Collabs />
            </Route>

            <Route path="/admin">
              <Admin setAuth={this.setAuth.bind(this)} />
            </Route>

            <Route path="/Edit">
              <Edit isAuth={this.state.auth} />
            </Route>

            <Route path="/Home">
              <Home />
            </Route>

            <Redirect from="/" to="/Home" />


          </Switch>


        </div>
      </Router>
    )
  }
}

export default RouteManager;
