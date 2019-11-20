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

const workshopSampleData = [
  { id: 1, seats: 10, prices: [{ price: 10, title: "low price" }, { price: 10, title: "mid price" }, { price: 10, title: "high price" }], title: "Cork & Crate!", date: new Date('2019-12-17'), location: "todo", description: "todo", image: "workshopwide.png" },
  { id: 2, seats: 10, prices: [{ price: 10, title: "low price" }, { price: 10, title: "mid price" }, { price: 10, title: "high price" }], title: "Crok & Creat!", date: new Date('2019-12-18'), location: "todo", description: "todo", image: "workshopwide.png" },
  { id: 3, seats: 10, prices: [{ price: 10, title: "low price" }, { price: 10, title: "mid price" }, { price: 10, title: "high price" }], title: "Corke & Crart", date: new Date('2019-12-19'), location: "todo", description: "todo", image: "workshopwide.png" },
  { id: 4, seats: 10, prices: [{ price: 10, title: "low price" }, { price: 10, title: "mid price" }, { price: 10, title: "high price" }], title: "Corek & Kreat", date: new Date('2019-12-20'), location: "todo", description: "todo", image: "workshopwide.png" }
];

const gallerySampleData = [
  { id: 1, title: "art!", artist: "artist", description: "link?", prices: [{ price: 1, title: "12x6", quantity: 1 }, { price: 2, title: "12x8", quantity: Infinity }] },
  { id: 2, title: "art!", artist: "artist", description: "link?", prices: [{ price: 1, title: "12x6", quantity: 0 }, { price: 2, title: "12x8", quantity: Infinity }] },
  { id: 3, title: "art!", artist: "artist", description: "link?", prices: [{ price: 1, title: "12x6", quantity: 3 }, { price: 2, title: "12x8", quantity: Infinity }] },
  { id: 4, title: "art!", artist: "artist", description: "link?", prices: [{ price: 1, title: "12x6", quantity: 2 }, { price: 2, title: "12x8", quantity: Infinity }] }
];

export default function RouteManager() {
  return (
    <Router>
      <div className="App-background">
        <NavBar />
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
            <Gallery art={gallerySampleData} />
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

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  )
} 