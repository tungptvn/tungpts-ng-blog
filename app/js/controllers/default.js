function defaultCtrl(categoriesResolve, $state) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.categories = categoriesResolve;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;
  $state.transitionTo('default.home');

}

export default {
  name: 'defaultCtrl',
  fn: defaultCtrl
};
