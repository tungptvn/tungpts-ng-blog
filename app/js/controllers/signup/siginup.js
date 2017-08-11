import 'sweetalert';

function signUpCtrl($log, authService, $state) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.title = 'this is signUp';
  vm.user = {};
  vm.signIn = function () {
    authService.signIn(vm.user).then(() => {
      swal(`Success`, `Go to AdminCP`, `success`);
      if ($state.$current.name == 'signUp') {
        $state.transitionTo('admin');
      }

      $log.debug("isAuthenticated", authService.isAuthenticated)
    }).catch(err => {
      swal(`Error`, `${err}`, `error`);
    });
  }
}

export default {
  name: 'signUpCtrl',
  fn: signUpCtrl
};
