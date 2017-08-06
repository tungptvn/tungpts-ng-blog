import 'sweetalert';

function signInCtrl($log, authService, $state) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.title = 'this is signIn';
  vm.user = {};
  vm.signIn = function () {
    authService.signIn(vm.user).then(() => {
      swal(`Success`, `Go to AdminCP`, `success`);
      if ($state.$current.name == 'signIn') {
        $state.transitionTo('admin');
      }

      $log.debug("isAuthenticated", authService.isAuthenticated)
    }).catch(err => {
      swal(`Error`, `${err}`, `error`);
    });
  }
}

export default {
  name: 'signInCtrl',
  fn: signInCtrl
};
