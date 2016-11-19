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
        .controller('quizCtrl', ['$cookies', '$scope', '$http', '$routeParams', '$sce', quizCtrl])
        .controller('videoCtrl', ['$scope', '$routeParams', '$location', '$http', videoCtrl])
        .controller('MapDemoCtrl', ['$scope', '$http', '$interval', MapDemoCtrl])
        .controller('dashboardCtrl', ['$cookies', '$scope', '$http', dashboardCtrl])
        .controller('employeeCtrl', ['$scope', '$http', '$routeParams', employeeCtrl])
        .controller('skillSetCtrl', ['$scope', '$http', skillSetCtrl])   
        .controller('TestCtrl', ['$scope', '$http', TestCtrl]);    

    function TestCtrl($scope, $http) {
        console.log("Test is back");
    }



    function employeeCtrl($scope, $http, $routeParams) {
        $scope.results = [];

        // TODO - Modify call to new location for backend endpoint that returns user's status'
        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/')
            .then(function(response) {
                $scope.videos = [];
                response.data._embedded.videos.forEach(function(video) {
                    var splitUrl = video._links.self.href.split("/");
                    video.id = splitUrl[splitUrl.length - 1];
                    $scope.videos.push(video);            
                });
            });

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers/' + $routeParams.id)
            .then(function(response) {
                $scope.employee = response.data;
                return $http.get($scope.employee._links.listOfVideoResult.href);                                         
            });
    }

    function dashboardCtrl($cookies, $scope, $http) {
        $scope.role = 5;
        $scope.dealership = null;
        $scope.dealerships = [];

        var loggedInUserId = $cookies.get('userId');

        if (loggedInUserId) {
            $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers')
                .then(function (response) {
                    var users = response.data._embedded.appUsers;

                    var user = users.find(function (user) {
                        var userId = user._links.self.href.split('/').pop(); //QA : Why do we pop this time?
                        return userId === loggedInUserId;
                    });

                    if(user) {
                        $scope.role = user.roleId;
                        console.log('Updating user role to: ' + user.roleId);
                    }
                });
        }

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships')
            .then(function(response) {
                var dealerships = response.data._embedded.dealerships;
                dealerships.forEach(function (dealership) {
                    $http.get(dealership._links.listOfAppUser.href).then(function (response) {
                        var employees = [];
                        response.data._embedded.appUsers.forEach(function(employee) {
                            var splitUrl = employee._links.self.href.split("/");
                            employee.id = splitUrl[splitUrl.length - 1];
                            employees.push(employee);
                        });
                        
                        dealership.employees = employees;
                    })
                    
                });


                $scope.dealerships = dealerships;
                
                // TODO - This should be from the user! Users have a dealership
                $scope.dealership = $scope.dealerships[0]
            });        
    }

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

    function skillSetCtrl($scope, $http) {
        $scope.skillsets = [];

        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/skillSets')
            .then(function(response) {
                $scope.skillsets = [];
                response.data._embedded.skillSets.forEach(function(skillset) {
                    var splitUrl = skillset._links.self.href.split("/");
                    skillset.id = splitUrl[splitUrl.length - 1];
                    $scope.skillsets.push(skillset);
                });
            });
        $scope.goToSkillSet = function () {
            location.href = '#/pages/skill-set-details/{{ skillset.id }}';  
        }

        console.log('in right controller');
    }

    function videoCtrl($scope, $routeParams, $location, $http) {
        var skillSet = $routeParams.id;
        $scope.videos = [];

               $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/')
                   .then(function (response) {
                       $scope.videos = [];
                       response.data._embedded.videos.forEach(function (video) {
                           var splitUrl = video._links.self.href.split("/");
                           video.id = splitUrl[splitUrl.length - 1];
                           $scope.videos.push(video);
                       });
                   });

        $scope.open = function(id) {
            location.href = '/#/quizes/quiz/' + id;            
        }   
}
        
    

// TEST QUIZ CONTROL LOGIC
        function quizCtrl($cookies, $scope, $http, $routeParams, $sce) {
            $scope.video = null;
            $scope.videoUrl = null;
            $scope.questions = [];
            $scope.answers = [];
            $scope.timeWatched = 0;
            $scope.disableQuiz = true;
// Get Title & Progress off of a Video
            window.vimeoPlayerLoaded = function() {
                var iframe = document.querySelector('iframe');
                var player = new Vimeo.Player(iframe);

                player.getVideoTitle().then(function(title) {
                    console.log('title:', title);
                });

                player.on('timeupdate', vimeoPlayProgressEvent);
            }
// Track Individual Video Progress
            window.vimeoPlayProgressEvent = function(data) {
                if (data.seconds > $scope.timeWatched + 10) {
                    $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videoResults', {
                        user: $cookies.get('userId'),
                        video: "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/" + $routeParams.id,
                        view_amount: data.seconds 
                    });

                    $scope.timeWatched = data.seconds;
                }

                if (data.percent >= .8) {
                    $scope.disableQuiz = false;
                }
            }

// Get Videos & Questions
            $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/' + $routeParams.id)
                .then(function(response) {
                    $scope.video = response.data;
                    $scope.videoUrl = $sce.trustAsResourceUrl($scope.video.url);

                    // TODO - This should filter by quiz_id
                    var quiz_id = 13; // should be $scope.video.quiz_id
                    return $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/quizzes/' + quiz_id + '/listOfQuestion');
                })
                .then(function (response) {
                    response.data._embedded.questions.forEach(function(question) {
                        var splitUrl = question._links.self.href.split("/");
                        question.id = splitUrl[splitUrl.length - 1];
                        question.answers = [];
                        $scope.questions.push(question);
                    });

                    $scope.questions.forEach(function(question) {
                        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/questions/' + question.id + '/listOfAnswer')
                            .then(function (response) {
                                question.answers = response.data._embedded.answers;
                            });
                    });
                });

// Post a new Video
                $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/' + $routeParams.id)
                .then(function(response) {

                    // TODO - This should filter by quiz_id
                    var quiz_id = 13; // should be $scope.video.quiz_id
                    return $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/quizzes/' + quiz_id + '/listOfQuestion');
                })
                .then(function (response) {
                    response.data._embedded.questions.forEach(function(question) {
                        var splitUrl = question._links.self.href.split("/");
                        question.id = splitUrl[splitUrl.length - 1];
                        question.answers = [];
                        $scope.questions.push(question);
                    });

                    $scope.questions.forEach(function(question) {
                        $http.get('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/questions/' + question.id + '/listOfAnswer')
                            .then(function (response) {
                                question.answers = response.data._embedded.answers;
                            });
                    });
                });
// Changes index number to a letter 
            $scope.letterForIndex = function (index) {
                return String.fromCharCode(97 + index); 
            }

            $scope.activeQuestion = 0;

            $scope.lastQuestion = function() {
                return $scope.questions.length === $scope.activeQuestion + 1;
            }

            $scope.setAnswer = function(answer) {
                $scope.answers[$scope.activeQuestion] = answer;
            }

            $scope.nextQuestion = function() {
                if ($scope.answers[$scope.activeQuestion]) {
                    console.log($scope.answers[$scope.activeQuestion]);
                    $scope.activeQuestion += 1;
                } else {
                    alert("You must choose an answer.");
                }

            }

            $scope.finishQuiz = function() {
                var correct = 0;

                $scope.answers.forEach(function (answer) {
                    if (answer.isCorrect) {
                        correct += 1;
                    }
                });

                // TODO - Use quiz id off of video
                // TODO - Use user id of logged in user
                var score = (correct / $scope.questions.length) * 100;
                $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/quizResults', {
                    quiz: "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/quizzes/13",
                    user: $cookies.get('userId'),
                    score: score
                })
                .then(function (response) {
                    alert("You scored " + score + "%! Do something here");
                });

                
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

        $scope.upload = function (video) {
                console.log("Posting Videos");
                $http.post('http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos', {

                    "title" : $scope.videoTitle,
                    "author" : $scope.videoAuthor,
                    "url" : $scope.videoUrlData
                })
                    .then(function (response) {
                        console.log(response);
                    });
            }
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