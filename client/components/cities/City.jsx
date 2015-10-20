City = React.createClass({
  propTypes: {},
  mixins: [ReactMeteorData],

  getMeteorData() {
    let cityId = this.props.cityId;

    return {
       city: Cities.find({ _id: cityId }).fetch()
     }
  },

  getInitialState() {
    return {}
  },

  componentWillMount() {

  },
  componentDidMount() {

  },
  componentWillReceiveProps() {

  },
  shouldComponentUpdate() {
    return true;
  },
  componentWillUnmount(){

  },

  render() {
    let city = this.data;
    console.dir("City: " + city );
    return (
      <div className="container">
        <h1>{ this.data.city[0].name }</h1>
      </div>
    )
  }
  
});
