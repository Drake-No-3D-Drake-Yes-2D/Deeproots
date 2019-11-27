import React from 'react';
import DefaultPage from './generic/DefaultPage';
import WorkshopCard from './WorkshopsCard';
import api from '../api';

function WorkshopHeader(props) {
  return (
    <h1>
      Workshop Header
    </h1>
  );
}

function WorkshopBookYourOwn(props) {
  return (
    <button>Book Your Own Workshop</button>
  );
}

function WorkshopsList(props) {
  return props.workshops.map(x =>
    <WorkshopCard {...x} key={x.id} />
  );
}

export default class Workshops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: []
    }
  }

  async componentDidMount() {
    const res = await api.get(`workshop`);
    this.setState({ workshops: res.data });
  }

  render() {
    return (
      <DefaultPage>
        <WorkshopHeader />
        <WorkshopBookYourOwn />
        <WorkshopsList workshops={this.state.workshops} />
      </DefaultPage>
    );
  }
}