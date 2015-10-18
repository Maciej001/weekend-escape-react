Meteor.startup(() => { 
  
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      email: "maciej@gmail.com",
      password: "korek001"
    });
  }

  if (Cities.find().count() === 0) {
    Meteor.call("populateCities");
  }

});