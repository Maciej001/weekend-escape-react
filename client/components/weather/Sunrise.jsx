Sunrise = React.createClass({
  propTypes: {
    sunrise: React.PropTypes.number.isRequired,
    sunset:  React.PropTypes.number.isRequired
  },

  render() {
    // time for sunrise and sunset is passed as Unix timestamp
    let today = (new Date()).getTime()/1000, // convert to Unix timestamp
        sunrise = this.props.sunrise,
        sunset = this.props.sunset;

    let  sunriseText = '';

    if (today < sunrise ) {
        sunriseText = "Today sun will rise at " + moment.unix(sunrise).format("h:mm A") + 
                      " and will set at " + moment.unix(sunset).format("h:mm A") + ".";
    } 
    else if (today >= sunrise && today <= sunset) {
      sunriseText = "Today sun rose at " + moment.unix(sunrise).format("h:mm A") + 
                    " and will set at " + moment.unix(sunset).format("h:mm A") + ".";
    } else {
      sunriseText = "Today sun rose at " + moment.unix(sunrise).format("h:mm A") + 
                    " and set at " + moment.unix(sunset).format("h:mm A") + ".";
    }

    return (
      <span>{ sunriseText }</span>
    )
  }
})
