UserLogin = React.createClass({
  propTypes: {},
  mixins: [

  ],
  onSubmit(e) {
    e.preventDefault();

    var self = this;

    var email = e.target.email.value;
    var password = e.target.password.value;

    Meteor.loginWithPassword(email, password, function(err){
      if (err) 
        console.log(err.reason); 
      else
        FlowRouter.go('Home');
    });


  },
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3">
            <h1>Login</h1>
            <input type="text" name="email" className="form-control" placeholder="Enter email..."/>
            <input type="password" name="password" className="form-control" placeholder="Enter password"/>
            <input type="submit" value="Login" className="btn btn-default" />
          </div>
        </div>
      </div>
    )
  }
  
});

