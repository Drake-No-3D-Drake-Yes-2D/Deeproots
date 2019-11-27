import React from 'react';
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
        {this.state.content}
      </div>
    );
  }
}