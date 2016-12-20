(function () {
    'use strict';

    angular.module('app.account')
        .controller('accountCtrl', ['$q', '$cookies', '$scope', '$window', '$location', '$http', '$routeParams', accountCtrl]);

    //ACCOUNT CONTROLLER
    function accountCtrl($q, $cookies, $scope, $window, $location, $http, $routeParams) {

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

            $http.post($scope.main.apiUrl + 'Users/SignIn', {
                    "Email": $scope.formData.Username,
                    "Password": $scope.formData.Password
                })
                .then(function (response) {

                    //Save user to model and cookie
                    $scope.main.user = response.data;
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

            $http.put($scope.main.apiUrl + 'Users/CreateNewUser', {
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
                    $scope.main.user = response.data;
                    $cookies.put('user', angular.toJson(response.data));
                    $location.url('/dashboard');
                }, function (response) {
                    // create user failed
                    console.log(response.data.Message);
                });
        }

        //UPDATE USER BY ID
        $scope.updateAccount = function (updatedAccount) {

            return $http.put($scope.main.apiUrl + 'Users/UpdateUser/' + updatedAccount.Id, updatedAccount)
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

            $http.delete($scope.main.apiUrl + 'Users/DeleteUser/' + userId)
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
            $scope.updateAccount($scope.main.user).then(function () {
                $scope.editing = '';
            });
        };

        function updateAccountCookieFromScope()
        {
            $cookies.put('user', angular.toJson($scope.main.user));
        }
    }

})();