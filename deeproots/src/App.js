import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Logo.png';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className ="App-background">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <a>
                 <Link to="/Home">Home</Link>
                </a>
               <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
              <Link to="/about">About</Link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
              <Link to="/Workshops">Workshops</Link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
              <Link to="/CLC">Creative Life Coaching</Link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
              <Link to="/Ocourse">Online Courses</Link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
              <Link to="/Gallery">Gallery</Link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
              <Link to="/Demos">Demos</Link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
              <Link to="/Publications">Publications</Link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
              <Link to="/ContactsCollab">Contacts & Collab</Link>
              </a>
            </li>

            {/*<li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>*/}
            {/*<li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>*/}
          </ul>
          {/*<form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>*/}
        </div>
      </nav>


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
            <Ocourse />
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
            <ContactsCollab />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div className = "App-CenterText">
    <img src={logo} className="App-logo" alt="logo"/>; 
    <div className = "App-Title">
      DEEPROOTS {"\n"} Arts and Culture Creative LLC
    </div>
  </div>;
}

function About() {
  return <h2>About</h2>;
}

function Workshops() {
  return <h2>Workshops</h2>;
}

function CLC() {
  return <h2>Creative Life Coaching</h2>;
}

function Ocourse() {
  return <h2>Online Courses</h2>;
}

function Gallery() {
  return <h2>Gallery</h2>;
}

function Demos() {
  return <h2>Demonstrations </h2>;
}

function Publications()
{
  return <h2>Publications</h2>;
}

function ContactsCollab() {
  return <h2>Contacts and collabs</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

