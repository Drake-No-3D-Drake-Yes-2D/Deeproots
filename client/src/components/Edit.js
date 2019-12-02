import React from 'react';
import './General.css';

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

  handleContentSubmit() {
    //this.setContent(this.refs.content.value)
    // try {
    //   api.post('content/'+pages[this.state.edit-1], {"content": this.state.content}).then(alert("Submitted"))
    // } catch (err) {
    //   console.log(err)
    // }
    alert("Page updated")
  }

  handleGallerySubmit() {
    if (this.refs.id.value != '') {
      alert("Deleted artwork \""+this.refs.id.value + "\"")
    } else if (this.refs.file.value != '' ){
      alert("Artwork added")
    } else {
      alert("A field must be nonempty")
    }
  }

  handleCoursesSubmit() {
    if (this.refs.nameAdd.value != '') {
      if (this.refs.link.value == '') {
        alert("Missing course link")
      } else {
        alert("Added course \""+this.refs.nameAdd.value + "\"")
      }
    } else if (this.refs.nameRem.value != '' ){
      alert("Removed course  \""+this.refs.nameRem.value + "\"")
    } else {
      alert("All required fields must be nonempty")
    }
  }

  handleWorkshopsSubmit() {
    if (this.refs.nameAdd.value != '') {
      if (this.refs.date.value == '') {
        alert("Missing date")
      } else {
        alert("Added workshop \""+this.refs.nameAdd.value + "\"")
      }
    } else if (this.refs.nameRem.value != '' ){
      alert("Removed workshop  \""+this.refs.nameRem.value + "\"")
    } else {
      alert("All required fields must be nonempty")
    }
  }

  render() {

    if (this.props.isAuth) {
      var comp = this.state.edit;
      if (comp == 0) {
          return (
            <div className ="background-Unscaled">
              <h2 class="centerText">Edit</h2>
              <button id="1" onClick={this.handleClick.bind(this)}>About</button><br /><br />
              <button id="2" onClick={this.handleClick.bind(this)}>Workshops</button><br /><br />
              <button id="3" onClick={this.handleClick.bind(this)}>CLC</button><br /><br />
              <button id="4" onClick={this.handleClick.bind(this)}>Online Courses</button><br /><br />
              <button id="5" onClick={this.handleClick.bind(this)}>Gallery</button><br /><br />
              <button id="6" onClick={this.handleClick.bind(this)}>Demos</button><br /><br />
              <button id="7" onClick={this.handleClick.bind(this)}>Publications</button><br /><br />
              <button id="8" onClick={this.handleClick.bind(this)}>Contacts</button><br /><br />
              <button id="9" onClick={this.handleClick.bind(this)}>Collabs</button>

            </div>
          )
      }
      else if (comp == 1) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit About</h2>
            <form onSubmit={this.handleContentSubmit.bind(this)}>
              <textarea ref="content"/><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
      else if (comp == 2) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Workshops</h2>
            <form onSubmit={this.handleWorkshopsSubmit.bind(this)}>
              <h3>Add</h3><br />
                <label>Workshop Name:
                  <input type="text" ref="nameAdd" /><br />
                </label>
                <label>Description:
                  <textarea ref="description" /><br />
                </label>
                <label>Date:
                  <input type="text" ref="date" /><br />
                </label>
              <h3>Remove</h3><br />
                <label>Workshop Name:
                  <input type="text" ref="nameRem" /><br />
                </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
      else if (comp == 3) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit CLC</h2>
            <form onSubmit={this.handleContentSubmit.bind(this)}>
              <textarea ref="content"/><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
      else if (comp == 4) {
        return (
          <div className ="background-Unscaled">
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
          </div>
        )
      }
      else if (comp == 5) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Gallery</h2>
            <form onSubmit={this.handleGallerySubmit.bind(this)}>
              <h3>Add</h3><br />
                <input type="file" ref="file"/><br />
              <h3>Remove</h3><br />
                <input type="text" ref="id"/><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
      else if (comp == 6) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Demos</h2>
            <form >
              <label>Link:
                <input type="text" ref="link"/><br />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
      else if (comp == 7) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Publications</h2>
            <form >
              <label>Link:
                <input type="text" ref="link"/><br />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
      else if (comp == 8) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Contacts</h2>
            <form onSubmit={this.handleContentSubmit.bind(this)}>
              <textarea ref="content"/><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
      else if (comp == 9) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Collabs</h2>
            <form >
              <label>Link:
                <input type="text" ref="link"/><br />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
    } else {
      return (
        <div className ="background-Unscaled">
          <h2 class="centerText">Please log in to access admin functionality
          </h2>
        </div>
      )
    }
  }
}

export default Edit;
