import React from 'react';
import DefaultPage from './generic/DefaultPage';
import VerticalGrid from './generic/VerticalGrid';
import WorkshopCard from './WorkshopsCard';

function WorkshopHeader(props) {
  return (
    <div>
      Workshop Header
    </div>
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

export default function Workshops(props) {
  return (
    <DefaultPage>
      <VerticalGrid>
        <WorkshopHeader />
        <WorkshopBookYourOwn />
        <WorkshopsList workshops={props.workshops} />
      </VerticalGrid>
    </DefaultPage>
  );
}
