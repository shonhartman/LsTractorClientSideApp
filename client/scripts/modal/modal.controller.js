   (function () {
    'use strict';

    angular.module('app.modal')
        
        .controller('ModalDemoCtrl', ['$scope', '$modal', '$log', 'logger', ModalDemoCtrl])
        .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'titles', 'video', 'logger', '$routeParams', '$http', '$log', ModalInstanceCtrl])


    function ModalDemoCtrl($scope, $modal, $log) {

        $scope.open = function() {
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: "myModalContent.html",
                controller: 'ModalInstanceCtrl',
                resolve: {
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
        };
        $scope.skillSetModal = function() {
            console.log("Modalling!");
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: "skillSetModal.html",
                controller: 'ModalInstanceCtrl',
                resolve: {
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
        };

    }
   
   function ModalInstanceCtrl($scope, $modalInstance, titles, video, logger, $routeParams, $http, $log) {
        $scope.titles = titles;
        $scope.video = video;

        $scope.ok = function() {
            $modalInstance.close($scope.selected.title);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };

        $scope.upload = function (video) {

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
                $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos', {
                   
                    "title" : $scope.videoTitle,
                    "author" : $scope.videoAuthor,
                    "url" : $scope.videoUrlData,
                    "skillSet" : "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets/" + $routeParams.id
                })
                    .then(function (response) {
                        console.log(response);

                //CLOSE THE Modal
                $modalInstance.close('success');
                    //SHOW SUCCESS MESSAGE
                    switch ('success') {
                        case 'info':
                            return logger.log("Heads up! This alert needs your attention, but it's not super important.");
                        case 'success':
                            return logger.logSuccess("Well done! You successfully uploaded a video.");
                        case 'warning':
                            return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
                        case 'error':
                            return logger.logError("Oh snap! Change a few things up and try submitting again.");
                    }
                });
            }

//EDIT VIDEO
        $scope.updateVideo = function() {
                $http.put('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos', {
                   
                    "title" : $scope.videoTitle,
                    "author" : $scope.videoAuthor,
                    "url" : $scope.videoUrlData,
                    "skillSet" : "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets/" + $routeParams.id
                })
                    .then(function (response) {
                        console.log(response);

                //CLOSE THE Modal
                $modalInstance.close('success');
                    //SHOW SUCCESS MESSAGE
                    switch ('success') {
                        case 'info':
                            return logger.log("Heads up! This alert needs your attention, but it's not super important.");
                        case 'success':
                            return logger.logSuccess("Well done! You successfully edited this video.");
                        case 'warning':
                            return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
                        case 'error':
                            return logger.logError("Oh snap! Change a few things up and try submitting again.");
                    }
                });
            }

//ADD SKILL SET            
        $scope.uploadSkillSet = function() {
                $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets/', $scope.skillSet)
                    .then(function (response) {
                        console.log(response);
                        logger.logSuccess("Well done! You successfully added a Skill Set.");
                        $modalInstance.close(response);
                    })
            }

        }

    })(); 

