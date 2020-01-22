import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';
import cities from '../cities';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {cities.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay key={activePlace} zip={cities[activePlace].zip} />
      </div>
    );
  }
}

export default App;
