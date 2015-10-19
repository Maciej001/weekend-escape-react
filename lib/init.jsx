FlowRouter.subscriptions = function() {
  this.register('currentWeathers', Meteor.subscribe('currentWeathers'));
};