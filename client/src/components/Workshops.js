import React from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import DefaultPage from './generic/DefaultPage';
import WorkshopCard from './WorkshopsCard';
import { getData, getContent } from '../api';

function WorkshopsList(props) {
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7); 
  const currentWorkshops = props.workshops.filter(x => x.active && new Date(x.date) >= lastWeek);
  console.log(currentWorkshops)
  return currentWorkshops.map(x =>
    <WorkshopCard {...x} key={x._id} />
  );
}

export default function Workshops() {

  const [header, setHeader] = useState('');
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    getContent('workshops', setHeader)
    getData('workshop', setWorkshops)
  }, [setHeader, setWorkshops]);

  return (
    <DefaultPage>
      <ReactMarkdown source={header} />
      <WorkshopsList workshops={workshops} />
    </DefaultPage>
  );
}