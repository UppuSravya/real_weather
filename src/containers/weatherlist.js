import React, {Component} from 'react';
import {connect} from 'react-redux';
import Graph from '../components/graph';
import Map from '../components/map';
class WeatherList extends Component {
    renderTableRows(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={name}>
              <td><Map lon={lon} lat={lat} /></td>
              <td>
                  <Graph data={temps} />
              </td>
              <td>
              <Graph data={pressures} />
              </td>
              <td>
              <Graph data={humidities} />
              </td>
            </tr>
          );
    }
    render() {
        // console.log(this.props.weatherInfo)
        return (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weatherInfo.map((weather) => this.renderTableRows(weather))}
            </tbody>
            </table>
        )
    }
}
function mapStateToProps(state) {
    return {
        weatherInfo: state.weatherInfo
    }
}

export default connect(mapStateToProps)(WeatherList);