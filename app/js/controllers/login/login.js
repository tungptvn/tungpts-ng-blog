import 'sweetalert';

function loginCtrl($log, authService, $state) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.title = 'this is login';
  vm.userCred = {};
  vm.login = function () {
    authService.login(vm.userCred).then(() => {
      swal(`Success`, `Go to AdminCP`, `success`);
      if ($state.$current.name == 'login') {
        $state.transitionTo('admin');
      }

      $log.debug("isAuthenticated", authService.isAuthenticated)
    }).catch(err => {
      swal(`Error`, `${err.error_description}`, `error`);
    });
  }
}

export default {
  name: 'loginCtrl',
  fn: loginCtrl
};
