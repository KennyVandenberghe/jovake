FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('diLayout', {content: 'diHome'});
  }
});

FlowRouter.route('/store', {
  action: function() {
    BlazeLayout.render('diLayout', {content: 'diStore'})
  }
});

FlowRouter.route('/leaderboards', {
  action: function() {
    BlazeLayout.render('diLayout', {content: 'diLeaderboards'})
  }
});
