   (function () {
       'use strict';

       angular.module('app.modal')

       .controller('ModalDemoCtrl', ['$scope', '$modal', '$log', 'logger', ModalDemoCtrl])
           .controller('ModalInstanceCtrl', ['$scope', '$http', '$modalInstance', 'titles', 'video', '$log', 'logger', '$routeParams', ModalInstanceCtrl])

       function ModalDemoCtrl($scope, $modal, $log) {

           $scope.open = function () {
               var modalInstance;
               modalInstance = $modal.open({
                   templateUrl: "myModalContent.html",
                   controller: 'ModalInstanceCtrl',
                   resolve: {
                       titles: function () {
                           return $scope.titles;
                       }
                   }
               });
               modalInstance.result.then((function (selectedItem) {
                   $scope.selected = selectedItem;
               }), function () {
                   $log.info("Modal dismissed at: " + new Date());
               });
           };
           $scope.skillSetModal = function () {
               console.log("Modalling!");
               var modalInstance;
               modalInstance = $modal.open({
                   templateUrl: "skillSetModal.html",
                   controller: 'ModalInstanceCtrl',
                   resolve: {
                       titles: function () {
                           return $scope.titles;
                       }
                   }
               });
               modalInstance.result.then((function (selectedItem) {
                   $scope.selected = selectedItem;
               }), function () {
                   $log.info("Modal dismissed at: " + new Date());
               });
           };

       }

       function ModalInstanceCtrl($scope, $http, $modalInstance, $log, titles, video, logger, $routeParams) {
           $scope.titles = titles;
           $scope.video = video;

           $scope.ok = function () {
               $modalInstance.close($scope.selected.title);
           };

           $scope.cancel = function () {
               $modalInstance.dismiss("cancel");
           };

           //CREATE NEW VIDEO
           $scope.upload = function (video) {

               // TODO: what is this for??
               $http.get($scope.main.apiUrl + '/Videos/listOfVideos') //Whats the new call here??
                   .then(function (response) {
                       $scope.videos = [];
                       response.data._embedded.videos.forEach(function (video) {
                           var splitUrl = video._links.self.href.split("/");
                           video.id = splitUrl[splitUrl.length - 1];
                           $scope.videos.push(video);
                       });
                       console.log($scope.videoResults);
                   });

               $http.post($scope.main.apiUrl + 'Videos/CreateNewVideo', {
                       "SkillSetId": 1, // TODO
                       "Title": $scope.videoTitle,
                       "Author": $scope.videoAuthor,
                       "Length": 4, // TODO
                       "Url": $scope.videoUrlData,
                       "LengthRequired": 6 // TODO
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
           $scope.updateVideo = function () {

               // TODO: set video id
               var videoId = -1;

               $http.put($scope.main.apiUrl + 'Videos/UpdateVideo/' + videoId, {
                       "SkillSetId": 1, // TODO
                       "Title": $scope.videoTitle,
                       "Author": $scope.videoAuthor,
                       "Length": 4, // TODO
                       "Url": $scope.videoUrlData,
                       "LengthRequired": 6 // TODO
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

           //CREATE NEW SKILL SET
           $scope.uploadSkillSet = function () {

               $http.post('http://lstractorquizapi.azurewebsites.net/api/SkillSets/CreateNewSkillSet', {
                        "Name": $scope.skillSet // TODO: verify this is correct
                   })
                   .then(function (response) {
                       console.log(response);
                       logger.logSuccess("Well done! You successfully added a Skill Set.");
                       $modalInstance.close(response);
                   })
           }

       }

   })();