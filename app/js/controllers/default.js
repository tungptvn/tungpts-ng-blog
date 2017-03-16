function defaultCtrl(categoriesResolve, $state) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.categories = categoriesResolve;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;
  if ($state.$current.name == 'default') {
    $state.transitionTo('default.home');

  }
  console.log($state);

}

export default {
  name: 'defaultCtrl',
  fn: defaultCtrl
};
