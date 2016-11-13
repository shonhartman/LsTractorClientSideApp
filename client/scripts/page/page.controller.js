(function () {
    'use strict';

    angular.module('app.page')
        .controller('authCtrl', ['$cookies', '$scope', '$window', '$location', '$http', authCtrl])
    
//AUTH CONTROLLER
    function authCtrl($cookies, $scope, $window, $location, $http) {
        $scope.dealerships = [];

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships')
            .then(function(response) {
                $scope.dealerships = [];
                response.data._embedded.dealerships.forEach(function(dealership) {
                    var splitUrl = dealership._links.self.href.split("/");
                    dealership.id = splitUrl[splitUrl.length - 1];
                    $scope.dealerships.push(dealership);
                });
            });


            $scope.test = function () {
                $http.get('http://tractorquizapp.azurewebsites.net/MainController/Test', { test:"Test String" })
                .success(function(data) {
                    console.log(data);
                })
            }

// Technican - 4
// Dealership Owner - 5
// Super Admin - 6

            $scope.login = function() {
                $cookies.put('userId', 'REPLACE-ME-WITH-REAL-USER-INFO');
                $location.url('/dashboard')
            }

//SAVE USER TO DATABASE

// THIS IS WHAT I IMAGINE IT TO BE
            $scope.signup = function() {
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
                        "roleId": $scope.formData.Role,
                        "dealership": $scope.formData.Dealership
                    })
                .then(function(response) {
                    console.log("Successful Sign Up");
                    console.log(response);
                });
            }     
             
    }

})(); 

     
        
    


