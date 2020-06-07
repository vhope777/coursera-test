(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })


  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/templates/category-list.template.html',
    controller: 'categoryListController as cateCtrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
  	url: '/items/{category}',
    templateUrl: "src/templates/items.template.html",
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.category);
     }]
    }
  });



}
})();