Temperature = React.createClass({
  propTypes: {
    temp: React.PropTypes.number.isRequired,
  },
  render() {
    const temperature = Math.round(this.props.temp * 10)/10;

    return (
      <div className="city-temp" >
        <span>{ temperature } &deg;C</span>
      </div>
    )
  }
})
  