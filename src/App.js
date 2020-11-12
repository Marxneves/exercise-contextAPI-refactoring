import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
    };

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(color, change) {
    this.setState({
      cars: {
         ...this.state.cars,
        [color]: change
    }})
  }

  render() {
    return (
      <MyContext.Provider value={{...this.state, moveCar: this.moveCar,}} >
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
