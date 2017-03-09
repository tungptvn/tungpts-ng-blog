function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'ExampleCtrl as home',
      templateUrl: 'home.html',
      title: 'Home'
    }).state('about', {
      url: '/about',
      controller: 'aboutCtrl as about',
      templateUrl: 'about.html',
      title: 'about'
    }).state('contact', {
      url: '/contact',
      controller: 'contactCtrl as me',
      templateUrl: 'contact.html',
      title: 'contact'
    });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
