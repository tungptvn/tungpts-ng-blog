
function homeCtrl(postService) {
 'ngInject';
  // ViewModel
  const vm = this;
  postService.get();
  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

}

export default {
  name: 'homeCtrl',
  fn: homeCtrl
};
