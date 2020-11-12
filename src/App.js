import React from 'react';
import './App.css';
import CarProvider from './CarProvider';
import TrafficProvider from './TrafficProvider';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <CarProvider />
        <TrafficProvider />
        </div>
    );
  }
}

export default App;
