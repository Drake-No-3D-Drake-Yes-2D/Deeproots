import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar()
{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
    	  <ul className="navbar-nav mr-auto">
    	    <li className="nav-item active">
    	       <Link to="/Home" className="nav-link">Home</Link>
    	       <span className="sr-only">(current)</span>
    	    </li>

    	    <li className="nav-item">
    	      <Link to="/about" className="nav-link">About</Link>
    	    </li>

    	    <li className="nav-item">
    	      <Link to="/Workshops" className="nav-link">Workshops</Link>
    	    </li>

    	    <li className="nav-item">
    	      <Link to="/CLC" className="nav-link">Creative Life Coaching</Link>
    	    </li>

    	    <li className="nav-item">
    	      <Link to="/Ocourses" className="nav-link">Online Courses</Link>
    	    </li>

    	    <li className="nav-item">
    	      <Link to="/Gallery" className="nav-link">Gallery</Link>
    	    </li>

    	    <li className="nav-item">
    	      <Link to="/Demos" className="nav-link">Demos</Link>
    	    </li>

    	    <li className="nav-item">
    	      <Link to="/Publications" className="nav-link">Publications</Link>
    	    </li>

    	    <li className="nav-item">
    	      <Link to="/ContactsCollab" className="nav-link">Contacts & Collab</Link>
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