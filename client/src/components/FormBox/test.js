import React from 'react'
import { shallow } from 'enzyme'
import moxios from 'moxios'
import FormBox from '.'

describe('form Box', () => {
  let formBox

  beforeEach(() => {
    formBox = shallow(<FormBox />)
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('Renders correctly', () => {
    expect(formBox).toMatchSnapshot()
  })

  it('renders with the form hidden by default', () => {
    expect(formBox.find('form').length).toBe(0)
  })

  it('renders with the form button by default', () => {
    expect(formBox.find('#form-button').length).toBe(1)
  })

  it('shows form when the form button is clicked ', () => {
    formBox.find('#form-button').simulate('click')

    expect(formBox.find('form').length).toBe(1)
  })

  it('hides form when the cancel button is clicked', () => {
    formBox.setState({showForm: true})
    formBox.find('#cancel-button').simulate('click')

    expect(formBox.find('form').length).toBe(0)
  })

  it('shows form button when the cancel button is clicked', () => {
    formBox.setState({showForm: true})
    formBox.find('#cancel-button').simulate('click')

    expect(formBox.find('#form-button').length).toBe(1)
  })

  it('shows loading message after submitting form', () => {
    formBox.setState({showForm: true})
    formBox.find('form').simulate('submit', {
      preventDefault: jest.fn()
    })

    expect(formBox.text()).toBe('Sending...')
  })

  it('shows success message and form button if the message is sent successfully', () => {
    formBox.setState({messageSent: true})

    expect(formBox.find('.success-message').length).toBe(1)
    expect(formBox.find('#return-button').length).toBe(1)
  })

  it('displays form button when the return button is clicked', () => {
    formBox.setState({messageSent: true})
    formBox.find('#return-button').simulate('click')

    expect(formBox.find('#form-button').length).toBe(1)
  })

  it('displays error message and return button when message is not sent', () => {
    formBox.setState({messageError: true})

    expect(formBox.find('.error-message').length).toBe(1)
    expect(formBox.find('#return-button').length).toBe(1)
  })
})