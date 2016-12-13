(function () {
    'use strict';

    angular.module('app.dealership')
        .controller('dealershipCtrl', ['$q', '$cookies', '$scope', '$window', '$location', '$http', '$routeParams', dealershipCtrl]);

    //GET A LIST OF ALL DEALERSHIPS
    function dealershipCtrl($q, $cookies, $scope, $window, $location, $http, $routeParams) {

        $scope.testing = function() {
            console.log("Testing!");
        }
        console.log("I am dealershipCtrl")
        $scope.dealerships = [];

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

        // TODO: get this from currentAccount model or directly from user cookie
        $scope.currentDealership = {}

        //UPDATE A DEALERSHIP BY ID
        $scope.updateDealership = function (currentDealership) {
            $http.put('http://lstractorquizapi.azurewebsites.net/api/Dealerships?dealershipId=' + currentDealership.Id, {
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
                })
                .then(function (response) {
                    logger.logSuccess("{{dealership.name}} was updated successfully.");
                    $location.url("/#/dashboard");
                }, function(response) {
                    // update failed
                    console.log(response.data.Message);
                });
        }

        //DELETE DEALERSHIP BY ID
        $scope.deleteDealership = function (currentDealership) {
            $http.delete('http://lstractorquizapi.azurewebsites.net/api/Dealerships?dealershipId=' + currentDealership.Id)
                .then(function (response) {
                    logger.logSuccess("You successfully deleted{{dealership.name}}.");
                    $location.url("/#/dashboard");
                });
        }
    }

})();