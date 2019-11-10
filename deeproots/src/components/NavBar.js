import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css'



class NavBar extends React.Component{

constructor(props){
  super(props);
  this.state = {toggled: true};
}


render() {
  return (
  <div className={this.state.toggled? "Nav-topnav" : "Nav-topnav responsive"} id="myTopnav">
    <a href="/Home" class="active">Home</a>
    <a href="/about">About</a>
    <a href="/Workshops">Workshops</a>
    <a href="/CLC">Creative Life Coaching</a>
    <a href="/Ocourse">Online Courses</a>
    <a href="/Gallery">Gallery</a>
    <a href="/Demos">Demos</a>
    <a href="/Publications">Publications</a>
    <a href="/Contacts">Contacts</a>
    <a href="/Collabs">Collabs</a>

    <a className="icon" onClick={() => {
      this.setState({toggled: !this.state.toggled});
      console.log("RUN~");
    }}>
      <i class="fa fa-bars"></i>
    </a>

  </div>
  );
  }
}

export default NavBar;