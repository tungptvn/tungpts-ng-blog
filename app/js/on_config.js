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
    .state('home', {
      url: '/',
      controller: 'homeCtrl as vm',
      templateUrl: 'home.html',
      title: 'Home',
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
    });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
