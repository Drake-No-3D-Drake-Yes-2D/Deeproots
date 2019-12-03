import React from 'react';
import './General.css';
import { NavLink } from 'react-router-dom';

import api from '../api';
import ReactMarkdown from 'react-markdown';
const http = require('http');

var pages = ['about', 'workshops', 'clc', 'ocourses', 'gallery', 'demos', 'publications', 'contacts', 'collabs']


class Edit extends React.Component {

  async setContent(page) {
    const contents = (await api.get(`content/${page}`));
    this.setState({
      content: contents
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      edit: 0,
      content: '',
      post: false
    }
  }


  setEdit(val) {
    this.setState({
      edit: val
    })
  }

  setContent(val) {
    this.setState({
      content: val
    })
  }

  setPost(val) {
    this.setState({
      post: val
    })
  }



  handleClick(event) {
    const buttonID = event.target.getAttribute("id");
    this.setEdit(buttonID);
  }

  async handleGallerySubmit(event) {
    event.preventDefault()
    const data = this.refs
    var art = {
      title: data.artTitle.value,
      artist: data.artist.value,
      image_url: data.img.value,
      has_original: data.orig.checked,
      active: true
    }
    var resp = await api.post('gallery/'+data.artCat.value+'/art', art)
    let artId = resp.data._id
    var prices = data.prices.value.split("\n")
    prices.forEach(element => {
      var priceOption = element.split(",")
      if (priceOption[0] === "Original") {
        priceOption[2] = true;
      } else {
        priceOption[2] = false
      }
      var price = {
        title: priceOption[0],
        price: priceOption[1],
        active: true,
        original: priceOption[2]
      }
      api.post('art/'+artId+'/prices', price)
    })
    alert("Art created")
  }

  handleCoursesSubmit() {
    if (this.refs.nameAdd.value !== '') {
      if (this.refs.link.value === '') {
        alert("Missing course link")
      } else {
        alert("Added course \""+this.refs.nameAdd.value + "\"")
      }
    } else if (this.refs.nameRem.value !== '' ){
      alert("Removed course  \""+this.refs.nameRem.value + "\"")
    } else {
      alert("All required fields must be nonempty")
    }
  }

  async handleWorkshopsSubmit(event) {
    event.preventDefault()
    const data = this.refs
    var workshop = {
      title: data.title.value,
      description: data.description.value,
      location: data.loc.value,
      date: new Date(data.date.value),
      image_url: data.img.value,
      seats: data.seats.value,
      active: true
    }
    var resp = await api.post('workshop', workshop)
    let workshopId = resp.data._id;
    var prices = data.prices.value.split("\n")
    prices.forEach(element => {
      var priceOption = element.split(",")
      var price = {
        title: priceOption[0],
        price: priceOption[1],
        active: true,
        seats: priceOption[2]
      }
      api.post('workshop/'+workshopId+'/prices', price)
    })
    alert("Workshop created")
  }


  handleContentSubmit(event) {
    event.preventDefault();
    this.setContent(this.refs.content.value)
    this.setPost(true)
    var page = pages[this.state.edit-1]
    api.post('content/' + page, {"content": this.refs.content.value})
    this.refs.content.value = "";
  }

  render() {

    if (this.props.isAuth) {
      var comp = this.state.edit;
      if (comp === 0) {
          return (
            <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
            <div style={{width:"50%", background: "#f2eecb89", padding: "2em", margin:"3em 0",
            borderRadius:"10px", border:"0.25em solid #ddddee", boxShadow:"10px 10px #00000089"}}>
              <h2 style={{background:"gray", padding:"1em" , boxShadow:"4px 3px #00000039", borderRadius:"10px"}}>Admin Editor Panel</h2>
              <div>
              <a style={{background:"linear-gradient(36deg, #e65300, #f3f56b 90%)", boxShadow:"4px 3px #00000039" ,opacity:".9", color:"white", fontWeight:"bold", padding:"3em 2em", margin:".5em" , borderRadius:"10px",display:"inline-block"}} id="1" onClick={this.handleClick.bind(this)}>About</a>
              <a style={{background:"linear-gradient(36deg, #e65300, #f3f56b 90%)", boxShadow:"4px 3px #00000039" ,opacity:".9", color:"white", fontWeight:"bold", padding:"3em 2em", margin:".5em" , borderRadius:"10px",display:"inline-block"}} id="2" onClick={this.handleClick.bind(this)}>Workshops</a>
              <a style={{background:"linear-gradient(36deg, #e65300, #f3f56b 90%)", boxShadow:"4px 3px #00000039" ,opacity:".9", color:"white", fontWeight:"bold", padding:"3em 2em", margin:".5em" , borderRadius:"10px",display:"inline-block"}} id="3" onClick={this.handleClick.bind(this)}>CLC</a>
              <a style={{background:"linear-gradient(36deg, #e65300, #f3f56b 90%)", boxShadow:"4px 3px #00000039" ,opacity:".9", color:"white", fontWeight:"bold", padding:"3em 2em", margin:".5em" , borderRadius:"10px",display:"inline-block"}} id="4" onClick={this.handleClick.bind(this)}>Online Courses</a>
              <a style={{background:"linear-gradient(36deg, #e65300, #f3f56b 90%)", boxShadow:"4px 3px #00000039" ,opacity:".9", color:"white", fontWeight:"bold", padding:"3em 2em", margin:".5em" , borderRadius:"10px",display:"inline-block"}} id="5" onClick={this.handleClick.bind(this)}>Gallery</a>
              <a style={{background:"linear-gradient(36deg, #e65300, #f3f56b 90%)", boxShadow:"4px 3px #00000039" ,opacity:".9", color:"white", fontWeight:"bold", padding:"3em 2em", margin:".5em" , borderRadius:"10px",display:"inline-block"}} id="6" onClick={this.handleClick.bind(this)}>Demos</a>
              <a style={{background:"linear-gradient(36deg, #e65300, #f3f56b 90%)", boxShadow:"4px 3px #00000039" ,opacity:".9", color:"white", fontWeight:"bold", padding:"3em 2em", margin:".5em" , borderRadius:"10px",display:"inline-block"}} id="7" onClick={this.handleClick.bind(this)}>Publications</a>
              <a style={{background:"linear-gradient(36deg, #e65300, #f3f56b 90%)", boxShadow:"4px 3px #00000039" ,opacity:".9", color:"white", fontWeight:"bold", padding:"3em 2em", margin:".5em" , borderRadius:"10px",display:"inline-block"}} id="8" onClick={this.handleClick.bind(this)}>Contacts</a>
              <a style={{background:"linear-gradient(36deg, #e65300, #f3f56b 90%)", boxShadow:"4px 3px #00000039" ,opacity:".9", color:"white", fontWeight:"bold", padding:"3em 2em", margin:".5em" , borderRadius:"10px",display:"inline-block"}} id="9" onClick={this.handleClick.bind(this)}>Collabs</a>
              </div>

              <div style={{padding:"15px"}}>
              <button style={{boxShadow:"4px 3px #00000039"}}>
              <NavLink style={{textDecoration:"none",color:"black"}} to="/Home">
                Home                
              </NavLink>
              </button>
              </div>
            </div>
            </div>
          )
      }
      else if (comp === '1') {
        return (
          <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <div style={{width:"50%", background: "#90ee90", padding: "2em", margin:"3em 0",
          borderRadius:"10px", border:"0.25em solid #64e77a", boxShadow:"10px 10px #00000089"}}>
            <h2 class="centerText">Edit About</h2>
            <form onSubmit={this.handleContentSubmit.bind(this)}>
              <textarea ref="content"/><br />
              <input type="submit" value="Submit" />
            </form>

            <div style={{padding:"15px"}}>
            <button onClick={() => window.location.reload(false)}>Back To Edit</button>         
            </div>
          </div>
          </div>
        )
      }
      else if (comp === '2') {
        return (
          <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <div style={{width:"50%", background: "#90ee90", padding: "2em", margin:"3em 0",
          borderRadius:"10px", border:"0.25em solid #64e77a", boxShadow:"10px 10px #00000089"}}>
            <h2 class="centerText">Edit Workshops</h2>
            <form onSubmit={this.handleWorkshopsSubmit.bind(this)}>
              <h3>Add</h3><br />
                <label>Workshop Title:
                  <input type="text" ref="title" /><br />
                </label>
                <label>Description:
                  <textarea ref="description" /><br />
                </label>
                <label>Date:
                  <input type="date" ref="date" /><br />
                </label>
                <label>Location:
                  <input type="text" ref="loc" /><br />
                </label>
                <label>Image Link:
                  <input type="text" ref="img" /><br />
                </label>
                <label>Seats:
                  <input type="text" ref="seats" /><br />
                </label>
                <label>Prices:
                  <textarea ref="prices" /><br />
                </label>
              <input type="submit" value="Submit" />
            </form>

            <div style={{padding:"15px"}}>
            <button onClick={() => window.location.reload(false)}>Back To Edit</button>         
            </div>
            </div>
          </div>
        )
      }
      else if (comp === '3') {
        return (
          <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <div style={{width:"50%", background: "#90ee90", padding: "2em", margin:"3em 0",
          borderRadius:"10px", border:"0.25em solid #64e77a", boxShadow:"10px 10px #00000089"}}>
            <h2 class="centerText">Edit CLC</h2>
            <form onSubmit={this.handleContentSubmit.bind(this)}>
              <textarea ref="content"/><br />
              <input type="submit" value="Submit" />
            </form>

            <div style={{padding:"15px"}}>
            <button onClick={() => window.location.reload(false)}>Back To Edit</button>         
            </div>
          </div>
          </div>
        )
      }
      else if (comp === '4') {
        return (
          <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <div style={{width:"50%", background: "#90ee90", padding: "2em", margin:"3em 0",
          borderRadius:"10px", border:"0.25em solid #64e77a", boxShadow:"10px 10px #00000089"}}>
            <h2 class="centerText">Edit Online Courses</h2>
            <form onSubmit={this.handleCoursesSubmit.bind(this)}>
              <h3>Add</h3><br />
                <label>Course Name:
                  <input type="text" ref="nameAdd" /><br />
                </label>
                <label>Link:
                  <input type="text" ref="link" /><br />
                </label>
              <h3>Remove</h3><br />
                <label>Course Name:
                  <input type="text" ref="nameRem" /><br />
                </label>
              <input type="submit" value="Submit" />
            </form>

            <div style={{padding:"15px"}}>
            <button onClick={() => window.location.reload(false)}>Back To Edit</button>         
            </div>
            </div>
          </div>
        )
      }
      else if (comp === '5') {
        return (
          <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <div style={{width:"50%", background: "#90ee90", padding: "2em", margin:"3em 0",
          borderRadius:"10px", border:"0.25em solid #64e77a", boxShadow:"10px 10px #00000089"}}>
            <h2 class="centerText">Edit Gallery</h2>
            <form onSubmit={this.handleGallerySubmit.bind(this)}>
              <h3>Add Art</h3><br />
                <label>Title:
                  <input type="text" ref="artTitle"/><br />
                </label>
                <label>Artist:
                  <input type="text" ref="artist"/><br />
                </label>
                <label>Image URL:
                  <input type="text" ref="img"/><br />
                </label>
                <label>Category:
                  <input type="text" ref="artCat"/><br />
                </label>
                <label>Original:
                  <input type="checkbox" defaultChecked={false} ref='orig'/><br />
                </label>
                <label>Prices:
                  <textarea ref="prices" /><br />
                </label>
              <input type="submit" value="Submit" />
            </form>

            <div style={{padding:"15px"}}>
            <button onClick={() => window.location.reload(false)}>Back To Edit</button>         
            </div>
            </div>
          </div>
        )
      }
      else if (comp === '6') {
        return (
          <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <div style={{width:"50%", background: "#90ee90", padding: "2em", margin:"3em 0",
          borderRadius:"10px", border:"0.25em solid #64e77a", boxShadow:"10px 10px #00000089"}}>
            <h2 class="centerText">Edit Demos</h2>
            <form >
              <label>Link:
                <input type="text" ref="link"/><br />
              </label>
              <input type="submit" value="Submit" />
            </form>

            <div style={{padding:"15px"}}>
            <button onClick={() => window.location.reload(false)}>Back To Edit</button>         
            </div>
            </div>
          </div>
        )
      }
      else if (comp === '7') {
        return (
          <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <div style={{width:"50%", background: "#90ee90", padding: "2em", margin:"3em 0",
          borderRadius:"10px", border:"0.25em solid #64e77a", boxShadow:"10px 10px #00000089"}}>
            <h2 class="centerText">Edit Publications</h2>
            <form onSubmit={this.handleContentSubmit.bind(this)}>
              <textarea ref="content"/><br />
              <input type="submit" value="Submit" />
            </form>

            <div style={{padding:"15px"}}>
            <button onClick={() => window.location.reload(false)}>Back To Edit</button>         
            </div>
            </div>
          </div>
        )
      }
      else if (comp === '8') {
        return (
          <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <div style={{width:"50%", background: "#90ee90", padding: "2em", margin:"3em 0",
          borderRadius:"10px", border:"0.25em solid #64e77a", boxShadow:"10px 10px #00000089"}}>
            <h2 class="centerText">Edit Contacts</h2>
            <form onSubmit={this.handleContentSubmit.bind(this)}>
              <textarea ref="content"/><br />
              <input type="submit" value="Submit" />
            </form>

            <div style={{padding:"15px"}}>
            <button onClick={() => window.location.reload(false)}>Back To Edit</button>         
            </div>
            </div>
          </div>
        )
      }
      else if (comp === '9') {
        return (
          <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <div style={{width:"50%", background: "#90ee90", padding: "2em", margin:"3em 0",
          borderRadius:"10px", border:"0.25em solid #64e77a", boxShadow:"10px 10px #00000089"}}>
            <h2 class="centerText">Edit Collabs</h2>
            <form >
              <label>Link:
                <input type="text" ref="link"/><br />
              </label>
              <input type="submit" value="Submit" />
            </form>

            <div style={{padding:"15px"}}>
            <button onClick={() => window.location.reload(false)}>Back To Edit</button>         
            </div>
            </div>
          </div>
        )
      }
    } else {
      return (
        <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <div style={{width:"50%", background: "#90ee90", padding: "2em", margin:"3em 0",
          borderRadius:"10px", border:"0.25em solid #64e77a", boxShadow:"10px 10px #00000089"}}>
            <h2 class="centerText">Please log in to access admin functionality
            </h2>
              <NavLink to="/Admin">
                <button>Login</button>
              </NavLink>

              <div style={{padding:"15px"}}>
              <button>
              <NavLink style={{textDecoration:"none",color:"black"}} to="/Home">
                Home                
              </NavLink>
              </button>
            </div>
            </div>

            </div>
      )
    }
  }
}

export default Edit;
