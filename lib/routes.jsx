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

FlowRouter.route("/cities", {
  name: "cities-list",
  action(params) {
    ReactLayout.render(MainLayout, { 
      header: <MainHeader />,
      content: <CitiesList />
    })
  }
});






