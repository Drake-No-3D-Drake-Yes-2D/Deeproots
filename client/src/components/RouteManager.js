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
import Demos from './Demos'
import Publications from './Publications'
import Contacts from './Contacts'
import Collabs from './Collabs'

import Admin from './Admin'
import Edit from './Edit'


const workshopSampleData = [
  { id: 1, price: 10, title: "Cork & Crate", date: "Wednesday, Nov 14", image: "workshopwide.png" },
  { id: 2, price: 11, title: "Crok & Creat", date: "Thursday, Nov 15", image: "workshopwide.png" },
  { id: 3, price: 12, title: "Corke & Crart", date: "Friday, Nov 16", image: "workshopwide.png" },
  { id: 4, price: 14, title: "Corek & Kreat", date: "Saturday, Nov 17", image: "workshopwide.png" }
];


export default function RouteManager() {
  return (
    <Router>
      <div className="App-background">
        <NavBar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/Workshops">
            <Workshops workshops={workshopSampleData} />
          </Route>

          <Route path="/CLC">
            <CLC />
          </Route>

          <Route path="/OnlineCourses">
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
            <Contacts />
          </Route>

          <Route path="/Collabs">
            <Collabs />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/Edit">
            <Edit />
          </Route>

          <Route path="/">
            <Home />
          </Route>


        </Switch>
      </div>
    </Router>
  )
}
