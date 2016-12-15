(function () {
    'use strict';

    angular.module('app.dealership')
        .controller('dealershipCtrl', ['$q', '$cookies', '$scope', '$window', '$location', '$http', '$routeParams', dealershipCtrl]);

    //GET A LIST OF ALL DEALERSHIPS
    function dealershipCtrl($q, $cookies, $scope, $window, $location, $http, $routeParams) {

        var currentUser = angular.fromJson($cookies.get('user'));
        $scope.editing = ''; //name of property currently being edited
        $scope.dealerships = [];

        if(currentUser)
        {
            $scope.currentDealership = currentUser.Dealership;
        }

        $http.get('http://lstractorquizapi.azurewebsites.net/api/Dealerships')
            .then(function (response) {
                $scope.dealerships = response.data;
            });

        // Technican - 4
        // Dealership Owner - 5
        // Super Admin - 6

        //CREATE A NEW DEALERSHIP
        $scope.createDealership = function () {
            $http.post('http://lstractorquizapi.azurewebsites.net/api/Dealerships', [{
                    "Name": "sample string 1",
                    "Number": 2,
                    "Address": "sample string 3",
                    "Owner": "sample string 4",
                    "City": "sample string 5",
                    "State": "sample string 6",
                    "ZipCode": 7,
                    "Phone": "sample string 8",
                    "Fax": "sample string 9",
                    "Email": "sample string 10"
                }])
                .then(function (response) {
                    $scope.dealerships.push(dealership);
                })
        }

        //UPDATE A DEALERSHIP BY ID
        $scope.updateDealership = function (updatedDealership) {
            return $http.put('http://lstractorquizapi.azurewebsites.net/api/Dealerships?dealershipId=' + updatedDealership.Id, updatedDealership)
                .then(function (response) {
                    console.log(response.data);
                    updateDealershipCookieFromScope();
                }, function(response) {
                    // update failed
                    console.log(response.data.Message);
                });
        }

        //DELETE DEALERSHIP BY ID
        $scope.deleteDealership = function (currentDealership) {
            $http.delete('http://lstractorquizapi.azurewebsites.net/api/Dealerships?dealershipId=' + currentDealership.Id)
                .then(function (response) {
                    logger.logSuccess("You successfully deleted {{dealership.name}}.");
                    $location.url("/#/dashboard");
                });
        }

        $scope.edit = function (itemName) {
            console.log("Editing.");
            $scope.editing = itemName;
        };

        $scope.doneEditing = function () {
            console.log("Done editing.");
            $scope.updateDealership($scope.currentDealership).then(function () {
                $scope.editing = '';
            });
        };

        function updateDealershipCookieFromScope()
        {
            var userCookie = angular.fromJson($cookies.get('user'));
            userCookie.Dealership = $scope.currentDealership;
            $cookies.put('user', angular.toJson(userCookie));
        }
    }

})();