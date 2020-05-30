(function () {
'use strict';

angular.module('MenuApp')
.controller('categoryListController', categoryListController);


categoryListController.$inject = ['items'];
function categoryListController(items) {
  var cateCtrl = this;
  cateCtrl.items = items;
}

})();
