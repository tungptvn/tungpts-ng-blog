import axios from 'axios';

function OnRun($rootScope, AppSettings) {
  'ngInject';
  axios.defaults.baseURL = AppSettings.apiUrl;
  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if (toState.title) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });

}

export default OnRun;
