import "./NavBar.css"

export default function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "Nav-topnav") {
    x.className += " responsive";
  } else {
    x.className = "Nav-topnav";
  }
}