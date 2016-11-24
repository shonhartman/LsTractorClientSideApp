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

            $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers')
                .then(function (response) {


                    var users = response.data._embedded.appUsers;
                    var username = $scope.formData.hasOwnProperty('Username') ? $scope.formData.Username : '';
                    var password = $scope.formData.hasOwnProperty('Password') ? $scope.formData.Password : '';

                    var user = users.find(function (user) {
                        // return user.email === username && user.password === password;
                        console.log(user.password);

                    });

                    if (!user) {
                        return;
                    }

                    $cookies.put('user', angular.toJson(user));
                    $location.url('/dashboard');
                });
        }

        //SAVES USER TO DATABASE
        $scope.signup = function () {
            console.log($scope.formData);

            // $location.url('/dashboard')
            $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers',
                {
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






