function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $stateProvider
    .state('default', {
      url: '/',
      controller: 'defaultCtrl as default',
      templateUrl: 'default.html',
      title: 'default',
      resolve: {
        categoriesResolve: function (categoriesService) {
          return categoriesService.getAll();
        }
      }
    })
    .state('default.home', {

      templateUrl: 'home/index.html',
      controller: 'homeCtrl as home',
      title: 'home'
    }).state('default.about', {
      url: 'about',
      controller: 'aboutCtrl as about',
      templateUrl: 'home/about.html',
      title: 'about'
    }).state('default.contact', {
      url: 'contact',
      controller: 'contactCtrl as contact',
      templateUrl: 'home/contact.html',
      title: 'contact'
    })

  ;



  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
