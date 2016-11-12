(function () {
    'use strict';

    angular.module('app.page')
        .controller('invoiceCtrl', ['$scope', '$window', invoiceCtrl])
        .controller('authCtrl', ['$scope', '$window', '$location', authCtrl])
        .controller('formCtrl', ['$scope', '$http', formCtrl])

    function invoiceCtrl($scope, $window) {
        var printContents, originalContents, popupWin;
        
        $scope.printInvoice = function() {
            printContents = document.getElementById('invoice').innerHTML;
            originalContents = document.body.innerHTML;        
            popupWin = window.open();
            popupWin.document.open();
            popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + '</html>');
            popupWin.document.close();
        }
    }

    
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

//  FROM TUTORIAL    

        function formCtrl($scope, $http) {
                //create a blank object to hold our form information
                //$scope will allow this to pass between controller and view
                $scope.formData = {};
            }      

            $scope.processForm = function() {
                $http({
                    method: 'POST',
                    url: '',
                    data: $.param($scope.formData), //pass in data as strings
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'} // set the headers so angular passes info as form data     
                })
                .success(function(data) {
                    console.log(data);
                })
            }

            $scope.reset =  function() {
                $location.url('/')
            }

            $scope.unlock =  function() {
                $location.url('/')
            }   
    }

})(); 

     
        
    


