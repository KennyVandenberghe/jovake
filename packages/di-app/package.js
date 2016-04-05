Package.describe({
  name: 'di-app',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  var c = 'client',
      s = 'server',
      cs = [c, s];


//First load Rvn namespace, then app-ui
  api.imply([
    'ui',
    'templating',
    'di-core',
    'di-profile',
    'di-app-ui'
  ]);
});
