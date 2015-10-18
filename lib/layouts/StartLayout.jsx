StartLayout = React.createClass({

  render() {
    return (
      <div id="start-container">
        
        <div id="brand">
            <h2>Weekend Escape</h2>
        </div>

        <div className="center-div">
            <h1>Weekend Escape is the easiest way</h1>
            <h2>to escape London for weekend</h2>
            
            <a href="/main">
              <div id="escape-button">
                <h3>Escape 
                    <i className="glyphicon glyphicon-plane" id="browse-trips"></i>
                </h3>
              </div>
            </a>
        </div>

      </div>
    )
  }
  
});
