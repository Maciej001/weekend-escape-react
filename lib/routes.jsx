FlowRouter.route('/',{
  name: 'Home', 
  action(params) {
    ReactLayout.render(MainLayout, { header: <MainHeader /> });
  }
});

FlowRouter.route("/login", {
  name: "Login",
  action(params) {
    ReactLayout.render(MainLayout, { header: <MainHeader />, component: <UserLogin /> })
  }
});



