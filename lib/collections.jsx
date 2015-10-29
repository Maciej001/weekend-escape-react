Cities =  new Mongo.Collection('cities');

Cities.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Cities.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});




CurrentWeathers = new Mongo.Collection('currentWeathers');

CurrentWeathers.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

CurrentWeathers.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});




Forecasts = new Mongo.Collection('forecasts');

Forecasts.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Forecasts.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});
