CityImage = React.createClass({

  propTypes: {
    image: React.PropTypes.string,      // city name placed as img alt eg. "berlin"
    imageLink: React.PropTypes.string, // link where to find 
    size: React.PropTypes.string        // small, medium, big or large
  },

  render() {
    let size = {
      width: '60px',
      height: '40px'
    }
    switch (this.props.size) {
      case "small":
        size = {
          width: '60px',
          height: '40px'
        }
        break;
      case "medium":
        size = {
          width: '120px', 
          height: '80px'
        }
        break;
      case "big":
        size = {
          width: '300px', 
          height: '200px'
        }
        break
      case "large":
        size = {
          width: '600px', 
          height: '400px'
        }
        break;
    }

    return (
      <img src={ this.props.imageLink } alt={ this.props.image } style={ size } />
    )
  }
})
  