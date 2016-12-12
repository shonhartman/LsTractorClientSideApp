(function () {
    'use strict';

    angular.module('app.account')
        .controller('accountCtrl', ['$q', '$cookies', '$scope', '$window', '$location', '$http', '$routeParams', accountCtrl]);

        //ACCOUNT CONTROLLER
        function accountCtrl($q, $cookies, $scope, $window, $location, $http, $routeParams) {

            //SIGN IN
            $scope.login = function () {
                
                if (!$scope.formData) {
                    return;
                }

                $http.post('http://lstractorquizapi.azurewebsites.net/api/Users?email={email}&password={password}', {
                    "email": $scope.formData.Username,
                    "password": $scope.formData.Password
                })
                .then(function (response) {
                    //request user details
                    return $http.get('http://lstractorquizapi.azurewebsites.net/api/Users?email={email}&password={password}' + response.data.userId);
                }, function (response) {
                    //authentication failed - need to show login error message
                    console.log('Login error...');
                    return $q.reject();
                })
                .then(function (response) {
                    //Save user to cookie
                    $cookies.put('user', angular.toJson(response.data));
                    $location.url('/dashboard');
                })
            }

            //CREATE NEW USER
            $scope.signup = function () {

                $http.put('http://lstractorquizapi.azurewebsites.net/api/Users?email={email}&password={password}', {
                    "firstName": $scope.formData.FirstName,
                    "lastName": $scope.formData.LastName,
                    "email": $scope.formData.Email,
                    "birthDate": $scope.formData.BirthDate,
                    "password": $scope.formData.Password,
                    "phoneNumber": $scope.formData.PhoneNumber,
                    "roleId": parseInt($scope.formData.Role, 10),
                    "dealership": $scope.formData.Dealership,
                    "userRole": $scope.formData.Role
                })
                .then(function (response) {
                    $cookies.put('user', angular.toJson(response.data));
                    $location.url('/dashboard');
                });
            }

            //GET ACCOUNT
            $scope.currentAccount = $http.get('http://lstractorquizapi.azurewebsites.net/api/Account');

            //GET ACCOUNT ERROR
            //?????????????????
            //GET api/Account?provider={provider}&error={error}

            //UPDATE USER BY ID
            $scope.updateAccount = function(currentAccount) {
                $http.put('http://lstractorquizapi.azurewebsites.net/api/Users?userId={userId}&DealershipId={DealershipId}&Role={Role}&FirstName={FirstName}&LastName={LastName}&BirthDate={BirthDate}&Email={Email}&Password={Password}&PhoneNumber={PhoneNumber}')
                    .then(function(response) {
                        logger.logSuccess("");
                        $location.url("/profile");
                    })
            }
            //DELETE USER BY ID
            $scope.deleteAccount = function (currentAccount) {
                $http.delete('http://lstractorquizapi.azurewebsites.net/api/Users/{id}')
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

// $http({method:'POST', url: 'http://api/Users?email={email}&password={password}', 
//     params: { "email": $scope.formData.Username, "password": $scope.formData.Password }, 
//     data: {  response });

