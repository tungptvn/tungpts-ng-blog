function postMngCtrl(postList) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.postList = postList;
  vm.searchText = 'asdas';
  vm.title = 'Posts Management';
}

export default {
  name: 'postMngCtrl',
  fn: postMngCtrl
};
