(function () {
    'use strict';

    angular.module('app.ui.form.validation')
        .controller('formConstraintsCtrl', ['$scope', formConstraintsCtrl])
        // .controller('signinCtrl', ['$scope', signinCtrl])
        .controller('signupCtrl', ['$scope', signupCtrl]);

    function formConstraintsCtrl($scope) {
        var original;

        $scope.form = {
            required: '',
            minlength: '',
            maxlength: '',
            length_rage: '',
            type_something: '',
            confirm_type: '',
            foo: '',
            email: '',
            url: '',
            num: '',
            minVal: '',
            maxVal: '',
            valRange: '',
            pattern: ''
        };

        original = angular.copy($scope.form);

        $scope.revert = function() {
            $scope.form = angular.copy(original);
            return $scope.form_constraints.$setPristine();
        };

        $scope.canRevert = function() {
            return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
        };

        $scope.canSubmit = function() {
            return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
        };
    }

    function signupCtrl($scope) {
        var original;

        $scope.user = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            dateOfBirth: '',
            phoneNumber: '',
            administrationLevel: ''
        };    

        $scope.showInfoOnSubmit = false;

        original = angular.copy($scope.user);

        $scope.revert = function() {
            $scope.user = angular.copy(original);
            $scope.form_signup.$setPristine();
            return $scope.form_signup.confirmPassword.$setPristine();
        };

        $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
        };

        $scope.canSubmit = function() {
            return $scope.form_signup.$valid && !angular.equals($scope.user, original);
        };

        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };

    }

})(); 