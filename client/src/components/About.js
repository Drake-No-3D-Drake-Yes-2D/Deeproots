import React from 'react';
import ReactMarkdown from 'react-markdown'

import "./General.css";
import api from '../api';

export default class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  async componentDidMount() {
    const res = await api.get(`content/about`);
    this.setState({ content: res.data });
  }

  render() {
    return (
      <div class="sideBar">
        <ReactMarkdown source={this.state.content} />
      </div>
    );
  }
}