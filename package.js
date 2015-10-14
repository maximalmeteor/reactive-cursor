Package.describe({
  name: 'maximum:reactive-cursors',
  version: '0.2.0',
  summary: 'Meteor package that provides reactive cursors on the server',
  git: 'https://github.com/maximummeteor/reactive-cursors',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'coffeescript',
    'mongo',
    'underscore',
    'lai:collection-extensions@0.1.3',
    'peerlibrary:server-autorun@0.5.1',
    'tracker'
  ]);

  api.imply([
    'peerlibrary:server-autorun@0.5.1',
    'tracker'
  ]);

  api.addFiles([
    'reactive-cursors.coffee'
  ], 'server');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'coffeescript',
    'mongo',
    'underscore',
    'maximum:reactive-cursors'
  ]);
  api.addFiles('tests/reactive-cursors.coffee');
});
