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

  action(params) {

    ReactLayout.render(MainLayout, { 
      header: <MainHeader />,
      content: <City cityId={ params.cityId } />
    })
  }
});






