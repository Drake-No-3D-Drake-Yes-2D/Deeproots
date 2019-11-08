import React from 'react';
<<<<<<< HEAD
import "./General.css";

export default function Workshops() {
  return <h2 class="centerText">Workshops</h2>;
=======
import DefaultPage from './generic/DefaultPage';
import WorkshopCard from './WorkshopsCard';

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

export default function Workshops(props) {
  return (
    <DefaultPage>
        <WorkshopHeader />
        <WorkshopBookYourOwn />
        <WorkshopsList workshops={props.workshops} />
    </DefaultPage>
  );
>>>>>>> origin/master
}
