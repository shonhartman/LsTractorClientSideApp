(function () {
    'use strict';

    angular.module('app.page')
        .controller('authCtrl', ['$scope', '$window', '$location', '$http', authCtrl])
    
//AUTH CONTROLLER
    function authCtrl($scope, $window, $location, $http) {
            $scope.test = function () {
                $http.get('http://tractorquizapp.azurewebsites.net/MainController/Test', { test:"Test String" })
                .success(function(data) {
                    console.log(data);
                })
            }


            $scope.login = function() {
                $location.url('/dashboard')
            }

//SAVE USER TO DATABASE

// THIS IS WHAT I IMAGINE IT TO BE
            // $scope.signup = function() {
            //     $location.url('/dashboard')
            //     $http.post('http://tractorquizapp.azurewebsites.net/MainController/CreateNewUser', 
            //     {FirstName: "Shaun"})
            //     .then((response) => {
            //         console.log("Successful Sign Up");
            //         console.log(response);
            //     })
            // }     
             
    }

})(); 

     
        
    


