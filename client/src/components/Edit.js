import React from 'react';
import './General.css';

class Edit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: 0
    }
  }

  setEdit(val) {
    this.setState({
      edit: val
    })
  }

  handleClick(event) {
    const buttonID = event.target.getAttribute("id");
    this.setEdit(buttonID);
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
