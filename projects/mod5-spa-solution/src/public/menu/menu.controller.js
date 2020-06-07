(function() {
    'use strict';
    angular.module('public')
        .controller('MenuController', MenuController);
    MenuController.$inject = ['menuCategories'];

    function MenuController(menuCategories) {
        var menuCtrl = this;
        menuCtrl.menuCategories = menuCategories;
    }
})();
