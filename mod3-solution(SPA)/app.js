(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('APIBasePath', 'https://davids-restaurant.herokuapp.com')
        .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItems.html',
            restrict: 'E',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'narrow',
            bindToController: true
        };
        return ddo;
    }

    function FoundItemsDirectiveController() {
        var narrow = this;
        narrow.isEmptyItems = function() {
            if (narrow.items !== undefined && narrow.items.length === 0) {
                return true;
            }
            return false;
        };
    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrow = this;
        narrow.narrowItDown = function() {
            var promise = MenuSearchService.getMatchedMenuItems(narrow.search);
            promise.then(function(result) {
                narrow.found = result;
            }).catch(function(e) {
                console.log(e.message);
            });
        };
        narrow.removeItem = function(itemIndex) {
            narrow.found.splice(itemIndex, 1);
        }
    }
    MenuSearchService.$inject = ['$http', 'APIBasePath'];

    function MenuSearchService($http, APIBasePath) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: 'GET',
                url: (APIBasePath + '/menu_items.json')
            }).then(function success(result) {
                var foundItems = [];
                if (searchTerm !== undefined && searchTerm.length > 0) {
                    searchTerm = searchTerm.toLowerCase();
                    for (var i = 0; i < result.data.menu_items.length; i++) {
                        var menu_item = result.data.menu_items[i];
                        var description = menu_item.description.toLowerCase();
                        if (description.indexOf(searchTerm) !== -1) {
                            foundItems.push(menu_item);
                        }
                    }
                }
                return foundItems;
            }, function error(response) {
                throw new Error("Error occured!");
            });

        };

    }

})();