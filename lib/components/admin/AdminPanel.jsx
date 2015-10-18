AdminPanel = React.createClass({
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

  generateCities(e) {
    e.preventDefault();
    Meteor.call("generateCities");
  }, 

  render() {
    return (
      <div className="container">
        <h2>Admin</h2>

        <div className="row">
          <div className="col-xs-12 col-md-4">
            
            <div className="admin-row">
              <h4>Generate List of Cities</h4>
              <button 
                id="generate-cities" 
                className="btn btn-primary" 
                onClick={ this.generateCities }>

                Generate
              </button>
            </div>

            <div className="admin-row">
              <h4>Download Weather</h4>
              <button id="download-weather" className="btn btn-primary">Download</button>
            </div>  

            <div className="admin-row">
              <h4 className="header-warning">Find flights (carefull it can cost money :) ) </h4>
              <button id="download-flights" className="btn btn-primary">Find</button>
            </div>

            <div className="admin-row">
              <h4>Calculate Average Flight Time</h4>
              <button id="avg-flight-time" className="btn btn-primary">Calculate</button>
            </div>

            <div className="admin-row">
              <h4>Find Hotels</h4>
              <button id="download-hotels" className="btn btn-primary">Find</button>
            </div>

            <div className="admin-row">
              <h4>Generate Trips</h4>
              <button id="generate-trips" className="btn btn-primary">Generate</button>
            </div>

          </div>
        </div>

      </div>
    )
  }
  
});
