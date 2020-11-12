import React from 'react';
import Cars from './Cars';
import ProviderContext from './ProviderContext';

class CarProvider extends React.Component {
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
      <ProviderContext.Provider value={{...this.state, moveCar: this.moveCar,}} >
        <Cars />
      </ProviderContext.Provider>
    );
  }
}

export default CarProvider;