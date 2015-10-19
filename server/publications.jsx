Meteor.publish('cities', () => {
  return Cities.find();
});

Meteor.publish('currentWeathers', () => {
  return CurrentWeathers.find();
});

Meteor.publish('forecasts', () => {
  return Forecasts.find();
});