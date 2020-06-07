(function() {
    'use strict';
    angular.module('public')
        .controller('SignUpController', SignUpController);
    SignUpController.$inject = ['UserService'];

    function SignUpController(UserService) {
        var signUpCtrl = this;
        signUpCtrl.processForm = function(completed) {
            if (!signUpCtrl.user) {
                signUpCtrl.user = {};
            }
            UserService.getUserFavMenu(signUpCtrl.user.favMenu)
                .then(function(result) {
                    signUpCtrl.error = false;
                    if (completed) {
                        UserService.setUserData(signUpCtrl.user);
                        signUpCtrl.completed = true;
                    } else {
                        signUpCtrl.valid = true;
                    }
                }).catch(function(e) {
                    signUpCtrl.valid = false;
                    signUpCtrl.error = true;
                    signUpCtrl.completed = false;
                });
        };
    }
})();