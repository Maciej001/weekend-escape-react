// Redirect Button
// args:
// route: where to go 
// text:  text to display

RedirectButton = React.createClass({
  
  cityRoute() {
    FlowRouter.go(this.props.cityRoute);
  },

  render() {
    return (
      <button className="btn btn-primary" onClick={ this.cityRoute } > {this.props.text} </button>
    )
  }
  
});
