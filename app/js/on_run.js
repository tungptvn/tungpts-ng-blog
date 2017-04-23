import * as axios from 'axios'

function OnRun($rootScope, AppSettings, storage, authService, $state) {
  'ngInject';
  axios.defaults.baseURL = AppSettings.apiUrl;
  var token = storage.get('token');
  if (token) {
    axios.defaults.headers = {
      'Authorization': `Bearer ${token}`
    };
  }
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if (toState.title) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });
 
  $rootScope.$on('$stateChangeStart',
    function (event, toState) {
      $rootScope.isBusy = true;
      if (toState.name == 'admin' && !authService.isAuthenticated) {
        event.preventDefault();
        $state.transitionTo('login');

        // $state.go('login');
      }

    })
  $rootScope.$on('$stateChangeSuccess',
    function () {
      $rootScope.isBusy = !$rootScope.isBusy;

    })
}

export default OnRun;
