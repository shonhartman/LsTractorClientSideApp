(function () {
    'use strict';

    angular.module('app.account')
        .controller('accountCtrl', ['$q', '$cookies', '$scope', '$window', '$location', '$http', '$routeParams', accountCtrl]);

    //ACCOUNT CONTROLLER
    function accountCtrl($q, $cookies, $scope, $window, $location, $http, $routeParams) {

        //GET ACCOUNT
        $scope.currentAccount = angular.fromJson($cookies.get('user'));

        //SIGN IN
        $scope.login = function () {

            if (!$scope.formData || !$scope.formData.Username || !$scope.formData.Password) {
                return;
            }

            $http.post('http://lstractorquizapi.azurewebsites.net/api/Users', {
                    "Email": $scope.formData.Username,
                    "Password": $scope.formData.Password
                })
                .then(function (response) {

                    //Save user to model and cookie
                    $scope.currentAccount = response.data;
                    $cookies.put('user', angular.toJson(response.data));
                    $location.url('/dashboard');

                }, function (response) {

                    //authentication failed - need to show login error message
                    console.log(response.data.Message);
                });
        }

        //CREATE NEW USER
        $scope.signup = function () {

            if (!$scope.formData) {
                return;
            }

            $http.put('http://lstractorquizapi.azurewebsites.net/api/Users', {
                    "DealershipId": $scope.formData.Dealership,
                    "Role": parseInt($scope.formData.Role, 10),
                    "FirstName": $scope.formData.FirstName,
                    "LastName": $scope.formData.LastName,
                    "BirthDate": $scope.formData.BirthDate,
                    "Email": $scope.formData.Email,
                    "Password": $scope.formData.Password,
                    "PhoneNumber": $scope.formData.PhoneNumber
                })
                .then(function (response) {
                    $scope.currentAccount = response.data;
                    $cookies.put('user', angular.toJson(response.data));
                    $location.url('/dashboard');
                }, function (response) {
                    // create user failed
                    console.log(response.data.Message);
                });
        }

        //UPDATE USER BY ID
        $scope.updateAccount = function (currentAccount) {

            $http.put('http://lstractorquizapi.azurewebsites.net/api/Users?userId=' + currentAccount.Id, {
                    "DealershipId": 1,
                    "Role": 4,
                    "FirstName": "sample string 3",
                    "LastName": "sample string 4",
                    "BirthDate": "sample string 5",
                    "Email": "sample string 6",
                    "Password": "sample string 7",
                    "PhoneNumber": "sample string 8"
                })
                .then(function (response) {
                    logger.logSuccess("");
                    $location.url("/profile");
                }, function (response) {
                    // update failed
                    console.log(response.data.Message);
                });
        }

        //DELETE USER BY ID
        $scope.deleteAccount = function (currentAccount) {

            // TODO: get this from formData
            var userId = -1;

            $http.delete('http://lstractorquizapi.azurewebsites.net/api/Users/' + userId)
                .then(function (response) {
                    logger.logSuccess("You successfully deleted {{account.name}}");
                    $location.url("/#/dashboard");
                })
        }

        //GET TOTAL USER RESULTS
        //??????????????????????
        //GET api/Users?userId={userId}
    }

})();