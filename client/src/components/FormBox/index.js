import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

const GOOGLE_FORM_MESSAGE_ID = 'entry.2606285'
const GOOGLE_FORM_ATTENDING_ID = 'entry.1498135098'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/5/d/e/1FAIpQLSfBYrkGVJrlkgxuGVzzBTnGOCJpVEO4b8vhDNXEr4SAk8Ei7w/formResponse'

class FormBox extends Component {
  constructor(props){
    super(props)
    this.state = { 
      message: '', 
      attending: '', 
      showForm: false,
      sendingMessage: false,
      messageSent: false,
      messageError: false
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      sendingMessage: true
    })
    this.sendMessage()
  }

  handleFormToggle = () => {
    this.setState( 
      (prevState) => {
        const { showForm } = prevState
        return {
          showForm: !showForm
        } 
      }
    )
  }

  handleReturnButton = () => {
    this.setState(
      {
        showForm: false,
        messageSent: false,
        messageError: false
      }
    )
  }

  sendMessage = () => {
    const formData = new FormData()
    formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.message)
    formData.append(GOOGLE_FORM_ATTENDING_ID, this.state.attending)

    axios.post(CORS_PROXY + GOOGLE_FORM_ACTION,formData)
      .then(() => {
        this.setState({ 
          messageSent: true,
          sendingMessage: false,
          message: '',
          attending: ''
        })
      }).catch(() => {
        this.setState({ 
          messageError: true,
          sendingMessage: false
        })
      })
  }

  returnButton = () => <button id='return-button' className='btn btn-default btn-xs' onClick={this.handleReturnButton}>Return</button>

  render() {
    if(this.state.sendingMessage){
      return(
        <div>Sending...</div>
      )
    }

    if(this.state.messageSent){
      return(
        <React.Fragment>
          <div className='success-message'>You are successfully Registered</div>
          {this.returnButton()}
        </React.Fragment>
      )
    }

    if(this.state.messageError){
      return(
        <React.Fragment>
          <div className='error-message'>Sorry, you were not registered. Please Try again</div>
          {this.returnButton()}
        </React.Fragment>
      )
    }

    if(this.state.showForm === false){
      return(
        <button id='contact-button' className='btn btn-sm' onClick={this.handleFormToggle}>Sign Up</button>
      )
    }

    return(
      <React.Fragment>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group row'>
              <label htmlFor='attending' className='col-sm-2 col-form-label'>
                What are the names of people attending?:
              </label>
              <div className='col-sm-8'>
                <textarea 
                  type='attending' 
                  name='attending'
                  id='attending'
                  className='form-control'
                  value={this.state.attending} 
                  onChange={this.handleChange}
                  required
                  rows='2'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='message' className='col-sm-2 col-form-label'>
                Comments and/or questions:
              </label>
              <div className='col-sm-8'>
                <textarea 
                  id='message'
                  name='message'
                  className='form-control'
                  value={this.state.message} 
                  onChange={this.handleChange} 
                  rows='4'
                />
              </div>
            </div>
            <div>
              <button type='button' id='cancel-button' className='btn btn-default btn-sm btn-action' onClick={this.handleFormToggle}>Cancel</button>
              <button type='submit' className='btn btn-sm btn-default btn-action'>Submit</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default FormBox