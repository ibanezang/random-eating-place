import React from 'react';
import eatingPlaces from './data/eatingPlaces';
import RandomPickControl from './components/RandomPickControl';

function App() {
  return (
    <div className="container">
      <RandomPickControl places={eatingPlaces}/>
    </div>
  );
}

export default App;
