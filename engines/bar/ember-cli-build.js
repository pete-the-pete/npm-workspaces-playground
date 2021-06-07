'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
// const Funnel = require('broccoli-funnel');
const path = require('path');

module.exports = function(defaults) {
  const testHarnessPath = path.join('../../test-harness');

  let overrides = {
    name: 'dummy',
    configPath: `${testHarnessPath}/config/environment`,
    trees: {
      app: `${testHarnessPath}/app`,
      public: `${testHarnessPath}/public`,
      styles: `${testHarnessPath}/app/styles`,
      templates: `${testHarnessPath}/app/templates`,
      tests: `tests`,
      vendor: null,
    },
  };

  let app = new EmberApp(defaults, overrides);

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
