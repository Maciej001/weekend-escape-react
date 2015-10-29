City = React.createClass({
  propTypes: {},
  mixins: [ ReactMeteorData ],

  getInitialState() {
    return {
      fullInfo: false
    }
  },

  getMeteorData() {

    let citySubHandle =     Meteor.subscribe('city',          this.props.cityId ),
        weatherSubHandle =  Meteor.subscribe('cityWeather',   this.props.cityId ),
        forecastSubHandle = Meteor.subscribe('cityForecast',  this.props.cityId );

    return {
      weather:          CurrentWeathers.findOne({ cityId: this.props.cityId }),
      weatherLoaded:    weatherSubHandle.ready(),

      city:             Cities.findOne({ _id: this.props.cityId }),
      cityLoaded:       citySubHandle.ready() ,

      forecastLoaded:   forecastSubHandle.ready(),
      forecast:         Forecasts.findOne({ cityId: this.props.cityId })
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

        { this.data.cityLoaded && this.data.weatherLoaded && this.data.forecastLoaded ?

            <div>
              
              <h1 className="city-header">
                <i className={ fullInfoClass } ref="fullInfo" onClick={ this.changeFullInfo }></i>
                { this.data.city.name.toUpperCase() }
                <WeatherIcon icon={ this.data.weather.weatherIcon } />
                <Temperature temp={ this.data.weather.temp } />
              </h1>

              { this.state.fullInfo ?
              <h2 className="fullInfo">
                <WeatherInfo type="humidity" data={ this.data.weather.humidity } />
                <WeatherInfo type="pressure" data={ Math.round(this.data.weather.pressure) } />
                <WeatherInfo type="wind" data={ 10* Math.round(this.data.weather.wind/10) } />
              </h2>
              : "" }


              <h5>
                <Sunrise sunrise={ this.data.weather.sunrise } sunset={ this.data.weather.sunset } />
              </h5>

              <CityImage 
                image={ this.data.city.name } 
                imageLink={ "/cities_images/" + this.data.city.name.toLowerCase() + ".jpg" } 
                size="big" 
              />

              <h2>Forecast</h2>
              <BarTimeChart 
                chartId ={"temp-chart"}
                data={ { time: _.pluck(this.data.forecast.list, 'timeDate'), 
                       series: _.pluck(this.data.forecast.list, 'temp') } } 
                width={600} 
                height={200}
              />

            </div>

          :
            <h1>Loading...</h1>
        }

      </div>
    )
  }
  
});
