import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

export class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    // const { lon , lat } = cityData.city.coord; same as
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp*9/5-459.67);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td><GoogleMap long={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="F (avg)"/></td>
        <td><Chart data={pressure} color="green" units="hPa (avg)"/></td>
        <td><Chart data={humidity} color="black" units="% (avg)"/></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
          <thead>
            <tr>
              <th> City </th>
              <th> Temperature (F)</th>
              <th> Pressure (hPa)</th>
              <th> Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather}; // {weather} == {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
