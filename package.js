Package.describe({
  name: 'maximal:reactive-cursor',
  version: '0.1.0',
  summary: 'Meteor package that provides reactive cursors on the server',
  git: 'https://github.com/maximalmeteor/reactive-cursor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'coffeescript',
    'mongo',
    'lai:collection-extensions@0.1.3',
    'peerlibrary:server-autorun@0.2.3'
  ]);

  api.addFiles([
    'reactive-cursor.coffee'
  ], 'server');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'coffeescript',
    'maximal:reactive-cursor'
  ]);
  api.addFiles('tests/reactive-cursor.coffee');
});
