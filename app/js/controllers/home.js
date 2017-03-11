function homeCtrl(categoriesResolve) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.categories = categoriesResolve;
  
  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

}

export default {
  name: 'homeCtrl',
  fn: homeCtrl
};
