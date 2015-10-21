Meteor.publish('forecasts', function() {
  return Forecasts.find();
});

Meteor.publish('cities', function () {
  return Cities.find();
});

Meteor.publish('currentWeathers', function() {
  return CurrentWeathers.find();
});

