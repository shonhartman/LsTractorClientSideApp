(function () {
    'use strict';

    angular.module('app.ui')
        .controller('AlertDemoCtrl', ['$scope', AlertDemoCtrl])
        .controller('BadgeCtrl', ['$scope', BadgeCtrl])
        .controller('CollapseDemoCtrl', ['$scope', CollapseDemoCtrl])
        .controller('LoaderCtrl', ['$scope', 'cfpLoadingBar', LoaderCtrl])
        .controller('NotifyCtrl', ['$scope', 'logger', NotifyCtrl])
        .controller('PaginationDemoCtrl', ['$scope', PaginationDemoCtrl]);

    function LoaderCtrl($scope, cfpLoadingBar) {
        $scope.start = function() {
            cfpLoadingBar.start();
        }

        // increments the loading bar by a random amount.
        $scope.inc = function() {
            cfpLoadingBar.inc();
        }

        $scope.set = function() {
            cfpLoadingBar.set(0.3);
        }

        $scope.complete = function() {
            cfpLoadingBar.complete()
        }
    }

    function NotifyCtrl($scope, logger) {
        $scope.notify = function(type) {
            switch (type) {
                case 'info':
                    return logger.log("Heads up! This alert needs your attention, but it's not super important.");
                case 'success':
                    return logger.logSuccess("Well done! You successfully uploaded a video.");
                case 'warning':
                    return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
                case 'error':
                    return logger.logError("Oh snap! Change a few things up and try submitting again.");
            }
        };
    }

    function AlertDemoCtrl($scope) {
        $scope.alerts = [
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.'
            }, {
                type: 'info',
                msg: 'Heads up! This alert needs your attention, but it is not super important.'
            }, {
                type: 'warning',
                msg: "Warning! Best check yo self, you're not looking too good."
            }, {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            }
        ];

        $scope.addAlert = function() {
            var num, type;
            num = Math.ceil(Math.random() * 4);
            type = void 0;
            switch (num) {
                case 0:
                    type = 'info';
                    break;
                case 1:
                    type = 'success';
                    break;
                case 2:
                    type = 'info';
                    break;
                case 3:
                    type = 'warning';
                    break;
                case 4:
                    type = 'danger';
            }
            return $scope.alerts.push({
                type: type,
                msg: "Another alert!"
            });
        };

        $scope.closeAlert = function(index) {
            return $scope.alerts.splice(index, 1);
        };
    }

    function CollapseDemoCtrl($scope) {
        $scope.isCollapsed = true;
    }

//BADGE CONTROLLER
    function BadgeCtrl($scope) {
        $scope.goToSkillSet = function () {
            location.href = '/#/pages/skill-set';  
        }
    }

//PAGINATION CONTROLLER
     function PaginationDemoCtrl($scope) {
        $scope.totalItems = 64;

        $scope.currentPage = 4;

        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.maxSize = 5;

        $scope.bigTotalItems = 175;

        $scope.bigCurrentPage = 1;
    }
    
})(); 