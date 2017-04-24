function homeCtrl(postList) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.postList = postList;
  vm.title = 'this is home state';
}

export default {
  name: 'homeCtrl',
  fn: homeCtrl
};
