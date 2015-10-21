City = React.createClass({
  propTypes: {},
  mixins: [ ReactMeteorData ],

  getMeteorData() {
    Meteor.subscribe("weatherForecasts");

    let citySubHandle =     Meteor.subscribe("cities", { _id: this.props.cityId }),
        weatherSubHandle =  Meteor.subscribe("currentWeathers", { cityId: this.props.cityId }),
        forecastSubHandle = Meteor.subscribe("forecasts", { cityId: this.props.cityId });

    return {
      weather:          CurrentWeathers.findOne({ cityId: this.props.cityId }),
      weatherLoaded:    weatherSubHandle.ready(),

      forecast:         Forecasts.findOne({ cityId: this.props.cityId }),
      forecastLoaded:   forecastSubHandle.ready(),

      city:             Cities.findOne({ _id: this.props.cityId }),
      cityLoaded:       citySubHandle.ready() 
     }
  },

  render() {
    return (
      <div className="container">
        { this.data.cityLoaded ?
          <h1>{ this.data.city.name }</h1>
          :
          <h1>Loading...</h1>
        }

        { this.data.weatherLoaded ?
          <h2>{ this.data.weather.temp }</h2>
          :
          <h2>Weather unknown...</h2>
        }

        { this.data.forecastLoaded ?
          <h1>{ this.data.forecast.list[0].temp } at { moment(this.data.forecast.list[0].timeDate).format("DD-MM-YY HH:MM") }</h1>
          :
          <h1>Forecast loading...</h1>
        }

        


      </div>
    )
  }
  
});
