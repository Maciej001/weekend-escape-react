WeatherInfo = React.createClass({

  render() {

    let styleInfo = {
      display: 'inline-block',
      width: '85px',
      fontWeight: 'bold'
    }

    let text = '', units = '';
    switch (this.props.type) {
      case "humidity":
        text = "Humidity: ";
        units = "%";
        break;
      case "pressure":
        text = "Pressure: ";
        units = " hPa";
        break;
      case "wind":
        text = "Wind: ";
        units = " m/s";
        break;
    }
    return (
      <div className="weather-info">
        <span style={ styleInfo } >{ text }</span>
        <span className="weather-info-data">{ this.props.data }</span>
        <span className="weather-info-units">{ units }</span>
      </div>
    )
  }
})
