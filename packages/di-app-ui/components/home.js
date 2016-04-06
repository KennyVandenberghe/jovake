Template.diHome.events({
  'click .play': function() {
    console.log('you pressed play');
  },
  'click .store': function() {
    FlowRouter.go('/store');
  },
  'click .leaderboards': function() {
    FlowRouter.go('/leaderboards');
  }
});
