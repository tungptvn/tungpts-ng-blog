function categoryCtrl(postByCategoryResolve, categoryResolve) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.title = 'this is category state';
  vm.category = categoryResolve;
  vm.posts = postByCategoryResolve;
}

export default {
  name: 'categoryCtrl',
  fn: categoryCtrl
};
