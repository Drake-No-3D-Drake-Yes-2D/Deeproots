import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { toggled: true };
  }

  render() {
    return (
      <div className={this.state.toggled ? "Nav-topnav" : "Nav-topnav responsive"} id="myTopnav">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Workshops">Workshops</NavLink>
        <NavLink to="/CLC">CLC</NavLink>
        <NavLink to="/OnlineCourses">Online Courses</NavLink>
        <NavLink to="/Gallery">Gallery</NavLink>
        <NavLink to="/Demos">Demos</NavLink>
        <NavLink to="/Publications">Publications</NavLink>
        <NavLink to="/Contacts">Contacts</NavLink>
        <NavLink to="/Collabs">Collabs</NavLink>

        <a className="icon" onClick={() => {
          this.setState({ toggled: !this.state.toggled });
        }}>
          <i class="fa fa-bars"></i>
        </a>

      </div>
    );
  }
}

export default NavBar;