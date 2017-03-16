function postCtrl(postResolve) {
  'ngInject';
  const vm = this;
  vm.post = postResolve;
  console.log(`post`, vm.post);
  vm.title = 'post';
}

export default {
  name: 'postCtrl',
  fn: postCtrl
};
