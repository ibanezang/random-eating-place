import React from 'react';
import './App.css';
import EatingPlaceList from './components/EatingPlaceList';
import eatingPlaces from './data/eatingPlaces';
import RandomPickControl from './components/RandomPickControl';

function App() {
  return (
    <div className="container">
      <EatingPlaceList places={eatingPlaces}></EatingPlaceList>
      <RandomPickControl places={eatingPlaces}/>
    </div>
  );
}

export default App;
