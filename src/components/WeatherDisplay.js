import React, { Component } from 'react';

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
    fetch(URL).then((result) => result.json()).then((json) => {
      this.setState({weatherData: json});
    });
  }

  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) {
      return <div>Loading</div>;
    }
    const weather = weatherData.weather[0];
    const iconURL = `http://openweathermap.org/img/w/${weather.icon}.png`;
    const fahrenheitToCelsius = (temp) => {
      const newTemp = (temp - 32) * 5/9;
      return newTemp.toFixed();
    };

    const currentTemp = fahrenheitToCelsius(weatherData.main.temp);
    const maxTemp = fahrenheitToCelsius(weatherData.main.temp_max);
    const minTemp = fahrenheitToCelsius(weatherData.main.temp_min);
    const wildSpeed = weatherData.wind.speed;

    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconURL} alt={weatherData.description} />
        </h1>
        <p>Current: {currentTemp}°</p>
        <p>High: {maxTemp}°</p>
        <p>Low: {minTemp}°</p>
        <p>Wind Speed: {wildSpeed} mi/hr</p>
      </div>
    )
  }
}

export default WeatherDisplay;
