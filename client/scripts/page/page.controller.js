(function () {
    'use strict';

    angular.module('app.page')
        .controller('headerCtrl', ['$scope', '$cookies', '$location', headerCtrl]);

    //HEADER CONTROLLER
    function headerCtrl($scope, $cookies, $location) {
        $scope.logout = function () {
            $cookies.remove('user');
            $location.url('/pages/signin');
            console.log("removing cookie");
        }
    }
    
})();