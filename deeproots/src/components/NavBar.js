import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"
import dropDown from "./NavBarDropDown"


/*function myFunction = (x) => {
  if (x.className === "Nav-topnav") {
    x.className += " responsive";
  } else {
    x.className = "Nav-topnav";
  }
}*/

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }
}

export default function NavBar()
{
  return (
  <div class="Nav-topnav" id="myTopnav">
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

    <a href="javascript:void(0);" class="icon" onclick="dropDown()">
      <i class="fa fa-bars"></i>
    </a>

  </div>
  );
}

