import React from 'react';
import ProviderContext from './ProviderContext';
import TrafficSignal from './TrafficSignal';

class TrafficProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      signal: { color: 'red' },
    };
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState({ ...this.state, signal: { color } });
  }
  render() {
    return (
        <ProviderContext.Provider value={{state: this.state, changeSignal: this.changeSignal}}>
          <TrafficSignal />
      </ProviderContext.Provider>
    );
  }
}

export default TrafficProvider;
