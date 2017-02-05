(function () {
    'use strict';

    angular.module('app.dealership')
        .controller('dealershipCtrl', ['$q', '$cookies', '$scope', '$window', '$location', '$http', '$routeParams', dealershipCtrl]);

    //GET A LIST OF ALL DEALERSHIPS
    function dealershipCtrl($q, $cookies, $scope, $window, $location, $http, $routeParams) {

        var currentUser = angular.fromJson($cookies.get('user'));
        $scope.currentDealership = {};
        $scope.editing = ''; //name of property currently being edited
        $scope.dealerships = [];
        $scope.detailPageEmployees = [];

        if (currentUser) {
            $scope.currentDealership = currentUser.Dealership;
        }

        $scope.goToDetail = function (dealershipId) {
            $location.url('/dealership-details/' + dealershipId);
        }

        // Technican - 4
        // Dealership Owner - 5
        // Super Admin - 6

        // GET INDIVIDUAL DEALERSHIP BY ID
        $scope.getDealership = function (dealershipId) {
            return $http.get($scope.main.apiUrl + 'Dealerships/GetDealership/' + dealershipId);
        }

        //CREATE A NEW DEALERSHIP
        $scope.createDealership = function () {

            if (!$scope.dealershipData) {
                return;
            }

            $http.post($scope.main.apiUrl + 'Dealerships/CreateNewDealerships', [{
                    "Name": $scope.dealershipData.Name,
                    "Number": parseInt($scope.dealershipData.Number, 10),
                    "Address": $scope.dealershipData.Address,
                    "Owner": $scope.dealershipData.Owner,
                    "City": $scope.dealershipData.City,
                    "State": $scope.dealershipData.State,
                    "ZipCode": parseInt($scope.dealershipData.ZipCode, 10),
                    "Phone": $scope.dealershipData.Phone,
                    "Fax": $scope.dealershipData.Fax,
                    "Email": $scope.dealershipData.Email
                }])
                .then(function (response) {
                    console.log(response);
                    $location.url("/dashboard");
                })
        }

        // UPDATE A DEALERSHIP BY ID
        $scope.updateDealership = function (updatedDealership) {
            return $http.put($scope.main.apiUrl + 'Dealerships/UpdateDealership/' + updatedDealership.Id, updatedDealership)
                .then(function (response) {
                    console.log(response.data);
                    updateDealershipCookieFromScope();
                }, function (response) {
                    // update failed
                    console.log(response.data.Message);
                });
        }

        // DELETE DEALERSHIP BY ID
        $scope.deleteDealership = function (currentDealership) {
            $http.delete($scope.main.apiUrl + 'Dealerships/DeleteDealership/' + currentDealership.Id)
                .then(function (response) {
                    logger.logSuccess("You successfully deleted {{dealership.name}}.");
                    $location.url("/dashboard");
                });
        }

        // GET LIST OF EMPLOYEES AND INDIVIDUAL PROGRESS
        $scope.getDealershipEmployeesReport = function (dealershipId) {
            return $http.get($scope.main.apiUrl + 'Dealerships/GetEmployeesReport/' + dealershipId);
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

        function updateDealershipCookieFromScope() {
            var userCookie = angular.fromJson($cookies.get('user'));
            userCookie.Dealership = $scope.currentDealership;
            $cookies.put('user', angular.toJson(userCookie));
        }

        // check for detail page
        var uriDealershipId = $routeParams.id;

        if (!uriDealershipId) {
            $http.get($scope.main.apiUrl + 'Dealerships/GetAllDealerships')
                .then(function (response) {
                    $scope.dealerships = response.data;
                });
        } else {
            // get data for the currently viewed dealership
            $scope.getDealership(uriDealershipId).then(function (response) {
                $scope.currentDealership = response.data;
            });
            // get dealership employees report
            $scope.getDealershipEmployeesReport(uriDealershipId).then(function (response) {
                $scope.detailPageEmployees = response.data;
            });
        }
    }

})();