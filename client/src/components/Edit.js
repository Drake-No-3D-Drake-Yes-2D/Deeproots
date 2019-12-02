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

  handleContentSubmit(event) { // this is where I had the POST request before
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
      var page = pages[this.state.edit-1]
      // if (page != undefined && this.state.post) {
      //   try {
      //     api.post('content/' + page, {"content": this.state.content}) // this doesn't work
      //   } catch (err) {
      //     alert(err)
      //   }
      //   this.setPost(false)
      // }
      // api.post('content/' + page, {"content": this.state.content}) // this works
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
          </div>
        )
      }
      else if (comp == 3) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit CLC</h2>
          </div>
        )
      }
      else if (comp == 4) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Online Courses</h2>
          </div>
        )
      }
      else if (comp == 5) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Gallery</h2>
          </div>
        )
      }
      else if (comp == 6) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Demos</h2>
          </div>
        )
      }
      else if (comp == 7) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Publications</h2>
          </div>
        )
      }
      else if (comp == 8) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Contacts</h2>
          </div>
        )
      }
      else if (comp == 9) {
        return (
          <div className ="background-Unscaled">
            <h2 class="centerText">Edit Collabs</h2>
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
