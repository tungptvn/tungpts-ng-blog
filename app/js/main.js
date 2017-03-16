import angular from 'angular';
import 'angular-sanitize';
// global.jQuery = require('jquery');
// require('bootstrap');
import 'jquery';
import 'bootstrap';
// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-ui-router';
import './templates';
import './filters';
import './controllers';
import './services';
import './factories';
import './directives';

// create and bootstrap application
const requires = [
  'ngSanitize',
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.factories',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
