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
      controller: 'defaultCtrl as vm',
      templateUrl: 'default.html',
      title: 'default',
      resolve:{
        categoriesResolve: function(categoriesService){
          return categoriesService.getAll();
        }
      }
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
    })
    .state('default.home', {

      templateUrl:'about.html',
      title:'about test'
    })
    ;



  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
