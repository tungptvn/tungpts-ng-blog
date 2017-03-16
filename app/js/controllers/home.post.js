function postCtrl(postResolve) {
  'ngInject';
  const vm = this;
  vm.post = postResolve;
  vm.title = 'post';
}

export default {
  name: 'postCtrl',
  fn: postCtrl
};
