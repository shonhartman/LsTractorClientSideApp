(function () {
    'use strict';

    angular.module('app.page')
        .controller('authCtrl', ['$q', '$cookies', '$scope', '$window', '$location', '$http', '$routeParams', authCtrl])
        .controller('headerCtrl', ['$scope', '$cookies', '$location', headerCtrl]);

    function headerCtrl($scope, $cookies, $location) {
        $scope.logout = function () {
            $cookies.remove('user');
            $location.url('/pages/signin');
            console.log("removing cookie");
        }
    }

    //AUTH CONTROLLER
    function authCtrl($q, $cookies, $scope, $window, $location, $http, $routeParams) {
        $scope.dealerships = [];

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships')
            .then(function (response) {
                $scope.dealerships = response.data._embedded.dealerships;
            });

        // Technican - 4
        // Dealership Owner - 5
        // Super Admin - 6

        //LOGIN FUNCTION
        // $scope.login = function () {

        //     if (!$scope.formData) {
        //         return;
        //     }

        //     $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/login', {
        //             "email": $scope.formData.Username,
        //             "password": $scope.formData.Password
        //         })
        //         .then(function (response) {
        //             // request user details
        //             return $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers/' + response.data.userId);
        //         }, function (response) {
        //             // authentication failed - need to show login error message
        //             console.log('Login error...');
        //             return $q.reject();
        //         })
        //         .then(function (response) {
        //             // save user to cookie
        //             $cookies.put('user', angular.toJson(response.data));
        //             $location.url('/dashboard');
        //         });
        // }

        // TEMP login method that only validates username
        $scope.login = function () {

            if (!$scope.formData || !$scope.formData.Username) {
                return;
            }

            $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers')
                .then(function (response) {

                    var users = response.data._embedded.appUsers;

                    var userToLogIn = users.find(function (user) {
                        return user.email === $scope.formData.Username;
                    });

                    if (userToLogIn) {

                        //update scope user name (incase user was previously logged in with another username)
                        $scope.main.name = userToLogIn.firstName + ' ' + userToLogIn.lastName;

                        // save user to cookie
                        $cookies.put('user', angular.toJson(userToLogIn));
                        $location.url('/dashboard');
                    }
                });
        }

        //SAVES USER TO DATABASE
        $scope.signup = function () {
            console.log($scope.formData);

            $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers', {
                    "firstName": $scope.formData.FirstName,
                    "lastName": $scope.formData.LastName,
                    "email": $scope.formData.Email,
                    "birthDate": $scope.formData.BirthDate,
                    "password": $scope.formData.Password,
                    "phoneNumber": $scope.formData.PhoneNumber,
                    "roleId": parseInt($scope.formData.Role, 10),
                    "dealership": $scope.formData.Dealership,
                    "userRole": 'http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/userRoles/' + $scope.formData.Role

                })
                .then(function (response) {
                    $cookies.put('user', angular.toJson(response.data));
                    $location.url('/dashboard');
                });
        }
    }

})();