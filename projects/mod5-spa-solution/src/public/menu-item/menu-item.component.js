(function() {
    'use strict';
    angular.module('public')
        .component('menuItem', {
            templateUrl: 'src/public/menu-item/menu-item.html',
            bindings: {
                item: '<'
            },
            controller: MenuItemController
        });
    MenuItemController.$inject = ['APIBasePath'];

    function MenuItemController(APIBasePath) {
        var $ctrl = this;
        $ctrl.basePath = APIBasePath;
    }
})();
