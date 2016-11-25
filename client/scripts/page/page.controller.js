(function () {
    'use strict';

    angular.module('app.page')
        .controller('authCtrl', ['$cookies', '$scope', '$window', '$location', '$http', '$routeParams', authCtrl])
        .controller('headerCtrl', ['$scope', '$cookies', '$location', headerCtrl]);

    function headerCtrl($scope, $cookies, $location) {
        $scope.logout = function () {
            $cookies.remove('user');
            $location.url('/');
            console.log("sorry to remove your cookie");
        }
    }

    //AUTH CONTROLLER
    function authCtrl($cookies, $scope, $window, $location, $http, $routeParams) {
        $scope.dealerships = [];
        $scope.userId = 0;

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships')
            .then(function (response) {
                $scope.dealerships = response.data._embedded.dealerships;
            });

        // Technican - 4
        // Dealership Owner - 5
        // Super Admin - 6

        //LOGIN FUNCTION
        $scope.login = function () {

            if (!$scope.formData) {
                return;
            }

            $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/login', {

                "email" : $scope.formData.Username,
                "password" : $scope.formData.Password
            })
                .then(function (response) {

                    if (!response.data.ok) {

                        // authentication failed - need to show login error message

                    } else {

                        var userId = response.data.userId;
                        $scope.userId = userId;

                        // now do a request for the user info and save it to cookie
                        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers/' + userId)
                            .then(function (response) {

                                var user = response.data;

                                if (!user) {
                                    return;
                                }

                                $cookies.put('user', angular.toJson(user));
                                $location.url('/dashboard');
                            });
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