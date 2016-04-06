Package.describe({
  name: 'di-app-ui',
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

  api.use([
    'ui',
    'templating',
    'kadira:flow-router',
    'kadira:blaze-layout'
  ], c);

  api.use([
    'di-core'
  ], cs);

  api.addFiles([
    'client.js',
    'components/home.html',
    'components/home.js',
    'components/store.html',
    'components/leaderboards.html',
    'router.js'
  ], c);

  api.export('DI');
});
