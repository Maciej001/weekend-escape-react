CitiesList = React.createClass({
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    let data = {};
    let subscription = Meteor.subscribe('cities');

    if (subscription.ready()){
      data.cities = Cities.find().fetch();
    }

    return data;
  },

  getHeaders() {
    return [
    {
      name: "Code",
      dataName: "cityCode"
    },
    {
      name: "City",
      dataName: "name"
    },
    {
      name: "Country",
      dataName: "countryCode"
    },
    {
      name: "Latitude",
      dataName: "coord.lat"
    },
    {
      name: "Longitude",
      dataName: "coord.lng"
    },
    {
      name: "Airport",
      dataName: "airportCode"
    },

    ]
  },

  getCitiesRows(){
    return this.data.cities.map((city) => {
      let cityRowArray = [];
      
      cityRowArray[0] = city.cityCode;
      cityRowArray[1] = city.name;
      cityRowArray[2] = city.countryCode;
      cityRowArray[3] = city.coord.lat;
      cityRowArray[4] = city.coord.lng;
      cityRowArray[5] = city.airportCode;
      
      return cityRowArray;
    });
  },

  render() {

    return (
      <div className="container">
        { this.data.cities ?
          <Table title="Cities List" headers={ this.getHeaders() } rows={ this.getCitiesRows() }/> 
          : <p>Loading ... </p>
        }
      </div>
    )
  }
  
});
