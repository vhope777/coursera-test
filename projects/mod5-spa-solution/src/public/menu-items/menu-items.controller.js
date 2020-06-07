(function() {
    'use strict';
    angular.module('public')
        .controller('MenuItemsController', MenuItemsController);
    MenuItemsController.$inject = ['menuItems'];

    function MenuItemsController(menuItems) {
        var menuItemsCtrl = this;
        menuItemsCtrl.menuItems = menuItems;
    }
})();