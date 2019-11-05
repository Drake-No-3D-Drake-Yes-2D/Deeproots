import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar()
{
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    	<div class="collapse navbar-collapse" id="navbarSupportedContent">
    	  <ul class="navbar-nav mr-auto">
    	    <li class="nav-item active">
    	       <Link to="/Home" class="nav-link">Home</Link>
    	       <span class="sr-only">(current)</span>
    	    </li>

    	    <li class="nav-item">
    	      <Link to="/about" class="nav-link">About</Link>
    	    </li>

    	    <li class="nav-item">
    	      <Link to="/Workshops" class="nav-link">Workshops</Link>
    	    </li>

    	    <li class="nav-item">
    	      <Link to="/CLC" class="nav-link">Creative Life Coaching</Link>
    	    </li>

    	    <li class="nav-item">
    	      <Link to="/Ocourse" class="nav-link">Online Courses</Link>
    	    </li>

    	    <li class="nav-item">
    	      <Link to="/Gallery" class="nav-link">Gallery</Link>
    	    </li>

    	    <li class="nav-item">
    	      <Link to="/Demos" class="nav-link">Demos</Link>
    	    </li>

    	    <li class="nav-item">
    	      <Link to="/Publications" class="nav-link">Publications</Link>
    	    </li>

    	    <li class="nav-item">
    	      <Link to="/ContactsCollab" class="nav-link">Contacts & Collab</Link>
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
  )
}