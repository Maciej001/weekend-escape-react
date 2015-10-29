Meteor.publish('cities', () => {
  return Cities.find();
});

Meteor.publish('city', function( id ) {
  check( id, String );

  return Cities.find({ '_id': id });
});



Meteor.publish('currentWeathers', () => {
  return CurrentWeathers.find();
});

Meteor.publish('cityWeather', ( cityId ) => {
  check( cityId, String );

  return CurrentWeathers.find({ 'cityId': cityId });

});



Meteor.publish('forecasts', () => {
  return Forecasts.find();
});

Meteor.publish('cityForecast', ( cityId ) => {
  check( cityId, String );

  return Forecasts.find({ 'cityId': cityId });

});



