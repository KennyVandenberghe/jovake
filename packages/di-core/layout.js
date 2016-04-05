Template.diLayout.helpers({
  showMask: function(){
    return Session.get('showMask');
  }
});

Template.diLayout.events({
  'click .logout': function(e, tpl){
    e.preventDefault();
    Meteor.logout();
  }
});
