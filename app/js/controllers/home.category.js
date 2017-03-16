function categoryCtrl(postByCategoryResolve) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.title = 'this is category state';
  vm.posts = postByCategoryResolve;
  console.log('postByCategoryResolve', vm.posts);
}

export default {
  name: 'categoryCtrl',
  fn: categoryCtrl
};
