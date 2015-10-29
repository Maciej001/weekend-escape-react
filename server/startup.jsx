Meteor.startup(() => {
  GOOGLE_FLIGHTS_KEY =  Meteor.settings.private.GOOGLE_FLIGHTS_KEY;
  WEATHER_KEY =         Meteor.settings.private.WEATHER_KEY;
  EXPEDIA_KEY =         Meteor.settings.private.EXPEDIA_KEY;

  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      email: "maciej@gmail.com",
      password: "korek001"
    });
  }


});