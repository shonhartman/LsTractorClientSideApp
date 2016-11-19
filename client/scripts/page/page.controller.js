(function () {
    'use strict';

    angular.module('app.page')
        .controller('authCtrl', ['$cookies', '$scope', '$window', '$location', '$http', '$routeParams', authCtrl])

    //AUTH CONTROLLER
    function authCtrl($cookies, $scope, $window, $location, $http, $routeParams) {
        $scope.dealerships = [];

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships')
            .then(function (response) {
                $scope.dealerships = [];
                response.data._embedded.dealerships.forEach(function (dealership) {
                    var splitUrl = dealership._links.self.href.split("/");
                    dealership.id = splitUrl[splitUrl.length - 1];
                    $scope.dealerships.push(dealership);
                });
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
                        return user.email === username && user.password === password;
                    });

                    if (!user) {
                        return;
                    }

                    var userId = user._links.self.href.split('/').pop();
                    $cookies.put('userId', userId);
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
                    "phoneNumber": $scope.formData.PhoneNumber

                })
                .then(function (response) {
                    console.log("Successful Sign Up");
                    console.log(response);
                });
                $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/Roles' + $routeParams.id,
                {
                    "roleId": $scope.formData.Role
                })
                .then(function (response) {
                    console.log("Successful Role ID");
                    console.log(response);
                });
                $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships' + $routeParams.id,
                {
                    "dealership": $scope.formData.Dealership
                })
                .then(function (response) {
                    console.log("Successful Dealership ID");
                    console.log(response);
                });
        }
    }

})();






