global.Promise = require('bluebird');
global.Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

import angular from 'angular';
import 'angular-sanitize';
// export for others scripts to use
// angular modules
import constants from './constants';
import onConfig from './on_config';
import onRun from './on_run';
// import 'angular-ui-tinymce';
import '../../node_modules/angular-summernote/dist/angular-summernote.min';
import 'angular-ui-router';
import './templates';
import './filters';
import './controllers';
import './services';
import './factories';
import './directives';
// create and bootstrap application
const requires = [
  // 'ui.tinymce',
  'summernote',
  'ngSanitize',
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.factories',
  'app.directives',

];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
