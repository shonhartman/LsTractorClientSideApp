(function () {
    'use strict';

    angular.module('app.account')
        .controller('accountCtrl', ['$q', '$cookies', '$scope', '$window', '$location', '$http', '$routeParams', accountCtrl]);

    //ACCOUNT CONTROLLER
    function accountCtrl($q, $cookies, $scope, $window, $location, $http, $routeParams) {

        //GET ACCOUNT
        $scope.currentAccount = angular.fromJson($cookies.get('user'));

        $scope.editing = ''; //name of property currently being edited

        // used by signup
        $scope.dealershipFields = {
            'Dealership': ''
        };

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

            if (!$scope.formData || !$scope.dealershipFields) {
                return;
            }

            $http.put('http://lstractorquizapi.azurewebsites.net/api/Users', {
                    "DealershipId": parseInt($scope.dealershipFields.Dealership, 10),
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
        $scope.updateAccount = function (updatedAccount) {

            return $http.put('http://lstractorquizapi.azurewebsites.net/api/Users?userId=' + updatedAccount.Id, updatedAccount)
                .then(function (response) {
                    console.log(response.data);
                    updateAccountCookieFromScope();
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

        //TODO: GET TOTAL USER RESULTS
        //GET api/Users?userId={userId}

        $scope.edit = function (itemName) {
            console.log("Editing.");
            $scope.editing = itemName;
        };

        $scope.doneEditing = function () {
            console.log("Done editing.");
            $scope.updateAccount($scope.currentAccount).then(function () {
                $scope.editing = '';
            });
        };

        function updateAccountCookieFromScope()
        {
            $cookies.put('user', angular.toJson($scope.currentAccount));
        }
    }

})();