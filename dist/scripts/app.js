!function(){"use strict";angular.module("app.account",[])}(),function(){"use strict";function a(a,b,c,d,e,f,g,h){function i(){b.put("user",angular.toJson(c.main.user))}c.editing="",c.dealershipFields={Dealership:""},c.closureRequest={Email:""},c.login=function(){c.formData&&c.formData.Username&&c.formData.Password&&f.post(c.main.apiUrl+"Users/SignIn",{Email:c.formData.Username,Password:c.formData.Password}).then(function(a){var d=g.redirect_uri?g.redirect_uri:"/dashboard";c.main.user=a.data,b.put("user",angular.toJson(a.data)),e.url(d)},function(a){h.logWarning(a.data.Message)})},c.signup=function(){c.formData&&c.dealershipFields&&f.put(c.main.apiUrl+"Users/CreateNewUser",{DealershipId:parseInt(c.dealershipFields.Dealership,10),Role:parseInt(c.formData.Role,10),FirstName:c.formData.FirstName,LastName:c.formData.LastName,BirthDate:c.dt,Email:c.formData.Email,Password:c.formData.Password,PhoneNumber:c.formData.PhoneNumber}).then(function(a){c.main.user=a.data,b.put("user",angular.toJson(a.data)),e.url("/dashboard")},function(a){h.logWarning(a.data.Message)})},c.updateAccount=function(a){return f.put(c.main.apiUrl+"Users/UpdateUser/"+a.Id,a).then(function(a){i()},function(a){h.logWarning(a.data.Message)})},c.deleteAccount=function(a){f["delete"](c.main.apiUrl+"Users/DeleteUser/"+a.Id).then(function(b){h.logSuccess("You successfully deleted"+a.FirstName+" "+a.LastName),e.url("/dashboard")})},c.requestClosure=function(){c.closureRequest.Email&&c.closureRequest.Password&&f.post(c.main.apiUrl+"Users/SignIn",{Email:c.closureRequest.Email,Password:c.closureRequest.Password}).then(function(a){var b=a.data.Id;f.post(c.main.apiUrl+"Users/EmailAdministrators",{Subject:"Employee Account Closure Request",Body:a.data.FirstName+" "+a.data.LastName+" has requested that their account be closed. Please visit http://lstractortraining.com/#/employees/"+b+" to delete the account."}).then(function(){})})},c.edit=function(a){c.editing=a},c.doneEditing=function(){c.updateAccount(c.main.user).then(function(){c.editing=""})},c.showWeeks=!0,c.formats=["dd-MMMM-yyyy","yyyy/MM/dd","shortDate"],c.format=c.formats[0],c.dt=new Date,c.dateOptions={"year-format":"'yy'","starting-day":1},c.toggleWeeks=function(){c.showWeeks=!c.showWeeks},c.clear=function(){c.dt=null},c.disabled=function(a,b){"day"===b&&(0===a.getDay()||6===a.getDay())},c.open=function(a){a.preventDefault(),a.stopPropagation(),c.opened=!0},c.toggleMin=function(){var a;c.minDate=null!=(a=c.minDate)?a:{"null":new Date}},c.toggleMin()}angular.module("app.account").controller("accountCtrl",["$q","$cookies","$scope","$window","$location","$http","$routeParams","logger",a])}(),function(){"use strict";angular.module("app.chart",[])}(),function(){"use strict";function a(a,b){a.percent=45,a.easypiechart3={percent:a.percent,options:{animate:{duration:1e3,enabled:!0},barColor:a.color.info,lineCap:"square",size:50,lineWidth:5,scaleLength:0}}}angular.module("app.chart").controller("chartCtrl",["$scope","$http",a])}(),function(){"use strict";angular.module("app.dashboard",[])}(),function(){"use strict";function a(a,b,c){var d=angular.fromJson(a.get("user"));d&&d.Role&&(b.roleId=d.Role,b.dealership=null,b.dealerships=[],b.totalVideos=0,b.employeeProgress=function(a,b){return c.get("http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videoResults/search/byAppUser?appuser="+b._links.self.href).then(function(b){var c=b.data._embedded.videoResults,d=c.filter(function(a){return a.isComplete}).length;return d/a*100})},b.populateData=function(){4===b.roleId,5===b.roleId&&c.get(b.main.apiUrl+"Dealerships/GetEmployeesReport/"+b.main.user.Dealership.Id).then(function(a){b.employees=a.data}),6===b.roleId},b.populateData())}function b(a,b,c){a.results=[],a.employee={},a.editing="";var d=c.id;d&&b.get(a.main.apiUrl+"Users/GetUserById/"+d).then(function(b){a.employee=b.data}),a.edit=function(b){a.editing=b},a.doneEditing=function(){d&&b.put(a.main.apiUrl+"Users/UpdateUser/"+d,a.employee).then(function(b){a.editing=""})}}angular.module("app.dashboard").controller("DashboardCtrl",["$cookies","$scope","$http",a]).controller("EmployeeCtrl",["$scope","$http","$routeParams",b])}(),function(){"use strict";angular.module("app.dealership",[])}(),function(){"use strict";function a(a,c,d,e,f,g,h,i,j){function k(){var a=angular.fromJson(c.get("user"));a.Dealership=d.currentDealership,c.put("user",angular.toJson(a))}var l=angular.fromJson(c.get("user"));d.currentDealership={},d.editing="",d.dealerships=[],d.detailPageEmployees=[],l&&(d.currentDealership=l.Dealership),d.goToDetail=function(a){f.url("/dealership-details/"+a)},d.open=function(){var a;a=i.open({templateUrl:"confirmation.html",controller:b,scope:d})},d.getDealership=function(a){return g.get(d.main.apiUrl+"Dealerships/GetDealership/"+a)},d.createDealership=function(){d.dealershipData&&g.post(d.main.apiUrl+"Dealerships/CreateNewDealerships",[{Name:d.dealershipData.Name,Number:parseInt(d.dealershipData.Number,10),Address:d.dealershipData.Address,Owner:d.dealershipData.Owner,City:d.dealershipData.City,State:d.dealershipData.State,ZipCode:parseInt(d.dealershipData.ZipCode,10),Phone:d.dealershipData.Phone,Fax:d.dealershipData.Fax,Email:d.dealershipData.Email}]).then(function(a){f.url("/dashboard")})},d.updateDealership=function(a){return g.put(d.main.apiUrl+"Dealerships/UpdateDealership/"+a.Id,a).then(function(a){k()},function(a){})},d.deleteDealership=function(a){g["delete"](d.main.apiUrl+"Dealerships/DeleteDealership/"+a.Id).then(function(b){j.logSuccess("You successfully deleted "+a.Name),f.url("/dashboard")})},d.getDealershipEmployeesReport=function(a){return g.get(d.main.apiUrl+"Dealerships/GetEmployeesReport/"+a)},d.edit=function(a){d.editing=a},d.doneEditing=function(){d.updateDealership(d.currentDealership).then(function(){d.editing=""})};var m=h.id;m?(d.getDealership(m).then(function(a){d.currentDealership=a.data}),d.getDealershipEmployeesReport(m).then(function(a){d.detailPageEmployees=a.data})):g.get(d.main.apiUrl+"Dealerships/GetAllDealerships").then(function(a){d.dealerships=a.data})}function b(a,b){a.cancel=function(){b.dismiss("cancel")}}angular.module("app.dealership").controller("dealershipCtrl",["$q","$cookies","$scope","$window","$location","$http","$routeParams","$modal","logger",a]).controller("dealershipModalInstanceCtrl",["$scope","$modalInstance",b])}(),function(){"use strict";angular.module("app.ui.form.validation",[])}(),function(){"use strict";function a(a){var b;a.form={required:"",minlength:"",maxlength:"",length_rage:"",type_something:"",confirm_type:"",foo:"",email:"",url:"",num:"",minVal:"",maxVal:"",valRange:"",pattern:""},b=angular.copy(a.form),a.revert=function(){return a.form=angular.copy(b),a.form_constraints.$setPristine()},a.canRevert=function(){return!angular.equals(a.form,b)||!a.form_constraints.$pristine},a.canSubmit=function(){return a.form_constraints.$valid&&!angular.equals(a.form,b)}}function b(a){var b;a.user={firstName:"",lastName:"",email:"",password:"",dateOfBirth:"",phoneNumber:"",administrationLevel:""},a.showInfoOnSubmit=!1,b=angular.copy(a.user),a.revert=function(){return a.user=angular.copy(b),a.form_signup.$setPristine(),a.form_signup.confirmPassword.$setPristine()},a.canRevert=function(){return!angular.equals(a.user,b)||!a.form_signup.$pristine},a.canSubmit=function(){return a.form_signup.$valid&&!angular.equals(a.user,b)},a.submitForm=function(){return a.showInfoOnSubmit=!0,a.revert()}}angular.module("app.ui.form.validation").controller("formConstraintsCtrl",["$scope",a]).controller("signupCtrl",["$scope",b])}(),function(){"use strict";function a(){function a(a,b,c,d){var e;e=function(b){var e;e=b===a.$eval(c.validateEquals),d.$setValidity("equal",e),"function"==typeof e?e({value:void 0}):void 0},d.$parsers.push(e),d.$formatters.push(e),a.$watch(c.validateEquals,function(a,b){a!==b&&d.$setViewValue(d.$ViewValue)})}var b={require:"ngModel",link:a};return b}angular.module("app.ui.form.validation").directive("validateEquals",a)}(),function(){"use strict";angular.module("app.nav",[])}(),function(){"use strict";function a(a){function b(b,c,d){var e;e=$("#app"),c.on("click",function(b){return e.hasClass("nav-collapsed-min")?e.removeClass("nav-collapsed-min"):(e.addClass("nav-collapsed-min"),a.$broadcast("nav:reset")),b.preventDefault()})}var c={restrict:"A",link:b};return c}function b(){function a(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;m=250,j=$(window),g=b.find("ul").parent("li"),g.append('<i class="ti-angle-down icon-has-ul-h"></i><i class="ti-angle-right icon-has-ul"></i>'),d=g.children("a"),h=b.children("li").not(g),e=h.children("a"),f=$("#app"),i=$("#nav-container"),d.on("click",function(a){var b,c;return f.hasClass("nav-collapsed-min")||i.hasClass("nav-horizontal")&&j.width()>=768?!1:(c=$(this),b=c.parent("li"),g.not(b).removeClass("open").find("ul").slideUp(m),b.toggleClass("open").find("ul").stop().slideToggle(m),void a.preventDefault())}),e.on("click",function(a){g.removeClass("open").find("ul").slideUp(m)}),a.$on("nav:reset",function(a){g.removeClass("open").find("ul").slideUp(m)}),k=void 0,l=j.width(),n=function(){var a;a=j.width(),768>a&&f.removeClass("nav-collapsed-min"),768>l&&a>=768&&i.hasClass("nav-horizontal")&&g.removeClass("open").find("ul").slideUp(m),l=a},j.resize(function(){var a;clearTimeout(a),a=setTimeout(n,300)})}var b={restrict:"A",link:a};return b}function c(){function a(a,b,c,d){var e,f,g;f=b.find("a"),g=function(){return d.path()},e=function(a,b){return b="#"+b,angular.forEach(a,function(a){var c,d,e;return d=angular.element(a),c=d.parent("li"),e=d.attr("href"),c.hasClass("active")&&c.removeClass("active"),0===b.indexOf(e)?c.addClass("active"):void 0})},e(f,d.path()),a.$watch(g,function(a,b){return a!==b?e(f,d.path()):void 0})}var b={restrict:"A",controller:["$scope","$element","$attrs","$location",a]};return b}function d(){function a(a,b,c){b.on("click",function(){return $("#app").toggleClass("on-canvas")})}var b={restrict:"A",link:a};return b}angular.module("app.nav").directive("toggleNavCollapsedMin",["$rootScope",a]).directive("collapseNav",b).directive("highlightActive",c).directive("toggleOffCanvas",d)}(),function(){"use strict";angular.module("app.modal",[])}(),function(){"use strict";function a(a,b,c){a.open=function(){var d;d=b.open({templateUrl:"myModalContent.html",controller:"ModalInstanceCtrl",resolve:{titles:function(){return a.titles}}}),d.result.then(function(b){a.selected=b},function(){c.info("Modal dismissed at: "+new Date)})},a.skillSetModal=function(){var d;d=b.open({templateUrl:"skillSetModal.html",controller:"ModalInstanceCtrl",resolve:{titles:function(){return a.titles}}}),d.result.then(function(b){a.selected=b},function(){c.info("Modal dismissed at: "+new Date)})}}function b(a,b,c,d,e,f,g,h){a.titles=d,a.video=e,a.ok=function(){c.close(a.selected.title)},a.cancel=function(){c.dismiss("cancel")},a.upload=function(d){b.get(a.main.apiUrl+"/Videos/listOfVideos").then(function(b){a.videos=[],b.data._embedded.videos.forEach(function(b){var c=b._links.self.href.split("/");b.id=c[c.length-1],a.videos.push(b)})}),b.post(a.main.apiUrl+"Videos/CreateNewVideo",{SkillSetId:1,Title:a.videoTitle,Author:a.videoAuthor,Length:4,Url:a.videoUrlData,LengthRequired:6}).then(function(a){return c.close("success"),g.logSuccess("Well done! You successfully uploaded a video.")})},a.updateVideo=function(){var d=-1;b.put(a.main.apiUrl+"Videos/UpdateVideo/"+d,{SkillSetId:1,Title:a.videoTitle,Author:a.videoAuthor,Length:4,Url:a.videoUrlData,LengthRequired:6}).then(function(a){return c.close("success"),g.logSuccess("Well done! You successfully edited this video.")})},a.uploadSkillSet=function(){b.post("http://lstractorquizapi.azurewebsites.net/api/SkillSets/CreateNewSkillSet",{Name:a.skillSet.name}).then(function(a){g.logSuccess("Well done! You successfully added a Skill Set."),c.close(a)})}}angular.module("app.modal").controller("ModalCtrl",["$scope","$modal","$log",a]).controller("ModalInstanceCtrl",["$scope","$http","$modalInstance","titles","video","$log","logger","$routeParams",b])}(),function(){"use strict";angular.module("app.page",[])}(),function(){"use strict";function a(a,b,c){a.logout=function(){b.remove("user"),c.url("/pages/signin")}}angular.module("app.page").controller("headerCtrl",["$scope","$cookies","$location",a])}(),function(){"use strict";function a(){function a(a,b,c){var d,e;e=function(){return c.path()},d=function(a){switch(b.removeClass("body-wide body-err body-lock body-auth"),a){case"/404":case"/pages/404":case"/pages/500":return b.addClass("body-wide body-err");case"/pages/signin":case"/pages/signup":case"/pages/forgot-password":return b.addClass("body-wide body-auth");case"/pages/lock-screen":return b.addClass("body-wide body-lock")}},d(c.path()),a.$watch(e,function(a,b){return a!==b?d(c.path()):void 0})}var b={restrict:"A",controller:["$scope","$element","$location",a]};return b}angular.module("app.page").directive("customPage",a)}(),function(){"use strict";angular.module("app.quiz",[])}(),function(){"use strict";function a(a,b,c,d,e,f){b.answers=[],b.quiz=null,b.videoUrl=null,b.timeWatched=0,b.disableQuiz=!0,b.videoResult=null,b.activeQuestion=0,window.vimeoPlayerLoaded=function(){var a=document.getElementById("vimeo-player"),b=new Vimeo.Player(a);b.getVideoTitle().then(function(a){}),b.on("timeupdate",vimeoPlayProgressEvent)},window.vimeoPlayProgressEvent=function(a){a.seconds>b.timeWatched+10&&(c.put(b.main.apiUrl+"Videos/UpdateVideoResult",{UserId:b.main.user.Id,VideoId:b.quiz.Video.Id,ViewedAmount:parseInt(a.seconds,10)}),b.timeWatched=a.seconds),a.percent>=.8&&(b.disableQuiz=!1)},c.get(b.main.apiUrl+"Quizzes/GetQuiz/"+d.id).then(function(a){b.videoUrl=e.trustAsResourceUrl(a.data.Video.Url),b.quiz=a.data}),b.createQuiz=function(){c.post(b.main.apiUrl+"Quizzes/CreateNewQuiz").then(function(a){a.data._embedded.questions.forEach(function(a){var c=a._links.self.href.split("/");a.id=c[c.length-1],a.answers=[],b.questions.push(a)}),b.questions.forEach(function(a){c.get(b.main.apiUrl+"Questions/").then(function(b){a.answers=b.data._embedded.answers}).then(function(a){return c.get(b.main.apiUrl+"Quizzes{id}")})})})},b.deleteQuiz=function(){c["delete"](b.main.apiUrl+"Quizzes/DeleteQuiz/{quizId}").then(function(a){logger.logSuccess("Well done! You successfully deleted{{quiz.name}}."),f.url("/#/skill-set.id")})},b.letterForIndex=function(a){return String.fromCharCode(97+a)},b.lastQuestion=function(){return b.quiz.Questions.length===b.activeQuestion+1},b.setAnswer=function(a,c){b.answers[b.activeQuestion]={Id:a,Answer:{Id:c}}},b.nextQuestion=function(){b.answers[b.activeQuestion]?b.activeQuestion+=1:alert("You must choose an answer.")},b.finishQuiz=function(){c.put(b.main.apiUrl+"Quizzes/CheckQuiz/?userId="+b.main.user.Id,{Id:b.quiz.Id,Questions:b.answers}).then(function(a){var b=a.data.Passed,c=a.data.Score;b?alert("You passed with score "+c+"%!"):alert("You scored "+c+". Try again!"),f.url("/dashboard")})}}angular.module("app.quiz").controller("QuizCtrl",["$cookies","$scope","$http","$routeParams","$sce","$location",a])}(),function(){"use strict";angular.module("app.skillset",[])}(),function(){"use strict";function a(a,c,d,e,f,g,h){function i(){angular.forEach(d.skillsets,function(a){e.get(d.main.apiUrl+"SkillSets/GetSkillSetResults",{params:{skillSetId:a.Id,userId:d.main.user.Id}}).then(function(b){var c=b.data.VideoResults,d=b.data.QuizResults;a.Progress=d.length/a.Quizzes.length*100,angular.forEach(a.Quizzes,function(a){a.Status=1;var b=d.find(function(b){return b.QuizId===a.Id}),e=c.find(function(b){return b.VideoId===a.Video.Id});b?a.Status=3:e&&e.ViewedAmount>10&&(a.Status=2)})})})}d.skillsets=[],e.get(d.main.apiUrl+"SkillSets/GetAllSkillSets").then(function(a){d.skillsets=a.data,i()}),d.goToSkillSet=function(){location.href="#/pages/skill-set-details/{{ skillset.id }}"},d.goToCertificates=function(){location.href="#/certificates"},d.editSkillSet=function(){var a;a=c.open({templateUrl:"editSkillSet.html",controller:b,scope:d})},d.updateSkillSet=function(a){e.put("http://lstractorquizapi.azurewebsites.net/api/SkillSets/UpdateSkillSet/"+skillsetId,{Name:"{name}"}).then(function(a){g.logSuccess("Your Edit was successful"),h.url("/#/skill-set")})},d.deleteSkillSet=function(a,b){e["delete"]("http://lstractorquizapi.azurewebsites.net/api/SkillSets/DeleteSkillSet/"+a).then(function(a){g.logSuccess("Well done! You successfully deleted{{skillset.name}}."),d.skillsets.splice(b,1)})},d.addSkillSet=function(a){var b;b=c.open({templateUrl:"skillSetModal.html",controller:"ModalInstanceCtrl",resolve:{video:function(){return{}},titles:function(){return d.titles}}}),b.result.then(function(a){d.skillsets.push(a.data)},function(){$log.info("Modal dismissed at: "+new Date)})},d.open=function(){var a;a=c.open({templateUrl:"addVideo.html",controller:b,scope:d})},d.cancel=function(){$modalInstance.dismiss("cancel")},d.test=function(){}}function b(a,b){a.cancel=function(){b.dismiss("cancel")}}angular.module("app.skillset").controller("SkillSetCtrl",["$cookies","$modal","$scope","$http","$routeParams","logger","$location",a]).controller("skillSetModalInstanceCtrl",["$scope","$modalInstance",b])}(),function(){"use strict";angular.module("app.table",[])}(),function(){"use strict";function a(a,b,c,d){var e;a.stores=[],b.get(a.main.apiUrl+"Dealerships/GetDealershipsReport").then(function(b){a.stores=b.data,e()}),a.searchKeywords="",a.filteredStores=[],a.row="",a.select=function(b){var c,d;return d=(b-1)*a.numPerPage,c=d+a.numPerPage,a.currentPageStores=a.filteredStores.slice(d,c)},a.onFilterChange=function(){return a.select(1),a.currentPage=1,a.row=""},a.onNumPerPageChange=function(){return a.select(1),a.currentPage=1},a.onOrderChange=function(){return a.select(1),a.currentPage=1},a.search=function(){return a.filteredStores=c("filter")(a.stores,a.searchKeywords),a.onFilterChange()},a.order=function(b){return a.row!==b?(a.row=b,a.filteredStores=c("orderBy")(a.stores,b),a.onOrderChange()):void 0},a.numPerPageOpt=[3,5,10,20],a.numPerPage=a.numPerPageOpt[1],a.currentPage=1,a.currentPageStores=[],e=function(){return a.search(),a.select(a.currentPage)}}angular.module("app.table").controller("tableCtrl",["$scope","$http","$filter","$location",a])}(),function(){"use strict";angular.module("app.task",[])}(),function(){"use strict";function a(a,b,c,d,e){var f;f=a.tasks=b.get(),a.newTask="",a.newAnswer="",a.remainingCount=c(f,{completed:!1}).length,a.editedTask=null,a.statusFilter={completed:!1},a.filter=function(b){switch(b){case"all":return a.statusFilter="";case"active":return a.statusFilter={completed:!1};case"completed":return a.statusFilter={completed:!0}}},a.add=function(){var c;c=a.newTask.trim(),0!==c.length&&(f.push({title:c,completed:!1}),e.logSuccess('New question: "'+c+'" added'),b.put(f),a.newTask="",a.remainingCount++)},a.addAnswer=function(){var c;c=a.newAnswer.trim(),0!==c.length&&(f.push({title:c,completed:!1}),e.logSuccess('New question: "'+c+'" added'),b.put(answers),a.newAnswer="",a.remainingCount++)},a.edit=function(b){a.editedTask=b},a.doneEditing=function(c){a.editedTask=null,c.title=c.title.trim(),c.title?e.log("Question updated"):a.remove(c),b.put(f)},a.remove=function(c){var d;a.remainingCount-=c.completed?0:1,d=a.tasks.indexOf(c),a.tasks.splice(d,1),b.put(f),e.logError("Question removed")},a.completed=function(c){a.remainingCount+=c.completed?-1:1,b.put(f),c.completed&&(a.remainingCount>0?1===a.remainingCount?e.log("Almost there! Only "+a.remainingCount+" task left"):e.log("Good job! Only "+a.remainingCount+" tasks left"):e.logSuccess("Congrats! All done :)"))},a.clearCompleted=function(){a.tasks=f=f.filter(function(a){return!a.completed}),b.put(f)},a.markAll=function(c){f.forEach(function(a){a.completed=c}),a.remainingCount=c?0:f.length,b.put(f),c&&e.logSuccess("Congrats! All done :)")},a.$watch("remainingCount == 0",function(b){a.allChecked=b}),a.$watch("remainingCount",function(a,b){d.$broadcast("taskRemaining:changed",a)})}angular.module("app.task").controller("taskCtrl",["$scope","taskStorage","filterFilter","$rootScope","logger",a])}(),function(){"use strict";function a(){var a,b,c;return a="tasks",c="answers",{get:function(){return JSON.parse(localStorage.getItem(a)||b||c)},put:function(b){return localStorage.setItem(a,JSON.stringify(b))}}}angular.module("app.task").factory("taskStorage",a)}(),function(){"use strict";angular.module("app.ui",[])}(),function(){"use strict";function a(a,b){a.start=function(){b.start()},a.inc=function(){b.inc()},a.set=function(){b.set(.3)},a.complete=function(){b.complete()}}function b(a,b){a.notify=function(a){switch(a){case"info":return b.log("Heads up! This alert needs your attention, but it's not super important.");case"success":return b.logSuccess("Well done! You successfully uploaded a video.");case"warning":return b.logWarning("Warning! Best check yo self, you're not looking too good.");case"error":return b.logError("Oh snap! Change a few things up and try submitting again.")}}}function c(a){a.alerts=[{type:"success",msg:"Well done! You successfully read this important alert message."},{type:"info",msg:"Heads up! This alert needs your attention, but it is not super important."},{type:"warning",msg:"Warning! Best check yo self, you're not looking too good."},{type:"danger",msg:"Oh snap! Change a few things up and try submitting again."}],a.addAlert=function(){var b,c;switch(b=Math.ceil(4*Math.random()),c=void 0,b){case 0:c="info";break;case 1:c="success";break;case 2:c="info";break;case 3:c="warning";break;case 4:c="danger"}return a.alerts.push({type:c,msg:"Another alert!"})},a.closeAlert=function(b){return a.alerts.splice(b,1)}}function d(a){a.isCollapsed=!0}function e(a){a.goToSkillSet=function(){location.href="/#/pages/skill-set"}}function f(a){a.totalItems=64,a.currentPage=4,a.setPage=function(b){a.currentPage=b},a.maxSize=5,a.bigTotalItems=175,a.bigCurrentPage=1}angular.module("app.ui").controller("AlertDemoCtrl",["$scope",c]).controller("BadgeCtrl",["$scope",e]).controller("CollapseDemoCtrl",["$scope",d]).controller("LoaderCtrl",["$scope","cfpLoadingBar",a]).controller("NotifyCtrl",["$scope","logger",b]).controller("PaginationDemoCtrl",["$scope",f])}(),function(){"use strict";function a(){function a(a,b){var c,d;d=function(){var a,e,f,g,h,i;return i=new Date,a=i.getHours(),e=i.getMinutes(),f=i.getSeconds(),e=c(e),f=c(f),h=a+":"+e+":"+f,b.html(h),g=setTimeout(d,500)},c=function(a){return 10>a&&(a="0"+a),a},d()}var b={restrict:"A",link:a};return b}function b(){return{restrict:"A",compile:function(a,b){return a.on("click",function(a){return a.stopPropagation()})}}}function c(){return{restrict:"A",link:function(a,b,c){return b.slimScroll({height:c.scrollHeight||"100%"})}}}function d(){return{restrict:"A",link:function(a,b,c){return Holder.run({images:b[0]})}}}angular.module("app.ui").directive("uiTime",a).directive("uiNotCloseOnClick",b).directive("slimScroll",c).directive("imgHolder",d)}(),function(){"use strict";function a(){var a;return toastr.options={closeButton:!0,positionClass:"toast-bottom-right",timeOut:"3000"},a=function(a,b){return toastr[b](a)},{log:function(b){a(b,"info")},logWarning:function(b){a(b,"warning")},logSuccess:function(b){a(b,"success")},logError:function(b){a(b,"error")}}}angular.module("app.ui").factory("logger",a)}(),function(){"use strict";angular.module("app.video",[])}(),function(){"use strict";function a(a){a.max=200,a.random=function(){var b,c;c=Math.floor(100*Math.random()+10),b=void 0,b=25>c?"success":50>c?"info":75>c?"warning":"danger",a.showWarning="danger"===b||"warning"===b,a.dynamic=c,a.type=b},a.random()}function b(a,b,c,d,e,f){function g(){e.get(b.main.apiUrl+"SkillSets/GetSkillSetResults",{params:{skillSetId:h,userId:b.main.user.Id}}).then(function(a){var c=a.data.VideoResults,d=a.data.QuizResults;angular.forEach(c,function(a){var c=a.VideoId,d=b.skillSet.Quizzes.find(function(a){return a.Video.Id==c});if(d){d.Video.Length;d.Video.Progress=parseInt(a.ViewedAmount/d.Video.Length*100,10)}}),angular.forEach(d,function(a){var c=a.QuizId,d=b.skillSet.Quizzes.find(function(a){return a.Id==c});d&&(d.IsComplete=!0)})})}var h=c.id;b.skillSet=null,b.user=angular.fromJson(a.get("user")),e.get(b.main.apiUrl+"SkillSets/GetSkillSet/"+h).then(function(a){b.skillSet=a.data,g()}),b.open=function(a){location.href="/#/quizes/quiz/"+a},b.edit=function(a){var c;c=f.open({templateUrl:"myEditModal.html",controller:"ModalInstanceCtrl",resolve:{video:function(){return a},titles:function(){return b.titles}}}),c.result.then(function(a){b.selected=a},function(){$log.info("Modal dismissed at: "+new Date)})},b.deleteVideos=function(a){e["delete"](b.main.apiUrl+"Videos/DeleteVideo/{videoId}").then(function(a){logger.logSuccess("You deleted {{video.Name}}"),d.url("/#/skill-set")})}}angular.module("app.video").controller("ProgressDemoCtrl",["$scope",a]).controller("VideoCtrl",["$cookies","$scope","$routeParams","$location","$http","$modal",b])}(),function(){"use strict";angular.module("app",["ngAnimate","ngCookies","ngRoute","angular-loading-bar","duScroll","easypiechart","ngTagsInput","textAngular","ui.bootstrap","ui.tree","app.account","app.chart","app.dashboard","app.dealership","app.modal","app.nav","app.page","app.quiz","app.skillset","app.table","app.task","app.ui","app.ui.form.validation","app.video"])}(),function(){"use strict";angular.module("app").config(["$routeProvider",function(a){var b,c;b=["add-dealership","charts/charts","charts/flot","closure","certificates","dealership-details","dashboard","dealership-list","failing-view","passing-view","profile","transfer","skill-sets","employee","employee-list","support","add-dealership","add-video","charts/charts","charts/flot","closure","certificates","dealership-details","dashboard","dealership-list","failing-view","passing-view","profile","transfer","skill-sets","employee","employee-list","pages/404","pages/500","pages/blank","pages/forgot-password","pages/lock-screen","pages/signin","pages/signup","pages/skill-set","pages/videos","quizes/quiz-logic-test","pages/skill-set-details","test-view"],c=function(b){var c,d;return d="/"+b,c={templateUrl:"views/"+b+".html"},a.when(d,c),a},b.forEach(function(a){return c(a)}),a.when("/employees/:id",{templateUrl:"views/employee.html"}).when("/quizes/quiz/:id",{templateUrl:"views/quizes/quiz.html"}).when("/pages/skill-set-details/:id",{templateUrl:"views/pages/skill-set-details.html"}).when("/dealership-details/:id",{templateUrl:"views/dealership-details.html"}).when("/",{redirectTo:"pages/signin"}).when("/404",{templateUrl:"views/pages/404.html"}).otherwise({redirectTo:"/404"})}])}(),function(){"use strict";function a(a,b,c,d,e,f){var g=new Date,h=g.getFullYear(),i=angular.fromJson(a.get("user"));b.main={brand:"LS Tractor",year:h,apiUrl:"http://lstractorquizapi.azurewebsites.net/api/",user:i},b.$on("$locationChangeStart",function(b){i=angular.fromJson(a.get("user")),i||-1!=["","/","/pages/signin","/pages/signup","/pages/forgot-password"].indexOf(f.path())||f.url("/pages/signin?redirect_uri="+f.path())}),b.pageTransitionOpts=[{name:"Fade up","class":"animate-fade-up"},{name:"Scale up","class":"ainmate-scale-up"},{name:"Slide in from right","class":"ainmate-slide-in-right"},{name:"Flip Y","class":"animate-flip-y"}],b.admin={layout:"wide",menu:"horizontal",fixedHeader:!0,fixedSidebar:!0,pageTransition:b.pageTransitionOpts[0],skin:"12"},b.$watch("admin",function(a,d){"horizontal"===a.menu&&"vertical"===d.menu&&c.$broadcast("nav:reset"),a.fixedHeader===!1&&a.fixedSidebar===!0&&(d.fixedHeader===!1&&d.fixedSidebar===!1&&(b.admin.fixedHeader=!0,b.admin.fixedSidebar=!0),d.fixedHeader===!0&&d.fixedSidebar===!0&&(b.admin.fixedHeader=!1,b.admin.fixedSidebar=!1)),a.fixedSidebar===!0&&(b.admin.fixedHeader=!0),a.fixedHeader===!1&&(b.admin.fixedSidebar=!1)},!0),b.color={primary:"#7992BF",success:"#A9DC8E",info:"#6BD5C3",infoAlt:"#A085E4",warning:"#ECD48B",danger:"#ED848F",gray:"#DCDCDC"},c.$on("$routeChangeSuccess",function(a,b,c){e.scrollTo(0,0)})}angular.module("app").controller("AppCtrl",["$cookies","$scope","$rootScope","$route","$document","$location",a])}();