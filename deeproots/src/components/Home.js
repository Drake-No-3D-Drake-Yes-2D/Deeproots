import React from 'react';
import logo from '../Logo.png';
import '../App.css';

export default function Home() {
  return <div className = "App-CenterText">
    <img src={logo} className="App-logo" alt="logo"/>; 
    <div className = "App-Title">
      DEEPROOTS<br/>Arts and Culture Creative LLC
    </div>
  </div>;
}