Meteor.publish('cities', () => {
  return Cities.find();
});