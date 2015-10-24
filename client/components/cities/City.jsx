City = React.createClass({
  propTypes: {},
  mixins: [ ReactMeteorData ],

  getInitialState() {
    return {
      fullInfo: false
    }
  },

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

  changeFullInfo() {
    this.setState({ fullInfo: ! this.state.fullInfo });
  },

  render() {
    let fullInfoClass = classNames({
      'glyphicon': true,
      'glyphicon-circle-arrow-down': this.state.fullInfo,
      'glyphicon-circle-arrow-right': !this.state.fullInfo
    });

    return (
      <div className="container">

        { this.data.cityLoaded && this.data.weatherLoaded ?
            <div>
              
              <h1 className="city-header">
                <i className={ fullInfoClass } ref="fullInfo" onClick={ this.changeFullInfo }></i>
                { this.data.city.name.toUpperCase() }
                <WeatherIcon icon={ this.data.weather.weatherIcon } />
                <Temperature temp={ this.data.weather.temp } />
              </h1>

              { this.state.fullInfo ?
              <h2>
                <WeatherInfo type="humidity" data={ this.data.weather.humidity } />
                <WeatherInfo type="pressure" data={ Math.round(this.data.weather.pressure) } />
                <WeatherInfo type="wind" data={ 10* Math.round(this.data.weather.wind/10) } />
              </h2>
              : "" }


              <h2>
                <Sunrise sunrise={ this.data.weather.sunrise } sunset={ this.data.weather.sunset } />
              </h2>

              <CityImage 
                image={ this.data.city.name } 
                imageLink={ "/cities_images/" + this.data.city.name.toLowerCase() + ".jpg" } 
                size="big" 
              />
            </div>
          :
            <h1>Loading...</h1>
        }
        


      </div>
    )
  }
  
});
