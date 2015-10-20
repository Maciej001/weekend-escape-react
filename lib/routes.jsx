FlowRouter.route('/',{
  name: 'Start', 
  action(params) {
    ReactLayout.render(StartLayout);
  }
});

FlowRouter.route('/main',{
  name: 'Home', 
  action(params) {
    ReactLayout.render(MainLayout, { header: <MainHeader /> });
  }
});

FlowRouter.route('/admin',{
  name: 'Admin', 
  subscriptions: function(params) {
    this.register("forecasts", Meteor.subscribe("forecasts"));
  },
  action(params) {
    ReactLayout.render(MainLayout, { 
      header: <MainHeader />,
      content: <AdminPanel />
    })
  }
});



// Cities Routes Group

var cities = FlowRouter.group({
  prefix: '/cities'
});

cities.route("/", {
  name: "cities-list",
  action(params) {
    ReactLayout.render(MainLayout, { 
      header: <MainHeader />,
      content: <CitiesList />
    })
  }
});

cities.route('/:cityId',{
  name: 'City', 

  subscriptions: function(params) {
    this.register("city", Meteor.subscribe("cities"));
    this.register("currentWeathers", Meteor.subscribe("currentWeathers", { cityId: params.cityId }))
    this.register("forecasts", Meteor.subscribe("forecasts", { cityId: params.cityId }));
  },
  action(params) {

    ReactLayout.render(MainLayout, { 
      header: <MainHeader />,
      content: <City cityId={ params.cityId } />
    })
  }
});






