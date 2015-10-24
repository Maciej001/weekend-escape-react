WeatherIcon = React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired,
  },
  render() {
    return (
      <i className={ this.props.icon }></i>
    )
  }
})
  