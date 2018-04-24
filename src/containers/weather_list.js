import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import Alert from '../components/alert';

class WeatherList extends Component {
    renderWeather(cityData) {
        // console.log(cityData.weather.main.pressure);
        console.log(cityData)
        const name = cityData.name;
        // Convert to Celsius
        // const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        // const pressures = cityData.list.map(weather => weather.main.pressure);
        // const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                {/* <td><Chart data={temps} color="orange" units="C" /></td>
                <td><Chart data={pressures} color="blue" units="hPa" /></td>
                <td><Chart data={humidities} color="red" units="%" /></td> */}
            </tr>
        )
    }

    render() {
        return (
            <div>
                {/* {(this.props.italik) ? <Alert /> : null} */}
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (C)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({ weather, italik }) {
    return { weather, italik };
}

export default connect(mapStateToProps)(WeatherList);