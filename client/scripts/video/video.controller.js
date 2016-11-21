(function () {
    'use strict';

    angular.module('app.video')  
        .controller('ProgressDemoCtrl', ['$scope', ProgressDemoCtrl])
        .controller('SkillSetCtrl', ['$modal', '$scope', '$http', '$routeParams', 'logger', '$location', SkillSetCtrl])        
        .controller('VideoCtrl', ['$cookies', '$scope', '$routeParams', '$location', '$http', '$modal', VideoCtrl]);

        function ProgressDemoCtrl($scope) {
            $scope.max = 200;

            $scope.random = function() {
                var type, value;
                value = Math.floor((Math.random() * 100) + 10);
                type = void 0;
                if (value < 25) {
                    type = "success";
                } else if (value < 50) {
                    type = "info";
                } else if (value < 75) {
                    type = "warning";
                } else {
                    type = "danger";
                }
                $scope.showWarning = type === "danger" || type === "warning";
                $scope.dynamic = value;
                $scope.type = type;
        };

            $scope.random();
    }

        function SkillSetCtrl($modal, $scope, $http, $routeParams, logger, $location) {
            $scope.skillsets = [];

            $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets')
                .then(function(response) {
                    $scope.skillsets = [];
                    response.data._embedded.skillSets.forEach(function(skillset) {
                        var splitUrl = skillset._links.self.href.split("/");
                        skillset.id = splitUrl[splitUrl.length - 1];
                        $scope.skillsets.push(skillset);
                        // console.log(skillset);
                    });
                });
            $scope.goToSkillSet = function () {
                location.href = '#/pages/skill-set-details/{{ skillset.id }}';  
            }
            $scope.deleteSkillSet = function() {
                $http.delete('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets/' + $routeParams.id)
                .then(function (response) {
                        logger.logSuccess("Well done! You successfully deleted that video.");
                        $location.url("/#/skill-set");
                });
            }
//Add Skill Set Modal
            $scope.addSkillSet = function(video) {
                var modalInstance;
                modalInstance = $modal.open({
                    templateUrl: "skillSetModal.html",
                    controller: 'ModalInstanceCtrl',
                    resolve: {
                        video: function() {
                            return {}; 
                        },
                        titles: function() {
                            return $scope.titles;
                        }
                    }
                });
                modalInstance.result.then((function(response) {
                    $scope.skillsets.push(response.data); //adds the new Skill Set to the collection
                }), function() {
                    $log.info("Modal dismissed at: " + new Date());
                });
        }
    }

        function VideoCtrl($cookies, $scope, $routeParams, $location, $http, $modal) {
            var skillSet = $routeParams.id;
            $scope.videos = [];
            $scope.skillSet = null;
            $scope.user = angular.fromJson($cookies.get('user'));

            $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets/' + $routeParams.id)
                .then(function (response) {
                    $scope.skillSet = response.data;
                });

            $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets/' + $routeParams.id + '/listOfVideo')
                .then(function (response) {
                    $scope.videos = [];
                    response.data._embedded.videos.forEach(function (video) {
                        var splitUrl = video._links.self.href.split("/");
                        video.id = splitUrl[splitUrl.length - 1];
                        $scope.videos.push(video);
                    });
                    console.log($scope.videoResults);
                });

            $scope.open = function(id) {
                location.href = '/#/quizes/quiz/' + id;            
            }   

            $scope.edit = function(video) {
                var modalInstance;
                modalInstance = $modal.open({
                    templateUrl: "myEditModal.html",
                    controller: 'ModalInstanceCtrl',
                    resolve: {
                        video: function() {
                            return video; 
                        },
                        titles: function() {
                            return $scope.titles;
                        }
                    }
                });
                modalInstance.result.then((function(selectedItem) {
                    $scope.selected = selectedItem;
                }), function() {
                    $log.info("Modal dismissed at: " + new Date());
                });
            }
        }

})(); 
