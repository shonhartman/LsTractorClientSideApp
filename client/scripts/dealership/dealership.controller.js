(function () {
    'use strict';

    angular.module('app.dealership')
        .controller('authCtrl', ['$q', '$cookies', '$scope', '$window', '$location', '$http', '$routeParams', authCtrl]);

//GET A LIST OF ALL DEALERSHIPS
    function authCtrl($q, $cookies, $scope, $window, $location, $http, $routeParams) {
        $scope.dealerships = [];

        $http.get('http://lstractorquizapi.azurewebsites.net/api/Dealerships')
            .then(function (response) {
                $scope.dealerships = response.data._embedded.dealerships;//This is probably a different endpoint??
            });

        // Technican - 4
        // Dealership Owner - 5
        // Super Admin - 6

//CREATE A NEW DEALERSHIP
    $scope.createDealership = function () {
        $http.post('http://lstractorquizapi.azurewebsites.net/api/Dealerships?requests[0].Name={requests[0].Name}&requests[0].Number={requests[0].Number}&requests[0].Address={requests[0].Address}&requests[0].Owner={requests[0].Owner}&requests[0].City={requests[0].City}&requests[0].State={requests[0].State}&requests[0].ZipCode={requests[0].ZipCode}&requests[0].Phone={requests[0].Phone}&requests[0].Fax={requests[0].Fax}&requests[0].Email={requests[0].Email}&requests[1].Name={requests[1].Name}&requests[1].Number={requests[1].Number}&requests[1].Address={requests[1].Address}&requests[1].Owner={requests[1].Owner}&requests[1].City={requests[1].City}&requests[1].State={requests[1].State}&requests[1].ZipCode={requests[1].ZipCode}&requests[1].Phone={requests[1].Phone}&requests[1].Fax={requests[1].Fax}&requests[1].Email={requests[1].Email}')
        .then(function(response) {
            $scope.videos.push(dealership);
        })
    }

//UPDATE A DEALERSHIP BY ID
    $scope.currentDealership = $http.get('http://lstractorquizapi.azurewebsites.net/api/Dealerships/{id}');
    $scope.updateDealership = function (currentDealership) {        
        $http.put('http://lstractorquizapi.azurewebsites.net/api/Dealerships?dealershipId={dealershipId}&Name={Name}&Number={Number}&Address={Address}&Owner={Owner}&City={City}&State={State}&ZipCode={ZipCode}&Phone={Phone}&Fax={Fax}&Email={Email}')
            .then(function(response) {
                logger.logSuccess("{{dealership.name}} was updated successfully.");
                $location.url("/#/dashboard");
            })
        }

//DELETE DEALERSHIP BY ID
    $scope.deleteDealership = function (currentDealership) {
            $http.delete('http://lstractorquizapi.azurewebsites.net/api/Dealerships?dealershipId={dealershipId}')
                .then(function (response) {
                    logger.logSuccess("You successfully deleted{{dealership.name}}.");
                    $location.url("/#/dashboard");
                });
        }
    }
    
})();

        