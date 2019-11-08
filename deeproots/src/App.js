import React from 'react';
<<<<<<< HEAD
=======
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> origin/master
import './App.css';
import RouteManager from './components/RouteManager'

const workshopSampleData = [
  { id: 1, price: 10, title: "Cork & Crate", date: "Wednesday, Nov 14", image: "workshopwide.png" },
  { id: 2, price: 11, title: "Crok & Creat", date: "Thursday, Nov 15", image: "workshopwide.png" },
  { id: 3, price: 12, title: "Corke & Crart", date: "Friday, Nov 16", image: "workshopwide.png" },
  { id: 4, price: 14, title: "Corek & Kreat", date: "Saturday, Nov 17", image: "workshopwide.png" }
];

export default function App() {
  return (
<<<<<<< HEAD
    <RouteManager/>
=======
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
          <Route path="/Ocourses">
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
          <Route path="/ContactsCollab">
            <ContactsCollabs />
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
>>>>>>> origin/master
  );
}
