CitiesList = React.createClass({
  propTypes: {},
  mixins: [

  ],

  getInitialState() {
    return {}
  },

  getMeteorData() {
    //  return {
    //    currentUser: Meteor.user()
    //  }
  },

  render() {
    const citiesHeaders = [
      {
        name: "City",
        dataName: "cityName" 
      },
      {
        name: "Country",
        dataName: "country"
      },
      {
        name: "IATA code",
        dataName: "IATACode"
      }
    ];

    const citiesRows = [
      ["Warsaw", "Poland", "WAW"],
      ["London", "UK", "LON"]
    ];

    return (
      <div className="container">
        <Table title="Cities List" headers={ citiesHeaders } rows={ citiesRows }/>
      </div>
    )
  }
  
});
