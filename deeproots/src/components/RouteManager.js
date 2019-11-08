import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavBar from './NavBar'

import Home from './Home'
import About from './About'
import Workshops from './Workshops'
import CLC from './CLC'
import Ocourses from './Ocourses'
import Gallery from './Gallery'
import Demos from './Demos'
import Publications from './Publications'
import Contacts from './Contacts'
import Collabs from './Collabs'

import Admin from './Admin'

export default function RouteManager(){
	return ( 
  <Router>
      <div className ="App-background">
        <NavBar/>
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

          <Route path="/Ocourse">
            <Ocourses />
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
            <Contacts/>
          </Route>

          <Route path="/Collabs">
            <Collabs />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  )
} 