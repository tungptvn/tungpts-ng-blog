function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider,$logProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }
  app.config(function ($logProvider) {
    $logProvider.debugEnabled(true);
  });

  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $stateProvider
    .state('default', {
      url: '/',
      controller: 'defaultCtrl as default',
      templateUrl: 'default.html',
      title: 'default',
      resolve: {
        categoriesResolve: function (categoriesService) {
          return categoriesService.getAll();
        }
      }
    })
    .state('default.home', {

      templateUrl: 'home/index.html',
      controller: 'homeCtrl as home',
      title: 'home',
      resolve: {
        postList: function (postService) {
          return postService.getEnablePosts();
        }
      }
    }).state('default.about', {
      url: 'about',
      controller: 'aboutCtrl as about',
      templateUrl: 'home/about.html',
      title: 'about'
    }).state('default.contact', {
      url: 'contact',
      controller: 'contactCtrl as contact',
      templateUrl: 'home/contact.html',
      title: 'contact'
    })
    .state('default.category', {
      url: 'category/:Id',
      controller: 'categoryCtrl as category',
      templateUrl: 'home/category.html',
      title: 'category',
      resolve: {
        categoryResolve: function (categoriesService, $stateParams) {
          return categoriesService.getBy($stateParams.Id);
        },
        postByCategoryResolve: function (postService, $stateParams) {
          return postService.getPostByCategory($stateParams.Id);
        }
      }
    }).state('default.post', {
      url: 'post/:Id',
      controller: 'postCtrl as post',
      templateUrl: 'home/post.html',
      title: 'post',
      resolve: {
        postResolve: function (postService, $stateParams) {
          return postService.getBy($stateParams.Id);
        }
      }
    })
    .state('admin', {
      url: '/admin',
      controller: 'adminCtrl as admin',
      templateUrl: 'admin/index.html',
      title: 'admin',
      resolve: {
        currentUserRoles: function (userService) {
          return userService.getCurrentUserRoles()
        }
      }

    })
    .state('admin.postMng', {
      url: '/postMng',
      controller: 'postMngCtrl as postMng',
      templateUrl: 'admin/post.mng.html',
      title: 'postMng',
      resolve: {
        postList: function (postService) {
          return postService.getAll();
        },
        catList: function (categoriesService) {
          return categoriesService.getAll()
        }
      }
    })
    .state('admin.postSave', {
      url: '/postSave/:Id',
      controller: 'postSaveCtrl as postSave',
      templateUrl: 'admin/post.save.html',
      title: 'postSave',
      resolve: {
        postItem: function (postService, $stateParams) {
          return postService.getBy($stateParams.Id);
        },
        catList: function (categoriesService) {
          return categoriesService.getAll();
        }
      }
    })
    .state('admin.catMng', {
      url: '/catMng',
      controller: 'catMngCtrl as catMng',
      templateUrl: 'admin/cat.mng.html',
      title: 'catMng',
      resolve: {
        catList: function (categoriesService) {
          return categoriesService.getAll();
        }
      }
    })
    .state('admin.catSave', {
      url: '/catSave/:Id',
      controller: 'catSaveCtrl as catSave',
      templateUrl: 'admin/cat.save.html',
      title: 'catSave',
      resolve: {
        catItem: function (categoriesService, $stateParams) {
          return categoriesService.getBy($stateParams.Id);
        }
      }
    })
    .state('admin.userMng', {
      url: '/userMng',
      controller: 'userMngCtrl as userMng',
      templateUrl: 'admin/user.mng.html',
      title: 'userMng',
      resolve: {
        users: function (userService) {
          return userService.getAll();
        }
      }
    })
     .state('admin.userSave', {
      url: '/userSave/:Id',
      controller: 'userSaveCtrl as userSave',
      templateUrl: 'admin/user.save.html',
      title: 'userSave',
      resolve: {
        user: function (userService, $stateParams) {
          return userService.getBy($stateParams.Id);
        }
      }
    })
    .state('login', {
      url: '/login',
      controller: 'loginCtrl as loginVM',
      templateUrl: 'login/login.html',
      title: 'login',
    })
    .state('signIn', {
      url: '/signIn',
      controller: 'signInCtrl as signInVM',
      templateUrl: 'signIn/signIn.html',
      title: 'signIn',
    });



  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
