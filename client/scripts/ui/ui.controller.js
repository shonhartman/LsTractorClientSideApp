(function () {
    'use strict';

    angular.module('app.ui')
        .controller('LoaderCtrl', ['$scope', 'cfpLoadingBar', LoaderCtrl])
        .controller('NotifyCtrl', ['$scope', 'logger', NotifyCtrl])
        .controller('AlertDemoCtrl', ['$scope', AlertDemoCtrl])
        .controller('ProgressDemoCtrl', ['$scope', ProgressDemoCtrl])
        .controller('AccordionDemoCtrl', ['$scope', AccordionDemoCtrl])
        .controller('CollapseDemoCtrl', ['$scope', CollapseDemoCtrl])
        .controller('ModalDemoCtrl', ['$scope', '$modal', '$log', 'logger', ModalDemoCtrl])
        .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'titles', 'logger', ModalInstanceCtrl])
        .controller('PaginationDemoCtrl', ['$scope', PaginationDemoCtrl])
        .controller('TabsDemoCtrl', ['$scope', TabsDemoCtrl])
        .controller('BadgeCtrl', ['$scope', BadgeCtrl])
        .controller('quizCtrl', ['$scope', quizCtrl])
        .controller('videoCtrl', ['$scope', '$http', '$interval', '$location', videoCtrl])
        .controller('MapDemoCtrl', ['$scope', '$http', '$interval', MapDemoCtrl]);


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

    function AccordionDemoCtrl($scope) {
        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: "Dynamic Group Header - 1",
                content: "Dynamic Group Body - 1"
            }, {
                title: "Dynamic Group Header - 2",
                content: "Dynamic Group Body - 2"
            }, {
                title: "Dynamic Group Header - 3",
                content: "Dynamic Group Body - 3"
            }
        ];

        $scope.items = ["Item 1", "Item 2", "Item 3"];

        $scope.status = {
            isFirstOpen: true,
            isFirstOpen1: true
        };

        $scope.addItem = function() {
            var newItemNo;
            newItemNo = $scope.items.length + 1;
            $scope.items.push("Item " + newItemNo);
        };
    }

    function CollapseDemoCtrl($scope) {
        $scope.isCollapsed = true;
    }

// Video Controller

    function videoCtrl($scope, $location, $http) {
        $scope.videos = [
            {
                title: "1st Video Title",
                author: "1st Video Author",
                time: "2:22"
            },
            {
                title: "2nd Video Title",
                author: "2nd Video Author",
                time: "4:00"
            },
            {
                title: "3rd Video Title",
                author: "3rd Video Author",
                time: "5:38"
            }
        ];
        $scope.open = function() {
            location.href = '/#/quizes/quiz';            
        }   
}
        
    

//GET VIDEOS FUNCTION

// function videoCtrl ($scope, $http, $stateParams){
//     this._$http = $http;
//     this.title = title;
//     this.
//     $scope.postVideo = function() {
//         $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/profile/videos')
//         .then((response) => {
//             console.log(response);
//         })
//     }
//     $scope.getVideos = function() {
//         $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/profile/videos', {test:"hit"})
//         .then((response) => {
//             console.log(response);
//         })
//     }  
    // $scope.getVideos = function() {
    //     console.log("getting Videos");
    //     $http.get('http://headers.jsontest.com/')
    //     .then((response) => {
    //         console.log(response);
    //     })
    // }  
// };




//JSON TEST JQUERY
//  function jsonTest() {
//      var getVideos = "/video.json";
//      $.getJSON (getVideos, {
//        console.log("JSON Data:");
//    })
// }
  



// Quiz Controller
    // function quizCtrl($scope) {
    //     var myVariable = true;
    //     $scope.answers = [
    //         {
    //             letter: "A",
    //             answer: "1st Possible Answer",
    //         },
    //         {
    //             letter: "B",
    //             answer: "2nd Possible Answer",
    //         },
    //         {
    //             letter: "C",
    //             answer: "3rd Possible Answer",
    //         }
    //     ];
    //     $scope.choice = true;
    //     $scope.choiceChosen = function() {
    //         $scope.choice = $scope.choice === false;
    //     }
    // }

// TEST QUIZ CONTROL LOGIC
        function quizCtrl($scope) {
            var myVariable = true;
            $scope.answers = [{
                letter: "A",
                answer: "1st Possible Answer",
            }, {
                letter: "B",
                answer: "2nd Possible Answer",
            }, {
                letter: "C",
                answer: "3rd Possible Answer",
            }];
            $scope.start = function() {
                var id = [
                {
                    question: "What is the answer?",
                    options: ["First Answer", "Second Answer", "Third Answer"],
                    answer: 2
                },
                {
                    question: "What is this second answer?",
                    options: ["Another Answer", "Yet Another Answer", "Still Another Answer"],
                    answer: 3
                }
                ];
                console.log("starting");
                $scope.id = 0;
                console.log(id);
                $scope.inProgress = true;
                $scope.getQuestion();
            }
            $scope.getQuestion = function() {
                console.log("getting question");
            }
            $scope.checkAnswer = function() {
                console.log("checking the answer");
            }
        }


// MODAL CONTROLLER

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

    }

    function ModalInstanceCtrl($scope, $modalInstance, titles, $stateProvider, logger) {
        $scope.titles = titles;

        $scope.ok = function() {
            $modalInstance.close($scope.selected.title);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };

        $scope.upload = function(type) {
            console.log("UPLOAD FUNCTION");
            //POST TO DATABASE
            $scope.postVideo = function () {
                console.log("Posting Videos");
                $http.post('http://headers.jsontest.com/')
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
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
        }
    }

//BADGE CONTROLLER
    function BadgeCtrl($scope) {
        $scope.goToSkillSet = function () {
            location.href = '/#/pages/skill-set';  
        }
    }

    function MapDemoCtrl($scope, $http, $interval) {
        var i, markers;

        markers = [];

        i = 0;

        while (i < 8) {
            markers[i] = new google.maps.Marker({
                title: "Marker: " + i
            });
            i++;
        }

        $scope.GenerateMapMarkers = function() {
            var d, lat, lng, loc, numMarkers;
            d = new Date();
            $scope.date = d.toLocaleString();
            numMarkers = Math.floor(Math.random() * 4) + 4;
            i = 0;
            while (i < numMarkers) {
                lat = 43.6600000 + (Math.random() / 100);
                lng = -79.4103000 + (Math.random() / 100);
                loc = new google.maps.LatLng(lat, lng);
                markers[i].setPosition(loc);
                markers[i].setMap($scope.map);
                i++;
            }
        };

        $interval($scope.GenerateMapMarkers, 2000);

    }

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

    function TabsDemoCtrl($scope) {
        $scope.tabs = [
            {
                title: "Dynamic Title 1",
                content: "Dynamic content 1.  Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
            }, {
                title: "Disabled",
                content: "Dynamic content 2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
                disabled: true
            }
        ];

        $scope.navType = "pills";
    }
    
})(); 